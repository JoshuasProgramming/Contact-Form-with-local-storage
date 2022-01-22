//Grabbing the elements
const name_value = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

//Making sure that when the user refreshes the page the previous inputs are still there.
name_value.value = localStorage.getItem("name");
email.value = localStorage.getItem("email");
message.value = localStorage.getItem("message");

//putting the items from local storage into a table for the user to see
const name_td = document.getElementById('name_td');
name_td.innerHTML = localStorage.getItem("name");

const email_td = document.getElementById('email_td');
email_td.innerHTML = localStorage.getItem("email");

const message_td = document.getElementById('message_td');
message_td.innerHTML = localStorage.getItem("message");

//Once the user the send button an event happens...
const send = document.getElementById('send').addEventListener("click", (e)=>{
    //checks if every value has been inserted in the text fields

    //if some/all are empty...
    if((name_value.value == "") || (email.value == "") || (message.value == "")){
        alert("Fill in all fields");
    } 
    //if some/all aren't empty...
    if((name_value.value !== "") && (email.value !== "") && (message.value !== "")){
        //sending each item and its key in local storage (E.G: "name" key has "name_value.value" value)
        localStorage.setItem("name", name_value.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("message", message.value);

        //placing each item and its key into it's responding table data
        name_td.innerHTML = localStorage.getItem("name");
        email_td.innerHTML = localStorage.getItem("email");
        message_td.innerHTML = localStorage.getItem("message");
    }
});

const reset = document.getElementById('reset').addEventListener('click', (e)=>{
    name_value.value = "";
    email.value= "";
    message.value = "";

    localStorage.setItem("name", name_value.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("message", message.value);

    name_td.innerHTML = localStorage.getItem("name");
    email_td.innerHTML = localStorage.getItem("email");
    message_td.innerHTML = localStorage.getItem("message");
});