function Box(props){
  return (
    <div className="box">
      <button className={props.value} onClick={props.onClick} >
        {props.value}
      </button>
    </div>
  );
}

export default Box;