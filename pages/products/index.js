import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import Section from '../../components/section'
import utilStyles from '../../styles/utils.module.css'
import styles from './index.module.css'
import Image from 'next/image'

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>

      <Section title="Produtos">
        <div className={styles.productsGrid}>
        <Link href="/products">
            <a className={styles.product}>
              <Image
                src="/images/lamp.png"
                width={300}
                height={300}
                alt="Your Name"
              />
            </a>
          </Link>
          <div className={styles.product}>1</div>
          <Link href="/products">
            <a className={styles.product}>
              <Image
                src="/images/chair_2.png"
                width={300}
                height={300}
                alt="Your Name"
              />
            </a>
          </Link>
          <div className={styles.product}>4</div>
          <div className={styles.product}>4</div>
          <div className={styles.product}>4</div>
          <div className={styles.product}>4</div>
          <div className={styles.product}>4</div>
        </div>
      </Section>
    </Layout>
  )
}
