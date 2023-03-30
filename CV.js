let indhold1 = document.getElementById("links1");

function liste1() {
if (indhold1.style.display === "none") {
indhold1.style.display = "block";
} else
indhold1.style.display = "none"
}

document.getElementById("eksempel1").addEventListener("click", liste1);


let indhold2 = document.getElementById("links2");

function liste2() {
if (indhold2.style.display === "none") {
indhold2.style.display = "block";
} else
indhold2.style.display = "none"
}

document.getElementById("eksempel2").addEventListener("click", liste2);



