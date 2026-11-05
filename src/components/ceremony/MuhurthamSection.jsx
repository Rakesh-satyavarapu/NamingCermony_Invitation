
import { useState } from "react";
import { motion } from "framer-motion";

import {
  CalendarDays,
  Clock,
  MapPin,
  Flower2,
  ImageOff,
  Sun
} from "lucide-react";

import invitationConfig from "../../config/invitationConfig";

function MuhurthamSection() {
  const { event, venue } = invitationConfig;

  const [imageError, setImageError] = useState(false);

  // Date formatting
  const ceremonyDate = new Date(
    `${event.date}T12:00:00`
  );

  const isValidDate = !Number.isNaN(ceremonyDate.getTime());

  const day = isValidDate
    ? ceremonyDate.getDate()
    : "--";

  const month = isValidDate
    ? ceremonyDate.toLocaleDateString("en-IN", {
        month: "long"
      })
    : "November";

  const year = isValidDate
    ? ceremonyDate.getFullYear()
    : "2026";

  const weekday = isValidDate
    ? ceremonyDate.toLocaleDateString("en-IN", {
        weekday: "long"
      })
    : "Wednesday";

  // Time formatting
  const [timeValue, meridiem] = (
    event.time || "11:00 AM"
  ).split(" ");

  return (
    <section
      id="ceremony"
      className="invitation-section section-ivory"
    >
      <div className="section-content">

        {/* Section Heading */}
        <motion.div
          className="text-center section-title-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow">
            ✦ THE AUSPICIOUS OCCASION ✦
          </p>

          <h1 className="section-heading">
            Namakaranam 
          </h1>

          <p className="telugu-text ceremony-telugu">
            నామకరణ మహోత్సవం
          </p>

          <p className="section-description">
            A beautiful day filled with love,
            happiness and divine blessings.
          </p>
        </motion.div>

        {/* Ceremony Cards */}
        <div className="muhurtham-layout">

          {/* LEFT: Baby Cradle */}
          <motion.div
            className="cradle-frame"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="cradle-image-border">

              {!imageError ? (
                <img
                  src="/images/decorations/cradle.png"
                  alt="Traditional decorated baby cradle"
                  className="cradle-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="cradle-image-fallback">
                  <ImageOff size={42} />

                  <h3>Baby Cradle</h3>

                  <p>
                    Add your cradle photograph to
                    public/images/decorations/baby-cradle.jpg
                  </p>
                </div>
              )}

            </div>

            <div className="cradle-caption">
              <Flower2 size={20} />

              <span>
                A cradle filled with love and blessings
              </span>

              <Flower2 size={20} />
            </div>
          </motion.div>

          {/* RIGHT: Ceremony Details */}
          <motion.div
            className="muhurtham-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >

            {/* Date */}
            <div className="detail-item">
              <CalendarDays className="detail-icon" />

              <div className="date-content">
                <span>CELEBRATION DATE</span>

                <div className="date-display">
                  <strong>{day}</strong>

                  <div className="date-month-year">
                    <h3>{month}</h3>
                    <span>{year}</span>
                  </div>
                </div>

                <p className="date-weekday">
                  {weekday}
                </p>
              </div>
            </div>

            {/* Muhurtham Time */}
            <div className="detail-item">
              <Clock className="detail-icon" />

              <div className="muhurtham-time-content">
                <span>MUHURTHAM</span>

                <div className="muhurtham-clock">
                  <strong>{timeValue}</strong>
                  <span>{meridiem || "AM"}</span>
                </div>

                <div className="muhurtham-period">
                  <Sun size={17} />
                  <span>Morning – Afternoon</span>
                </div>

                <small>
                  The auspicious moment of our little princess
                </small>
              </div>
            </div>

            {/* Venue */}
            <div className="detail-item">
              <MapPin className="detail-icon" />

              <div className="venue-content">
                <span>VENUE</span>

                <h3>
                  {venue.name || "Venue details coming soon"}
                </h3>

                <p>{venue.address}</p>
              </div>
            </div>

            {/* Directions */}
            {venue.mapLink && (
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="royal-link-button"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            )}

            {/* Blessing */}
            <div className="muhurtham-blessing">
              <Flower2 size={19} />

              <p>
                Your presence and blessings will make
                this occasion truly memorable.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MuhurthamSection;
