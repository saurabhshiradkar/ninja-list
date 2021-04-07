import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus veritatis laborum delectus tempore. Distinctio, illum rerum. Blanditiis amet quas vero unde. Maiores dolorum commodi cum molestias, minus architecto obcaecati?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus veritatis laborum delectus tempore. Distinctio, illum rerum. Blanditiis amet quas vero unde. Maiores dolorum commodi cum molestias, minus architecto obcaecati?</p>
      <Footer/>
    </div>
  )
}
