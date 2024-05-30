import styles from './Button.module.css';

export default function Button({ children, size }) {
    return (
        <button className={`
            ${styles.botao}
            ${styles[size]}
            `}>
            {children}
        </button>
    );
}