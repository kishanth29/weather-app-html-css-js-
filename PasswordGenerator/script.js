var pass = document.getElementById("password");
    var message = document.getElementById("message");
    var str = document.getElementById("Strength");

    pass.addEventListener('input',() =>{
        if(pass.value.length > 0){
            msg.style.display = "block";
        }
        else{
            msg.style.display = "none";
        }
        if(pass.value.length < 4){
            str.innerHTML ="Weak";
            pass.style.borderColor ="#ff5925";
            msg.style.color = "#ff5925";

        }
        else if(pass.value.length >= 4 && pass.value.length < 8){
            str.innerHTML = "medium";
            pass.style.borderColor ="yellow";
            msg.style.color = "yellow";
        }
        else if (pass.value.length >= 8){
            str.innerHTML = "Strong";
            pass.style.borderColor ="#26d738";
            msg.style.color = "#26d738";

        }
    })