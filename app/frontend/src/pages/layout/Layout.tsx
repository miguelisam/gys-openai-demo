import { Outlet, NavLink, Link } from "react-router-dom";

import logogys from "../../assets/logogys.png";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig"

import { LoginButton } from "../../components/LoginButton"

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Asistente Virtual Inteligente</h3>
                    </Link>
                    <img src={logogys}/>
                    {useLogin && <LoginButton/>}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
