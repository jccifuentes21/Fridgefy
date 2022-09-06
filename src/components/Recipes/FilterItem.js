const FilterItem = ({ title, type, filterCheckHandler }) => {
  const checkFilter = (event) => {
    if (event.target.checked) {
      filterCheckHandler(title.replace(" ", ""), type, true);
    } else {
      filterCheckHandler(title.replace(" ", ""), type, false);
    }
  };
  return (
    <li>
      <input onChange={checkFilter} type="checkbox" value={title} />
      <span>{title}</span>
    </li>
  );
};

export default FilterItem;
