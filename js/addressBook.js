var submitButton = document.getElementById('submit');
var contactName = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
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
    }

    addressBook.push(contact);  

    localStorage.setItem('contact', JSON.stringify(addressBook));

    var contactt = localStorage.getItem('contact');

    var contactDetails = JSON.parse(contactt);

    contactDetails.forEach(function(element, index, array){
        listOfNames = "<li class ='contact-name'><span class ='listname'><a href='editbook.html?name="+element.name+"'>" + element.name + "  </a></span> <span class='listbutton'><button class='deleteContact' data-id = "+index+">DELETE</button></span></li>";
    });

    parent.innerHTML += listOfNames;

    function clear(){
        contactName.value ='';
        email.value ='';
        phone.value ='';
    }

    clear();
});

parent.addEventListener('click', function(e){
    if(e.target.classList.contains('deleteContact')){
        parent.innerHTML ="";    
 
        var contactID = e.target.getAttribute('data-id');
        var contactt = localStorage.getItem('contact');
        var contactDetailss = JSON.parse(contactt);

        var list ="";
       for (var index = 0; index < contactDetailss.length; index++) {
           var element = contactDetailss[index];
           contactDetailss.splice(contactID,1);        
        list +=   "<li class ='contact-name'><span class ='listname'><a href='editbook.html?name="+element.name+"'>" + element.name + "  </a></span> <span class='listbutton'><button class='deleteContact' data-id = "+index+">DELETE</button></span></li>";
        localStorage.setItem('contact', JSON.stringify(contactDetailss));
       }
    parent.innerHTML = list;
       
    }
    
});



  