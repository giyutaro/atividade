function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value
    alert(email)
}

function mostrarmenu($event){
    let menu = document.getElementById("menu")

    if(menu.style.display == "none"){
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }

    event.preventDefault ();
}