let age;
let gender;
let mail;
let phone;
let names;
const submit=document.getElementById("submit");
const genders=document.getElementsByName("gender");
const data = document.getElementById("data");
const print=document.getElementById("print")


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


submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(names);
    console.log(age);
    console.log(mail);
    console.log(gender);
    console.log(phone);
});

print.addEventListener('click',(e)=>{
    data.innerHTML=`
    <b>Name=</b> ${names}<br>
    <b>Age=</b> ${age}<br>
    <b>Gender=</b> ${gender}<br>
    <b>Email=</b> ${mail}<br>
    <b>Phone number=</b> ${phone}<br>
    `
})
console.log(data);