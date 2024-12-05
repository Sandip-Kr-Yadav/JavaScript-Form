let age;
let gender;
let mail;
let phone;
let names;
const submit=document.getElementById("submit");
const genders=document.getElementsByName("gender");
const data = document.getElementById("data");
const print=document.getElementById("print")

// Getting data of form elemrnt and storing values in the variable.
document.getElementById("name").addEventListener('change',(e)=>{
    names=e.target.value;
});
document.getElementById("age").addEventListener('change',(e)=>{
    age=e.target.value;
});
genders.forEach((gend)=>{
    gend.addEventListener('click',(e)=>{
        gender=e.target.value;
    })
})

document.getElementById("email").addEventListener('change',(e)=>{
    mail=e.target.value;
});
document.getElementById("phone_no").addEventListener('change',(e)=>{
    phone=e.target.value;
});


//Console log of thr form input data.
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(names);
    console.log(age);
    console.log(mail);
    console.log(gender);
    console.log(phone);
});

// dynamic way to create HTML element and add data in it.
print.addEventListener('click',(e)=>{
    let cur=document.createElement('div')
    cur.innerHTML=`
    <b>Name=</b> ${names}<br>
    <b>Age=</b> ${age}<br>
    <b>Gender=</b> ${gender}<br>
    <b>Email=</b> ${mail}<br>
    <b>Phone number=</b> ${phone}<br>
    <button class="delete">Delete</button> `//Button to delete the div
    
    data.appendChild(cur);

    const deleteButton = cur.querySelector('.delete'); // function to delete the div
    deleteButton.addEventListener('click',()=>{
        cur.remove();
    });

});
console.log(data);