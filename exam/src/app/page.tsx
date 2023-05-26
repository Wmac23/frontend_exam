import styles from './page.module.css'
import Nav from "./shared/nav";
import Footer from './shared/footer';
export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.description}>
      <h2>Welcome to</h2>
     <h1>MyPokémon</h1>
      </div>
      <Footer/>
    </main>
  )
}