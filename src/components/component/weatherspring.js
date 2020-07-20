// import React from 'react';
// import Weatheranim from '../components/weather'
// import { useTransition, animated } from 'react-spring';

// const WeatherContainer = ({ items }) => {
//   const transition = useTransition(items, items => items.id, {
//     from: { opacity: 0, marginLeft: -100, marginRight: 100 },
//     enter: { opacity: 1, marginLeft: 0, marginRight: 0 }
//   });

//   return (
//     <>
//       {transition.map(({ item, key, props }) => (
//         <animated.div key={key} style={props} className="weatherdata">
//           <Weatheranim item={item} />
//         </animated.div>
//             ))}
//       </>
//   );

// }

// export default WeatherContainer;
