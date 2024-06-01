"use client";
import { ReactNode, useEffect, useRef } from "react";
import { inView, motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: ReactNode;
}
function Anime_fide({ children }: Props) {
  const ref = useRef(null);
  const inVieo = useInView(ref, { once: true });
  const controles = useAnimation();
  const controles2 = useAnimation();

  useEffect(() => {
    controles.start("active");
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          inti: { y: 100, opacity: 0 },
          active: { y: 0, opacity: 1 },
        }}
        initial="inti"
        whileInView="active"
        animate={controles}
        transition={{ duration: 0.3, delay: 0.05, ease: "easeInOut" }}
        className="w-52 h-64  border border-zinc-900 rounded-md  flex justify-center items-center  cursor-pointer overflow-hidden relative"
        whileHover={{ scale: 0.9 }}
        autoSave="active"
        onHoverStart={(e) => {
          controles2.start("end");
        }}
        onHoverEnd={(e) => {
          controles2.start("start");
        }}
      >
        <motion.div
          variants={{
            start: { y: -240 },
            end: { y: 0 },
          }}
          initial="start"
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="w-full h-full bg-black absolute  text-white flex justify-center items-center"
          animate={controles2}
        >
          {children}
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
}

export default Anime_fide;
