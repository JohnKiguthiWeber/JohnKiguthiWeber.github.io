function area(){
    let radius = document.getElementById('radin').value;
    let area = Math.PI * radius**2;
    document.getElementById('output').innerHTML = "Area: " + area;
}
function perimiter(){
    let radius = document.getElementById('radin').value;
    let area = 2 * Math.PI * radius;
    document.getElementById('output').innerHTML = "Perimiter: " + area;
}
function volume(){
    let radius = document.getElementById('radin').value;
    let area = 4/3 * Math.PI * radius**3;
    document.getElementById('output').innerHTML = "Volume: " + area;
}
