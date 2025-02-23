function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show");
}

document.addEventListener("click", function(event) {
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    // If sidebar is not visible, no need to do anything
    if (!sidebar.classList.contains("show")) return;

    // Check if the click happened inside the sidebar or the menu button
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    let currentPage = window.location.pathname.split("/").pop();

    // If no specific page, default to home
    if (currentPage === "" || currentPage === "index.html") {
        currentPage = "index.html";
    }

    // Remove 'active' class from all menu items
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.classList.remove("active");
    });

    // Highlight the current page link
    let activeLink = document.querySelector(`.sidebar ul li a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }

    // Function to toggle the sidebar on mobile
    window.toggleSidebar = function () {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("show");
    };
});