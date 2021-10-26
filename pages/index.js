import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import useSWR from "swr";
import styles from "./index.module.css";
import Card from "../components/card";
import Section from "../components/section";
import Button from "../components/button";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fetcher } from "../utils/fetcher";
import { getReviews } from "../utils/apis/contentful-api-graphql";

export default function Home({ reviews }) {
  const { data, error } = useSWR("/api/products", fetcher);
  const productsList = data && data.slice(0, 4);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Section>
        <h1 className={utilStyles.heading2Xl}>Wave office</h1>
        <p className={utilStyles.lightText}>
          Material de escritório ergonómico, confortável e ajustável.
        </p>
        <p className={utilStyles.lightText}>
          Trabalhar agora é bem mais fácil.
        </p>
        <div className={styles.mainImageWrapper}>
          <Image
            src="/images/3d-stripy-man-at-work.png"
            height={420}
            width={420}
            alt="Man at work"
          />
        </div>
      </Section>

      <Section isGrey title="Os mais vendidos">
        {!productsList && "Loading..."}
        {productsList && (
          <ul className={styles.products}>
            {productsList.map(({ id, title, description, image }) => (
              <li className={styles.product} key={id}>
                <Card
                  title={title}
                  image={
                    <Image
                      src={image.url}
                      width={100}
                      height={0}
                      alt={image.title}
                    />
                  }
                />
              </li>
            ))}
          </ul>
        )}

        <Link href="/products">
          <a className={styles.link}>
            Ver todos os nossos produtos
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </a>
        </Link>
      </Section>

      <Section title="O que os nossos clientes dizem">
        {reviews &&
          reviews.map(({ content, who }) => (
            <div className={styles.review}>
              <div className={styles.content}>
                <p className={utilStyles.textItalic}>{content}</p>
                <p className={utilStyles.textItalic}>
                  Agora trabalhar de casa é muito mais ergonómico, confortável e
                  produtivo!
                </p>
              </div>
              <p className={utilStyles.lightText}>{who}</p>
            </div>
          ))}
      </Section>

      <Section isGrey>
        <div className={styles.sectionQuestions}>
          <div className={styles.cta}>
            <h1 className={utilStyles.headingXl}>
              <p>Ainda tem dúvidas?</p>
              <p>Fale connosco!</p>
            </h1>
            <Button text="Enviar mensagem" />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/speak.png"
              width={300}
              height={300}
              alt="Your Name"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  //const reviews = await getReviews();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      //reviews,
    },
  };
}
