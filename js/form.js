document.getElementById("contact-type").addEventListener("change", function() {
    let value = document.getElementById("contact-type").value
    if(value == "email"){
        document.getElementById("contact-method").innerHTML = "<label>Enter your Email:</label><input type='email' id='email-input' name='email' placeholder='johndoe@gmail.com'>"
    } else if (value == "phone"){
        document.getElementById("contact-method").innerHTML = "<label>Enter your Phone:</label><input type='phone' id='phone-input' name='phone' placeholder='xxx-xxx-xxxx'>"
    }
})