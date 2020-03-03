const fishCollection = [
  {
    name: "Harry",
    image:"https://www.aquariumofpacific.org/images/made/images/uploads/clownfish_530_398_80auto_s.jpg",
    food: ["Algae"],
    species: "orange clownfish",
    length: 3,
    location: "caribbean",

 },
 {
    name: "Layla",
    image: "https://i.ytimg.com/vi/WQlISC-N5Xw/maxresdefault.jpg",
    food: ["crustaceans"],
    species: "red wierd fish",
    length: 6,
    location: "Pacific Ocean",
 },
 {
    name: "Loyd",
    image:"https://us.123rf.com/450wm/schan/schan1701/schan170102204/70852171-dolphin-in-the-pool.jpg?ver=6",
    food: ["Small fish"],
    species: "Dolfin",
    length: 10,
    location: "Gulf of Mexico",
 },
 {
    name: "Izzy",
    image:"https://live.staticflickr.com/7198/6862761536_2c6d830c8c_b.jpg",
    food: ["poop"],
    species: "Big forehead",
    length: 4,
    location: "bahamas",
 }]

 

 export const useFish = () => {
     return fishCollection.slice()
 }

export const mostHolyFish =() => {
   const holyFish = []
   for (const fish of fishCollection) {
      if(fish.length % 3 === 0)
    holyFish.push(fish)
   }
return holyFish
}

export const soldierFish =() => {
   const soldiers = []
   for (const fish of fishCollection) {
    if(fish.length % 5 ===0)
   soldiers.push(fish)
   }
   return soldiers 
}

export const nonHolyFish =() => {
   const regularFish = []
   for (const fish of fishCollection) {
      if( fish.length % 3 !==0 && fish.length % 5 !== 0 )
      regularFish.push(fish)
   }
   return regularFish
 }
