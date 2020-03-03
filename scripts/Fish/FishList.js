/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"
import {Fish} from "./Fish.js"

const contentElement = document.querySelector(".fishList")

export const FishList = () => {
  
     let fishObjectArray = mostHolyFish()

for (const fishObject of fishObjectArray){
     const fishHTMLRep = Fish(fishObject)
     contentElement.innerHTML += fishHTMLRep
 }
 fishObjectArray = soldierFish()

for (const fishObject of fishObjectArray){
     const fishHTMLRep = Fish(fishObject)
     contentElement.innerHTML += fishHTMLRep
 }
   fishObjectArray = nonHolyFish()

for (const fishObject of fishObjectArray){
     const fishHTMLRep = Fish(fishObject)
     contentElement.innerHTML += fishHTMLRep
    }

}
   