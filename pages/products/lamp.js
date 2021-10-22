import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Lamp() {
  return (
    <Layout>
      <Head>
        <title>Lamp</title>
      </Head>
      <h1>Lamp</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}