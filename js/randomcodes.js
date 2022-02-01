let code = '';
let getCode = '';
let btnValue;
let str = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789@#$';
let codebox = document.getElementById("codeentered");
let submitBtn = document.getElementById("submit")

// Function declaration
let generateCode = () => {

    for (let i = 0; i < 8; i++) {
        let char = Math.floor(Math.random() * str.length);
        code += str.charAt(char);
    };
    return code;
};

let disableButton = (btnValue) => {
    submitBtn.disabled = btnValue;
    
    if (btnValue == true){
        submitBtn.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        submitBtn.style.color = "rgba(255, 255, 255, 0.5)";
        console.log(btnValue);
    } else if (btnValue == false) {
        submitBtn.style.backgroundColor = "rgba(73, 119, 209, 1)";
        submitBtn.style.color = "rgba(255, 255, 255, 1)";
        console.log(btnValue);
    };
};

let evaluateCode = () => {
    getCode = codebox.value;
    let charset1 = getCode.trim();
    let charset2 = code.trim();
    if (charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);
    } else {
        disableButton(true);
    };
};

// Function Execution
// Generate random code
document.getElementById("codes").innerHTML = generateCode();
// Check if code is entered.
codebox.addEventListener("input", evaluateCode);