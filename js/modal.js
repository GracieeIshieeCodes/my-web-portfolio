function openModal(imageSrc, description) {
// Open the modal
document.getElementById("myModal").style.display = "block";

// Set the image source and description
const modalImage = document.getElementById("modalImage");
modalImage.src = imageSrc;  // Set the image source dynamically
modalImage.alt = description;

// Set the description text
const modalDescription = document.getElementById("modalDescription");
modalDescription.innerText = description;
}

function closeModal() {
document.getElementById("myModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
if (event.target == document.getElementById("myModal")) {
  closeModal();
}
}

