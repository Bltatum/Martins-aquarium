
//this is importing the function from location data provider.
import { thisIsAFunctionToExportACopyOfMyLocationCollection } from "./LocationDataProvider.js"
//this is importing the HTML representation from loactions.
import thisFunctionMakesAnHTMLRepOfLocationObject from "./Location.js"

//This variable is going to search for data located in the element with class= locations.
const targetElement = document.querySelector(".locations")

//This function will iterate through the copy of the location collection array
const thisFunctionIteratesThroughTheHTMLrep = () => {
    //below is assigning the copy of location function to a variable so it can be iterated through.
    const locationObjectArray = thisIsAFunctionToExportACopyOfMyLocationCollection()
        //for of loop to iterate.
for (const locationObject of locationObjectArray){
// as this iterates each object of the array it passes an argument(locations object)-
//to the function that returns a string of html rep. it then stores the return value to a variable.
   const locationHTMLRep = thisFunctionMakesAnHTMLRepOfLocationObject(locationObject)
  //this targets the element and places the variables value inside of it
  //  the += takes whats already there and then adds to it as it iterates through the array.
    targetElement.innerHTML += locationHTMLRep
}
}
//This is exporting the function to main.js.
   export default thisFunctionIteratesThroughTheHTMLrep

