document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const address = document.getElementById('address').value.trim();

    if (!address) {
        alert("Please enter a valid address.");
        return;
    }

    document.getElementById('popupBox').style.display = 'block';

    loadMap(address);
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupBox').style.display = 'none';
});

function loadMap(address) {
    const mapElement = document.getElementById('map');
    const apiKey = 'YOUR_API_KEY'; // Replace with your Google Maps API key

    mapElement.innerHTML = `<iframe
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=${AIzaSyCK-sQB_bWj2267gh-Lx05UtXPW0uwZqG4}&q=${encodeURIComponent(Spattar Milescu 12a)},Romania" 
        allowfullscreen>
    </iframe>`;
}
