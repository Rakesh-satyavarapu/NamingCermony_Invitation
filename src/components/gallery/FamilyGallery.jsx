import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import invitationConfig from "../../config/invitationConfig";

function FamilyGallery() {
  return (
    <section id="gallery" className="invitation-section section-lavender">

      <div className="section-content">

        <div className="text-center section-title-block">
          <p className="section-eyebrow">
            ✦ LITTLE MOMENTS, BIG LOVE ✦
          </p>

          <h1 className="section-heading">
            Our Precious Memories
          </h1>

          <p className="section-description">
            A collection of beautiful moments with our family.
          </p>
        </div>

        <div className="gallery-grid">

          {invitationConfig.gallery.map((photo, index) => (
            <motion.div
              className="gallery-item"
              key={photo}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <img
                src={photo}
                alt={`Baby and family memory ${index + 1}`}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <Heart fill="currentColor" />
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FamilyGallery;
