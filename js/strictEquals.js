const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  } else {
    if (Object.is(valueA, valueB)) {
      return true;
    } else if (
      (Object.is(valueA, 0) || Object.is(valueB, 0)) &&
      (Object.is(valueA, -0) || Object.is(valueB, -0))
    ) {
      return true;
    } else {
      return false;
    }
  }
};

export default strictEquals;
