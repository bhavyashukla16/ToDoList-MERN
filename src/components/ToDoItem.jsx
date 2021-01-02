import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li>
        <div
          onClick={handleClick}
          style={{ textDecoration: isDone ? "line-through" : null }}
        >
          {props.text}
        </div>
        {!isDone && (
          <div
            onClick={() => {
              props.onChecked(props.id);
            }}
            className="cross"
          >
            <ClearIcon />
          </div>
        )}
      </li>
    </div>
  );
}

export default ToDoItem;
