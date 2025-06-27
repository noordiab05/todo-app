const textarea= document.querySelector('.textarea');
const submitBtn= document.querySelector('.submitBtn');
const clearBtn= document.querySelector('.clearBtn');


const listSection= document.querySelector('.listSection');
const taskList= document.querySelector('.taskList');
const taskRow= document.querySelector('.taskRow');



//work on the text area: submit button is pushed, the List is updated
const tasks=[];
const taskBtns=[];
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    updateList();
});


function updateList()
{
    if(!textarea.value)
    {
        return;
    }
    tasks.push(textarea.value);

    taskList.innerHTML+=`<div class="taskRow">
                    <button class="taskBtn">❀</button>
                    <p class="task">${textarea.value}</p>
                </div>`;
    textarea.value='';

}


//clear button area
clearBtn.addEventListener('click', function(e) {
    e.preventDefault();
    clearList();
});

function clearList()
{
    taskList.innerHTML='';
}


//cross over list items
    //add one event listener to the parent (taskList)
taskList.addEventListener('click', function(e) {
    //if the current btn is a taskBtn
    if (e.target.classList.contains('taskBtn')) {
        //change the parent element's class to completed
        e.target.parentElement.classList.toggle('completed');
    }
});







