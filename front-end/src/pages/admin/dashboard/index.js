import { memo, useState } from "react";
import CheckBox from "../../../shared/components/checkbox";

// import styles from "./Index.module.css";
const obj = [
  {
    id: "1",
    name: "x",
    value: false,
  },
  {
    id: "2",
    name: "y",
    value: false,
  },
];

const Dashboard = () => {
  const [state, setState] = useState(obj);
  const [selectAllState, setSelectAllState] = useState(false);

  const changeHandler = (index, value) => {
    setState((prev) => {
      const newState = [...prev];
      newState[index].value = value;
      return newState;
    });
  };

  const selectAllChanged = (value) => {
    setSelectAllState(value);
    setState((prev) => {
      return prev.map((el) => {
        el.value = value;
        return el;
      });
    });
  };

  console.log(state);
  return (
    <div>
      <div className="round-1 border p-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(e) => selectAllChanged(e.target.checked ? true : false)}
            id="flexCheckChecked"
            checked={selectAllState}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            select all
          </label>
        </div>
        <div className="m-0 row g-2" style={{ maxHeight: "300px" }}>
          {state.map((el, index) => (
            <div key={index} className="col-6 col-sm-4 p-0">
              <CheckBox
                id={el.id}
                name={el.id}
                label={el.name}
                onChange={(e) =>
                  changeHandler(index, e.target.checked ? true : false)
                }
                checked={el.value}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Dashboard);
