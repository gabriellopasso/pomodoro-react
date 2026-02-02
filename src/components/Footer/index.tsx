import styles from './styles.module.css';

export function Footer() {
  return <footer className={styles.footer}>
    <a href="">Entenda como funciona a tecnica pomodoro</a>
    <a href=''>Lopasso Pomodoro &copy; {new Date().getFullYear()} feito com maconha</a>
  </footer>;
}
