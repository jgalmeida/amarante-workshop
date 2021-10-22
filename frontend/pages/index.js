import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Image
          src="/images/3d-stripy-man-at-work.png" // Route of the image file
          height={300} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Your Name"
        />

        <h1 className="title">
          Check our{' '}
          <Link href="/products/lamp">
            <a>Lamp!</a>
          </Link>
        </h1>
      </section>
    </Layout>
  )
}
