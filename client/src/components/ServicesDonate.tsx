import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import bghome from "../assets/images/bghome.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesHome = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center bg-primary/50 bg-center min-h-[50vh] p-8"
    >
      <div className="text-white flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl w-full min-h-[50vh] rounded-lg">
        <img
          className="w-full md:w-1/2 max-h-[300px] object-cover rounded-lg"
          src={bghome}
          alt="Support Animals"
        />
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold border-b-4 pb-2">
            Rescue Homeless Animals
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Our goal is to provide shelter, medical care, and a second chance to
            homeless animals. We also support low-income pet owners by offering
            essential services, including spay-neuter programs, to prevent
            overpopulation and suffering. With your support, we can expand our
            rescue efforts, fund veterinary care, and create a safer future for
            animals in need. Your kindness and generosity make all the
            difference.
          </p>
          <Link to="/contact" className="mt-4">
            <Button text="Donate Now" theme="filled" classes="mt-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesHome;
