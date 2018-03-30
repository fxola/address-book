var submitButton = document.getElementById('submit');
var contactName = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var picture = document.getElementById('image');
var output = document.getElementById('form-output');
var listOfNames = '';
var addressBook = [];
var deleteUser = document.querySelectorAll('[data-id]');



submitButton.addEventListener('click',function(e){
    e.preventDefault();
    console.log(deleteUser);
  
    var contact = {
        name: contactName.value, 
        emailAddress: email.value,
        phoneNumber : phone.value,
        displayPicture : picture.value
    }
    
    addressBook.push(contact);  

    addressBook.forEach(function(element, index, array){
        listOfNames = "<ul><li><a href='editbook.html'>" + element.name +" is at index " + index + "   <button data-id = "+index+"><span>DELETE</span></button></a></li></ul>";
    });
  output.innerHTML += listOfNames;

  function deleteContact(){

  }


    function clear(){
        contactName.value ='';
    }
    clear();
});