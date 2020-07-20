// import React, { Component } from 'react'

// export default class Weathers extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             key:"dbe4e6036b179b241f68b078f58c0c5a",
//             base: "https://api.openweathermap.org/data/2.5/",
//             query: "",
//             weather: {}
//         }

//             this.handleGetData = this.handleGetData.bind(this)
//             this.handleChange = this.handleChange.bind(this)
//         }

//         handleChange(event) {
//         this.setState({ query: event.target.files })
//         }


//         handleGetData() {
//         const query, setQuery = this.setState('');
//         const weather, setWeather = this.setState({});
//         const search = event => {
//             if (event.key === "Enter") {
//             fetch(`${this.state.base}weather?q=${query}&units=imperial&APPID=${this.state.key}`)
//                 .then(response => response.json())
//                 .then(result => {
//                 setWeather(result); 
//                 setQuery('');
//                 console.log(result)
//                 .catch(error => console.log(error))
//                 })
//             }
//         }
//     }   
    
//     render() {
//         return (
//             <div className="weatherApp">
//             <main> 
//                 <div className="searchBox">
//                     <input 
//                     type="text" 
//                     className="searchBar" 
//                     placeholder= "How's the weather in..."
//                     onChange={this.handleChange}
//                     value={this.state.query}
//                     onKeyPress={this.state.handleGetData}
//                     />
//                 </div>
//             </main>
//             </div>
//         );
//     }
// }

// export default Weathers;
