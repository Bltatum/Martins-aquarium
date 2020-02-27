const fishCollection = [
  {
    name: "Harry",
    food: ["Algae"],
    species: "orange clownfish",
    length: "3in",
    location: "caribbean",

 },
 {
    name: "Layla",
    food: ["crustaceans"],
    species: "red wierd fish",
    length: "4in",
    location: "Pacific Ocean",
 },
 {
    name: "Loyd",
    food: ["Small fish"],
    species: "Dolfin",
    length: "5-10ft",
    location: "Gulf of Mexico",
 },
 {
    name: "Izzy",
    food: ["poop"],
    species: "Big forehead",
    length: "5in",
    location: "bahamas",
 }]

 export const useFish = () => {
    return fishCollection.slice()
}
