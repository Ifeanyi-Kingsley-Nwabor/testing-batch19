const isNumber = (number) => {
  if (isNaN(number)) throw new Error("Please provide a valid number");
};

const add = (...args) => {
  return args.reduce((acc, curr) => {
    isNumber(curr);
    return acc + curr;
  });
};

module.exports = { add };
