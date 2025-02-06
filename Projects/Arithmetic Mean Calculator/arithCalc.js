let dataSet = [];

function addValue(){
    let inpVal = document.getElementById('value').value

    if (!(isNaN(inpVal/2))){ // Convert the user input to a number and validate to ensure it is numerical original coad i did -> parseInt(inpVal) % 2 == 0 ||  parseInt(inpVal) % 2 == 1
        dataSet.push(parseFloat(inpVal));
        setMean()
        // console.log(document.getElementById('value').value / 2)
    }
    else{
        console.log(inpVal);
        alert('Invalid input');
    }
}

function removeValue(){
    let inpVal = document.getElementById('value').value;
    if (isNaN(inpVal/2)){
        alert('Not a number');
        return;
    }

    let indValue = dataSet.indexOf(parseFloat(inpVal));
    if (indValue != -1){
        dataSet.splice(indValue, 1);
        setMean()
    }
    else{
        // value not valid
        console.log(indValue, document.getElementById('value').value);
        console.log(dataSet[dataSet.length - 1])
        alert('Value not in dataset');
    }

}

function setMean(){
    let data = '<p>';
    let total = 0;
    for (point of dataSet){
        data += point + ' ';
        total += point;
        // console.log(dataSet);
        // console.log(total);
    }
    data += '</p>';
    document.getElementById('data').innerHTML = data;

    document.getElementById('mean').innerHTML = 'Mean: ' + (total / dataSet.length);
}