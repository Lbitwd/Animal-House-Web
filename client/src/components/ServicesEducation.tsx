import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import educationbg from "../assets/images/educationbg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesEducation = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center bg-primary/50 bg-center min-h-[50vh] p-8"
    >
      <div className="text-white flex flex-col md:flex-row-reverse items-center gap-8 p-8 max-w-5xl w-full min-h-[50vh] rounded-lg">
        <img
          className="w-full md:w-1/2 max-h-[300px] object-cover rounded-lg"
          src={educationbg}
          alt="Education"
        />
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold border-b-4 pb-2">
            Building a Compassionate Community
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Homeless animals often struggle to find food and may resort to
            searching through trash to survive. Instead of seeing them as a
            nuisance, our community must recognize their struggles and respond
            with kindness. Animals have emotions, needs, and the capacity to
            love—just like us. By fostering awareness and empathy, we can create
            a world where every animal is treated with the care and respect they
            deserve.
          </p>
          <Link to="/contact" className="mt-4">
            <Button text="Learn More" theme="filled" classes="mt-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesEducation;
