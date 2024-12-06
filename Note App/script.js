let color=['red','violet','pink','yellow','green','antiquewhite','beige']

// Insert of current value of input field in a variable
let note="";
let input_area=document.getElementById("insert_note");
input_area.addEventListener('change',(e)=>{
    note=e.target.value;
    console.log(note);
})
// input_area.addEventListener('keypress',(e)=>{
//     note=e.target.value;
//     console.log(note);
// })
//To access the show_notes div easily.
const show=document.getElementById("show_notes");

// Assigning add button to a variable.
const add=document.getElementById("add_note");
add.addEventListener('click',(e)=>{
    if(note!=="")
    {
        let cur=document.createElement('div');
        cur.className='notess';
        let index=Math.floor(Math.random()*8);
        cur.style.backgroundColor=color[index]; // choosing a random color for notes
        cur.innerHTML=`
        <p>${note}</p>
        <button class="delete">Delete</button>
        `
        note="";
        // Adding of input field data into show part;
        show.appendChild(cur);
        input_area.value="";

        //Code to delete a particular note.
        const delet=cur.querySelector('.delete');
        delet.addEventListener('click',(e)=>{
            cur.remove();
    })
    }
    
})

