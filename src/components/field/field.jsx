import PropTypes from "prop-types";
import styles from "./field.module.css";
import Cell from "../cell/cell";

const Field = ({ cells, onClick }) => {
    return (
        <div className={styles.field}>
            {cells.map((cell, index) => (
                <Cell
                    key={index}
                    value={cell}
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
};

Field.propTypes = {
    cells: PropTypes.array,
    onClick: PropTypes.func,
};

export default Field;
