import styles from './button.module.css'

export default function Button({ text, icon, onClick }) {
  return (
      <button className={styles.button} onClick={onClick}>
        {text}
        {icon && <div>{icon}</div>}
      </button>
  )
}