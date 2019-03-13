import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
class Loader extends Component {
    

    render() {
      return (

        <section className="loader">
         <CircularProgressbar 
         percentage={this.props.loader}
         text={`${this.props.loader}%`}/>

        </section>
      );
    }
  }
  
  export default Loader;

//   <style>
// #growing {
//   transition: font-size 3s, color 2s;
// }
// </style>

// <script>
// growing.onclick = function() {
//   this.style.fontSize = '36px';
//   this.style.color = 'red';
// };
// </script>