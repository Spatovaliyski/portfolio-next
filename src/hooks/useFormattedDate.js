const useFormattedDate = (date) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('en-GB', options);
  return formattedDate;
}

export default useFormattedDate;