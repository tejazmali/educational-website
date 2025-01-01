// Function to get the current festival greeting based on the Indian calendar
function getFestivalGreeting() {
    const date = new Date();
    const month = date.getMonth(); // 0-11
    const day = date.getDate(); // 1-31

    // Define a list of festivals with their dates for 2025
    const festivals = [
        { month: 0, day: 12, greeting: "Happy National Youth Day!", message: "Empowering the youth for a brighter future." },
        { month: 0, day: 15, greeting: "Happy Pongal!", message: "Wishing you a bountiful harvest!" },
        { month: 0, day: 26, greeting: "Happy Republic Day!", message: "Celebrate the spirit of India!" },
        { month: 1, day: 14, greeting: "Happy Makar Sankranti!", message: "May your life be filled with happiness and abundance." },
        { month: 1, day: 30, greeting: "Remembering Martyrs' Day!", message: "Honoring those who sacrificed for our freedom." },
        { month: 2, day: 17, greeting: "Happy Holi!", message: "Let the colors of Holi brighten your life!" },
        { month: 3, day: 21, greeting: "Happy World Poetry Day!", message: "Celebrate the art of words and expression." },
        { month: 4, day: 1, greeting: "Happy April Fool's Day!", message: "May your day be filled with laughter!" },
        { month: 4, day: 30, greeting: "Eid ul-Fitr Mubarak!", message: "Celebrate the joy of togetherness." },
        { month: 7, day: 5, greeting: "Happy Raksha Bandhan!", message: "Cherish the bond of love and protection." },
        { month: 7, day: 11, greeting: "Happy Janmashtami!", message: "May Lord Krishna bless you with joy." },
        { month: 8, day: 15, greeting: "Happy Independence Day!", message: "Celebrating our freedom and unity!" },
        { month: 8, day: 21, greeting: "Happy Ganesh Chaturthi!", message: "Wishing you success and prosperity." },
        { month: 8, day: 29, greeting: "Happy Navratri!", message: "May the divine energies guide you." },
        { month: 9, day: 2, greeting: "Happy Mahatma Gandhi Jayanti!", message: "Remembering the father of the nation." },
        { month: 9, day: 9, greeting: "Happy Dussehra!", message: "Victory of good over evil!" },
        { month: 10, day: 4, greeting: "Happy Karva Chauth!", message: "Wishing you a happy and prosperous marriage." },
        { month: 10, day: 21, greeting: "Happy Diwali!", message: "May this Diwali illuminate your life with joy and happiness." },
        { month: 11, day: 25, greeting: "Merry Christmas!", message: "Wishing you peace, joy, and love this season." },
        { month: 11, day: 26, greeting: "Happy Constitution Day!", message: "Celebrating the spirit of our Constitution." },
    ];

    // Find the festival matching the current date
    return festivals.find(f => f.month === month && f.day === day) || null;
}

// Create a function to show the pop-up
function showPopup() {
    const festival = getFestivalGreeting(); // Get the greeting based on the date

    if (festival) { // Show pop-up only if there's a festival
        const popupOverlay = document.createElement('div');
        popupOverlay.id = 'popup';
        popupOverlay.style.opacity = '0'; // Start with opacity 0 for fade-in effect

        const popupContent = document.createElement('div');
        popupContent.className = 'popup-content';

        popupContent.innerHTML = `
            <div class="icon-circle">
                <img src="/Images/namaste.gif" alt="Icon" class="icon-gif" />
            </div>
            <span class="close-btn" onclick="closePopup()">&times;</span>
            <h2>${festival.greeting}</h2>
            <p>${festival.message}</p> <!-- Customized greeting message -->
        `;

        popupOverlay.appendChild(popupContent);
        document.body.appendChild(popupOverlay);

        // Fade in the popup
        setTimeout(() => {
            popupOverlay.style.opacity = '1';
        }, 10);

        // Automatically close the pop-up after a certain duration (e.g., 5 seconds)
        setTimeout(() => {
            closePopup();
        }, 4000);
    }
}

// Function to close the pop-up
function closePopup() {
    const popupOverlay = document.getElementById('popup');
    if (popupOverlay) {
        popupOverlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(popupOverlay);
        }, 500); // Wait for the fade-out transition
    }
}

// Display the pop-up after a delay (e.g., 3 seconds)
window.onload = () => {
    setTimeout(showPopup, 1000);
};
