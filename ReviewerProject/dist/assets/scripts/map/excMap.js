ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
        center: [55.755814, 37.617635],
        zoom: 12,
        controls: [],
    });

    myMap.behaviors.disable('scrollZoom');

    const customMarker = new ymaps.Placemark(
        [55.755814, 37.617635],
        {
            balloonContent: `
                <div class="balloon">
                <div class="balloon__wrapper">
                <div class="balloon_image">
                <img class="d-block" src="../public/assets/images/reviews/review1.jpg" alt="Review" loading="lazy">
</div>

<div class="flex-col flex-items-start gap-1px w-full">
<div class="flex-items-center justify-between w-full gap-8px">

<div class="rating">
                            <div class="text-white xs-text text-bold">
                              5,9
                            </div>
                          </div>
</div>

<p class="m-0 xs-text text-dark">
Экскурсия “Китай-город: Москва деловая, набожная, просвещенная”
</p>
</div>
</div>
</div>
            `
        },
        {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '../public/assets/images/icons/map_marker.svg',
            iconImageSize: [48, 52],
            iconImageOffset: [-15, -15],
            draggable: false,
            iconContentLayout: ymaps.templateLayoutFactory.createClass(
                '<div class="custom-marker"></div>'
            )
        }
    )

    customMarker.events.add('click', function () {
        customMarker.balloon.open()
    })

    const zoomInButton = document.getElementById('zoomInButton')
    const zoomOutButton = document.getElementById('zoomOutButton')

    zoomInButton.addEventListener('click', function() {
        myMap.setZoom(myMap.getZoom() + 1, { duration: 300 })
    })

    zoomOutButton.addEventListener('click', function() {
        myMap.setZoom(myMap.getZoom() - 1, { duration: 300 })
    })

    myMap.geoObjects.add(customMarker);

    // customMarker.balloon.open();
}
