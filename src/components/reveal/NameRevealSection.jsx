import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import useCountdown from "../../hooks/useCountdown";
import invitationConfig from "../../config/invitationConfig";

function NameRevealSection() {
  const { reveal, baby } = invitationConfig;

  const countdown = useCountdown(reveal.dateISO);

  const units = [
    { label: "DAYS", value: countdown.days },
    { label: "HOURS", value: countdown.hours },
    { label: "MINUTES", value: countdown.minutes },
    { label: "SECONDS", value: countdown.seconds }
  ];

  const hasName = baby.revealName.trim().length > 0;

  return (
    <section id="reveal" className="invitation-section section-dark">

      <div className="reveal-mandala">✺</div>

      <div className="section-content reveal-content">

        <Sparkles size={35} className="gold-icon" />

        <p className="section-eyebrow">
          ✦ A SPECIAL MOMENT ✦
        </p>

        <h1 className="reveal-heading">
          A Name Full of Love
        </h1>

        {!countdown.completed && (
          <>
            <p className="reveal-message">
              The beautiful name of our little princess
              will be revealed at the auspicious moment.
            </p>

            <div className="countdown-grid">

              {units.map((unit) => (
                <motion.div
                  className="countdown-box"
                  key={unit.label}
                  whileHover={{ y: -5 }}
                >
                  <strong>
                    {String(unit.value).padStart(2, "0")}
                  </strong>

                  <span>{unit.label}</span>
                </motion.div>
              ))}

            </div>

            <p className="reveal-date">
              11 NOVEMBER 2026 · 11:11 AM IST
            </p>
          </>
        )}

        {countdown.completed && hasName && (
          <motion.div
            className="revealed-name"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >

            <p>Introducing our precious princess</p>

            <h2>{baby.revealName}</h2>

            <p>May your life always shine with happiness.</p>
          </motion.div>
        )}

        {countdown.completed && !hasName && (
          <div className="revealed-name">
            <Sparkles size={35} />

            <p>The auspicious moment has arrived!</p>

            <h2>Our Little Princess</h2>

            <p>With love and blessings from our family.</p>
          </div>
        )}

      </div>

    </section>
  );
}

export default NameRevealSection;