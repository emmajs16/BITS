var name;
function profile(){
    var role = document.getElementById("role").value;
    name = document.getElementById("firstName").value +" "+ document.getElementById("lastName").value
    console.log(name)
    if (role == "tutor"){
        console.log("tutor")
        window.location.href = "tutor-setup.html";
    }
     if (role == "student"){
        console.log("student")
                window.location.href = "student-setup.html";
    }
     if (role == "both"){
        console.log("both")
        window.location.href = "tutorstudent-setup.html";
    }
     if (role == "teacher"){
        console.log("teacher")
    }
}
function welcomeS(){
    var welcomeS= document.getElementById("welcome-student");

    welcomeS.innerHTML=`Welcome, ${name}! We see you would like a tutor!`;

}
function welcomeT(){
     var welcomeT= document.getElementById("welcome-tutor");
    welcomeT.innerHTML=`Welcome, ${name}! We see you would like to tutor!`;
}
// function name(){
//     name = document.getElementById("firstName").value +" "+ document.getElementById("lastName").value
//     var userName = document.getElementById("name");
//     userName.innerHTML= name;
// }
$(function () {
  $('[data-toggle="popover"]').popover()
})

function learningstyles(){
    var learningStyle;
var checkedValue = 0;
var inputElements = document.getElementsByClassName('form-check-input');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = parseInt(inputElements[i].value) + parseInt(checkedValue);
      }

}
console.log(checkedValue)
    if (checkedValue >= 1 && checkedValue <= 2){
        learningStyle= "visual";
        console.log("visual")
    }
     if (checkedValue >= 3 && checkedValue <= 4){
         learningStyle="logical";
        console.log("logical")
    }
     if (checkedValue >= 5 && checkedValue <= 6){
         learningStyle="auditory";
        console.log("auditory")
    }
    window.location.href = "student-connect-setup.php?name=" + learningStyle;
    
}