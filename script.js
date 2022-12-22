// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

//assign variables for password character criteria

var minlength=8;
var maxlength=128;
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers="0123456789";
var special="!@#$%^&*()";


//promt user for length of password between 8 and 128 characters
var pwordlength = window.prompt("Enter Password Length between " +minlength + " and "+ maxlength);
//have user confirm whether or not to use these character types
var lcaseanswer = window.confirm("Use lowercase letters?  Choose OK for yes and Cancel for No");
var ucaseanswer =  window.confirm("Use uppercase letters? Choose OK for yes and Cancel for No");
var numbanswer =  window.confirm("Use numbers? Choose OK for yes and Cancel for No");
var specanswer =  window.confirm("Use special characters? Choose OK for yes and Cancel for No");
var pwordchar="";
var password="";

}