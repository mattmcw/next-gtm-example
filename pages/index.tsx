import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

import TrackedLink  from '../components/trackedlink'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Google Tag Manager Example</title>
        <meta name="description" content="Example app that integrates Google Tag Manager (for Google Analytics)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js <TrackedLink href="https://nextjs.org" label="h1" >Google Tag Manager</TrackedLink> Example
        </h1>

        <p className={styles.description}>
          Get started by clicking links below 
        </p>

        <div className={styles.grid}>
          <TrackedLink href="https://nextjs.org/docs" label="documentation" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </TrackedLink>

          <TrackedLink href="https://nextjs.org/learn" label="learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </TrackedLink>

          <TrackedLink
            href="https://github.com/vercel/next.js/tree/master/examples"
            label="examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </TrackedLink>

          <TrackedLink
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            label="deploy"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </TrackedLink>
        </div>
      </main>

      <footer className={styles.footer}>
        <TrackedLink
          href="https://github.com/mattmcw"
          label="footer"
        >by @mattmcw</TrackedLink>
      </footer>
    </div>
  )
}

export default Home
