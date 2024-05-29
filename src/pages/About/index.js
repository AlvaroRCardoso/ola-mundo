import styles from "./About.module.css";
import PostTemplate from "components/PostTemplate";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.jpeg";

export default function About() {
    return (
        <PostTemplate
            fotoCapa={fotoCapa}
            titulo={"Sobre mim"}
        >
            <h3 className={styles.subtitulo}>Olá eu sou o Álvaro</h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Álvaro"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou um desenvolvedor front-end com um ano de
                experiência focado em criar interfaces atraentes e
                funcionais para os usuários.
            </p>
            <p className={styles.paragrafo}>
                Minha jornada no
                mundo do desenvolvimento web me permitiu
                aprimorar minhas habilidades técnicas, enquanto
                minha dedicação à resolução de problemas me
                levou a encontrar soluções inovadoras para desafios
                complexos.
            </p>
        </PostTemplate>
    );
}