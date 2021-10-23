import styles from './section.module.css'
import utilStyles from '../styles/utils.module.css'
import cn from 'classnames'

export default function Section({ title, description, children, isGrey }) {
  return (
    <section className={cn(styles.section, utilStyles.centeredtext, {[styles.isGrey]: isGrey})}>
      <div className={styles.sectionContainer}>
        {title && (<h1 className={utilStyles.headingXl}>{title}</h1>)}
        {description && <div>{description}</div>}
        {children}
      </div>
    </section>
  )
}