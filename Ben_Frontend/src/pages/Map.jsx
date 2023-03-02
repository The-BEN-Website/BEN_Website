import React from 'react'
import Header from './Map_Section/Header'
import MapSection from './Map_Section/Map1' // import the map here


// const location = {
//   address: '1600 Amphitheatre Parkway, Mountain View, california.',
//   lat: 37.42216,
//   lng: -122.08427,
// } // our location object from earlier

// const App = () => (
//   <div className="App">
//     {/* <MapSection location={location} zoomLevel={17}/> */}
//     <MapSection/>
//   </div>
// )
const App = () => {
  return (
    <div className="App flex flex-col h-fit">
      <Header />
      <MapSection />
    </div>
  )
}

export default App