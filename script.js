
var container = document.createElement("table");
container.setAttribute("id" , "plate");
document.body.appendChild(container)



for (let i = 0; i < 10; i++) {
    var tr = document.createElement("tr")
    container.appendChild(tr)
    for (let j = 0; j < 10; j++) {
        var td = document.createElement("td")
        tr.appendChild(td)
        if (i % 2 == j % 2) {
            td.style.backgroundColor = ("white")
        }
        else {
            if (i < 4) {  
            var redpion = document.createElement("div")
            redpion.setAttribute("id", "red")
            td.appendChild(redpion)
            } if (i > 5){
                var whitepion = document.createElement("div")
                whitepion.setAttribute("id", "white")
                td.appendChild(whitepion)
            }

            tr.style.backgroundColor = ("black")
        }
 
    } 
}