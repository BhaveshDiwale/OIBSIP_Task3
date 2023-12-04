let listItems = [],taskName="";
let count=0;
let handledEdit = false;

function handleChange(event){
    taskName = event.target.value;
}

function handleSubmit(event){
    event.preventDefault();
   
    if(handledEdit===false){
        listItems.push(taskName);
        if(listItems.length>0){
            document.getElementsByClassName("no-tasks")[1].style.display = "none";
        }
    
            let todo = document.createElement('div');
            todo.classList.add("list-item");
            todo.id = `${count}`;
            count++;
            
            todo.innerHTML = `<span title="Mark as completed">${taskName}</span>
                              
                              <i class="fa-solid fa-trash" onclick=handleDelete(event)></i>
                              <i class="fa-solid fa-pen-to-square" onclick=handleEdit(event)></i>
                              <i class="fa-solid fa-clipboard-list" title="Mark as completed" onclick=handleCompleted(event)></i>
                              `;
                              
            document.getElementById('todo-tasks').append(todo);  

}

}

function handleDelete(event){    
   const id = event.target.parentElement.id;

   document.getElementById(id).style.display = "none";
   
}

function handleEdit(event){
    handledEdit=true;
   const textToChange = event.target.parentElement;

   document.getElementById('input-field').value= textToChange.outerText;

   document.getElementById('submit').value = "Apply"

   document.getElementById('submit').addEventListener('click',()=>{
   const data=document.getElementById('input-field').value;
   textToChange.innerHTML = `<span>${data}</span>
   <i class="fa-solid fa-trash" onclick=handleDelete(event)></i>
   <i class="fa-solid fa-pen-to-square" onclick=handleEdit(event)></i>`;
        
   document.getElementById('submit').value = `Add +`
   handledEdit=false;

   }) 

   console.log(textToChange);

   
}

function handleReset(){
    document.getElementsByClassName('no-tasks')[1].style.display='block';

    let parent = document.getElementById("todo-tasks");
    erase(parent);
    
    function erase(element) {
        while(element.firstElementChild) {
           element.firstElementChild.remove();
        }
      }      
}

function handleCompleted(event){
    
    let completed_id = event.target.parentElement.id;

    document.getElementById(`${completed_id}`).style.display='none';
    
    
    let completed_todo = document.createElement('div');
    completed_todo.classList.add("list-item");
    completed_todo.id = `${count}`;
    count++;
    
    completed_todo.innerHTML = `<span title="Mark as completed">${taskName}</span>
                      
                      <i class="fa-solid fa-trash" onclick=handleDelete(event)></i>
                      <i class="fa-solid fa-pen-to-square" onclick=handleEdit(event)></i>`;
                      
    document.getElementById('completed-tasks').append(completed_todo);  
    document.getElementsByClassName('no-tasks')[0].style.display='none';
}