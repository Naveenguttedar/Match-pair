import { grid } from "../utils/grid";
import { getRowCol } from "../utils/helpers";
export const Grid = ({ updateCount }: { updateCount: () => void }) => {
  const handleOnClick = (e: Event) => {
    updateCount();
    const element = e.target as HTMLElement;
    const [row, col] = getRowCol(element);
    element.className =
      "flex justify-center text-2xl font-semibold    items-center border-2 border-white bg-transparent";
    console.log(row, col);
    element.textContent = "" + grid[row][col];
  };
  return (
    <div
      className={"  w-[400px] h-[400px]  gap-2 grid grid-cols-4"}
      onClick={handleOnClick}
    >
      {grid.map((arr, i) => {
        return arr.map((_, j) => {
          return (
            <div
              className={
                " flex justify-center text-2xl font-semibold    items-center border-2  bg-white cursor-pointer"
              }
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
