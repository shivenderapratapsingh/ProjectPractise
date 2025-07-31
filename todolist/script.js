let task=document.getElementById("bt1");
let over=document.getElementById("list-container");

function press(){
   if(task.value==""){
    alert("Enter some text")
   }
   else{
    let li=document.createElement("li");
    li.innerHTML=task.value;
    over.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
   }
   task.value=''; 
   save();

}

over.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        save();
    }

    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        save();

    }
},false);

function save(){
    localStorage.setItem("data",over.innerHTML);
}

function show(){
    over.innerHTML=localStorage.getItem("data");
}
show();