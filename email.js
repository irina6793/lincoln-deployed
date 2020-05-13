function submit() {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var position = document.getElementById('position').value;

  document.getElementById("button").addEventListener("click")
  document.getElementById("name").innerHTML = name + " ";
  document.getElementById("position").innerHTML = position + " ";

  if(name == null || name == ""){
      return "Error, please try again";
   }else if (name.length <2){
      return "Error, Name is too short";
   }else if (name.length >20) {
       return "Error, Name is too long";
   }

  if(position == null || position == "" ){
       return "Error, please try again";
    }else if ((position.length <2) || (position.length > 20)){
      return "Too short";
  }
}

    //  let formatPhoneNumber = (str) => {
    //    //Filter only numbers from the input
    //    let cleaned = ('' + str).replace(/\D/g, '');
    //     //Check if the input is of correct length
    //    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    //     if (match) {
    //        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    //    };
    //       return null
    //   }

    //   function emailIsValid (email) {
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    //   }
    //      form.addEventListener('submit')
    // }

