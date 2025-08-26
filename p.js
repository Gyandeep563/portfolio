let modebtn = document.querySelector('#btn');
let h2 = document.querySelector('h2');
let currmode = "light";

modebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";

        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        modebtn.style.backgroundColor=" black"
        document.querySelector("#nav").style.color = "blue";
        document.querySelector("#profile-pic").style.border = " 5px solid red";


    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        modebtn.style.backgroundColor=" #ffea00ff"
        document.querySelector("#nav").style.color = "red";
        document.querySelector("#profile-pic").style.border = " 5px solid blue";


    }
    console.log(currmode);
});

