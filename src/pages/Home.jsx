import { useState } from "react";

import OpeningExperience from "../components/opening/OpeningExperience";

import FloatingFloralBackground from "../components/common/FloatingFloralBackground";
import SiteNavbar from "../components/common/SiteNavbar";
import MusicPlayer from "../components/common/MusicPlayer";

import BabyIntroduction from "../components/baby/BabyIntroduction";
import MuhurthamSection from "../components/ceremony/MuhurthamSection";
import EventsSection from "../components/ceremony/EventsSection";
import NameRevealSection from "../components/reveal/NameRevealSection";
import FamilyGallery from "../components/gallery/FamilyGallery";
import InvitationFooter from "../components/footer/InvitationFooter";


function Home() {
  const [invitationStarted, setInvitationStarted] = useState(false);

  return (
    <div id="top">

      {!invitationStarted ? (
        <OpeningExperience
          onComplete={() => setInvitationStarted(true)}
        />
      ) : (
        <>
          <FloatingFloralBackground />

          <SiteNavbar />

          <main>
            <BabyIntroduction />
            <MuhurthamSection />
            <EventsSection />
            <NameRevealSection />
            <FamilyGallery />
          </main>

          <InvitationFooter />

          <MusicPlayer />
        </>
      )}

    </div>
  );
}

export default Home;