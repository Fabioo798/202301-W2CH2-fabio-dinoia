export const strickEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  }

  if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  }
  if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  }

  return Object.is(a, b);
};

//usare isobj. isNaN  number.isNaN;
