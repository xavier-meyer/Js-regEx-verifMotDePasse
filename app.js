
const passwordInput = document.getElementById("passWord");

const regFort = /^(?=.{12,}$)(?=.*?[a-z]){1}(?=.*?[A-Z]){1}(?=.*?[0-9]){1}(?=.*\W).*$/;
const regMajuscule = /[A-Z]/;
const regMinuscule = /[a-z]/;
const regNumber = /[0-9]/;
const regCharacter = /\W/;


const avertissement = document.getElementById("avertissement");

passwordInput.addEventListener("input", () => {
    console.log(passwordInput.value);
    avertissement.textContent = "Votre mot de passe est invalide";
    setTimeout(() => {
                avertissement.textContent = "";
            },4000)
    if((regMajuscule.test(passwordInput.value))||(regMinuscule.test(passwordInput.value))){
        avertissement.textContent = "Votre mot de passe est faible";
        setTimeout(() => {
            avertissement.textContent = "";
        },4000)
    }   
        if(regNumber.test(passwordInput.value)){
            avertissement.textContent = "Votre mot de passe est moyen";
            setTimeout(() => {
                avertissement.textContent = "";
            },4000)
        } 
            if(regCharacter.test(passwordInput.value)){
                avertissement.textContent = "Votre mot de passe est fort";
                setTimeout(() => {
                    avertissement.textContent = "";
                },4000) 
            }
                if(regFort.test(passwordInput.value)){
                    avertissement.textContent = "Votre mot de passe est sécurisé";
                    setTimeout(() => {
                        avertissement.textContent = "";
                    },4000) 
                }
})  


