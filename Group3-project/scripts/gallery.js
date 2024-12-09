/* 
Function: initializeLightbox
Description:
This function sets up the lightbox feature for the "Gallery" page. The lightbox lets users view images in a fullscreen overlay.

What it does:
- Creates the lightbox and its components (image display, close button) when needed.
- Opens the lightbox when a user clicks on an image.
- Shows the clicked image in the center of the screen.
- Allows users to close the lightbox by clicking the background, the close button, or pressing the Esc key.

Key Details:
- `lightboxInitialized`: Makes sure the lightbox setup only happens once.
- `imgSrc`: Grabs the URL of the image the user clicked.

How to use:
- Just click an image in the gallery, and the lightbox will handle the rest.
- It's designed to give users a clean, focused experience for viewing images.
*/



$(document).ready(function () {
    // Lightbox initialization flag
    let lightboxInitialized = false;

    // Open lightbox when an image is clicked
    $(".gallery-grid a").on("click", function (e) {
        e.preventDefault(); // Prevent default link action

        // Initialize lightbox on first interaction
        if (!lightboxInitialized) {
            initializeLightbox();
            lightboxInitialized = true;
        }

        const imgSrc = $(this).attr("href"); // Get the image URL
        $("#lightbox-img").attr("src", imgSrc).show(); // Set lightbox image and display it
        $("#lightbox").fadeIn(); // Show lightbox
    });

    // Function to initialize lightbox
    function initializeLightbox() {
        // Append the lightbox HTML to the body
        $("body").append(`
            <div id="lightbox" style="display:none;">
                <span id="close">&times;</span>
                <img id="lightbox-img" src="" alt="" style="display: none;">
            </div>
        `);

        // Close lightbox when the close button is clicked
        $("#close, #lightbox").on("click", function () {
            $("#lightbox").fadeOut(function () {
                $("#lightbox-img").hide().attr("src", ""); // Reset image src and hide it
            });
        });

        // Close lightbox when the Esc key is pressed
        $(document).on("keydown", function (e) {
            if (e.key === "Escape") { // Check if the pressed key is Esc
                $("#lightbox").fadeOut(function () {
                    $("#lightbox-img").hide().attr("src", ""); // Reset image src and hide it
                });
            }
        });
    }
});
