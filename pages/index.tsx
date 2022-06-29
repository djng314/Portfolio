
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Main from "../components/Main"
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Projects'
import Contacts from '../components/Contacts'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Wei's Portfolio</title>
        <link rel="shortcut icon" href="/assets/Logo.png" />
      </Head>

      <Navbar />
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ease: "easeOut", duration: 0.5, delay:4 }}></motion.div>
      <Main />
      <About />
      <Skills />
      <Project/>
      <Contacts/>
      <motion.div/>
    </div>
  )
}


