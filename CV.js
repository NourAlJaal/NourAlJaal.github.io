let content1 = document.getElementById("links1");

function hello1() {
if (content1.style.display === "none") {
content1.style.display = "block";
} else
content1.style.display = "none"
}

document.getElementById("eksempel1").addEventListener("click", hello1);

let content2 = document.getElementById("links2");

function hello2() {
if (content2.style.display === "none") {
content2.style.display = "block";
} else
content2.style.display = "none"
}

document.getElementById("eksempel2").addEventListener("click", hello2);



