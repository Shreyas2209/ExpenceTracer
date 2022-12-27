import "./Card.css";

function Card(props) {
  const classValues = props.className + " card";

  return <div className={classValues}>{props.children}</div>;
}

export default Card;
