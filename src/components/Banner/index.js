import styles from "./Banner.module.css";;

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Bem-vindo ao blog!
                </h1>
                <p className={styles.paragrafo}>
                    Aqui você encontra os melhores conteúdos sobre programação.
                </p>
            </div>
        </div>
    );
}