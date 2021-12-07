import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import * as gtag from '../lib/gtag'

function handleClick (e : any, label : string) {
  let url : string;
  let eventObj : any;

  if (e.target.nodeName === 'A') {
    url = e.target.href
  } else {
    url = e.target.closest('a').href
  }

  eventObj = {
    action: 'clickthrough',
    category: 'external',
    label,
    value : url
  }

  gtag.event(eventObj)
  console.log(eventObj)
}

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
          Next.js <a href="https://nextjs.org" onClick={(e) => handleClick(e, 'h1')} rel="noopener noreferrer" target="_blank">Google Tag Manager</a> Example
        </h1>

        <p className={styles.description}>
          Get started by clicking links below 
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" target="_blank" onClick={(e) => handleClick(e, 'documentation')} rel="noopener noreferrer" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn"  target="_blank" onClick={(e) => handleClick(e, 'learn')} rel="noopener noreferrer" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            target="_blank"
            onClick={(e) => handleClick(e, 'examples')}
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            onClick={(e) => handleClick(e, 'deploy')}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/mattmcw"
          target="_blank"
          onClick={(e) => handleClick(e, 'footer')}
          rel="noopener noreferrer"
        >by @mattmcw</a>
      </footer>
    </div>
  )
}

export default Home
