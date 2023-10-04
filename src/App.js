import styles from "./App.module.css";
import Game from "./components/game/game";

export const App = () => {
    return (
        <div className={styles.app}>
            <Game />
        </div>
    );
};
