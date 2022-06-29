
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Main from "../components/Main"
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Projects'
import Contacts from '../components/Contacts'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Wei's Portfolio</title>
        <link rel="shortcut icon" href="/assets/Logo.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Project/>
      <Contacts/>
    </div>
  )
}


