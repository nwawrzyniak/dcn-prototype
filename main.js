function onLoad() {
    const deskImage = document.querySelector(".desk_pane");
    deskImage.onload = function () {
        const circle1 = document.querySelector("#circle1");
        const circle2 = document.querySelector("#circle2");
        const circle3 = document.querySelector("#circle3");
        const circle4 = document.querySelector("#circle4");
        const circle5 = document.querySelector("#circle5");
        // Für weiteren Kreis die obere Zeile kopieren und die Zahl an beiden Stellen um 1 erhöhen
        const overlay1 = document.querySelector("#overlay1");
        const overlay2 = document.querySelector("#overlay2");
        const overlay3 = document.querySelector("#overlay3");
        const overlay4 = document.querySelector("#overlay4");
        const overlay5 = document.querySelector("#overlay5");
        // Für weiteres Overlay die obere Zeile kopieren und die Zahl an beiden Stellen um 1 erhöhen
        let current;

        function handleOverlay(overlay) {
            function toggle() {
                if (current) {
                    current.style.display = "";
                    if (current === overlay) {
                        current = null;
                        return;
                    }
                }
                current = overlay;
                current.style.display = "inline-block";
            }
            return toggle;
        }

        function deactivateOverlays() {
            function deactivate() {
                if (current != null) {
                    current.style.display = "";
                    current = null;
                }
            }
            return deactivate;
        }

        circle1.addEventListener('click', handleOverlay(overlay1));
        circle2.addEventListener('click', handleOverlay(overlay2));
        circle3.addEventListener('click', handleOverlay(overlay3));
        circle4.addEventListener('click', handleOverlay(overlay4));
        circle5.addEventListener('click', handleOverlay(overlay5));
        // Für weiteren Kreis mit zugehörigem Overlay die obere Zeile kopieren und die Zahl an beiden Stellen um 1 erhöhen

        deskImage.addEventListener('click', deactivateOverlays()); // Diese Zeile auskommentieren, damit ein Klick auf eine freie Fläche im Bild NICHT das aktuell geöffnete Overlay schließt

        const circle1X = 0.47;
        const circle1Y = 0.8;
        const circle2X = 0.88;
        const circle2Y = 0.63;
        const circle3X = 0.1;
        const circle3Y = 0.7;
        const circle4X = 0.2;
        const circle4Y = 0.15;
        const circle5X = 0.9;
        const circle5Y = 0.1;
        // Für weiteren Kreis die zwei Zeilen über dieser kopieren, die Zahl im Namen um 1 erhöhen und die neuen Positionen angeben

        const overlay1X = 0.55;
        const overlay1Y = 0.5;
        const overlay2X = 0.57;
        const overlay2Y = 0.8;
        const overlay3X = 0.18;
        const overlay3Y = 0.6;
        const overlay4X = 0.2;
        const overlay4Y = 0.3;
        const overlay5X = 0.75;
        const overlay5Y = 0.25;
        // Für weiteres Overlay die zwei Zeilen über dieser kopieren, die Zahl im Namen um 1 erhöhen und die neuen Positionen angeben

        function positionCircles() {
            const rect = deskImage.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            circle1.style.left = width * circle1X + rect.left + 'px';
            circle1.style.top = height * circle1Y + 'px';
            circle2.style.left = width * circle2X + rect.left + 'px';
            circle2.style.top = height * circle2Y + 'px';
            circle3.style.left = width * circle3X + rect.left + 'px';
            circle3.style.top = height * circle3Y + 'px';
            circle4.style.left = width * circle4X + rect.left + 'px';
            circle4.style.top = height * circle4Y + 'px';
            circle5.style.left = width * circle5X + rect.left + 'px';
            circle5.style.top = height * circle5Y + 'px';
            // Für weiteren Kreis die oberen zwei Zeilen kopieren und die Zahl an beiden Stellen um 1 erhöhen
        }

        function positionOverlays() {
            const rect = deskImage.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            overlay1.style.left = width * overlay1X + rect.left + 'px';
            overlay1.style.top = height * overlay1Y + 'px';
            overlay2.style.left = width * overlay2X + rect.left + 'px';
            overlay2.style.top = height * overlay2Y + 'px';
            overlay3.style.left = width * overlay3X + rect.left + 'px';
            overlay3.style.top = height * overlay3Y + 'px';
            overlay4.style.left = width * overlay4X + rect.left + 'px';
            overlay4.style.top = height * overlay4Y + 'px';
            overlay5.style.left = width * overlay5X + rect.left + 'px';
            overlay5.style.top = height * overlay5Y + 'px';
            // Für weiteres Overlay die oberen zwei Zeilen kopieren und die Zahl an beiden Stellen um 1 erhöhen
        }

        function positionCirclesAndOverlays() {
            positionCircles();
            positionOverlays();
        }

        window.addEventListener("resize", positionCirclesAndOverlays);
        positionCirclesAndOverlays();
    };

    // In case the image is already cached and loaded
    if (deskImage.complete) {
        // Trigger the onload event manually
        deskImage.onload();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onLoad);
} else {
    onLoad();
}
