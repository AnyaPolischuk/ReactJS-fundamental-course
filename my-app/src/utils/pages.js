export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
  let resultArray = [];

  for (let i = 0; i < totalPages; i++) {
    resultArray.push(i + 1);
  }

  return resultArray;
}