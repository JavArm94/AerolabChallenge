export const ctrlPagination = (data, currentPage = 1) => {
  const startIndex = (currentPage - 1) * 16;
  const endIndex = startIndex + 16;
  return data.slice(startIndex, endIndex);
};

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
