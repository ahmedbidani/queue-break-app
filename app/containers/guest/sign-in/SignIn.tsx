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
                <div className={styles.form}>
                    <div>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input id="email" type="text" className={styles.inputText}/>
                    </div>
                    <div>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input id="password" type="password" className={[styles.inputText, styles.error].join(' ')}/>
                        <div className={styles.errorMessage}>Password is a required field.</div>
                    </div>
                    <div>
                        <p className={styles.forgotPassword}>Forgot username or password?</p>
                    </div>
                    <div className={styles.submitButton}>
                        Connect
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn