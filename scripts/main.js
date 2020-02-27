import initializeDetailButtonEvents from './Fish/dialog.js'

import { useFish } from './Fish/FishDataProvider.js'

import FishList from './Fish/FishList.js'


initializeDetailButtonEvents()


const arrayOfAllTheFishObjects = useFish()

for (const currentFishObject of arrayOfAllTheFishObjects) {
    console.log(currentFishObject)
}


FishList()