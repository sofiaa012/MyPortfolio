// JavaScript for switching the text content
let jobTitles = ["CS Student", "UI/UX Designer"];
let currentTitle = 0;
let jobElement = document.getElementById("job-title");

function changeJobTitle() {
    jobElement.textContent = jobTitles[currentTitle];
    currentTitle = (currentTitle + 1) % jobTitles.length;
}

// Number of raindrops (images)
const numRaindrops = 50;

// Container for the rain effect
const rainContainer = document.querySelector('.rain');

// Function to create a raindrop with your face
function createRaindrop() {
    const raindrop = document.createElement('img');
    raindrop.src = 'image/ribbon.png'; // Replace with the path to your face image
    raindrop.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    raindrop.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random speed of falling
    
    rainContainer.appendChild(raindrop);
}

// Generate the raindrops
for (let i = 0; i < numRaindrops; i++) {
    createRaindrop();
}


// Initially set the first job title
changeJobTitle();

// Change job title every 4 seconds
setInterval(changeJobTitle, 4000);

const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// Toggle the navbar and icon on click
menuIcon.addEventListener('click', () => {
    // Toggle the navbar visibility
    navbar.classList.toggle('active');
    
    // Change the menu icon between hamburger and close (X)
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');   
        menuIcon.classList.add('fa-times');   
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');      
    }
});

function sendMessage() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Construct email body and subject
    var emailSubject = "Message from: " + name;
    var emailBody = "Name: " + name + "\n" +
                    "Email: " + email + "\n\n" +
                    "Message:\n" + message;

    // Create mailto link
    var mailtoLink = "mailto:mtn.sofia@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody);

    // Open mail client
    window.location.href = mailtoLink;

    return false; 
}


