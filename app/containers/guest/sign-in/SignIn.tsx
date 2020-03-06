import * as React from "react"
import styles from "./signIn.module.scss";
import Logo from "../../../assets/images/logo.png";

const SignIn: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.toolBarOptions}>
                    <div className={styles.closeBtn}>
                        <span>X</span>
                    </div>
                </div>
                <div className={styles.logo}>
                    <img src={Logo}/>
                </div>
            </div>
        </div>

    )
}

export default SignIn