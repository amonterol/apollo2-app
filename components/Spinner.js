import React, { useState } from "react";
import {
  faArrowCircleDown,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
        className="button is-outlined has-text-weight-large pl-3 pr-3"
      >
        -
      </button>
      <button className="button is-outlined has-text-weight-medium pl-3 pr-3">
        {count}
      </button>

      <button
        onClick={() => setCount(count + 1)}
        className="button is-outlined has-text-weight-large  pl-3 pr-3"
      >
        +
      </button>
    </>
  );
};

export default Spinner;
