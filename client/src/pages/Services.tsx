import React, { useRef } from "react";
import Logo from "../components/Logo";
import blob from "../assets/images/blob.svg";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { motion } from "framer-motion";
import Store from "../components/Store";
import ServicesAdopt from "../components/ServiceAdopt";
import ServicesEducation from "../components/ServicesEducation";
import ServicesDonate from "../components/ServicesDonate";
import ServicesHealthcare from "../components/ServicesHealthcare";
import ServicesOnlineStore from "../components/ServicesOnlineStore";
import ServicesCommunity from "../components/ServicesCommunity";
import Introduction from "../components/Introduction";

const ServicesPage = () => {
  // Refs for each service section
  const adoptRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const healthcareRef = useRef<HTMLDivElement>(null);
  const storeRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      ADOPTION: adoptRef,
      EDUCATION: educationRef,
      SUPPORT: supportRef,
      HEALTHCARE: healthcareRef,
      "ONLINE STORE": storeRef,
      COMMUNITY: communityRef,
    };

    const targetRef = refs[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "linear" }}
      exit={{ opacity: 0 }}
      className="text-secondary flex flex-col items-center"
    >
      <div className="relative w-full bg-primary/10 py-20 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-6 left-6"
        >
          <Link
            to="/"
            className="bg-white px-5 py-3 rounded-full shadow-lg text-primary flex items-center gap-3 hover:bg-primary hover:text-white transition-all transform hover:scale-105"
          >
            <KeyboardBackspaceIcon /> Back
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center pb-6 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex items-center gap-3 mb-3 bg-primary/10 px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all"
          >
            <span className="text-primary text-xl sm:text-2xl font-semibold">
              Animal House
            </span>
            <Logo />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-primary text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-wide"
          >
            What We Do
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="h-[4px] bg-primary mt-4 rounded-full"
          ></motion.div>
        </motion.div>
      </div>

      {/* Introduction Section with Scroll Function */}
      <div className="flex flex-col relative mx-4 lg:mx-0 xl:mx-4 mb-10 mt-16 max-w-screen-lg">
        <Introduction scrollToSection={scrollToSection} />

        <img
          className="absolute opacity-20 z-[-1] w-[80vw] lg:w-[40vw] top-[-5%] right-[-25%]"
          src={blob}
          alt="blob"
        />
      </div>

      {/* Services Sections with Refs */}
      <div ref={adoptRef} className="flex flex-col relative py-5 mt-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-medium tracking-widest font-heading">
          ADOPTION
        </h1>
        <ServicesAdopt />
      </div>

      <div ref={educationRef} className="flex flex-col relative py-5 mt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-medium tracking-widest font-heading">
          EDUCATION
        </h1>
        <ServicesEducation />
      </div>

      <div ref={supportRef} className="flex flex-col relative py-5 mt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-medium tracking-widest font-heading">
          SUPPORT
        </h1>
        <ServicesDonate />
      </div>

      <div ref={healthcareRef} className="flex flex-col relative py-5 mt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-medium tracking-widest font-heading">
          HEALTHCARE
        </h1>
        <ServicesHealthcare />
      </div>

      <div ref={storeRef} className="flex flex-col relative py-5 mt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-medium tracking-widest font-heading">
          ONLINE SHOPPING
        </h1>
        <ServicesOnlineStore />
      </div>

      <div ref={communityRef} className="flex flex-col relative py-5 mt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-medium tracking-widest font-heading">
          COMMUNITY
        </h1>
        <ServicesCommunity />
      </div>

      <div className="flex flex-col relative mx-4 lg:mx-0 xl:mx-4 my-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-heading text-center font-bold tracking-widest mb-0">
          OUR SHOP
        </h1>
        <h6 className="text-primary/70 font-heading text-center font-bold tracking-widest mb-0">
          Animal welfare is our core concept and the starting point of all our
          work.
          <br /> We strive to improve the welfare level of all pets in society.
        </h6>
      </div>

      <Store />
    </motion.div>
  );
};

export default ServicesPage;
