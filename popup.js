// Function to get the current festival greeting based on Indian festivals (2025 approximations)
function getFestivalGreeting() {
    const date = new Date();
    const month = date.getMonth(); // 0 = January, 11 = December
    const day = date.getDate();

    // List of festivals (dates for 2025 are approximate)
    const festivals = [
        { month: 0, day: 12, greeting: "Happy National Youth Day!", message: "Empowering the youth for a brighter future." },
        { month: 0, day: 14, greeting: "Happy Pongal!", message: "Wishing you a bountiful harvest!" },
        { month: 0, day: 26, greeting: "Happy Republic Day!", message: "Celebrate the spirit of India!" },
        { month: 0, day: 30, greeting: "Remembering Martyrs' Day!", message: "Honoring those who sacrificed for our freedom." },
        { month: 2, day: 6,  greeting: "Happy Holi!", message: "Let the vibrant colors of Holi brighten your life!" },
        // Note: Eid ul-Fitr dates change by region; this is a placeholder date
        { month: 3, day: 21, greeting: "Eid ul-Fitr Mubarak!", message: "Celebrate the joy of togetherness." },
        { month: 7, day: 2,  greeting: "Happy Raksha Bandhan!", message: "Cherish the bond of love and protection." },
        { month: 7, day: 30, greeting: "Happy Janmashtami!", message: "May Lord Krishna bless you with joy." },
        { month: 7, day: 15, greeting: "Happy Independence Day!", message: "Celebrating our freedom and unity!" },
        { month: 8, day: 5,  greeting: "Happy Ganesh Chaturthi!", message: "Wishing you success and prosperity." },
        { month: 9, day: 1,  greeting: "Happy Navratri!", message: "May the divine energies guide you." },
        { month: 9, day: 11, greeting: "Happy Dussehra!", message: "Victory of good over evil!" },
        { month: 9, day: 25, greeting: "Happy Karva Chauth!", message: "Wishing you a happy and prosperous bond." },
        { month: 10, day: 1, greeting: "Happy Diwali!", message: "May your life be illuminated with joy and happiness." },
        { month: 10, day: 26, greeting: "Happy Constitution Day!", message: "Celebrating the spirit of our Constitution." },
        { month: 11, day: 25, greeting: "Merry Christmas!", message: "Wishing you peace, joy, and love this season." }
    ];

    // Return the festival that matches today's date or null if none
    return festivals.find(f => f.month === month && f.day === day) || null;
}

// Function to show the pop-up
function showPopup() {
    // Prevent duplicate pop-ups
    if (document.getElementById('popup')) return;

    const festival = getFestivalGreeting();
    if (!festival) return;

    // Create the overlay element
    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'popup';
    popupOverlay.style.opacity = '0';
    popupOverlay.style.position = 'fixed';
    popupOverlay.style.top = '0';
    popupOverlay.style.left = '0';
    popupOverlay.style.width = '100%';
    popupOverlay.style.height = '100%';
    popupOverlay.style.background = 'rgba(0, 0, 0, 0.5)';
    popupOverlay.style.display = 'flex';
    popupOverlay.style.justifyContent = 'center';
    popupOverlay.style.alignItems = 'center';
    popupOverlay.style.transition = 'opacity 0.5s ease';

    // Create the content container
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContent.style.background = '#fff';
    popupContent.style.padding = '20px';
    popupContent.style.borderRadius = '10px';
    popupContent.style.textAlign = 'center';
    popupContent.style.position = 'relative';
    popupContent.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    popupContent.style.transition = 'transform 0.3s ease';
    popupContent.style.transform = 'scale(0.8)';

    // Insert the HTML for the pop-up content
    popupContent.innerHTML = `
        <div style="display: flex; justify-content: center; margin-bottom: 10px;">
            <img src="/Images/namaste.gif" alt="Icon" style="width: 80px; height: 80px;" />
        </div>
        <span style="position: absolute; top: 10px; right: 15px; cursor: pointer; font-size: 20px;" onclick="closePopup()">&times;</span>
        <h2 style="margin: 10px 0; color: #333;">${festival.greeting}</h2>
        <p style="color: #666;">${festival.message}</p>
    `;

    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    // Animate the pop-up appearance
    setTimeout(() => {
        popupOverlay.style.opacity = '1';
        popupContent.style.transform = 'scale(1)';
    }, 10);

    // Automatically close the pop-up after 4 seconds
    setTimeout(closePopup, 4000);
}

// Function to close the pop-up
function closePopup() {
    const popupOverlay = document.getElementById('popup');
    if (popupOverlay) {
        popupOverlay.style.opacity = '0';
        if (popupOverlay.firstChild) {
            popupOverlay.firstChild.style.transform = 'scale(0.8)';
        }
        setTimeout(() => {
            popupOverlay.remove();
        }, 500);
    }
}

// Display the pop-up after a short delay when the window loads
window.onload = () => {
    setTimeout(showPopup, 1000);
};
