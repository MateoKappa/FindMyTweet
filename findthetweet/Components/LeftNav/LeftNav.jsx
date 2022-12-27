import styles from "../LeftNav/leftNav.module.scss";

const LeftNav = () => {

    const Filter = ({ filter_title, logo_image_source }) => {
        return (
            <div className={styles.filter}>
                <div className={styles.filter_objects}>
                    <img src={logo_image_source}></img>
                    <h3>{filter_title}</h3>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}><img src="/Εικόνα1.png"></img></div>
            <section className={styles.filter_container}>
                <Filter filter_title="Login" logo_image_source="/image2.png" />
                <Filter filter_title="Login" logo_image_source="/image2.png" />
                <Filter filter_title="Login" logo_image_source="/image2.png" />
                <Filter filter_title="Login" logo_image_source="/image2.png" />
                <Filter filter_title="Login" logo_image_source="/image2.png" />
            </section>
        </div>
    )
}

export default LeftNav