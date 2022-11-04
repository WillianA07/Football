
"use strict";

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",plays:"Kansas City, MO"},
];

window.onload = init;

function init() {
    const footballTeams = document.getElementById("footballTeams");

    let teamLength = teams.length;

    let options = document.createElement("option");
    options.value = "";
    options.innerHTML = "Select a team";
    footballTeams.appendChild(options);
    
    for (let i = 0; i < teamLength; i++) {
        let options = document.createElement("option");
        options.value = teams[i].code;
        options.innerHTML = teams[i].name;
        options.name = teams[i].plays

        footballTeams.appendChild(options)
    }
    document.getElementById("button").onclick = buttonClicked;
}

function buttonClicked() {
    const message = document.getElementById("message");
    let teamLengths = footballTeams.length;

    for (let i = 0; i < teamLengths; i++) {
        if (footballTeams[i].value == footballTeams.value) {
            message.innerHTML = "You selected the " + footballTeams[i].innerHTML + " (" + footballTeams[i].value + ") who play in " + (footballTeams[i].name) + ".";
        }
        else if (footballTeams.value == "") {
            message.innerHTML = "";
        }
    }
    return false;
}