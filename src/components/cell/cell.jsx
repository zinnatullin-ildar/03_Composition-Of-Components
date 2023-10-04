import PropTypes from "prop-types";
import styles from "./cell.module.css";

const Cell = ({ value, onClick }) => {
    return (
        <button
            className={styles.cell}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

Cell.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
};

export default Cell;
