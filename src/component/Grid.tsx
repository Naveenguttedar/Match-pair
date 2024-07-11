import { twMerge } from "tailwind-merge";
import { grid } from "../utils/grid";
import { checkMatchPair, getRowCol, unmountTile } from "../utils/helpers";
let clickedTile: number[][] = [];
export const Grid = ({ updateCount }: { updateCount: () => void }) => {
  const handleOnClick = (e: Event) => {
    const element = e.target as HTMLElement;
    if (clickedTile.length >= 2 || element.textContent !== "0") {
      return;
    }
    updateCount();
    const [row, col] = getRowCol(element);
    clickedTile.push([row, col]);
    element.className = twMerge(
      element.className,
      " border-white bg-transparent animate-hflip ",
    );
    element.textContent = "" + grid[row][col];
    if (clickedTile.length == 2) {
      if (!checkMatchPair(clickedTile[0], clickedTile[1])) {
        unmountTile(clickedTile);
      }
      clickedTile = [];
    }
  };
  return (
    <div
      className={twMerge(
        "  w-[400px] h-[400px] text-white font-semibold  gap-2 grid grid-cols-4",
      )}
      onClick={handleOnClick}
    >
      {grid.map((arr, i) => {
        return arr.map((_, j) => {
          return (
            <div
              className={twMerge(
                " flex justify-center text-2xl font-semibold     items-center border-2  bg-white cursor-pointer",
              )}
              id={`${i}-${j}`}
              data-row={i}
              data-col={j}
            >
              {0}
            </div>
          );
        });
      })}
    </div>
  );
};
