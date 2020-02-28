const fishCollection = [
  {
    name: "Harry",
    image:"https://www.aquariumofpacific.org/images/made/images/uploads/clownfish_530_398_80auto_s.jpg",
    food: ["Algae"],
    species: "orange clownfish",
    length: "3in",
    location: "caribbean",

 },
 {
    name: "Layla",
    image: "https://i.ytimg.com/vi/WQlISC-N5Xw/maxresdefault.jpg",
    food: ["crustaceans"],
    species: "red wierd fish",
    length: "4in",
    location: "Pacific Ocean",
 },
 {
    name: "Loyd",
    image:"https://us.123rf.com/450wm/schan/schan1701/schan170102204/70852171-dolphin-in-the-pool.jpg?ver=6",
    food: ["Small fish"],
    species: "Dolfin",
    length: "5-10ft",
    location: "Gulf of Mexico",
 },
 {
    name: "Izzy",
    image:"https://live.staticflickr.com/7198/6862761536_2c6d830c8c_b.jpg",
    food: ["poop"],
    species: "Big forehead",
    length: "5in",
    location: "bahamas",
 }]

 export const useFish = () => {
    return fishCollection.slice()
}
