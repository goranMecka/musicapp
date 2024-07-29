
import styles from './NavBar.module.css'

type Props = {}

export default function NavBarComponent({}: Props) {
  return (

    <div className={`col-12 ${styles.nav_container}`}>
       <div className={styles.header}>
       <h1>music db</h1>
       </div>
     
    </div>

  )
}

