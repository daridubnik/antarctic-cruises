const initMap = () => {
  const ymaps = window.ymaps;

  ymaps.ready(function () {
    let map = new ymaps.Map('map', {
      center: [59.93866382862344, 30.322931431755293],
      zoom: 16,
    });

    let placemark = new ymaps.Placemark([59.93866382862344, 30.322931431755293], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/png/marker.png',
      iconImageSize: [22, 27],
      iconImageOffset: [-30, -15],
    });

    map.geoObjects.add(placemark);
  });
};

export {initMap};
