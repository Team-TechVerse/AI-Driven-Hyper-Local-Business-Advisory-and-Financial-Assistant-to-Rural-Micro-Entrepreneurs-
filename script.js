const heroLocation = document.getElementById("heroLocation");
const exploreBtn = document.getElementById("exploreBtn");

const locationInput = document.getElementById("locationInput");
const businessInput = document.getElementById("businessInput");
const capitalInput = document.getElementById("capitalInput");

const mapBtn = document.getElementById("mapBtn");
const mapLocationText = document.getElementById("mapLocationText");


/* =========================
   HERO EXPLORE BUTTON
========================= */

if (exploreBtn && heroLocation && locationInput) {

    exploreBtn.addEventListener("click", () => {

        const location = heroLocation.value.trim();

        if (!location) {

            heroLocation.focus();

            heroLocation.style.outline =
                "2px solid #55715c";

            setTimeout(() => {
                heroLocation.style.outline = "none";
            }, 1200);

            return;
        }

        locationInput.value = location;

        if (mapLocationText) {
            mapLocationText.textContent =
                `Ready to explore ${location} on OpenStreetMap`;
        }

        document.getElementById("explore").scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* =========================
   LOCATION UPDATE
========================= */

if (locationInput && mapLocationText) {

    locationInput.addEventListener("input", () => {

        const location =
            locationInput.value.trim();

        if (location) {

            mapLocationText.textContent =
                `Ready to explore ${location} on OpenStreetMap`;

        } else {

            mapLocationText.textContent =
                "Enter a location to explore your local market";

        }

    });

}


/* =========================
   EXPLORE LOCAL MARKET
========================= */

if (mapBtn && locationInput) {

    mapBtn.addEventListener("click", () => {

        const location =
            locationInput.value.trim();

        if (!location) {

            alert(
                "Please enter a village, block or district first."
            );

            locationInput.focus();

            return;
        }

        const encodedLocation =
            encodeURIComponent(location);

        const mapUrl =
            `pages/map.html?location=${encodedLocation}`;

        console.log("Opening map:", mapUrl);

        window.location.href = mapUrl;

    });

}