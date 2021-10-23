import Layout from '../../components/layout'
import Head from 'next/head'
import Section from '../../components/section'
import styles from './[productid].module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from "swr";
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
        <Section title={data.title}>
          <div>{data.description}</div>
          <div>€{data.value}</div>
          <div>
            <Image
              src={data.image.url}
              width={300}
              height={300}
              alt={data.image.title}
            />
          </div>
        </Section>
      )}
    </Layout>
  )
}