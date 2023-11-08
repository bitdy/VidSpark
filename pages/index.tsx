import Head from "next/head";
import { Inter } from "next/font/google";
import Intro from "@/components/Intro";
import { data } from "../data";
import Testimonials from "@/components/Testimonials";
import Cursor from "@/components/Cursor";
import Parallax from "@/components/Parallax";
import Services from "./Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ services }: any) {
  return (
    <>
      <Head>
        <title>VidSpark Agancy</title>
        <meta
          name="description"
          content="The best fTikTok Agancy For everyone"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Cursor />
      <div className="full_section">
      <Intro />
      </div>
      <div className="full_section">
      <Parallax type="services" />
      </div>
      <div className="full_section">
      <Services />
      </div>
      <div className="full_section">
      <Parallax type="portfolio" />
      </div>
      <div className="full_section">
      <Testimonials />
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
