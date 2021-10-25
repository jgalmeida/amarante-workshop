import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Image
        src="/images/logo.png"
        layout='fill'
        alt="Logo"
        className={styles.logo}
      />
    </div>
  )
}