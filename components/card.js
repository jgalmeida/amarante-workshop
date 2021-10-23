import styles from './card.module.css'

export default function Card({ title, description, image }) {
  return (
      <div className={styles.card}>
        <div className={styles.image}>
          <div className={styles.imageWrapper}>{image}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          {description && (<p className={styles.description}>{description}</p>)}
        </div>
      </div>
  )
}