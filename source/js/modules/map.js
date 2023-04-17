const createMap = () => {
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

const initMap = () => {
  setTimeout(() => {
    const elem = document.createElement('script');
    elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=4e60ec5c-cc12-418e-bd31-5a60b25aa76e&lang=ru_RU';
    document.querySelector('body').appendChild(elem);
    elem.onload = () => window.ymaps.ready(createMap);
  }, 3000);
};

export {initMap};
