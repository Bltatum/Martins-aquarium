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
    }
}
             // CAN'T TOUCH THIS - END


    // You will be writing code below this line
    
    document.querySelector("#button--harry").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--harry")
            theDialog.showModal()
        }
    )


    document.querySelector("#button--layla").addEventListener(
            "click",
            theClickEvent => {
                const theDialog = document.querySelector("#details--layla")
                theDialog.showModal()
            }
    )

    document.querySelector("#button--loyd").addEventListener(
                "click",
                theClickEvent => {
                    const theDialog = document.querySelector("#details--loyd")
                    theDialog.showModal()
                }
    )

    document.querySelector("#button--izzy").addEventListener(
                "click",
                    theClickEvent => {
                        const theDialog = document.querySelector("#details--izzy")
                        theDialog.showModal()
                    }
    )


    


        export default initializeDetailButtonEvents;