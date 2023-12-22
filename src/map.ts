import mapboxgl from 'mapbox-gl';

import './map-styles.scss';
import './styles.scss';

declare const __MAPBOX_KEY__: string;

mapboxgl.accessToken = __MAPBOX_KEY__;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/tarkanou/clq1jc30m007k01pldcal9ms6', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  projection: 'globe' as any,
  zoom: 1.5,
});

let spinEnabled = true;
// At low zooms, complete a revolution every two minutes.
const secondsPerRevolution = 120;
// Above zoom level 5, do not rotate.
const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
const slowSpinZoom = 3;

map.on('load', function () {
  map.resize();
  spinGlobe();
});

map.on('moveend', () => {
  spinGlobe();
});

function spinGlobe() {
  const zoom = map.getZoom();
  if (spinEnabled && zoom < maxSpinZoom) {
    let distancePerSecond = 360 / secondsPerRevolution;
    if (zoom > slowSpinZoom) {
      // Slow spinning at higher zooms
      const zoomDif =
    (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
      distancePerSecond *= zoomDif;
    }
    const center = map.getCenter();
    center.lng -= distancePerSecond;
    // Smoothly animate the map over one second.
    // When this animation is complete, it calls a 'moveend' event.
    map.easeTo({ center, duration: 1000, easing: (n) => {return n;} });
  }
}

function setupListeners() {
  // Hide loader and display content
  window.addEventListener('load', function () {
    document.querySelector('.loader').setAttribute('style', 'opacity: 0;');
    document.querySelector('.content').setAttribute('style', 'content: 1;');
  });
  document.querySelector('.popup').addEventListener('click', () => {
    spinEnabled = false;
    document.querySelector('.popup').setAttribute('style', 'opacity: 0; z-index: -1;');
    map.flyTo({
      center: [11.201421355811434, 34.70842440758943],
      zoom: 14,
    });
  });
}
setupListeners();
