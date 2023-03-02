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



