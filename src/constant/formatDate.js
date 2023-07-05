
const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const formatDate = (params) => {
  if (params) {
    const dates = new Date(params);
    const time = new Date(params).toLocaleTimeString().match(/\d{2}:\d{2}|[AMP]+/g).join(' ');
    const month = dates.getMonth();
    const date = dates.getDate();
    const total = `${date} ${monthShort[month]}, ${time}`;
    return total;
  }
  return 'Tidak ada tanggal';
};

export const sortByDate = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);
  return dateB - dateA;
};