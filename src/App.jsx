import Appliances from "./Components/Appliances";

function App() {
  const ApplianceList = [
    { id: 1, name: "Aircon", price: 15000 },
    { id: 2, name: "Electric Fan", price: 1000 },
    { id: 3, name: "Washing Machine", price: 8000 },
  ];

  return (
    <>
      <Appliances items={ApplianceList} category="Appliances Store" />
    </>
  );
}

export default App;
