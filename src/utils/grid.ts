export const MAX_ROWS = 4;
export const MAX_COLS = 4;
export const grid: number[][] = [];
function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
const fields: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const pairs: number[] = [...fields, ...fields];
function shuffel(array: number[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = randomInteger(0, i + 1);
    let tempVar = array[i];
    array[i] = array[j];
    array[j] = tempVar;
  }
  return array;
}
function generateGrid() {
  shuffel(pairs);
  let index = 0;
  for (let i = 0; i < MAX_ROWS; i++) {
    let arr: number[] = [];
    for (let j = 0; j < MAX_COLS; j++) {
      arr.push(pairs[index++]);
    }
    grid.push(arr);
  }
  return grid;
}
generateGrid();
