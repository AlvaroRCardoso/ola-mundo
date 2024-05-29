import { NavLink } from "react-router-dom";
import styles from "./HeaderLink.module.css";

export default function HeaderLink({ to, children }) {
    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
        >
            {children}
        </NavLink>
    );
}