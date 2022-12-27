import { useState } from "react";
import "./ExpenceForm.css";

function ExpenceForm(props) {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const [price, setPrice] = useState("");

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const [date, setDate] = useState("");

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const expenceData = {
      title,
      date: new Date(date),
      price,
    };
    console.log(expenceData);

    props.onFormSubmit(expenceData);

    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={onFormSubmitHandler}>
        <input type="date" onChange={dateChangeHandler} value={date} />
        <input
          type="text"
          placeholder="Enter title"
          onChange={titleChangeHandler}
          value={title}
        />
        <input
          type="number"
          placeholder="Enter price"
          onChange={priceChangeHandler}
          value={price}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenceForm;
