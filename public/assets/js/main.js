// Change the color of menu items and add stroke on the left when user hover
document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll("nav li");

    menuItems.forEach(function(item) {
        var link = item.querySelector("a");

        link.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#333"; 
            this.style.borderLeft = "3px solid #DDE2FF";
        });

        link.addEventListener("mouseout", function() {
            this.style.backgroundColor = ""; 
            this.style.borderLeft = "none";
        });
    });
});