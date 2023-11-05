import { data } from "../../data";
import style from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface ProdcType {
  id : number ;
  name : string ;
  title : string | number ;
  desc : string | number ;
  url : string | number ;
  img : any ;
}
const Product = ({ product } : any) => {
  return (
    <div className={style.container}>
      <Head>
        <title>Digital Design for Your Product</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near NY"
        />
      </Head>
      <div className={style.cardL}>
        {product.images.map((img : ProdcType) => (
          <div key={img.id} className={style.imgContainer}>
            {/* <Image src={img.url} layout="fill" objectFit="cover" alt="" /> */}
          </div>
        ))}
      </div>
      <div className={style.cardS}>
        <h1 className={style.title}>{product.title}</h1>
        <p className={style.desc}>{product.longDesc}</p>
        <button className={style.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx : any) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
