import Layout from '../../components/layout'
import Head from 'next/head'
import Section from '../../components/section'
import styles from './[productid].module.css'
import Image from 'next/image'
import useSWR from "swr";
import Button from '../../components/button'
import utilStyles from '../../styles/utils.module.css'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { fetcher } from '../../utils/fetcher';

export default function Product() {
  const router = useRouter()
  const { productid } = router.query;
  const { data, error } = useSWR(`/api/products/${productid}`, fetcher);

  return (
    <Layout>
      <Head>
        <title>Product</title>
      </Head>

      {!data && (
        <Section>
          Loading..
        </Section>
      )}

      {data && (
        <Section>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image
                src={data.image.url}
                width={400}
                height={400}
                alt={data.image.title}
              />
            </div>

            <div className={styles.info}>
              <div>
                <div className={cn(utilStyles.headingXl, styles.productName)}>{data.title}</div>
                <div className={styles.description}>{data.description}</div>
                <div className={styles.price}>€{data.value}</div>
              </div>

              <Button text='Reservar produto' />
            </div>
          </div>
        </Section>
      )}
    </Layout>
  )
}