const inputBox=document.getElementById("task")
const listContainer=document.getElementById("userList")


function newElement(){
    if(inputBox.value.trim()===''){
     let x = document.getElementById("snackbar");
     x.className = "show";
     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);  
        let x = document.getElementById("snackbar1");
        x.className = "show";
     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    inputBox.value="";
    saveData();
    
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();