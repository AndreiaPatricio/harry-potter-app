import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header () {
    return (
        <header className={styles.header}>
            <h1 className="logo">
                <Link to="/">Harry Potter App</Link>
            </h1>
        </header>
    )
}