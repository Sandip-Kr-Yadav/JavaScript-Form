const containerr=document.getElementById("container");
const just_option=document.getElementById("justify");
const boxes=document.querySelectorAll('.box');
const heightt=document.getElementById('height');
const widthh=document.getElementById('width');

//For height
heightt.addEventListener('change',(e)=>{
    let cur=e.target.value;
    boxes.forEach((box)=>{
        box.style.height=`${cur}px`
    })
})

//For width
widthh.addEventListener('change',(e)=>{
    let cur=e.target.value;
    boxes.forEach((box)=>{
        box.style.width=`${cur}px`
    })
})

//For Row direction
document.getElementById("rw").addEventListener('click',(e)=>{
    containerr.style.flexDirection="row";
})

//For Row-reverse direction
document.getElementById("rwv").addEventListener('click',(e)=>{
    containerr.style.flexDirection="row-reverse";
})

//For Column direction
document.getElementById("cl").addEventListener('click',(e)=>{
    containerr.style.flexDirection="column";
})

//For Column Reverse direction
document.getElementById("clv").addEventListener('click',(e)=>{
    containerr.style.flexDirection="column-reverse";
})

//For justifyu content
just_option.addEventListener('change',(e)=>{
    let cur=e.target.value;
    containerr.style.justifyContent=`${cur}`;
})

