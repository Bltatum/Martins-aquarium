
//This function creates an HTML representation of the location object.
const thisFunctionMakesAnHTMLRepOfLocationObject= (location) =>{
    return `
    <div class="city">
        <figure>
            <img class="city__image"
                src="${location.image}">
           <figcaption>${location.name}</figcaption>
        
       
            <button id="button--${location.name}">Details</button>
        
    
        <dialog class="dialog--city" id="details--${location.name}">
            <div class="details">
                ${location.info}
            </div>
            <button class="button--close">Close Dialog</button>
        </dialog>
        </figure>
    </div> 
    `
}
// This exports the HTML representation to locations list.
export default thisFunctionMakesAnHTMLRepOfLocationObject