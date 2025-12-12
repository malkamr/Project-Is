// var user=document.getElementById("user")
// var email=document.getElementById("email")
// var password=document.getElementById("pwd")
// var userlink=document.getElementById("userlink")



// let getpassword=localStorage.getItem("password")
// let getemail=localStorage.getItem("email")
// let getuser=localStorage.getItem("user")

// let loginbtn=document.querySelector("#log-in")
// loginbtn.onclick=function(e){
//      e.preventDefault()
//    if(user.value===""||password.value===""||email.value===""){
//     alert("Please Complete Data")
//    }
//    else if(user.value.includes(" ")){
//        alert("User Invalid");

//    }
//    else if (!email.value.includes("@")) {
//         alert("Email must contain @");
//     }
    
//     else if (password.value.length < 6) {
//         alert("Password must be at least 6 characters");
//     }
     
//     else{
//        alert("Your Account Is Created")
//        userlink.style.display="block"
//        userlink.innerHTML=<i class="fa-solid fa-user-ninja fa-xs" style="color: #ffffff;"></i> ${user.value}


//     //   close modal (x) button auto 
//            $('#myModal').modal('hide');


//     }
//    }



// //////////////////////////////////////////////

// ========================================================================
// 1. element selection 
// ========================================================================
//  userlink  in navbar
var userlink = document.getElementById("userlink");

// submit buttons and sliding links
const authWrapper = document.querySelector('.auth-wrapper');
const registerTrigger = document.querySelector('.register-trigger');
const loginTrigger = document.querySelector('.login-trigger');

const loginBtn = document.querySelector('.credentials-panel.signin .submit-button');
const registerBtn = document.querySelector('.credentials-panel.signup .submit-button');


// ========================================================================
// 2.  sliding animation 
// ========================================================================

// when clicking "sign up" on login screen 
if (registerTrigger) {
    registerTrigger.addEventListener('click', (e) => {
        e.preventDefault(); // prevents jumping to page top
        authWrapper.classList.add('toggled'); // starts sliding to register interface
    });
}

// when clicking "sign in" on register screen
if (loginTrigger) {
    loginTrigger.addEventListener('click', (e) => {
        e.preventDefault(); // prevents jumping to page top (#)
        authWrapper.classList.remove('toggled'); // returns to login interface
    });
}

// ========================================================================
// 3. registration logic
// ========================================================================

if (registerBtn) {
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault(); // prevents form submission and page refresh

        // get inputs from signup form using their classes
        const user = document.querySelector(".credentials-panel.signup input[type='text']").value;
        const email = document.querySelector(".credentials-panel.signup input[type='email']").value;
        const password = document.querySelector(".credentials-panel.signup input[type='password']").value;

        if (user === "" || password === "" || email === "") {
            alert("Please Complete All Data");
        } else if (user.includes(" ")) {
            alert("Username cannot contain spaces.");
        } else if (!email.includes("@")) {
            alert("Email must contain @");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters");
        } else {


            localStorage.setItem("user", user);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            
            alert("Registration Successful! Your Account is Created.");
            
            // update user link in navbar
            if (userlink) {
                userlink.style.display = "block";
                userlink.innerHTML = `<i class="fa-solid fa-user-ninja fa-xs" style="color: #ffffff;"></i> ${user}`;
            }

            // close popup modal ====== >>>>   using jquery 
            $('#myModal').modal('hide');
        }
    });
}

// ========================================================================
// 4. login logic
// ========================================================================

if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault(); // prevents form submission and page refresh

        // get inputs from signin form
        const loginUser = document.querySelector(".credentials-panel.signin input[type='text']").value;
        const loginPassword = document.querySelector(".credentials-panel.signin input[type='password']").value;

        // get saved data
        const getuser = localStorage.getItem("user");
        const getpassword = localStorage.getItem("password");

        // validate data
        if (loginUser === "" || loginPassword === "") {
            alert("Please Complete All Fields for Login.");
        } else if (loginUser === getuser && loginPassword === getpassword) {
            alert("Login Successful! Welcome Back.");

            // update user link in navbar
            if (userlink) {
                userlink.style.display = "block";
                userlink.innerHTML = `<i class="fa-solid fa-user-ninja fa-xs" style="color: #ffffff;"></i> ${loginUser}`;
            }

            // close popup modal
            $('#myModal').modal('hide');
        } else {
            alert("Invalid Username or Password. Please check your credentials or Sign Up.");
        }
    });
}
