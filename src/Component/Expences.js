import ExpenceItem from "./ExpenceItem";

function Expences(props) {
  return (
    <div>
      <ExpenceItem
        date={props.expences[0].date}
        title={props.expences[0].title}
        price={props.expences[0].price}
      ></ExpenceItem>
      <ExpenceItem
        date={props.expences[1].date}
        title={props.expences[1].title}
        price={props.expences[1].price}
      ></ExpenceItem>
      <ExpenceItem
        date={props.expences[2].date}
        title={props.expences[2].title}
        price={props.expences[2].price}
      ></ExpenceItem>
    </div>
  );
}

export default Expences;
