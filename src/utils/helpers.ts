export const getRowCol = (element: HTMLElement) => {
  const row: number = parseInt("" + element.getAttribute("data-row"));
  const col: number = parseInt("" + element.getAttribute("data-col"));
  return [row, col];
};
