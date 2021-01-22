var list=document.getElementById("list")
function butn(){
    var inputs=document.getElementById("to_item");
    var li=document.createElement('li');
    var textli=document.createTextNode(to_item.value)

//delet buttin
var delbtn=document.createElement('button');
var deltext=document.createTextNode("delte")
delbtn.appendChild(deltext)
li.appendChild(delbtn)
    li.appendChild(textli)
    delbtn.setAttribute("class","btn");
    delbtn.setAttribute("onclick","deleteitem(this)")

    var edit=document.createElement("button");
    var edittext=document.createTextNode("Edit")
    edit.appendChild(edittext);
    edit.setAttribute("onclick","editbtn(this)")
    li.appendChild(edit)
list.appendChild(li)
console.log(li)
to_item.value="";
    // console.log(inputs.value);
  
}

function deleteitem(e){
    e.parentNode.remove(e);
    console.log(e)
}
function editbtn(e){
    var val=prompt("enetr value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;
}
function btn(){
    list.innerHTML="";
}