/**
 * name: information stand
 * author: nwawrzyniak
 * version: v1.0.0
 * license: This software is part of the public domain. Have fun! ✌️
 */

/*
 * Hallo Schwesterherz! <3
 * Willkommen im Konfigurator deines digitalen Infostandes!
 * 
 * Wenn du in dieser Datei Änderungen vornehmen willst, solltest du folgende Dinge vorher erledigt haben:
 * - Im HTML das Bild austauschen
 * - Durchzählen, wie viele interaktive Elemente es geben wird
 * - So viele Kreise im HTML anlegen
 * - Die dazugehörigen Texte ("Overlays") im HTML anlegen
 * 
 * Wenn im HTML alles angepasst und vorbereitet ist, kann es losgehen! :)
 */

// ANFANG DES KONFIGURATIONS-BEREICHES

/**
 * Das ist der DEBUG-Flag.
 * Wenn er auf true gesetzt ist, sind alle Boxen immer sichtbar. Dadurch kann man sie leichter positionieren.
 * Ersetz hier also einfach false durch true, wenn du Elemente positionieren willst.
 * Nach getaner Arbeit sollte dieser Flag wieder auf false gesetzt werden.
 */
const DEBUG = false;

/**
 * Hier kommen die Koordinaten der Kreise rein.
 * Es sollte genau so viele Einträge geben, wie es interaktive Objekte gibt.
 * Die Koordinaten sind im Format [X, Y] Werte zwischen 0 und 1.
 * 0 im X-Feld heißt "ganz links", 1 im X-Feld heißt "ganz rechts". 
 * 0 im Y-Feld heißt "ganz oben", 1 im Y-Feld heißt "ganz unten". 
 */
const kreisKoordinaten = [
    [0.47, 0.80], // Flyer
    [0.88, 0.63], // Mondlandung
    [0.10, 0.70], // Erde ist Scheibe
    [0.20, 0.15], // Digital Check
    [0.90, 0.10] // Tablet
];

/**
 * Hier kommen die Koordinaten der Texte rein.
 * Alles funktioniert genau wie oben für die Kreise.
 */
const textKoordinaten = [
    [0.55, 0.50], // Flyer
    [0.57, 0.80], // Mondlandung
    [0.18, 0.60], // Erde ist Scheibe
    [0.20, 0.30], // Digital Check
    [0.75, 0.25] // Tablet
];

// ENDE DES KONFIGURATIONS-BEREICHES

/**
 * So. Das war's auch schon! :)
 * Speichern -> Seite aufrufen und das Ergebnis testen. Bei Bedarf die Werte anpassen.
 * Wenn du zufrieden bist nicht vergessen den DEBUG-Flag wieder auf false zu setzen.
 */

// ENDE DES NUTZERFREUNDLICHEN BEREICHES

// GEFAHRENGRENZE!
// AB HIER NIX ANFASSEN!

function onLoad() {
    const deskImage = document.querySelector(".bild_desktop");
    deskImage.onload = function () {
        const circles = document.querySelectorAll(".kreis");
        const overlays = document.querySelectorAll(".text");
        let current;

        if (DEBUG) {
            overlays.forEach(element => {
                element.style.display = "inline-block";
            });
        }

        function handleOverlay(overlay) {
            if (!DEBUG) {
                function toggle() {
                    if (current) {
                        current.style.display = "none";
                        if (current === overlay) {
                            current = null;
                            return;
                        }
                    }
                    current = overlay;
                    current.style.display = "inline-block";
                }
                return toggle;
            } else {
                // ToDo
            }
        }

        function deactivateOverlays() {
            if (current != null) {
                current.style.display = "none";
                current = null;
            }
        }

        for (let i = 0; i < circles.length; i++) {
            circles[i].addEventListener("click", handleOverlay(overlays[i]));
        }

        if (!DEBUG) {
            deskImage.addEventListener("click", deactivateOverlays);
        }

        function positionCircles() {
            const rect = deskImage.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            for (let i = 0; i < circles.length; i++) {
                circles[i].style.left = width * kreisKoordinaten[i][0] + rect.left + "px";
                circles[i].style.top = height * kreisKoordinaten[i][1] + 'px';
            }
        }

        function positionOverlays() {
            const rect = deskImage.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            for (let i = 0; i < overlays.length; i++) {
                overlays[i].style.left = width * textKoordinaten[i][0] + rect.left + "px";
                overlays[i].style.top = height * textKoordinaten[i][1] + "px";
            }
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
