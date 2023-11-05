"use client"
import style from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

interface Props {
  services : any
}

interface MapType {
  id : number ;
  name : string ;
  title : string | number ;
  desc : string | number ;
  video : string | number ;
  photo : string | number ;
}

const Services = ({ services }: Props) => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>What We Can Do?</h1>
        <h1 className={style.subtitle}>Services we can help you with</h1>
        <div className={style.services}>
          {services.map((service : MapType) => (
            <Link key={service.id} href={`/products/${service.name}`} passHref>
              <div className={style.service}>
                <div className={style.catInfo}>{service.desc}</div>
                <span className={style.cat}>{service.title}</span>
                <div className={style.media}>
                  {service.video ? (
                    <video
                      className={style.video}
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={`/../public/img/${service.photo}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
