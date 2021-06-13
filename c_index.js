let  cu = 0;
const btn1 = document.getElementById("btn1") 
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

const sp = document.querySelector(".sp")
btn1.addEventListener("click",function(){
   
   cu = cu+1
   sp.textContent = cu;
   if(cu>0)
    {sp.style.color = "red";}
   else if(cu<0)
   {
    sp.style.color = "green";
   } 
   else
   {
    sp.style.color = "black";
   }
   


})

btn2.addEventListener("click",function(){
   
    cu = 0
    sp.textContent = cu;
    if(cu>0)
    {sp.style.color = "red";}
   else if(cu<0)
   {
    sp.style.color = "yellow";
   } 
   else
   {
    sp.style.color = "black";
   }
 
 
 
 })

 btn3.addEventListener("click",function(){
   
    cu = cu-1
    sp.textContent = cu;
    if(cu>0)
    {sp.style.color = "red";}
   else if(cu<0)
   {
    sp.style.color = "yellow";
   } 
   else
   {
    sp.style.color = "black";
   } 
 
 
 
 })
 
