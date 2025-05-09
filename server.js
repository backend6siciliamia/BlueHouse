const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Mock Data
const mockPropertiesData = [
  {
    title: "Economy Double Room",
    photos: ["ecdr02.jpg", "ecdr01.jpg"],
    type: "room",
    links: {
      icon: "sharedlink.png",
      href: "http://localhost:3000/beds24/economy_double_room",
    },
    mainImage: "ecdr02.jpg",
    services: [
      { name: "Best for 2 people", icon: "peoples.png" },
      { name: "Queen sized bed", icon: "bed.png" },
      { name: "Shared bathroom", icon: "sharedbathroom.png" },
      { name: "Self service breakfast", icon: "selfservicebreakfast.png" },
      { name: "Budget friendly", icon: "budgetfriendly.png" },
      { name: "Free Fast WiFi", icon: "wifi.png" },
      { name: "Netflix TV", icon: "tv.png" },
    ],
    description:
      "Our economy double rooms are located at 3 of our properties. Facing Valhúsahaedpark, the rooms are equipped with a queen-size bed and Netflix TV...",
    amenities: [
      { name: "Queen sized bed", icon: "kingbed.png" },
      { name: "Bedding provided", icon: "bedding.png" },
      { name: "Shared bathroom", icon: "sharedbathroom.png" },
      { name: "Self check-in anytime", icon: "selfcheckin.png" },
      { name: "Free parking", icon: "freeparking.png" },
      { name: "Self service continental breakfast", icon: "selfbreakfast.png" },
    ],
    price: [
      {
        nameOne: "Non-refundable:",
        valueOne: "124.48",
        nameTwo: "Refundable:",
        valueOne: "134.48",
        icon: "info.png",
      },
    ],
  },
  // Add other rooms here...
];

// Route to serve mock properties data
app.get("/api/beds24", (req, res) => {
  res.json(mockPropertiesData);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
