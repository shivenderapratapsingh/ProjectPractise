let btn=document.getElementById("Generate");
let input=document.getElementById("text");
function password(){
    let char="ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password="";
    for(let i=0;i<8;i++){
        const random=Math.floor(Math.random()*char.length);
        password+=char[random];
    }
    return password;
}

btn.addEventListener("click",function(){
    let ans=password();
    input.value=ans;
})

function copy(){
    input.select();
    document.execCommand("copy");

}