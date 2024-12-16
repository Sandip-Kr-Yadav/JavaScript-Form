const url="https://dummyjson.com/recipes";
const main=document.getElementById("main");
const foods=document.getElementById("foods");
const backk=document.getElementById("back");
const back_left=document.getElementById("back_l");
const back_right=document.getElementById("back_r");
const body=document.body;
let datas;
//Getting data from API
async function Recepies(url){
    try{
    const response=await fetch(url)
    const dat=await response.json();
    datas=dat.recipes;
    //IF condition to enter data only when data is loadaed
    if(response.ok)
    {
        insert(dat.recipes);
    }
    }
    catch(err)
    {
        console.log("There is an error in fetching the data in the Api");
    }
    
}
Recepies(url);

//To insert the data to display
function insert(data)
{
    console.log(data)
    data.forEach(ele => {
    const cur=document.createElement('div');
    cur.innerHTML=`
    <div class="food" id="${ele.id}">
    <img src="${ele.image}"></img>
    <i>${ele.name}</i>
    </div>
    `
    foods.appendChild(cur);
    }); 
}

//Addevent listner for Click
body.addEventListener('click',(e)=>{
    if(e.target.parentElement.className=='food')
    {
        //3 lines to make back part visible
        backk.style.visibility='visible';
        main.style.zIndex='-1';
        main.style.filter='blur(10px)'
        let idd=e.target.parentElement.id;
        console.log(datas[idd-1].rating);

        //insert in detail view
        back_left.innerHTML=`
                ${e.target.parentElement.innerHTML}
                <i>Ratings:${datas[idd-1].rating}</i>
                <i>Servings:${datas[idd-1].servings}</i>
                `

        //3rd and 6th line for to make in display in list

        back_right.innerHTML=`
        <h2>Ingridents</h2><br>
        ${datas[idd-1].ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}<br>
        <h2>Instructions</h2><br>
        <ul>
        ${datas[idd-1].instructions.map(instruction => `<li>${instruction}</li>`).join('')}
        </ul>
        <button class="close">Close</button>
        `

        //To hide the back part
        const closeButton = back_right.querySelector('.close');
        closeButton.addEventListener('click', () => {
            backk.style.visibility = 'hidden';
            main.style.zIndex = '1';
            main.style.filter = 'blur(0)';
        });
    }
})