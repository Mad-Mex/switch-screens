
const locations = [

    {
      id: 1,
      city: "Ciudad de México",
      country: "México",
      places: [
        {
          hotelName: "Hotel Luxor",
          image: require("../../assets/images/hotel_room.jpg"),
          rating: "4.3",
          description: "Hotel residencial ubicado en la calle Condesa",
          price: "35"
        },
  
        {
          hotelName: "Campiña Dorada",
          image: require("../../assets/images/hotel_outdoor.jpg"),
          rating:"4.5",
          description: "Hotel con servicio de restaurante en el exterior",
          price: "50"
        },
      ]
    },
  

    {
      id: 2,
      city: "Buenos Aires",
      country: "Argentina",
      places: [
        {
          hotelName: "El Escorial",
          image: require("../../assets/images/hotel_room_2.jpg"),
          rating: "4.6",
          description: "Hotel confortable con servicios premium ",
          price: "150"
        },
  
        {
          hotelName: "Le Grand Maison",
          image: require("../../assets/images/wedding_hotel.jpg"),
          rating: "4.5",
          description: "Hotel especializado en bodas y celebraciones",
          price: "90"
        },
      ]
    },
  

    {
      id: 3,
      city: "Nueva York",
      country: "Estados Unidos",
      places: [
        {
          hotelName: "Madison Square Palace",
          image: require("../../assets/images/pool.jpg"),
          rating: "4.2",
          description: "Hotel con piscina en el techo",
          price: "70"
        },
  
        {
          hotelName: "Avenue Seven Inn",
          image: require("../../assets/images/gourmet-restaurant.jpg"),
          rating: "3.9",
          description: "Hotel con restaurante gourmet",
          price: "270"
        }
      ]
    },    
];

export default locations;
  