const List = ({ fruitList }) => {
  //sort object assending
  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  //reverse sorting
  fruitList.sort((a, b) => b.name.localeCompare(a.name));

  const itemList = fruitList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: {fruit.cal}
      <button>Add</button>
    </li>
  ));

  return (
    <>
      <ol>{itemList}</ol>
    </>
  );
};

export default List;
