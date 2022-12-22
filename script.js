//assign variable to generate password
var generateBtn = document.querySelector("#generate");

//add event listener to "Generate Password" button so that password generation process starts when clicked
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
      
      //define min and max lengths for password
      var minlength=8;
      var maxlength=128;
      
      //promt user for length of password between 8 and 128 characters
      var pwordlength = window.prompt("Enter Password Length between " +minlength + " and "+ maxlength);
  
    //check if password length falls betweeen stated parameters.  End if not and have user try again

    if(pwordlength<minlength || pwordlength>maxlength) {
      window.alert("Selected password length does not fall between 8 and 128 characters.  Please try again")
    } else {
        
      //assign variables for different categories of password characters
            var lowercase="abcdefghijklmnopqrstuvwxyz";
            var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var numbers="0123456789";
            var special="!@#$%^&*()";

      //have user confirm whether or not to use the available character categories
            var lcaseanswer = window.confirm("Use lowercase letters?  Choose OK for yes and Cancel for No");
            var ucaseanswer =  window.confirm("Use uppercase letters? Choose OK for yes and Cancel for No");
            var numbanswer =  window.confirm("Use numbers? Choose OK for yes and Cancel for No");
            var specanswer =  window.confirm("Use special characters? Choose OK for yes and Cancel for No");
            
      //set initial values of password character array and final password to be empty      
            var pwordchar="";
            var password="";

    //generate array of possible characters for password generator to select from
            if(lcaseanswer===true && ucaseanswer!==true && numbanswer !==true && specanswer !==true ) {
              pwordchar=lowercase
          } else if (lcaseanswer!==true && ucaseanswer===true && numbanswer !==true && specanswer !==true ) {
            pwordchar=uppercase
          } else if (lcaseanswer!==true && ucaseanswer!==true && numbanswer ===true && specanswer !==true ) {
            pwordchar=numbers
          } else if (lcaseanswer!==true && ucaseanswer!==true && numbanswer !==true && specanswer ===true ) {
            pwordchar=special
          } else if (lcaseanswer===true && ucaseanswer===true && numbanswer !==true && specanswer !==true ) {
            pwordchar=lowercase+uppercase
          }  else if (lcaseanswer===true && ucaseanswer!==true && numbanswer ===true && specanswer !==true ) {
            pwordchar=lowercase+numbers
          } else if (lcaseanswer===true && ucaseanswer!==true && numbanswer !==true && specanswer ===true ) {
            pwordchar=lowercase+special
          } else if (lcaseanswer!==true && ucaseanswer===true && numbanswer ===true && specanswer !==true ) {
            pwordchar=uppercase+numbers  
          } else if (lcaseanswer!==true && ucaseanswer===true && numbanswer !==true && specanswer ===true ) {
            pwordchar=uppercase+special  
          } else if (lcaseanswer!==true && ucaseanswer!==true && numbanswer ===true && specanswer ===true ) {
            pwordchar=numbers+special
          } else if (lcaseanswer===true && ucaseanswer===true && numbanswer ===true && specanswer !==true ) {
            pwordchar=lowercase+uppercase+numbers
          } else if (lcaseanswer===true && ucaseanswer===true && numbanswer !==true && specanswer ===true ) {
            pwordchar=lowercase+uppercase+special
          } else if (lcaseanswer===true && ucaseanswer!==true && numbanswer ===true && specanswer ===true ) {
            pwordchar=lowercase+numbers+special
          } else if (lcaseanswer!==true && ucaseanswer===true && numbanswer ===true && specanswer ===true ) {
            pwordchar=uppercase+numbers+special
          } else if (lcaseanswer===true && ucaseanswer===true && numbanswer ===true && specanswer ===true ) {
            pwordchar=lowercase+uppercase+numbers+special
          } 
      //Randomly select characters from available character array to form password.
          for (let i=0; i<pwordlength; i++) {
            randomnumber=Math.floor(Math.random()*pwordchar.length);
            password+=pwordchar.substring(randomnumber,randomnumber+1);
          } 
      
      //write password to password text box for user to see
          document.getElementById("password").innerHTML=password;

          }
 }
