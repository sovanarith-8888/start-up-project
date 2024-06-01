'use client'
import TextPasswordFieldComponent from './TextPasswordFieldComponent';
import TextEmailFieldComponent from './TextEmailFieldComponent';
import styles from "@/app/(auth)/login/login.module.css";
const LoginFormComponent = () => {
  return (
    <section className={styles.containerGlass}>
      <h2>Sign in to your account</h2>
      <TextEmailFieldComponent/>
      <TextPasswordFieldComponent/>
    </section>
  )
}

export default LoginFormComponent;