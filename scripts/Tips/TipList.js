import Tips from "./Tip.js"
import { UseTips } from "./TipDataProvider.js"


const targetElement = document.querySelector(".tips")

const tipList = () => {

    const tipsObjectArray = UseTips()
    
    for (const tipObject of tipsObjectArray) {
        
        const tipsObjectArray = Tips(tipObject)
        
        targetElement.innerHTML += tipsObjectArray
    }
}
export default tipList