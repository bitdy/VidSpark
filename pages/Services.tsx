import {  Scrollbar } from 'swiper/modules';
import { useRef } from "react";
import style from "../styles/Services.module.css";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';



const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className={style.services}
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className={style.textContainer} variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div> */}
      <motion.div className={style.titleContainer} variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className={style.listContainer} variants={variants}>
      <Swiper
            modules={[ Scrollbar]}
            scrollbar={{ draggable: true }}
autoplay={true}
      spaceBetween={50}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}

    >
       <SwiperSlide>
         <motion.div
          className={style.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className={style.btn}>Go</button>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide>

        <motion.div
          className={style.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className={style.btn}>Go</button>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide>

        <motion.div
          className={style.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className={style.btn}>Go</button>
        </motion.div>
        </SwiperSlide>
        
        <SwiperSlide>

        <motion.div
          className={style.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className={style.btn}>Go</button>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide>

        <motion.div
          className={style.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className={style.btn}>Go</button>
        </motion.div>
        </SwiperSlide>

    </Swiper>    
      </motion.div>
    </motion.div>
  );
};

export default Services;
