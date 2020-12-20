let buttonAlert = document.getElementById("alert");
let buttonSomme = document.getElementById("somme");
let body = document.getElementById("boy");


buttonAlert.addEventListener("click", () => alert("Hello world !"));

buttonSomme.addEventListener("click", () => {
    let div = document.createElement("div");
    let body = document.getElementById("boy");
    div.innerHTML = 5+6;
    body.append(div);
})