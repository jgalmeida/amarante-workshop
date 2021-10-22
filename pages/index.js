import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import useSWR from "swr";
import styles from './index.module.css'
import cn from 'classnames'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/products", fetcher);

  console.log(data);
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={cn(utilStyles.section, utilStyles.centeredtext)}>
        <h1 className={utilStyles.heading2Xl}>Wave office</h1>
        <p className={utilStyles.lightText}>Material de escritório ergonómico, confortável e ajustável.</p>
        <p className={utilStyles.lightText}>Trabalhar agora é bem mais fácil.</p>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/3d-stripy-man-at-work.png" // Route of the image file
            height={420} // Desired size with correct aspect ratio
            width={420} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
      </section>
    </Layout>
  )
}
