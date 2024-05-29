import HeaderLink from "../HeaderLink";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <HeaderLink to="/">
                    Início
                </HeaderLink>
                <HeaderLink to="/sobre">
                    Sobre
                </HeaderLink>
            </nav>
        </header>
    );
}