import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/">
                    Home
                </Link>
                <Link className={styles.link} to="/sobre">
                    Sobre
                </Link>
            </nav>
        </header>
    );
}