import styles from './mainMenu.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import cn from 'classnames'
import useSWR from "swr";
import { fetcher } from '../utils/fetcher';

export default function MainMenu() {
  const { data, error } = useSWR("/api/header", fetcher);

  if (!data) {
    return null;
  }

  return (
    <ul className={cn(utilStyles.list, styles.menu)}>
      {data.links.map(link => (
        <li className={styles.item}>
          <Link href={link.url}>
            <a>{link.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}