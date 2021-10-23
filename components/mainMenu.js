import styles from './mainMenu.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import cn from 'classnames'

export default function MainMenu() {
  return (
    <ul className={cn(utilStyles.list, styles.menu)}>
      <li className={styles.item}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/">
          <a>Produtos</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/">
          <a>Sobre</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/">
          <a>Contactos</a>
        </Link>
      </li>
    </ul>
  )
}