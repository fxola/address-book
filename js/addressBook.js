var submitButton = document.getElementById('submit');
var contactName = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var picture = document.getElementById('image');
var output = document.getElementById('form-output');
var listOfNames = '';
var addressBook = [];
var parent = document.getElementById('list-output');
// var deleteUser = document.getElementById('delete');



submitButton.addEventListener('click',function(e){
    e.preventDefault();
  
    var contact = {
        name: contactName.value, 
        emailAddress: email.value,
        phoneNumber : phone.value,
        displayPicture : picture.value
    }

    addressBook.push(contact);    
    sessionStorage.setItem('contact', JSON.stringify(addressBook));

    addressBook.forEach(function(element, index, array){
        listOfNames = "<li><a href='editbook.html'>" + element.name + "  </a> <button class='deleteContact' data-id = "+index+">DELETE</button></li>";
    });
    
    parent.innerHTML += listOfNames;

  function clear(){
    contactName.value ='';
}
clear();

});

parent.addEventListener('click', function(e){
    if(e.target.classList.contains('deleteContact')){
        console.log('hey');}
    // console.log('hey');
});

  