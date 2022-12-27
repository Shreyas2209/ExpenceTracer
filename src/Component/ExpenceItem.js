import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "./UI/Card";

const ExpenceItem = (props) => {
  const titleclickHandler = () => {
    let title = "updated";
    console.log(titleclickHandler);
  };

  return (
    <Card className="expence-item">
      <ExpenceDate date={props.date}></ExpenceDate>
      <div className="expence-title">{props.title}</div>
      <div className="expence-price">{props.price}</div>
      <button className="expence-btn" onClick={titleclickHandler}>
        Submit
      </button>
    </Card>
  );
};

export default ExpenceItem;
