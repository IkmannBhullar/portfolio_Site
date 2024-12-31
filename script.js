document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    // Function to load HTML into the main section
    const loadSection = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(err => console.error("Error loading section:", err));
    };

    // Default load About section
    loadSection("about.html");

    // Event listener for navbar links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const section = link.getAttribute("href").substring(1) + ".html";
            loadSection(section);
        });
    });
});
