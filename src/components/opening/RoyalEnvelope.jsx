import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

function RoyalEnvelope({ onOpen }) {

  return (
    <motion.div
      className="opening-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <div className="mandala-decoration rotating-mandala">
        ✺
      </div>

      <div className="envelope-content">

        <p className="opening-top-label">
          ✦ WITH LOVE AND BLESSINGS ✦
        </p>

        <h1 className="opening-heading">
          A Divine Celebration
        </h1>

        <p className="opening-description">
          Our Little Princess's Namakaranam
        </p>

        <motion.div
          className="royal-envelope"
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >

          <div className="envelope-inner"></div>

          <div className="envelope-flap"></div>

          <div className="envelope-front"></div>

          <div className="envelope-seal">
            ॐ
          </div>

        </motion.div>

        <motion.button
          className="royal-open-button"
          onClick={onOpen}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          <Sparkles size={18} />

          Open Invitation

          <Heart size={18} fill="currentColor" />
        </motion.button>

        <p className="opening-bottom-text">
          A little princess, a lifetime of blessings
        </p>

      </div>

    </motion.div>
  );
}

export default RoyalEnvelope;