let addToDoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let İnputText=document.getElementById('İnputText');
let clearToDo=document.getElementById('clearToDo');
addToDoButton.addEventListener('click',function(){
let paragraph = document.createElement('p');
paragraph.classList.add('paragraph-styling');
toDoContainer.appendChild(paragraph);
paragraph.innerHTML =İnputText.value;
İnputText.value = "";
paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = 'line-through';
});
paragraph.addEventListener('dblclick',function(){
    toDoContainer.removeChild(paragraph);
});
clearToDo.addEventListener('click',function(){
    paragraph.remove();
})

})