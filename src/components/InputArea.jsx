import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleChangeFunc}
        type="text"
        value={props.inputTextVal}
      />
      <button onClick={props.addItemFunc}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
