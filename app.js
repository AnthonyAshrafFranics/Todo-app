var list = document.getElementById("myList");

function addTodo(){
    var val = document.getElementById("todoItem");
    if(val.value == false){
        alert("Please Input Task to do...");
    } else {
        var li = document.createElement('li');
        var liText = document.createTextNode(val.value);
        li.appendChild(liText);
        li.className += " row";
        li.className += " listItem";
        li.className += " justify-content-center align-items-center  mx-auto"

    
        var delBtn = document.createElement('button');
        var delText = document.createTextNode("Delete");
        delBtn.appendChild(delText);
        delBtn.className += " btnDelete"
        delBtn.setAttribute("onclick" , "deleteItem(this)");
    
        var editBtn = document.createElement('button');
        var editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        editBtn.className += " btnEdit";
        editBtn.setAttribute("onclick" , "edit(this)")
    
        list.appendChild(li);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
    
        
        val.value = "";
    }

}

function deleteItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    list.innerHTML = "";
}
function edit(e) {
    console.log(e);
    var oldValue = e.parentNode.firstChild.nodeValue;
    var newValue = prompt("Enter New Value...");
    // console.log(newValue);
    if(newValue == false) {
        e.parentNode.firstChild.nodeValue = oldValue;
    } else {
        e.parentNode.firstChild.nodeValue = newValue;
    }
    // console.log(e.parentNode.firstChild.nodeValue);
    
    

}