// import { ThemeProvider } from "next-themes";
import styles from "../Layout/Layout.module.scss"

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default Layout;
