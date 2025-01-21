function darkMode() { 
    document.getElementById('pageBody').style="background-color: black";
    document.getElementById('title').style="background-color: rgb(125, 125, 125)";
    document.getElementById('Demonstrations').style="background-color: rgb(125, 125, 125)";
    document.getElementById('Settings').style="background-color: rgb(125, 125, 125)";
    document.getElementById('introBackground').style="color: black; background-color:black";
    document.getElementById('introText').style="color: white";
    document.getElementById('projects').style="color:white; background-color:black; border-color:black"
    // document.getElementsByClassName('head').style="background-color: grey" This refused to work so i gave up
    
}

function defaultMode() { 
    document.getElementById('pageBody').style="background-color: rgb(239, 205, 255);";
    document.getElementById('title').style="background-color: rgb(120, 251, 207)";
    document.getElementById('Demonstrations').style="background-color: rgb(120, 251, 207)";
    document.getElementById('Settings').style="background-color: rgb(120, 251, 207)";
    document.getElementById('introBackground').style="color: white; background-color: white";
    document.getElementById('introText').style="color: black";
    document.getElementById('projects').style="color:black; background-color:white"
}
function lightMode() { 
    document.getElementById('pageBody').style="background-color: white";
    document.getElementById('title').style="background-color: rgb(237, 237, 237)";
    document.getElementById('Demonstrations').style="background-color: rgb(237, 237, 237)";
    document.getElementById('Settings').style="background-color: rgb(237, 237, 237)";
    document.getElementById('introBackground').style="color: white; background-color:white";
    document.getElementById('introText').style="color: black";
    document.getElementById('projects').style="color:black; background-color:white"
}