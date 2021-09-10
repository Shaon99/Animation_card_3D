const card =document.querySelector('.card');
const container =document.querySelector('.container');
const title =document.querySelector('.title');
const adidas =document.querySelector('.adidas img');
const aaddtocart =document.querySelector('.addtocart button');
const description =document.querySelector('.info h3');
const sizes =document.querySelector('.sizes');

container.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth/2-e.pageX)/25;
    let yAxis=(window.innerHeight/2-e.pageY)/25;
    card.style.transform=`rotateY(${xAxis}deg)rotate(${yAxis}deg)`;

})


// IN animate
container.addEventListener('mouseenter',(e)=>{
    card.style.transition="none";

    // popup
    title.style.transform='translateZ(150px)';
    title.style.color='#f55e50';
    adidas.style.transform='translateZ(200px) rotateZ(-45deg)';
    description.style.transform='translateZ(125px)';
    description.style.color='#2f5693';
    sizes.style.transform='translateZ(100px)';
    aaddtocart.style.transform='translateZ(75px)';


})
// Out animate
container.addEventListener('mouseleave',(e)=>{
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateY(0deg)rotate(0deg)`;
    //popout
    title.style.transform='translateZ(0px)';
    title.style.color='#2f5693';
    adidas.style.transform='translateZ(0px) rotateZ(0deg)';
    description.style.transform='translateZ(0px)';
    description.style.color='#f55e50';
    sizes.style.transform='translateZ(0px)';
    aaddtocart.style.transform='translateZ(0px)';


})
 function change1() {
     document.getElementById('pic').src='a2.png';
 }
  function change2() {
     document.getElementById('pic').src='a2.png';
 }
  function change3() {
     document.getElementById('pic').src='adidas.png';
 }
  function change4() {
     document.getElementById('pic').src='adidas.png';
 }
