// Реализовать игру "Крестики-Нолики" на базе Create React App:
// делить все компоненты на stateful-контейнеры (Containers) и stateless-шаблоны (Layout);
// типизировать props всех компонентов с помощью PropTypes;
// использовать "строгий режим";
// игровое поле — 3×3 клетки;
// над полем информация — чей текущий ход (крестика или нолика), информация о победе одной из сторон или ничья;
// при клике на клетку в ней должен отрисовываться символ стороны, у которой был текущий ход (крестик или нолик);
// если 3 одинаковых символа размещается в одну линию (горизонтально, вертикально или по диагонали), то остановить игру и сообщить о победе крестика или нолика;
// реализовать кнопку "Начать заново", при клике на которую поле будет очищаться и игра начнётся сначала;
// дизайн на усмотрение разработчика.

import { useState } from "react";
import styles from "./game.module.css";
import Field from "../field/field";
import { determinationOfWinner } from "../../utils/calculate";

const Game = () => {
    const arrFill = Array(9).fill(null);
    const [field, setField] = useState(arrFill);
    const [xIsNext, setXIsNext] = useState(true); // первый ход за X
    const winner = determinationOfWinner(field);
    // console.log(Field);

    const handleClick = (index) => {
        const fieldCopy = [...field];
        if (winner || fieldCopy[index]) return null; // определяем был ли клик по ячейке или игра закончена
        fieldCopy[index] = xIsNext ? "X" : "0"; // определяем чей ход: X или 0
        setField(fieldCopy);
        setXIsNext(!xIsNext); // обновляем состояния
    };

    const newGame = () => {
        const handleClickNewGame = () => {
            setField(arrFill);
        };
        return (
            <button
                className={styles.start_btn}
                onClick={handleClickNewGame}
            >
                Начать заново
            </button>
        );
    };

    return (
        <>
            <div className={styles.wrapper}>
                <p className={styles.game_info}>
                    {winner
                        ? "Победил " + winner + "!"
                        : "Сейчас ходит " + (xIsNext ? "X" : "0")}
                </p>
                <Field
                    cells={field}
                    onClick={handleClick}
                />
                {newGame()}
            </div>
        </>
    );
};

export default Game;
