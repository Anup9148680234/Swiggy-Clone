const navSearch = document.getElementById("nav-search-icon");
const navOffer = document.getElementById("nav-offer-icon");
const navHelp = document.getElementById("nav-help-icon");
const navCart = document.getElementById("nav-cart-icon");
const navUser = document.getElementById("nav-user-icon");

navSearch.parentNode.addEventListener("mouseover", function() {
    navSearch.src = "./icons/search-after.png";
});

navSearch.parentNode.addEventListener("mouseout", function() {
    navSearch.src = "./icons/search.png";
});

navOffer.parentNode.addEventListener("mouseover", function() {
    navOffer.src = "./icons/discount-after.png";
});

navOffer.parentNode.addEventListener("mouseout", function() {
    navOffer.src = "./icons/discount.png";
});

navHelp.parentNode.addEventListener("mouseover", function() {
    navHelp.src = "./icons/help-after.png";
});

navHelp.parentNode.addEventListener("mouseout", function() {
    navHelp.src = "./icons/help.png";
});

navCart.parentNode.addEventListener("mouseover", function() {
    navCart.src = "./icons/cart-after.png";
});

navCart.parentNode.addEventListener("mouseout", function() {
    navCart.src = "./icons/cart.png";
});

navUser.parentNode.addEventListener("mouseover", function() {
    navUser.src = "./icons/user-after.png";
});

navUser.parentNode.addEventListener("mouseout", function() {
    navUser.src = "./icons/user.png";
});






function DarkMode(){
    

    var textLight =  document.getElementById("darktext");
    var textback =  document.getElementById("darkmode");
    
    
    var navMain = document.getElementById("navMain");
    var locA = document.getElementById("locA");
    var locB = document.getElementById("locB");
    var filterHead = document.getElementById("filtertext");
    var elements = document.getElementsByName("lasthead");


    if(navMain.style.backgroundColor == "white"){
        //after
        document.body.style.backgroundColor = "black";
        navMain.style.backgroundColor = "black";
        textLight.innerHTML = "Light";
        textback.style.backgroundColor = "white";
        textback.style.color = "black";
        locA.style.color = "white";
        locB.style.color = "white";
        filterHead.style.color = "white";
        for(var i=0; i< 8; i++){
            elements[i].style.color = "white";
            }
        
    }
    else{
        //before
        document.body.style.backgroundColor = "white";
        navMain.style.backgroundColor = "white";  
        textLight.innerHTML = "Dark";
        textback.style.backgroundColor = "black";
        textback.style.color = "white";
        locA.style.color = "black";
        locB.style.color = "#686b78";
        filterHead.style.color = "#282c3f";
        for(var i=0; i< 8; i++){
        elements[i].style.color = "#282c3f";
        }

    }
}













// const menubutton = getElementById("menu-button");
// const rightDiv = getElementById("right");

// menubutton.addEventListener("click", function(){

    // rightDiv.backgroundColor = "white";
    // rightDiv.position = "absolute";
    // rightDiv.display = "flex";
    // rightDiv.flexFlow = "column wrap";
    // rightDiv.rowGap = "5vh";
    // rightDiv.justifyContent = "flex-start"
    // rightDiv.columnGap = "30px";
    // rightDiv.top = "85px";
    // rightDiv.right = "0px";
    // rightDiv.height = "calc(100vh - 85px)"
    

// });
