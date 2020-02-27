import initializeDetailButtonEvents from './dialog.js';
initializeDetailButtonEvents();

import { useFish } from './FishDataProvider.js'

const arrayOfAllTheFishObjects = useFish()

for (const fish of arrayOfAllTheFishObjects) {
    console.log(fish)
}




