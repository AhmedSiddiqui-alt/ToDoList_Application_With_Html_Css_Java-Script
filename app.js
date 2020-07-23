var listOfUl=document.getElementById("createList")
function AddItems()
{
 //Add Items
 var getItems=document.getElementById("getValueFromInput");
 var createList=document.createElement("li");
 var getListText=document.createTextNode(getItems.value);
 createList.setAttribute("class","listStyle")
 createList.appendChild(getListText);
 
 console.log(createList);

 // Delete Items
 var deleteButton=document.createElement("button");
 var deleteButtonText=document.createTextNode("Delete Items");
 deleteButton.setAttribute("class","deleteButton");
 deleteButton.setAttribute("onclick","DeleteItems(this)");
 deleteButton.appendChild(deleteButtonText);
 createList.appendChild(deleteButton);
 

 // Edit Items
 var editButton=document.createElement("button");
 var editButtonText=document.createTextNode("Edit Items");
 editButton.setAttribute("class","editButton");
 editButton.setAttribute("onclick","EditItems(this)");
 editButton.appendChild(editButtonText);
 createList.appendChild(editButton);
 listOfUl.appendChild(createList);
 getItems.value="";

}
function DeleteItems(e)
{
    e.parentNode.remove();
}
function EditItems(e)
{
    var takeValueFromUser=prompt("Enter your task",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=takeValueFromUser;
}
function DeleteAllItems()
{
    listOfUl.innerHTML="";
}