import styles from "./Banner.module.css";;

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu blog. Aqui você encontra conteúdos sobre tecnologia, programação e muito mais.
                </p>
            </div>
        </div>
    );
}