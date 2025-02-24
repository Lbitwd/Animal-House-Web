import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Link } from "react-router-dom";
import bgdog from "../assets/images/bg_dog.png";
import { useInView } from "react-intersection-observer";

const ServicesAdopt = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="flex justify-center items-center bg-primary/50 bg-center min-h-[50vh] p-8"
    >
      <div className="text-white flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl w-full min-h-[50vh] rounded-lg">
        <img
          className="w-full md:w-1/2 max-h-[300px] object-cover rounded-lg"
          src={bgdog}
          alt="Adopt Pets"
        />
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold border-b-4 pb-2">
            Give Abandoned Animals a Loving Home
          </h1>
          <p className="text-lg md:text-xl mt-4">
            We are deeply committed to ensuring that every animal we rehome
            finds a loving and permanent family. After experiencing abandonment,
            these animals deserve a safe, caring environment where they can
            thrive for the rest of their lives. Adoption is a lifelong
            commitment—whether they grow old or face health challenges, they
            rely on us for love and care. Providing them with a stable home
            means preventing further heartbreak and ensuring they never feel
            alone again.
          </p>
          <Link to="/contact" className="mt-4">
            <Button text="Adopt Now" theme="filled" classes="mt-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesAdopt;
