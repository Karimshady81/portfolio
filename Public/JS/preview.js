const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Get modal element and close button
const modal = document.getElementById('livePreviewModal');
const closeBtn = document.querySelector('.close-btn');
const livePreviewFrame = document.getElementById('livePreviewFrame');

// Get all "Live Preview" buttons
const previewButtons = document.querySelectorAll('.btn');

// Function to open modal with specific project link
function openModal(link) {
    livePreviewFrame.src = link;
    modal.style.display = 'block';
}

// Add click event to each "Live Preview" button
previewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectLink = button.getAttribute('data-link');
        openModal(projectLink);
    });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    livePreviewFrame.src = ''; // Clear the iframe src when closing
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
        livePreviewFrame.src = ''; // Clear the iframe src when closing
    }
});


function openCVModal() {
    document.getElementById("cvModal").style.display = "block";
}

function closeCVModal() {
    document.getElementById("cvModal").style.display = "none";
}

function showSlide(index) {
    sliderItems.forEach((item, idx) => {
        item.classList.remove('active');
        if (idx === index) {
            item.classList.add('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
});
