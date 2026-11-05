
const invitationConfig = {
  // Ceremony information
  event: {
  title: "Our Little Princess",
  subtitle: "Namakaranam Ceremony",
  date: "2026-11-11",
  dateISO: "2026-11-11T10:00:00+05:30",
  time: "10:00 AM onwards",
  timezone: "Asia/Kolkata"
},

  // Baby information
  baby: {
    displayName: "Our Little Princess",
    revealName: "Choksha",
    photo: "/images/baby/kodalu.jpeg",
    message:
      "A tiny bundle of joy, filling our lives with endless love, happiness and beautiful memories."
  },

  // Parents information
  parents: {
    father: "Vaddadi Satish",
    mother: "Vaddadi Ramya"
  },

  // Ceremony venue
  venue: {
    name: "Sri vasavi kanyaka parameshwari function hall",
    address: "Police Station Road, Rajam, Andhra Pradesh – 532127, India",
    mapLink: "https://www.google.com/maps/place/Vasavi+Kanyakaparameswari+Temple/@18.4484174,83.6537023,17z/data=!4m6!3m5!1s0x3a3c76c2719b0ea7:0x9f67a17cb0e4d85f!8m2!3d18.4482713!4d83.6566935!16s%2Fg%2F11dz_y_z86?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D"
  },

  // Lord Ganesha
  ganesha: {
    image: "/images/decorations/ganesha.jpg",
    mantra: "ఓం శ్రీ గణేశాయ నమః"
  },

  // Background music
  music: {
    source: "/audio/song.mpeg"
  },

  // Name reveal configuration
  reveal: {
    dateISO: "2026-11-11T11:11:00+05:30"
  },

  schedule: [
  {
    time: "10:00 AM",
    title: "Welcome & Blessings",
    description: "Welcoming family members and guests"
  },
  {
    time: "10:30 AM",
    title: "Sri Rudra Abhishekam",
    description: "Offering sacred abhishekam to Lord Shiva and seeking divine blessings"
  },
  {
    time: "11:30 AM",
    title: "Namakaranam Ceremony",
    description: "The auspicious naming ceremony of our little princess"
  },
  {
    time: "12:00 PM",
    title: "Sri Satyanarayana Swamy Vratham",
    description: "Offering prayers and seeking divine blessings for our family"
  },
  {
    time: "12:30 PM onwards",
    title: "Lunch & Celebration",
    description: "Sharing a joyful feast with family and friends"
  }
],

  // Baby and family gallery
  gallery: [
    "/images/baby/kodalu.jpeg",
    "/images/baby/1.jpeg",
    "/images/baby/one.jpeg",
    "/images/baby/two.jpeg",
    "/images/baby/three.jpeg",
    "/images/baby/four.jpeg"
  ],

  // RSVP and contact information
  contact: {
    whatsappNumber: "91-6300211683"
  }
};

export default invitationConfig;
