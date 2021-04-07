import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus veritatis laborum delectus tempore. Distinctio, illum rerum. Blanditiis amet quas vero unde. Maiores dolorum commodi cum molestias, minus architecto obcaecati?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus veritatis laborum delectus tempore. Distinctio, illum rerum. Blanditiis amet quas vero unde. Maiores dolorum commodi cum molestias, minus architecto obcaecati?</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}
