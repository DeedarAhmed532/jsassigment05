// if else statments 

var age = prompt("Enter Your age");

if (age >= 13) {
    document.write("Your eligible for addmision ")
} else {
    document.write("crack the exam of ssc")
}

var marks = prompt("Enter your marks");

if (marks >= 80){
        console.log("congrats: your selected for interview ");
} else {
    console.log("Hard luck: try next time");
}

var hour = prompt("write your time like 12 ,13, 14")

if (hour < 12 && hour >= 5) {
var gender = prompt("write your gender please")
    if (gender == "male") {
        alert("good morning sir")
    }
    else if (gender == "female") {
        alert("good morning ma,am")
    }

}
else if (hour >= 12 && hour < 18) {
    var gender = prompt("write your gender please")
    if (gender == "male") {
        alert("good evening  sir")
    }
    else if (gender == "female") {
        alert("good evening ma,am")
    }
}
else if (hour >= 18 && hour <=24 ) {
    var gender = prompt("write your gender please")
    if (gender == "male") {
        alert("good afternoon sir")
    }
    else if (gender == "female" ) {
        alert("good afternoon ma,am")
    }
}
 

var num = prompt ("write a number like  (1 , 2 , 3)")
if (num % 2 == 0){
    alert ("your num is positive")
}
else {
    alert("your number is nagitive")
}
 
 
var password = prompt("write a password like (mughal123) ")
if (password == "mughal123"){
    alert("your password is correct")
}
else {
    alert("your password is wrong \n please try again")
}

 
var pin1 = prompt("write a new password")
var pin2 = prompt("coferamed your password ")
if (pin1 === pin2){
    alert("Correct! The password you entered matches the original password")
}
else {
    alert(" incorecct  password")
}

