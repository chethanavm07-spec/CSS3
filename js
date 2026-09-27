// Toggle menu

function toggleMenu() {

    const menu =
        document.getElementById("menu");

    menu.classList.toggle("show");

}


// Refresh button

function refreshPage() {

    location.reload();

}


// Watch tutorial

function watchTutorial() {

    alert(
        "Task tutorial will open here."
    );

    // You can replace the line above with:
    // window.open("YOUR_YOUTUBE_LINK", "_blank");

}


// Submit work

function submitWork() {

    const confirmation =
        confirm(
            "Do you want to submit your work?"
        );


    if (confirmation) {

        alert(
            "Your work has been submitted successfully!"
        );

    }

}