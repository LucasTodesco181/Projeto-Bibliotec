const menu = document.getElementById("menu"); //pegando o elemento pelo id

const navMenu = document.querySelector(".navegacao");//pegando o elemento de forma generia, classe com . ou id com #

menu.addEventListener("click", function() {

    // if(navMenu.className == "navegacao") {
    //     navMenu.className = "navegacao ativo";
    // }

    // else {
    //     navMenu.className = "navegacao";
    // }

    navMenu.className = navMenu.className == "navegacao" ? "navegacao ativo" : "navegacao" ;
})
