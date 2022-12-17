var attempt = 3; // Variable to count number of attempts.

const form = document.querySelector('.leilsForm');
const firstname = document.getElementById('fname').value;
const password = document.getElementById('password').value;
const telephone = document.getElementById('tel').value;
const email = document.getElementById('email').value;



function validateEmail() {
         atposition = email.indexOf("@");
         dotposition = email.lastIndexOf(".");
         
         if (atposition < 1 || ( dotposition - atposition < 2 )) {
            alert("Please enter a valid email ID")
            form.email.focus() ;
            return false;
         }
         return( true );
      }



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();
    if(firstname == " " || password == " ") {
        alert("please enter a valid username or password")
     }
     else {
        alert("Success")
    }
})
