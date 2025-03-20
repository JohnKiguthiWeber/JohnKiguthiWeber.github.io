document.getElementById('submit').addEventListener('click', function() {
    let everything = [];

    everything.push(antiAttack(document.getElementById('name').value));
    everything.push(antiAttack(document.getElementById('Phonenumber').value));
    everything.push(antiAttack(document.getElementById('username').value));
    everything.push(antiAttack(document.getElementById('password').value));
    everything.push(antiAttack(document.getElementById('comment').value));

    console.log(everything);

})


function antiAttack(userInput){
    return userInput.replace(/&(?!amp;)/g,'&#38;').replace(/</g,'&lt;').replace(/>/g,'&#62;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');;
}


document.getElementById('password').addEventListener("input", function() {
    let password = this.value;
    const misssing = [];

    if (password.length < 8)
        misssing.push("8-character minimum")

    if(!(/[a-z]/.test(password)))
        misssing.push("lower-case letter")
    if(!(/[A-Z]/.test(password)))
        misssing.push("upper-case letter")
    if(!(/[0-9]/.test(password)))
        misssing.push("number")
    if(!(/[!@#$%^&*() ]/.test(password)))
        misssing.push("Special charachter !@#$%^&*() ")

    let output = "";

    if (misssing.length > 0){
        output = "<strong>Password requires: </strong>";
        for (let i = 0; i < misssing.length - 1; i++){
            output += misssing[i] + ", ";					
        }
        output += misssing[misssing.length - 1];
    }

    let strength;
    let color;
    if (misssing.length === 0) {
        strength = "strong";
        color = "green";
        if (password.length > 12){
            strength = "extremely strong";
            color = "purple";
        }
    }
    else if (misssing.length < 4){
        strength = "medium";
        color = "orange";
    }
    else {
        strength = "weak";
        color = "red";
    }

    output = "Password strength: <span style ='color: " + color + "'>" + strength + "</span><br> " + output;

    document.getElementById('passwordCheck').innerHTML = output;
})

document.getElementById('username').addEventListener("input", function() {
    let username = this.value;
    // console.log(username);

    let misssing = [];
    let output = [];

    for (let char of username){
        if (!(/[a-zA-Z0-9_]/.test(char))){
            // console.log(char);
            misssing.push(char);
        }
    }

    if (misssing.length > 0){
        output = "<strong>Usernames cannot contain: </strong>";
        for (let i = 0; i < misssing.length - 1; i++){
            output += misssing[i] + "  ";					
        }
        output += misssing[misssing.length - 1];
        output += "<p> Usernames can only contain: letters, numnbers, and underscores. </p>";
    }
    

    document.getElementById('userCheck').innerHTML = output;
})

