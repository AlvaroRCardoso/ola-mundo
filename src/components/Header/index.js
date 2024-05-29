import HeaderLink from "../HeaderLink";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <HeaderLink to="/">
                    Home
                </HeaderLink>
                <HeaderLink to="/sobre">
                    About
                </HeaderLink>
            </nav>
        </header>
    );
}