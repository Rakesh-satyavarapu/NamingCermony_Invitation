import { Heart, MapPin, Share2 } from "lucide-react";
import invitationConfig from "../../config/invitationConfig";

function InvitationFooter() {
  const { venue, contact, parents } = invitationConfig;

  const phone = contact.whatsappNumber.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    "Hello! I would like to confirm my attendance for your little princess's Namakaranam ceremony. Congratulations!"
  );

  const shareInvitation = async () => {
    const data = {
      title: "Namakaranam Invitation",
      text: "Join us to celebrate our little princess's naming ceremony.",
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Invitation link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Unable to share invitation:", error);
      }
    }
  };

  return (
    <footer id="rsvp" className="invitation-footer">

      <div className="section-content text-center">

        <Heart size={35} className="gold-icon" />

        <p className="section-eyebrow">
          ✦ YOU ARE WARMLY INVITED ✦
        </p>

        <h1>With Love & Blessings</h1>

        <p className="footer-message">
          Your presence, prayers and blessings
          will make our celebration truly special.
        </p>

        <div className="footer-family">
          <span>{parents.father}</span>
          <span className="family-ampersand"> & </span>
          <span>{parents.mother}</span>
        </div>

        <div className="footer-actions">

          {phone.length >= 10 && (
            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="footer-button"
            >
              Confirm Attendance
            </a>
          )}

          {venue.mapLink && (
            <a
              href={venue.mapLink}
              target="_blank"
              rel="noreferrer"
              className="footer-button secondary"
            >
              <MapPin size={17} />
              Venue Directions
            </a>
          )}

          <button
            onClick={shareInvitation}
            className="footer-button secondary"
          >
            <Share2 size={17} />
            Share Invitation
          </button>

        </div>

        <div className="footer-bottom">
          Made with <Heart size={14} fill="currentColor" /> for our little princess
        </div>

      </div>

    </footer>
  );
}

export default InvitationFooter;