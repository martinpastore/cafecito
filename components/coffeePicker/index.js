import React from "react";
import PropTypes from "prop-types";

import styles from "./style.scss";

const CoffeePicker = ({ countCoffees, ...props }) => {
    const { setCount } = props;

    const add = () => setCount(countCoffees + 1);

    const subtract = () => setCount(countCoffees - 1);

    return (
        <div className={styles.controlsContainer}>
            <button className={styles.leftControl} onClick={subtract}>
                <img src="/imgs/minus-icon.svg" alt="" />
            </button>

            <input value={countCoffees} type="text" />

            <button className={styles.rightControl} onClick={add}>
                <img src="/imgs/plus-icon.svg" alt="" />
            </button>
        </div>
    );
};

CoffeePicker.propTypes = {
    countCoffees: PropTypes.number,
    setCount: PropTypes.func,
};

export default CoffeePicker;
