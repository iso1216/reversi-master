function Box(props){
  return (
    <button className="box" onClick={props.onClick} disabled={props.value !== 'pick'}>
      <button className={props.value} disabled={props.value !== 'pick'}>
      </button>
    </button>
  );
}

export default Box;