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
});
