import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { changeDegreesType } from "../../../features/configuration";
import { useDispatch, useSelector } from "react-redux";

const TemperatureSelect = () => {
  const dispatch = useDispatch();
  const degreesType = useSelector(state => state.configuration.degreesType);
  const changeDegreesHandler = type => {
    dispatch(changeDegreesType(type));
  };
  return (
    <>
      <button
        onClick={() => changeDegreesHandler("c")}
        className={classnames(styles["celsius"], {[`${styles.degrees_unit_active}`]: degreesType === 'c'})}
        value="c"
      >
        &deg;C
      </button>
      <button
        onClick={() => changeDegreesHandler("f")}
        className={classnames(styles["fahrenheit"], {[`${styles.degrees_unit_active}`]: degreesType === 'f'})}
        value="f"
      >
        &deg;F
      </button>
    </>
  );
};

export default TemperatureSelect;
