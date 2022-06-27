
const passwordInput = document.getElementById("passWord");

const liMin = document.getElementById("li-min");
const liMaj = document.getElementById("li-maj");
const liNumber = document.getElementById("li-number");
const liCaracterSpecial = document.getElementById("li-caracterSpecial");
const liCaractersTotal = document.getElementById("li-caractersTotal");

const avertissement = document.getElementById("avertissement");

const regFort = /^(?=.{12,}$)(?=.*?[a-z]){1}(?=.*?[A-Z]){1}(?=.*?[0-9]){1}(?=.*\W).*$/;
const regMajuscule = /[A-Z]/;
const regMinuscule = /[a-z]/;
const regNumber = /[0-9]/;
const regCharacter = /\W/;

passwordInput.addEventListener("input", () => {
    console.log(passwordInput.value);
    avertissement.textContent = "Votre mot de passe est invalide";
    if((regMajuscule.test(passwordInput.value))){
        avertissement.textContent = "Votre mot de passe est faible";
        liMaj.style.color = "orange";
    }    
        if(regMinuscule.test(passwordInput.value)){
            avertissement.textContent = "Votre mot de passe est faible";
            liMin.style.color = "orange";
        }    
            if(regNumber.test(passwordInput.value)){
                avertissement.textContent = "Votre mot de passe est moyen";
                liNumber.style.color = "orange";
            }    
                if(regCharacter.test(passwordInput.value)){
                    avertissement.textContent = "Votre mot de passe est fort";
                    liCaracterSpecial.style.color = "orange";
                }    
                    if(regFort.test(passwordInput.value)){
                        avertissement.textContent = "Votre mot de passe est sécurisé";
                        liCaractersTotal.style.color = "orange";
                    }
           
})  


