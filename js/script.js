var user=document.getElementById("user")
var email=document.getElementById("email")
var password=document.getElementById("pwd")
var userlink=document.getElementById("userlink")



let getpassword=localStorage.getItem("password")
let getemail=localStorage.getItem("email")
let getuser=localStorage.getItem("user")

let loginbtn=document.querySelector("#log-in")
loginbtn.onclick=function(e){
     e.preventDefault()
   if(user.value===""||password.value===""||email.value===""){
    alert("Please Complete Data")
   }
   else if(user.value.includes(" ")){
       alert("User Invalid");

   }
   else if (!email.value.includes("@")) {
        alert("Email must contain @");
    }
    
    else if (password.value.length < 6) {
        alert("Password must be at least 6 characters");
    }
     
    else{
       alert("Your Account Is Created")
       userlink.style.display="block"
       userlink.innerHTML=`<i class="fa-solid fa-user-ninja fa-xs" style="color: #ffffff;"></i> ${user.value}`


    //   close modal (x) button auto 
           $('#myModal').modal('hide');


    }
   }

