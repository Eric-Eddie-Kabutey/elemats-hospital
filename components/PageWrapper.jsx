"use client";

import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/lib/motion_variants";
import { usePathname } from "next/navigation";

const PageWrapper = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
