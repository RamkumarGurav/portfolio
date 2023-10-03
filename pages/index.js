import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="bg-black">
      <Head>
        <title>Ramkumar's Portfolio | Home</title>
      </Head>
      <Header />
      <About />
      <Skills/>
      <Services />
      <Projects />
      <Contact/>
    </section>
  );
}
