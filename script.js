const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted"){
            const notification = new Notification("Example",
            {
                body: "this is a notification",
                data: {hello: "world"},
                // icon: "name of the image",
                tag: "notifications won't be stacked ",


            
             })

             notification.addEventListener("error", e => {
                alert("error")
             })
        }
    })
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden"){
        const leaveDate = new Date()
        inetrval = setInterval(() => {
            notification = new Notification("YOU HAVE LEFT THE WEBPAGE", {
                body: `you've been gone for ${Math.round(
                    (new Date() - leaveDate) / 1000
                )} seconds` ,
                tag: "come back",
                
        })

       
        }, 100)
    } else{
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }
})