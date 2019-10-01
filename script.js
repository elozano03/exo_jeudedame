
var container = document.createElement("table");
container.setAttribute("id" , "plate");
document.body.appendChild(container)

for (let i = 0; i < 10; i++) {
    var horizontal = document.createElement("tr")
    container.appendChild(horizontal)
    for (let j = 0; j < 10; j++) {
        var vertical = document.createElement("td")
        horizontal.appendChild(vertical)
        if (i % 2 == j % 2) {
            vertical.style.backgroundColor = ("white")
        }
        else {
            horizontal.style.backgroundColor = ("black")
        }
 
        
    }
    
}
    

