import { twMerge } from "tailwind-merge";
import { grid } from "./grid";

export const getRowCol = (element: HTMLElement) => {
  const row: number = parseInt("" + element.getAttribute("data-row"));
  const col: number = parseInt("" + element.getAttribute("data-col"));
  return [row, col];
};
export const checkMatchPair = (element1: number[], element2: number[]) => {
  const [row1, col1] = element1;
  const [row2, col2] = element2;
  return grid[row1][col1] === grid[row2][col2];
};

const getElementByRowCol = (row: number, col: number) => {
  return document.getElementById(`${row}-${col}`);
};
export const unmountTile = (tiles: number[][]) => {
  tiles.map((arr, i) => {
    const [row, col] = arr;
    const element = getElementByRowCol(row, col)!;
    setTimeout(
      () => {
        element.className = twMerge(
          element.className,
          "bg-white animate-hflip ",
        );
        element.textContent = "0";
      },
      500 * (i + 1),
    );
  });
};
