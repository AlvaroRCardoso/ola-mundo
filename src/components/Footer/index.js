import styles from "./Footer.module.css";
import { ReactComponent as Copyright } from "assets/marca_registrada.svg";

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <Copyright />

            Desenvolvido com ❤ por Álvaro
        </footer>
    );
}