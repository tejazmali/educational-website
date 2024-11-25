// Function to get the current festival greeting based on the Indian calendar
function getFestivalGreeting() {
    const date = new Date();
    const month = date.getMonth(); // 0-11
    const day = date.getDate(); // 1-31
    const year = date.getFullYear(); // Get the current year

    // Simple festival greeting logic based on month and date
    if (month === 10 && day === 1) { // Diwali (October 27, 2024)
        return { greeting: "Happy Diwali!", message: "May this Diwali illuminate your life with joy and happiness." };
    } else if (month === 11 && day === 14) { // Eid (varies)
        return { greeting: "Eid Mubarak!", message: "Wishing you a blessed Eid filled with peace and joy." };
    } else if (month === 0 && day === 26) { // Republic Day (January 26)
        return { greeting: "Happy Republic Day!", message: "Celebrate the spirit of India!" };
    } else if (month === 0 && day === 15) { // Pongal / Makar Sankranti (January 15)
        return { greeting: "Happy Pongal!", message: "Wishing you a bountiful harvest!" };
    } else if (month === 1 && day === 14) { // Makar Sankranti (January 14, sometimes)
        return { greeting: "Happy Makar Sankranti!", message: "May your life be filled with happiness and abundance." };
    } else if (month === 2 && day === 8) { // Holi (March 8, 2024)
        return { greeting: "Happy Holi!", message: "Let the colors of Holi brighten your life!" };
    } else if (month === 4 && day === 15) { // Eid ul-Fitr (varies)
        return { greeting: "Eid ul-Fitr Mubarak!", message: "Celebrate the joy of togetherness." };
    } else if (month === 7 && day === 15) { // Raksha Bandhan (August 15, 2024)
        return { greeting: "Happy Raksha Bandhan!", message: "Cherish the bond of love and protection." };
    } else if (month === 7 && day === 22) { // Janmashtami (August 22, 2024)
        return { greeting: "Happy Janmashtami!", message: "May Lord Krishna bless you with joy." };
    } else if (month === 8 && day === 2) { // Ganesh Chaturthi (September 2, 2024)
        return { greeting: "Happy Ganesh Chaturthi!", message: "Wishing you success and prosperity." };
    } else if (month === 9 && day === 2) { // Navratri (October 2, 2024)
        return { greeting: "Happy Navratri!", message: "May the divine energies guide you." };
    } else if (month === 9 && day === 25) { // Dussehra (October 25, 2024)
        return { greeting: "Happy Dussehra!", message: "Victory of good over evil!" };
    } else if (month === 11 && day === 25) { // Christmas (December 25)
        return { greeting: "Merry Christmas!", message: "Wishing you peace, joy, and love this season." };
    } else if (month === 0 && day === 12) { // National Youth Day (January 12)
        return { greeting: "Happy National Youth Day!", message: "Empowering the youth for a brighter future." };
    } else if (month === 1 && day === 30) { // Martyrs' Day (January 30)
        return { greeting: "Remembering Martyrs' Day!", message: "Honoring those who sacrificed for our freedom." };
    } else if (month === 3 && day === 21) { // World Poetry Day (March 21)
        return { greeting: "Happy World Poetry Day!", message: "Celebrate the art of words and expression." };
    } else if (month === 4 && day === 1) { // April Fool's Day (April 1)
        return { greeting: "Happy April Fool's Day!", message: "May your day be filled with laughter!" };
    } else if (month === 7 && day === 5) { // Teacher's Day (September 5)
        return { greeting: "Happy Teacher's Day!", message: "Thank you for guiding us!" };
    } else if (month === 8 && day === 15) { // Independence Day (August 15)
        return { greeting: "Happy Independence Day!", message: "Celebrating our freedom and unity!" };
    } else if (month === 9 && day === 19) { // Mahatma Gandhi Jayanti (October 2)
        return { greeting: "Happy Mahatma Gandhi Jayanti!", message: "Remembering the father of the nation." };
    } else if (month === 10 && day === 14) { // Karva Chauth (October 14, 2024)
        return { greeting: "Happy Karva Chauth!", message: "Wishing you a happy and prosperous marriage." };
    } else if (month === 11 && day === 26) { // Constitution Day (November 26)
        return { greeting: "Happy Constitution Day!", message: "Celebrating the spirit of our Constitution." };
    } else {
        return { greeting: "welcome" };
    }
}

// Create a function to show the pop-up
function showPopup() {
    const festival = getFestivalGreeting(); // Get the greeting based on the date

    if (festival) { // Show pop-up only if there's a greeting
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
