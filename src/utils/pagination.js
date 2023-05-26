export const paginateProducts = (array, pageSize = 16) => {
  const pageCount = Math.ceil(array.length / pageSize);
  const paginatedArray = [];

  for (let i = 0; i < pageCount; i++) {
    const startIndex = i * pageSize;
    const endIndex = startIndex + pageSize;
    const pageItems = array.slice(startIndex, endIndex);

    paginatedArray.push({
      items: pageItems,
    });
  }
  return paginatedArray;
};
