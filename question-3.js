// Question #3
let userPassword = "abcde";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword){
    
    let passwordLen = userPassword.length;
    let strength;
    
    if(passwordLen<6){
        strength = "Weak";
    }else if(passwordLen>=6 && passwordLen<=10){
        strength = "Medium";
    }else{
        strength = "Strong";
    };
    
    return strength
};


console.log(checkPasswordStrength(userPassword))
