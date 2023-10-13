document.addEventListener("DOMContentLoaded", () => 
{
  //Initializing all fields
  const form=document.getElementById("create-task-form")
  const taskDescription=document.getElementById("new-task-description")
  const tasksList=document.getElementById("tasks")

  //Listening for the form submit event
  form.addEventListener("submit",(e)=>
  {
    //Preventing form from resubmitting
    e.preventDefault();

    //Creating an empty array to store the tasks
    const tasks=[]

    //Adding the tasks to the empty array
    tasks.push(taskDescription.value)

    //Creating an element that will display the tasks in the My Todos section
    const listItem=document.createElement("li")

    //Appending the created element (li) as a child of the parent element (the toDo list ul)
    tasksList.appendChild(listItem)

    //Looping over the array and adding the array elements to the created array 
    for(const task of tasks)
    {
      //Setting the textContent of the list item to equal the task after the tasks array is looped over
      listItem.textContent=task

      //Creating a button with an id attribute that is equal to the task description passed
      const deleteBtn=document.createElement("button")
      deleteBtn.textContent="X"
      listItem.append(deleteBtn)
    }
    //Resseting the form
    e.target.reset()
  })

  //Handling the delete event
  tasksList.addEventListener('click', (e)=>
  {
    //Checking if the target of the click is the delete button
    if(e.target.nodeName==="BUTTON")
    {
      //Removing the list item
      document.querySelector("li").remove()
    }
  })
});
