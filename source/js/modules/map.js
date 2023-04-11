let center = [59.93866382862344, 30.322931431755293];

function initMap() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 17
  });

  let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: './../../../img/png/marker.png',
		iconImageSize: [22, 27],
		iconImageOffset: [-30, -15]
	});

  map.geoObjects.add(placemark);
}

export {initMap};
