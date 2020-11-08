const chuckArray = (arr, len) => {
  // init chuckarr
  const chuckArr = [];

  // loop
  arr.forEach((val) => {
    const last = chuckArr[chuckArr.length - 1];

    if (!last || last.length === len) {
      chuckArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chuckArr;
};

module.exports = chuckArray;
