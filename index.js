function addFunc(event){
    event.preventDefault();

    const newLiItem = document.createElement('li');
    let userInput = document.querySelector('#item').value;
    newLiItem.innerText = userInput;
    newLiItem.addEventListener('click',completeToDoFunc)


    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', removeFunc);
    newLiItem.append(deleteButton);

    const list = document.querySelector('ul')
    list.append(newLiItem);
   
    // console.log(newListItem);
}
document.querySelector('form').addEventListener('submit',addFunc);


function removeFunc(event){
    event.target.parentNode.remove();
    //button is a child of the list item, 
    //we can use event.target.parentNode.remove() to remove the entire list item.
}

function completeToDoFunc(event){
    const  liAttribute = event.target.getAttribute('aria-checked');
    const messageAtr =document.getElementById('completed-message');

    // console.log(event.target.parentNode);
    
    if(liAttribute !== 'true'){
        event.target.setAttribute('aria-checked','true');
        messageAtr.style.visibility= 'visible';
        setTimeout(function(){messageAtr.style.visibility = 'hidden'},2000);        
    }else{
        event.target.setAttribute('aria-checked','false');
    }
}



