const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--Cancun").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Cancun")
            theDialog.showModal()
        }
    )



document.querySelector("#button--gallatin").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--gallatin")
        theDialog.showModal()
    }
)
document.querySelector("#button--puerto").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--puerto")
        theDialog.showModal()
    }
)

document.querySelector("#button--Bahamas").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--Bahamas")
        theDialog.showModal()
    }
)
}
}

export default initializeDetailButtonEvents