const fishCollection = [
  {
    name: "Harry",
    image:"https://lh3.googleusercontent.com/proxy/Piz8vwmpvywfBwhw3hlhM371dJyNWJqBwLoeSHA3zdqu3s8AtQQTDv1CAZMHsLzfDMnlVOF9pZfhyw1k-KeSSFy8ju3qG4I",
    food: ["Algae"],
    species: "orange clownfish",
    length: "3in",
    location: "caribbean",

 },
 {
    name: "Layla",
    image: "https://lh3.googleusercontent.com/proxy/Piz8vwmpvywfBwhw3hlhM371dJyNWJqBwLoeSHA3zdqu3s8AtQQTDv1CAZMHsLzfDMnlVOF9pZfhyw1k-KeSSFy8ju3qG4I",
    food: ["crustaceans"],
    species: "red wierd fish",
    length: "4in",
    location: "Pacific Ocean",
 },
 {
    name: "Loyd",
    image:"https://lh3.googleusercontent.com/proxy/Piz8vwmpvywfBwhw3hlhM371dJyNWJqBwLoeSHA3zdqu3s8AtQQTDv1CAZMHsLzfDMnlVOF9pZfhyw1k-KeSSFy8ju3qG4I",
    food: ["Small fish"],
    species: "Dolfin",
    length: "5-10ft",
    location: "Gulf of Mexico",
 },
 {
    name: "Izzy",
    image:"https://lh3.googleusercontent.com/proxy/Piz8vwmpvywfBwhw3hlhM371dJyNWJqBwLoeSHA3zdqu3s8AtQQTDv1CAZMHsLzfDMnlVOF9pZfhyw1k-KeSSFy8ju3qG4I",
    food: ["poop"],
    species: "Big forehead",
    length: "5in",
    location: "bahamas",
 }]

 export const useFish = () => {
    return fishCollection.slice()
}
