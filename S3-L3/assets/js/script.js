function addTask(){
    let task = document.querySelector("#task")
    let list = document.querySelector("#list")
    let elementList = document.createElement("li")

    elementList.innerText = task.value
    
    let icon = document.createElement("icon")
    icon.className = "fas fa-eraser"
    icon.id = "icon"

    /* let dateText = document.createElement("p")
    let date = new Date()
    let dateNow = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "   " + date.getHours() + ":" + date.getMinutes()
    dateText.innerText = dateNow
    dateText.className = "extra" 
    elementList.appendChild(dateText)*/

    elementList.appendChild(icon)

    list.appendChild(elementList)

    resetForm(task)
    function resetForm(task){
        task.value = ""
    }

    elementList.addEventListener("click", function() {
        if (elementList.style.textDecoration == "line-through") {
            elementList.style.textDecoration = "none"
        } else {
            elementList.style.textDecoration = "line-through"
        }
    })

    icon.addEventListener("click", function() {
    elementList.remove()
    } )
}

