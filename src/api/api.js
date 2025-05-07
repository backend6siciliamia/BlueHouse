import axios from "axios";
// import qs from "qs";

const REACT_APP_API_URL = "http://localhost:3001/api";
// const REACT_APP_API_URL = "https://beds24.com/api/ajax/";

export const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

//This is a test of the site's access to the existing https://beds24.com/ - access rights from http://localhost:3000/ are not permitted.
// export const axiosGetRoomsData = async () => {
//   const params = qs.stringify({
//     ci: "2025-2-1", // Check-in date
//     co: "2025-2-5", // Check-out date
//     na: "undefined", // Number of adults
//     nc: "undefined", // Number of children
//     pt: "08", // Property type
//     la: "en", // Language
//     cu: "EUR", // Currency
//   });

//   const { data } = await instance.post("/getroomprice.php", params, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//   });

//   return data;
// };

export const axiosGetRoomsData = async () => {
  const { data } = await instance.get("/rooms");
  return data;
};

export const axiosCreateNewBooking = async (bookingData) => {
  const { data } = await instance.post("/bookings", bookingData);
  return data;
};

export const axiosGetAvailableRooms = async (userData) => {
  const { data } = await instance.get("/availability", {
    params: userData,
  });
  return data;
};

export const axiosCreateStripeSession = async (userData) => {
  const { data } = await instance.post("/create-stripe-session", userData);
  return data;
};

