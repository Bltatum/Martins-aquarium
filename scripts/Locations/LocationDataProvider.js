//This is an object of data for locations

const locationCollection = [
{
    name: "Cancun, Mexico",
    image:"https://expertvagabond.com/wp-content/uploads/things-to-do-cancun-guide.jpg",
    info: "Cancún is a city in southeast Mexico on the northeast coast of the Yucatán Peninsula in the Mexican state of Quintana Roo."
},
{
    name: "Gallatin, Tn",
    image:"https://www.gallatintn.gov/ImageRepository/Document?documentID=69",
    info: "Gallatin is a city in and the county seat of Sumner County, Tennessee. The population was 30,278 at the 2010 census and 40,457 in 2018.",
},
{
    name: "Puerto Rico",
    image:"https://www.discoverpuertorico.com/sites/default/files/styles/small_horizontal/public/2019-01/east-region-icacos-island-fajardo.jpg?itok=hOx0GlDR",
    info: "Puerto Rico (Spanish for Rich Port; abbreviated PR), officially the Commonwealth of Puerto Rico (Spanish: Estado Libre Asociado de Puerto Rico, lit.",
},
{
    name: "Bahamas",
    image:"https://explore-us-uploads-2.imgix.net/wp-content/uploads/2017/12/1358DU-header_bahamas_1-original.jpg?auto=format&crop=entropy&fit=crop&h=350&q=25&w=412",
    info: "The Bahamas known officially as the Commonwealth of The Bahamas, is a country within the Lucayan Archipelago in the West Indies.",
}
]

//This is exporting to LocationList
export const thisIsAFunctionToExportACopyOfMyLocationCollection = () => {
    return locationCollection.slice()
}



