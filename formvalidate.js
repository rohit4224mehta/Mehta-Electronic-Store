                       // login page js

function validatelogin(){
    var x=document.login.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
}

var password=document.login.password.value;  
if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
}
$(document).ready(function(){
  $("#register").click(function(){
    alert("Thanks for registering. Now you can Shopping");

  }); 
  
}); 

               // register page js
               $(document).ready(function () {
                $('#register-form').on('submit', function (event) {
                    // Prevent form submission
                    event.preventDefault();
            
                    // Get form values
                    const username = $('#username').val().trim();
                    const email = $('#email').val().trim();
                    const password = $('#password').val().trim();
                    const rePassword = $('#re-password').val().trim();
            
                    // Validate username
                    if (username === '') {
                        alert('Username is required');
                        return;
                    }
            
                    // Validate email
                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                    if (!emailPattern.test(email)) {
                        alert('Please enter a valid email address');
                        return;
                    }
            
                    // Validate password
                    if (password.length < 8) {
                        alert('Password must be at least 8 characters long');
                        return;
                    }
            
                    // Validate re-entered password
                    if (password !== rePassword) {
                        alert('Passwords do not match');
                        return;
                    }
            
                    // If all validations pass
                    alert('Registration successful!');
                    // You can now submit the form data to the server
                });
            });
            

               // contact page js
function formsubmittocontact(){

    var x=document.contact.email.value;
    var name=document.contact.name.value;  
    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
      }  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
}
}