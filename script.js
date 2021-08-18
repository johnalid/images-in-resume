function validation(){
    var name = document.getElementById("firstName").value;



    errorMessage.style.padding = "10px";

    if(name.length <3){
        text = "please enter a valid name";
        errorMessage.innerHTML = text;
        return false;
    }

    if(name ==name){
        text = "your are" +" " + name;
        errorMessage.innerHTML = text;
        return true;
    }


    alert("your Name is Taken, Thanks !")

    return false;
 






}