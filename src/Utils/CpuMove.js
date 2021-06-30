export const cpuMove = (yRight, vyRight) => {
  if (yRight <= 0) {
    vyRight = 1;
  } else if (yRight >= window.innerHeight - 150) {
    vyRight = -1;
  }
  yRight += vyRight * 10;
  return yRight;
};
