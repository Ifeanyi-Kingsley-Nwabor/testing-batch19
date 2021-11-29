const filterByKeyword = (array, keyword) => {
  //   if (!array.length) throw new Error("The input array cannot be empty");
  if (!keyword) throw new Error("Search keyword cannot be empty");
  const result = array.filter((el) => {
    const regex = new RegExp(keyword, "i");
    return el.url.match(regex);
  });
  if (!result.length) {
    return null;
  } else {
    return result;
  }
};

module.exports = filterByKeyword;
