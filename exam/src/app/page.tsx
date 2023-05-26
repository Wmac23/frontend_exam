import styles from './page.module.css'
import Nav from "./shared/nav";
import Footer from './shared/footer';
export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div>
      <h2>Welcome to</h2>
      <br />
     <img src="mypokemon.png" alt="" />
      </div>
      <div>
        <button className={styles.buttons}>See Pokémon</button>
        <button className={styles.buttons}>My Pokémon</button>
      </div>
      <Footer/>
    </main>
  )
}