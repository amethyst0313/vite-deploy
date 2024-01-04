function Appliances(props) {
  const items = props.items;
  const category = props.category;

  const itemList = items.map((item) => (
    <li key={item.id}>
      {item.name}: {item.price}
    </li>
  ));

  return (
    <>
      <h1>{category}</h1>
      <ol>{itemList}</ol>
    </>
  );
}

export default Appliances;
