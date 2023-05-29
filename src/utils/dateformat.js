export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString();
  return formattedDate;
};
