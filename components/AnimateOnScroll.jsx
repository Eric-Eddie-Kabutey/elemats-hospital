"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/motion_variants";

const AnimateOnScroll = ({ children, variants = fadeInUp, custom, className = "" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
