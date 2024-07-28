const time=new Date();
const t=time.getHours();
if(t<12)
{
    alert("good morning");
}
else if(t<17)
{
alert("good afternoon");
}
else
{
    alert("good Night");
}
let x=document.getElementsById('para')
x.addEventListner('click',function(){
    x.style.color("red");
})
