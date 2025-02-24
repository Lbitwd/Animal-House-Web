import React from "react";
import { motion } from "framer-motion";
import adoption from "../assets/images/adopt.png";
import education from "../assets/images/education.png";
import support from "../assets/images/animals.png";
import healthcare from "../assets/images/vaccine.png";
import onlineStore from "../assets/images/pet-shop.png";
import community from "../assets/images/paw.png";

// Scroll function prop
interface IntroductionProps {
  scrollToSection: (service: string) => void;
}

const services = [
  {
    title: "ADOPTION",
    image: adoption,
    description:
      "Find your perfect companion and give a loving home to an animal in need.",
  },
  {
    title: "EDUCATION",
    image: education,
    description:
      "Learn responsible pet ownership through workshops and programs.",
  },
  {
    title: "SUPPORT",
    image: support,
    description:
      "Support animals by contributing to food, shelter, and care programs.",
  },
  {
    title: "HEALTHCARE",
    image: healthcare,
    description:
      "Affordable veterinary services for regular check-ups and vaccinations.",
  },
  {
    title: "ONLINE STORE",
    image: onlineStore,
    description:
      "Shop for pet supplies and accessories while supporting our cause.",
  },
  {
    title: "COMMUNITY",
    image: community,
    description:
      "Join a vibrant community of pet lovers to share, connect, and discover events together.",
  },
];

const Introduction: React.FC<IntroductionProps> = ({ scrollToSection }) => {
  return (
    <div className="flex flex-col items-center mx-4 lg:mx-0 xl:mx-4 my-20 max-w-screen-2xl">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-heading font-bold tracking-widest mb-5">
        OUR SERVICES
      </h1>
      <p className="text-primary/70 font-heading text-center font-semibold tracking-widest mb-10">
        We are dedicated to enhancing animal welfare through a range of services
        designed to support both pets and their owners.
      </p>

      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => scrollToSection(service.title)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 group border border-gray-300"
          >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Card Content */}
            <div className="relative z-10 bg-white group-hover:bg-transparent rounded-xl p-6 shadow-lg transition-all duration-500">
              <div className="flex flex-col items-center">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-[80px] h-[80px] mb-4"
                />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:text-white mb-2 transition-all">
                  {service.title}
                </h2>
                <p className="text-center text-stone-600 group-hover:text-white font-medium text-sm sm:text-base lg:text-lg transition-all">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
