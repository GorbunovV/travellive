(function () {
  const $map = $('.js-map');

  if ($map.length === 0) return false;

  $map.each(function () {
    const id = $(this).attr('id');
    const center = $(this).data('center').split(',');
    const coords = $(this).data('coords').split(',');

    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map(id, {
        center: center,
        zoom: 11,
        controls: ['zoomControl']
      }, {
        searchControlProvider: 'yandex#search'
      }),
          myPlacemark = new ymaps.Placemark(coords, {}, {
        preset: 'islands#dotIcon',
        iconColor: '#541167'
      });

      myMap.geoObjects.add(myPlacemark);
    }
  });
})();