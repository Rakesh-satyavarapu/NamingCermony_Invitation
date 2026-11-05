import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import invitationConfig from "../../config/invitationConfig";

function BabyIntroduction() {
  const { baby, parents } = invitationConfig;

  return (
    <section id="baby" className="invitation-section section-lavender">

      <div className="section-content baby-layout">

        <motion.div
          className="baby-photo-outer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="baby-photo-frame">
            <img
              src={baby.photo}
              alt="Our little princess"
              className="baby-photo"
            />
          </div>

          <div className="photo-caption">
            <Heart size={16} fill="currentColor" />
            Our Little Princess
          </div>
        </motion.div>

        <motion.div
          className="baby-details"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="section-eyebrow">
            ✦ A LITTLE MIRACLE ✦
          </p>

          <h1 className="section-heading">
            Our Little Princess
          </h1>

          <h2 className="telugu-text baby-telugu">
            మా ఇంటి మహాలక్ష్మి
          </h2>

          <p className="section-description">
            {baby.message}
          </p>

          <div className="family-names">
            <p>With the love of</p>

            <h3>{parents.father}</h3>

            <span>&</span>

            <h3>{parents.mother}</h3>
          </div>

          <p className="gold-caption">
            A tiny bundle of joy, a lifetime of happiness.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default BabyIntroduction;