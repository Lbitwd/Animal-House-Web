import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import bgcommunity from "../assets/images/bg_dog.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesCommunity: React.FC = () => {
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
          src={bgcommunity}
          alt="Community"
        />
        <div className="flex flex-col items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold border-b-4 pb-2">
            Join Our Pet-Loving Community
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Connect with fellow pet enthusiasts, share stories, find playdates,
            and support each other. Our community is a safe space for adopters,
            donors, and animal lovers to come together and make a difference.
          </p>
          <Link to="/community" className="mt-4">
            <Button text="Join Now" theme="filled" classes="mt-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCommunity;
