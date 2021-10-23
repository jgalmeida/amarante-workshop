import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import Section from '../../components/section'
import styles from './index.module.css'
import useSWR from "swr";
import Image from 'next/image'
import { fetcher } from '../../utils/fetcher';

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>

      <Section title="Produtos">
        {!data && "Loading..."}

        {data && (
          <div className={styles.productsGrid}>
            {data.map(({ id, title, image}) => (
              <Link href={`/products/${encodeURIComponent(id)}`} key={id}>
                <a className={styles.product}>
                  <Image
                    src={image.url}
                    width={300}
                    height={300}
                    alt={title}
                  />
                </a>
              </Link>
            ))}
          </div>
        )}

      </Section>
    </Layout>
  )
}
