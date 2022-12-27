import "./ExpenceDate.css";
import Card from "./UI/Card";

function ExpenceDate(props) {
  const day = props.date.getDate();
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <Card className="expence-date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </Card>
  );
}

export default ExpenceDate;
