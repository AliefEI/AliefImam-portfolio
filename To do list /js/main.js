let list = document.getElementById('placeToPutTasks')
let tasks = document.querySelector('ul')
let strike = document.querySelectorAll('li')
let counter= 0


//adding items to list
function submitToList() {
   let tasks = document.getElementById('taskToPut')
   let item = document.createElement('li')
   item.innerText = document.querySelector('input').value
   list.appendChild(item)
   counter+=1 
   displayCount(counter)
}
//assigning click to enter button
document.querySelector('#enterButton').addEventListener('click', submitToList)
//press enterkey 



//create event tp strikethrough when clicking on li
tasks.addEventListener('click',function(e){
   //erica suggested reading on event delegation 
   if (e.target.tagName==='LI'){
      console.log(e.target.classList)
      e.target.classList.toggle('completed')
   }
})

//create event tasks complete for individual each individual li's
document.querySelector('#strikeItems').addEventListener('click', deleteOnClick)

function deleteOnClick(i){
   let completedLiArray= tasks.querySelectorAll('.completed')
   console.log(completedLiArray)
   for(i=0; i<completedLiArray.length; i++){
      tasks.removeChild(completedLiArray[i])
      counter-=1 
   }
   displayCount(counter)
}

//create event on 'items completed' button to clear all tasks on list
document.querySelector('#clearItemsOnList').addEventListener('click', tasksComplete)

function tasksComplete() {
   tasks.innerText = ""
   counter=0
}
displayCount(counter)

//create a way for system to count
function displayCount(number){
document.querySelector('.counter').innerHTML=number
}
