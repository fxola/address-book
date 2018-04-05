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

    var contactDetails = JSON.parse(localStorage.contact);
    contactDetails.forEach(function(element, index, array){
        listOfNames = "<li class ='contact-name'><span class ='listname'><a href='editbook.html?name="+element.name+"'>" + element.name + "  </a></span> <span class='listbutton'><button class='deleteContact' data-id = "+index+">DELETE</button></span></li>";
    });

    parent.innerHTML += listOfNames;

    function clear(){
        contactName.value ='';
    }

    clear();
});

parent.addEventListener('click', function(e){
    parent.innerHTML ="";    
    if(e.target.classList.contains('deleteContact')){
        var contactID = e.target.getAttribute('data-id');
        var contactt = localStorage.getItem('contact');
        var contactDetailss = JSON.parse(contactt);
        // console.log(contactDetailss);   
       var contactLeft = contactDetailss.splice(contactID,1);
    //    console.log(contactDetailss);
    var  list ="";
       for (let index = 0; index < contactDetailss.length; index++) {
           const element = contactDetailss[index];
        list+=   "<li class ='contact-name'><span class ='listname'><a href='editbook.html?name="+element.name+"'>" + element.name + "  </a></span> <span class='listbutton'><button class='deleteContact' data-id = "+index+">DELETE</button></span></li>";
        
       }
       console.log(list);
       
    //    contactDetailss.forEach(function(element, index, array){
    //     listOfNames = "<li class ='contact-name'><span class ='listname'><a href='editbook.html?name="+element.name+"'>" + element.name + "  </a></span> <span class='listbutton'><button class='deleteContact' data-id = "+index+">DELETE</button></span></li>";
    //     });
    parent.innerHTML = list;
       
    }
});



  