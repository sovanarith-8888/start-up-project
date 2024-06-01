'use client'

import LoginFormComponent from "@/components/login/LoginFormComponent"
import styles from "./login.module.css";
import "@/app/globals.css";
const LoginPage = () => {
  return (
    <main className={styles.main}>
      <h1>Welcome to Our Secure Login Portal</h1>
      <p className={styles.textCenter}>Enter your login credentials securely to access your account and explore our platforms features. <br/> Your privacy and security are our top priorities, and we employ advanced encryption technology to safeguard your data.
      </p>
      <LoginFormComponent/>
    </main>
  )
}

export default LoginPage