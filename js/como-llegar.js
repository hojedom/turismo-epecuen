function initMap() {
    var epecuen = {lat: -37.133087395593776, lng: -62.81048208467871};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: epecuen,
        mapTypeId: 'roadmap'});

    var marker = new google.maps.Marker({
        position: epecuen,
        map: map,
        title: 'Epecuén'
    });
    map.setCenter(marker.getPosition());
}

window.onload = initMap;