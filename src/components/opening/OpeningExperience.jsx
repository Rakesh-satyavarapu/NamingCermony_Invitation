import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import GaneshaReveal from "./GaneshaReveal";
import BlessingScreen from "./BlessingScreen";

import { createOpeningController } from "../../controllers/openingController";

import FloatingFloralBackground from "../common/FloatingFloralBackground";

import "./OpeningExperience.css";

function OpeningExperience({ onComplete }) {

  // Start directly with Lord Ganesha
  const [stage, setStage] = useState("ganesha");

  const controller = createOpeningController(setStage);

  // Automatically move to divine blessings
  useEffect(() => {

    if (stage !== "ganesha") return;

    const timer = setTimeout(() => {
      setStage("blessings");
    }, 6500);

    return () => clearTimeout(timer);

  }, [stage]);

  return (
    <>
      <FloatingFloralBackground />

      <AnimatePresence mode="wait">

        {stage === "ganesha" && (
          <GaneshaReveal
            key="ganesha"
            onContinue={controller.showBlessings}
            onSkip={controller.skipOpening}
          />
        )}

        {stage === "blessings" && (
          <BlessingScreen
            key="blessings"
            onEnter={onComplete}
          />
        )}

      </AnimatePresence>
    </>
  );
}

export default OpeningExperience;