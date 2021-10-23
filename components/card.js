import styles from './card.module.css'

export default function Card({ title, image}) {
  return (
      <div className={styles.card}>
        <div className={styles.image}>
          <div className={styles.imageWrapper}>{image}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <p className={styles.description}>A estilo e o conforto numa só cadeira.</p>
        </div>
      </div>
  )
}