// Get all properties from backend
export const axiosGetProperties = async () => {
  console.log("::STARTOI GET_PROPERTIES::")
  // const { data } = await instance.get("/properties");
  // return data;
  return [
    {
      title: "Economy Double Room",
      photos: [ecdr02, ecdr01],
      type: "room",
      links: {
        icon: sharedlink,
        href: `${BASE_URL}/beds24/economy_double_room`,
      },
      // mainImage: main01,
      mainImage: ecdr02,
      services: [
        {
          name: "Best for 2 people",
          icon: peoples,
        },
        {
          name: "Queen sized bed",
          icon: bed,
        },
        {
          name: "Shared bathroom",
          icon: sharedbathroom,
        },
        {
          name: "Self service breakfast",
          icon: selfservicebreakfast,
        },
        {
          name: "Budget friendly",
          icon: budgetfriendly,
        },
        {
          name: "Free Fast WiFi",
          icon: wifi,
        },
        {
          name: "Netflix TV",
          icon: tv,
        },
      ],
      description:
        "Our economy double rooms are located at 3 of our properties. Facing Valhúsahaedpark, the rooms are equipped with a queen-size bed and Netflix TV. All offer shared bathroom and kitchenfacilities. Continental self-service breakfast with homemade bread is included in the room rate. House andtype of bed can not be guaranteed.",
      amenities: [
        {
          name: "Queen sized bed",
          icon: kingbed,
        },
        {
          name: "Bedding provided",
          icon: bedding,
        },
        {
          name: "Shared bathroom",
          icon: sharedbathroom,
        },
        {
          name: "Self check-in anytime",
          icon: selfcheckin,
        },
        {
          name: "Free parking",
          icon: freeparking,
        },
        {
          name: "Self service continental breakfast",
          icon: selfbreakfast,
        },
        {
          name: "Kitchen facilities",
          icon: kitchenfacilities,
        },
        {
          name: "Ironing facilities",
          icon: ironingfacilities,
        },
        {
          name: "Garden view",
          icon: gardenview,
        },
        {
          name: "Sea view",
          icon: seaview,
        },
        {
          name: "Television with Netflix",
          icon: tv,
        },
      ],
      price: [
        {
          nameOne: "Non-refundable:",
          valueOne: "124.48",
          nameTwo: "Refundable:",
          valueOne: "134.48",
          icon: info,
        },
      ],
    },
    //Double/Twin Room
    {
      type: "room",
      photos: [dtr03, dtr01, dtr02, dtr04, dtr05],
      title: "Double/Twin Room",
      links: {
        icon: sharedlink,
        href: `${BASE_URL}/beds24/double_twin_room`,
      },
      // mainImage: main02,
      mainImage: dtr03,
      services: [
        {
          name: "Best for 2 people",
          icon: peoples,
        },
        {
          name: "King/Twin Sized Bed",
          icon: bed,
        },
        {
          name: "Shared bathroom",
          icon: sharedbathroom,
        },
        {
          name: "Self service breakfast",
          icon: selfservicebreakfast,
        },
        {
          name: "Budget friendly",
          icon: budgetfriendly,
        },
        {
          name: "Seaside view",
          icon: seaview,
        },
        {
          name: "Netflix TV",
          icon: tv,
        },
        {
          name: "Free Fast WiFi",
          icon: wifi,
        },
      ],
      description:
        "Our double/twin rooms are located at 3 of our properties. Facing the seaside, the rooms areequipped with a king-size or twin bed and Netflix TV. All offer shared bathroom and kitchen facilities. Continentalself-service breakfast with homemade bread is included in the room rate. House and type of bed can not beguaranteed.",
      amenities: [
        {
          name: "Queen sized bed",
          icon: kingbed,
        },
        {
          name: "Shared bathroom",
          icon: sharedbathroom,
        },
        {
          name: "Self service continental breakfast",
          icon: selfbreakfast,
        },
        {
          name: "Television with Netflix",
          icon: tv,
        },
        {
          name: "Bedding provided",
          icon: bedding,
        },
        {
          name: "Kitchen facilities",
          icon: kitchenfacilities,
        },
        {
          name: "Self check-in anytime",
          icon: selfcheckin,
        },
        {
          name: "Free parking",
          icon: freeparking,
        },
      ],
      price: [
        {
          nameOne: "Non-refundable:",
          valueOne: "124.48",
          nameTwo: "Refundable:",
          valueOne: "134.48",
          icon: info,
        },
      ],
    },
    //Triple Room
    {
      title: "Triple Room",
      photos: [tr03, tr04, tr05],
      type: "room",
      links: {
        icon: sharedlink,
        href: `${BASE_URL}/beds24/triple_room`,
      },
      // mainImage: main03,
      mainImage: tr03,
      services: [
        {
          name: "Best for 3 people",
          icon: peoples,
        },
        {
          name: "Queen/Twin Beds",
          icon: bed,
        },
        {
          name: "Shared bathroom",
          icon: sharedbathroom,
        },
        {
          name: "Self service breakfast",
          icon: selfservicebreakfast,
        },
        {
          name: "Budget friendly",
          icon: budgetfriendly,
        },
        {
          name: "Netflix TV",
          icon: tv,
        },
        {
          name: "Free Fast WiFi",
          icon: wifi,
        },
      ],
      description:
        "Our triple rooms are located both in the Blue House and the Yellow House. The rooms areequipped with a king-size/twin bed and Netflix-TV. Extra beds are queensized sofabeds. Bathroom and kitchenfacilities are shared. Continental self-service breakfast with homemade bread is included.",
      amenities: [
        {
          name: "Queen sized bed",
          icon: kingbed,
        },
        {
          name: "Shared bathroom",
          icon: sharedbathroom,
        },
        {
          name: "Self service continental breakfast",
          icon: selfbreakfast,
        },
        {
          name: "Television with Netflix",
          icon: tv,
        },
        {
          name: "Bedding provided",
          icon: bedding,
        },
        {
          name: "Kitchen facilities",
          icon: kitchenfacilities,
        },
        {
          name: "Self check-in anytime",
          icon: selfcheckin,
        },
        {
          name: "Free parking",
          icon: freeparking,
        },
      ],
      price: [
        {
          nameOne: "Non-refundable:",
          valueOne: "124.48",
          nameTwo: "Refundable:",
          valueOne: "134.48",
          icon: info,
        },
      ],
    },
    //Quadruple Room
    {
      type: "room",
      photos: [qr03, qr04, qr05],
      title: "Quadruple Room",
      links: {
        icon: sharedlink,
        href: `${BASE_URL}/beds24/Quadruple_room`,
      },
      // mainImage: main04,
      mainImage: qr03,
      services: [
        {
          name: "King Sized Bed + Sofa Bed",
          icon: bed,
        },
        {
          name: "Shared bathroom",
          icon: sharedbathroom,
        },
        {
          name: "Cereal breakfast",
          icon: cereal,
        },
        {
          name: "Budget friendly",
          icon: budgetfriendly,
        },
        {
          name: "Netflix TV",
          icon: tv,
        },
        {
          name: "Free Fast WiFi",
          icon: wifi,
        },
      ],
      description:
        "Our quadruple rooms are located both in the Blue House and the Yellow House. Therooms are equipped with a king-size/twin bed and Netflix-TV. Extra beds are queensized sofabeds. Bathroom andkitchen facilities are shared. Quadruple room with private bathroom and living room can be booked at surcharge uponavailability. Cereal Breakfast at the apartment is included in the rate. Continental self-service breakfast with homemadebread can be booked at surcharge.",
      amenities: [
        {
          name: "King size bed + Sofa bed",
          icon: kingbed,
        },
        {
          name: "Shared bathroom",
          icon: sharedbathroom,
        },
        {
          name: "Self service continental breakfast",
          icon: selfbreakfast,
        },
        {
          name: "Television with Netflix",
          icon: tv,
        },
        {
          name: "Bedding provided",
          icon: bedding,
        },
        {
          name: "Cereal breakfast included",
          icon: cereal,
        },
        {
          name: "Self check-in anytime",
          icon: selfcheckin,
        },
        {
          name: "Free parking",
          icon: freeparking,
        },
      ],
    },
    //Family Room
    {
      type: "house",
      photos: [fr05, fr01, fr03, fr04, fr06, fr07, fr08],
      title: "Family Room",
      links: {
        icon: sharedlink,
        href: `${BASE_URL}/beds24/family_room`,
      },
      // mainImage: main05,
      mainImage: fr05,
      services: [
        {
          name: "Seaside view",
          icon: seaview,
        },
        {
          name: "Queen sized bed + Sofa",
          icon: bed,
        },
        {
          name: "Private bathroom",
          icon: privatebathroom,
        },
        {
          name: "Priavte dinning area",
          icon: privatedinning,
        },
        {
          name: "Self service breakfast",
          icon: selfbreakfast,
        },
        {
          name: "Budget friendly",
          icon: budgetfriendly,
        },
        {
          name: "Netflix TV",
          icon: tv,
        },
        {
          name: "Free Fast WiFi",
          icon: wifi,
        },
      ],
      description:
        "Our Family room is located at the Yellow House and offers an incredible view to the seaside andlighthouse. It is extremely popular for northern lights hunters in the winter. The family room is equipped with NetflixTV, a King size bed and sofa bed in seperate rooms. Bathroom, dining area and terrace are private. Kitchen facilitiesare shared. Continental self-service breakfast with homemade bread at the Blue House is included in the room rate.",
      amenities: [
        {
          name: "Queen sized bed + Sofa",
          icon: kingbed,
        },
        {
          name: "Private bathroom",
          icon: privatebathroom,
        },
        {
          name: "Private dinning area",
          icon: privatedinning,
        },
        {
          name: "Self service breakfast",
          icon: selfbreakfast,
        },
        {
          name: "Television with Netflix",
          icon: tv,
        },
        {
          name: "Bedding provided",
          icon: bedding,
        },
        {
          name: "Shared Kitchen facilities",
          icon: kitchenfacilities,
        },
        {
          name: "Self check-in anytime",
          icon: selfcheckin,
        },
        {
          name: "Free parking",
          icon: freeparking,
        },
      ],
    },
    //Two Bedroom Apartment
    {
      type: "house",
      photos: [
        tba03,
        tba01,
        tba02,
        tba04,
        tba05,
        tba06,
        tba07,
        tba08,
        tba09,
        tba10,
        tba11,
        tba12,
        tba13,
        tba14,
        tba15,
        tba16,
        tba17,
      ],
      title: "Two Bedroom Apartment",
      links: {
        icon: sharedlink,
        href: `${BASE_URL}/beds24/two_bedroom_apartment`,
      },
      // mainImage: main06,
      mainImage: tba03,
      services: [
        {
          name: "Garden view",
          icon: gardenview,
        },
        {
          name: "2 Bedrooms + 1 Sofa",
          icon: bed,
        },
        {
          name: "Private kitchen",
          icon: kitchen,
        },
        {
          name: "Private bathroom",
          icon: privatebathroom,
        },
        {
          name: "Cereal breakfast",
          icon: cereal,
        },
        {
          name: "Budget friendly",
          icon: budgetfriendly,
        },
        {
          name: "Netflix TV",
          icon: tv,
        },
        {
          name: "Free Fast WiFi",
          icon: wifi,
        },
      ],
      description:
        "Our two-bedroom aparment is ideal for families and groups. Located at the garden ofthe Blue House it is popular for northern lights in the winter. The Apartment offers two bedrooms with double or twinbeds and Netflix-TV. The sofabed is located in the living room and bathroom, kitchenette, terrace and dining area areprivate. Cereal Breakfast at the apartment is included in the rate. Continental self-service breakfast with homemadebread can be booked at surcharge.",
      amenities: [
        {
          name: "2 Bedrooms + 1 Sofa",
          icon: kingbed,
        },
        {
          name: "Private bathroom",
          icon: privatebathroom,
        },
        {
          name: "Cereal breakfast",
          icon: cereal,
        },
        {
          name: "Television with Netflix",
          icon: tv,
        },
        {
          name: "Bedding provided",
          icon: bedding,
        },
        {
          name: "Private Kitchenette",
          icon: kitchenfacilities,
        },
        {
          name: "Self check-in anytime",
          icon: selfcheckin,
        },
        {
          name: "Free parking",
          icon: freeparking,
        },
        {
          name: "Up to 6 People",
          icon: uptoseex,
        },
      ],
    },
    //Three Bedroom Apartment
    {
      type: "house",
      photos: [
        trba01,
        trba02,
        trba03,
        trba04,
        trba05,
        trba06,
        trba07,
        trba08,
        trba09,
      ],
      title: "Three Bedroom Apartment",
      links: {
        icon: sharedlink,
        href: `${BASE_URL}/beds24/Three_bedroom_apartment`,
      },
      // mainImage: main07,
      mainImage: trba01,
      services: [
        {
          name: "Best for 10 people",
          icon: peoples,
        },
        {
          name: "3 Bedrooms + 3 Sofa",
          icon: bed,
        },
        {
          name: "Private kitchen",
          icon: kitchen,
        },
        {
          name: "2 Private bathroom",
          icon: privatebathroom,
        },
        {
          name: "Cereal breakfast",
          icon: cereal,
        },
        {
          name: "Budget friendly",
          icon: budgetfriendly,
        },
        {
          name: "Netflix TV",
          icon: tv,
        },
        {
          name: "Free Fast WiFi",
          icon: wifi,
        },
      ],
      description:
        "Our largest apartment is located at the Yellow House and offers an incredible view tothe seaside and lighthouse. It is extremely popular for northern lights hunters in the winter. Up to 12 Adults (werecommend 9) can stay there and we have a variety of twin, Kingsize and sofabeds. Netflix-TV is in 3 rooms.Bathroom, kitchen, terrace and dining area are private. Cereal Breakfast at the apartment is included in the rate.Continental self-service breakfast with homemade bread can be booked at surcharge.",
      amenities: [
        {
          name: "3 Bedrooms + 3 Sofa",
          icon: kingbed,
        },
        {
          name: "2 Private bathroom",
          icon: privatebathroom,
        },
        {
          name: "Cereal breakfast",
          icon: cereal,
        },
        {
          name: "Television with Netflix",
          icon: tv,
        },
        {
          name: "Bedding provided",
          icon: bedding,
        },
        {
          name: "Private Kitchen",
          icon: kitchenfacilities,
        },
        {
          name: "Self check-in anytime",
          icon: selfcheckin,
        },
        {
          name: "Up to 12 People (10 recomended)",
          icon: peoples,
        },
        {
          name: "Free parking",
          icon: freeparking,
        },
      ],
    },
  ];
};