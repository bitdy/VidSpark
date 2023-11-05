import Head from 'next/head'
import { Inter } from 'next/font/google'
import Intro from '@/components/Intro'
import { data } from "../data";
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ services } : any) {
  return (
    <>
      <Head>
        <title>VidSpark Agancy</title>
        <meta name="description" content="The best TikTok Agancy For everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
          </>
  )
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
