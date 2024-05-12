// JavaScript for handling comment submission and display
function addComment() {
    var nameInput = document.getElementById("name");
    var commentInput = document.getElementById("message");
    var commentsList = document.getElementById("commentsList");

    var name = nameInput.value;
    var comment = commentInput.value;

    if (name.trim() === "" || comment.trim() === "") {
        alert("Please enter your name and comment.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = "<strong>" + name + ":</strong> " + comment;
    commentsList.appendChild(li);

    nameInput.value = "";
    commentInput.value = "";
}

// Event listener to submit comments
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    addComment(); // Call the addComment function
});
