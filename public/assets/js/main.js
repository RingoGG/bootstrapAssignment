document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll("#menu li");

    menuItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#333"; // Change to your desired hover color
        });

        item.addEventListener("mouseout", function() {
            this.style.backgroundColor = ""; // Revert to the original color (empty string means use the CSS style)
        });
    });
});