function validateForm() {
    // Get the form element by its id
    var form = document.getElementById("myForm");
    // Get the input elements by their names
    var name = form.elements["name"];
    var email = form.elements["email"];
    var message = form.elements["message"];
    var age = form.elements["age"];
    let regex = /\S+@gmail\.com$/i;
    // Check if the input fields are empty
    if (name.value == "" || email.value == "" || message.value == "" ) {
      // If yes, alert a message and return false
      alert("Please fill out the form!");
      return false;
    }
    
    if (age.value < "18" ) {
      // If yes, alert a message and return false
      alert("Must be above 18");
      return false;
    }


    // If no, return true and submit the form
showPopUp();
  }
  // This function will show the pop-up with the thank you message
function showPopUp() {
    // Get the pop-up element by its id
    var popUp = document.getElementById("pop-up");
    // Set the display style to block
    popUp.style.display = "block";
  }
  
  // This function will hide the pop-up
  function hidePopUp() {
    // Get the pop-up element by its id
    var popUp = document.getElementById("pop-up");
    // Set the display style to none
    popUp.style.display = "none";
  }

  