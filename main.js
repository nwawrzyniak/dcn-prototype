function onLoad() {
    const deskImage = document.querySelector(".desk_pane");
    const circle1 = document.querySelector("#circle1");
    const circle2 = document.querySelector("#circle2");
    const circle3 = document.querySelector("#circle3");
    const circle4 = document.querySelector("#circle4");
    const circle5 = document.querySelector("#circle5");
    const overlay1 = document.querySelector("#overlay1");
    const overlay2 = document.querySelector("#overlay2");
    const overlay3 = document.querySelector("#overlay3");
    const overlay4 = document.querySelector("#overlay4");
    const overlay5 = document.querySelector("#overlay5");
    var current;

    function circleEventListener(overlay) {
        function innerListener(event) {
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
        return innerListener;
    }
    circle1.addEventListener('click', circleEventListener(overlay1));
    circle2.addEventListener('click', circleEventListener(overlay2));
    circle3.addEventListener('click', circleEventListener(overlay3));
    circle4.addEventListener('click', circleEventListener(overlay4));
    circle5.addEventListener('click', circleEventListener(overlay5));

    function positionCircles() {
        const rect = deskImage.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const point1X = 0.47;
        const point1Y = 0.8;
        const point2X = 0.88;
        const point2Y = 0.63;
        const point3X = 0.1;
        const point3Y = 0.7;
        const point4X = 0.2;
        const point4Y = 0.15;
        const point5X = 0.9;
        const point5Y = 0.1;

        circle1.style.left = width * point1X + rect.left + 'px';
        circle1.style.top = height * point1Y + 'px';
        circle2.style.left = width * point2X + rect.left + 'px';
        circle2.style.top = height * point2Y + 'px';
        circle3.style.left = width * point3X + rect.left + 'px';
        circle3.style.top = height * point3Y + 'px';
        circle4.style.left = width * point4X + rect.left + 'px';
        circle4.style.top = height * point4Y + 'px';
        circle5.style.left = width * point5X + rect.left + 'px';
        circle5.style.top = height * point5Y + 'px';
    }

    function positionOverlays() {
        const rect = deskImage.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const point1X = 0.55;
        const point1Y = 0.5;
        const point2X = 0.57;
        const point2Y = 0.8;
        const point3X = 0.18;
        const point3Y = 0.6;
        const point4X = 0.2;
        const point4Y = 0.3;
        const point5X = 0.75;
        const point5Y = 0.25;

        overlay1.style.left = width * point1X + rect.left + 'px';
        overlay1.style.top = height * point1Y + 'px';
        overlay2.style.left = width * point2X + rect.left + 'px';
        overlay2.style.top = height * point2Y + 'px';
        overlay3.style.left = width * point3X + rect.left + 'px';
        overlay3.style.top = height * point3Y + 'px';
        overlay4.style.left = width * point4X + rect.left + 'px';
        overlay4.style.top = height * point4Y + 'px';
        overlay5.style.left = width * point5X + rect.left + 'px';
        overlay5.style.top = height * point5Y + 'px';
    }
    window.addEventListener("resize", positionCircles);
    window.addEventListener("resize", positionOverlays);
    positionCircles();
    positionOverlays();
}

document.addEventListener("DOMContentLoaded", onLoad);
