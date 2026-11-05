import { motion } from "framer-motion";
import { Sparkles, Flower2 } from "lucide-react";

function BlessingScreen({ onEnter }) {

  return (
    <motion.section
      className="blessing-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        className="blessing-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >

        <Flower2
          size={45}
          className="blessing-flower"
        />

        <p className="blessing-label">
          A BEAUTIFUL NEW BEGINNING
        </p>

        <h1 className="blessing-title">
          With Divine Blessings
        </h1>

        <h2 className="telugu-text blessing-telugu">
          శుభమస్తు
        </h2>

        <p className="blessing-message">
          With the blessings of the Almighty
          and the love of our family,
          we joyfully invite you to celebrate
          the naming ceremony of our little princess.
        </p>

        <div className="gold-divider">
          ✦ ───────── ❀ ───────── ✦
        </div>

        <p className="blessing-footer">
          Your presence and blessings will make
          this occasion even more special.
        </p>

        <motion.button
          className="royal-open-button"
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles size={18} />
          Enter Invitation
        </motion.button>

      </motion.div>

    </motion.section>
  );
}

export default BlessingScreen;