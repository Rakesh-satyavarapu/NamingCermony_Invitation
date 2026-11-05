
import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";

import invitationConfig from "../../config/invitationConfig";

function GaneshaReveal({ onContinue }) {
  return (
    <motion.section
      className="ganesha-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Centered golden glow behind Ganesha */}
      <motion.div
        className="golden-light"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Ganesha content */}
      <motion.div
        className="ganesha-content"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p className="ganesha-top-label">
          ✦ DIVINE BLESSINGS ✦
        </p>

        {/* Ganesha circular frame */}
        <motion.div
          className="ganesha-image-frame"
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <motion.img
            src={invitationConfig.ganesha.image}
            alt="Lord Ganesha"
            className="ganesha-image"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Telugu mantra */}
        <motion.h1
          className="ganesha-mantra telugu-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          ఓం శ్రీ గణేశాయ నమః
        </motion.h1>

        <motion.p
          className="ganesha-blessing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          May Lord Ganesha bless our little princess
          with happiness, wisdom, health and prosperity.
        </motion.p>

        <motion.p
          className="ganesha-wait-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          ✦ With love and divine blessings ✦
        </motion.p>

        {/* Continue button */}
        <motion.button
          className="royal-open-button"
          onClick={onContinue}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Sparkles size={17} />
          Continue
        </motion.button>
      </motion.div>

      {/* Close button */}
      <motion.button
        className="skip-button"
        onClick={onContinue}
        aria-label="Continue"
        title="Continue"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={18} strokeWidth={1.8} />
      </motion.button>
    </motion.section>
  );
}

export default GaneshaReveal;
