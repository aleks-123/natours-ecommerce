/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWxla3MxMjMiLCJhIjoiY2w3a3NxejVtMHUzMjNvbWd1N2V2N2Q2eiJ9.rqWa0elGPHlSCY289X8pMg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aleks123/cl7ktpxeh000315ryb02w3uvh/draft',
    scrollZoom: false,
    // center: [-118.11391, 34.1117425],
    // zoom: 6,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      className: 'map-popup-manual',
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
