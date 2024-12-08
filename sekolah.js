document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');

    // Open the sidebar when the open button is clicked
    openBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        openBtn.classList.add('hide'); // Hide the open button
    });

    // Close the sidebar when the close button is clicked
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
        openBtn.classList.remove('hide'); // Show the open button again
    });
});
