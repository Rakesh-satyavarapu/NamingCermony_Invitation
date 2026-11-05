
import { motion } from "framer-motion";
import {
  Clock,
  Sparkles,
  Heart,
  Utensils,
  HandHeart
} from "lucide-react";

import invitationConfig from "../../config/invitationConfig";

// Shiva Lingam icon for Rudra Abhishekam
function ShivaLingamIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Shiva Lingam"
    >
      {/* Lingam */}
      <path d="M22 38 V25 C22 16 42 16 42 25 V38" />
      <path d="M22 38 C22 44 42 44 42 38" />
      <path d="M22 38 C22 44 42 44 42 38" />

      {/* Yoni base */}
      <path d="M12 43 H52 L46 51 H18 Z" />
      <path d="M32 51 V55" />

      {/* Tripundra */}
      <path d="M27 27 H37" />
      <path d="M27 31 H37" />
      <path d="M27 31 H37" />
      <circle
        cx="32"
        cy="35"
        r="1.5"
        fill="currentColor"
        stroke="none"
      />
      
    </svg>
  );
}

// Om symbol for Satyanarayana Swamy Vratham
function OmIcon() {
  return (
    <span className="event-sacred-symbol" role="img" aria-label="Om">
      ॐ
    </span>
  );
}

const eventIcons = [
  HandHeart,       // Welcome & Blessings
  ShivaLingamIcon, // Rudra Abhishekam
  Sparkles,        // Namakaranam
  OmIcon,          // Satyanarayana Swamy Vratham
  Utensils         // Lunch
];

function EventsSection() {
  const { schedule } = invitationConfig;

  return (
    <section id="events" className="invitation-section events-section">
      <div className="section-content">

        {/* Section heading */}
        <motion.div
          className="text-center section-title-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow">
            ✦ A DAY FILLED WITH HAPPINESS ✦
          </p>

          <h1 className="section-heading">
            Celebration Timeline
          </h1>

          <p className="telugu-text ceremony-telugu">
            వేడుకల కార్యక్రమాలు
          </p>

          <p className="section-description">
            Every moment is special when celebrated
            with family, friends and blessings.
          </p>
        </motion.div>

        {/* Event timeline */}
        <div className="events-timeline">
          {schedule.map((item, index) => {
            const Icon = eventIcons[index % eventIcons.length];

            return (
              <motion.div
                className={`event-timeline-item ${
                  index % 2 === 0 ? "event-left" : "event-right"
                }`}
                key={`${item.time}-${item.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15
                }}
              >

                {/* Timeline icon */}
                <div className="event-icon">
                  <Icon size={23} />
                </div>

                {/* Event card */}
                <div className="event-card">
                  <div className="event-card-time">
                    <Clock size={15} />
                    {item.time}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="event-card-decoration">
                    ✦ With love and blessings ✦
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Closing message */}
        <motion.div
          className="events-closing-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Heart size={22} />
          <p>
            We look forward to celebrating these
            beautiful moments with you.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default EventsSection;
