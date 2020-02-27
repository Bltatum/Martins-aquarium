/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"
const contentElement = document.querySelector(".fishList")

const FishList = () => {
    
    const fishObjectArray = useFish()

for (const fishObject of fishObjectArray){

   const fishHTMLRep = Fish(fishObject)
   
    contentElement.innerHTML += fishHTMLRep

}
}
   


export default FishList