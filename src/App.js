import Expences from "./Component/Expences";
import ExpenceForm from "./Component/ExpenceForm/ExpenceForm";
import { useState } from "react";

const dummy_expences = [
  { date: new Date(2022, 3, 23), title: "toys", price: 200 },
  { date: new Date(2020, 8, 11), title: "choclate", price: 100 },
  { date: new Date(2019, 5, 1), title: "watch", price: 1000 },
];

function App() {
  const [expences, setNewExpences] = useState(dummy_expences);

  const expencesHandler = (newExpences) => {
    setNewExpences((prevsexpences) => {
      return [newExpences, ...prevsexpences];
    });
  };

  return (
    <>
      <ExpenceForm onFormSubmit={expencesHandler}></ExpenceForm>
      <Expences expences={expences}></Expences>
    </>
  );
}

export default App;
