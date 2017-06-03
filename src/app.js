let ul = document.getElementById('ul'),
    inputText = document.getElementById('inputText'),
        addBtn = document.getElementById('addBtn'),
        removeAllBtn = document.getElementById('removeAllBtn');

addBtn.onclick = function(){
    if(inputText.value.length === 0){
        alert('Please input text to add');
        return false;
    }
    addLI(ul);
}

function addLI(targetElem){
    let li = document.createElement('li');
    let textNode = document.createTextNode(inputText.value),
        done = document.createElement('buttons');
    done.innerHTML = 'DONE!';
    done.setAttribute('onclick', 'onDone(this)');
    li.appendChild(textNode);
    li.appendChild(done);
    ul.appendChild(li);
    
    removeAllBtn.setAttribute('onclick', 'removeAll()');
}

function onDone(thisRef){
    thisRef.parentElement.parentElement.removeChild(thisRef.parentElement);
}

function removeAll(){
    ul.innerHTML = '';
}