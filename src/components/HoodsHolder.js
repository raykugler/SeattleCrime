import React, { Component } from 'react';
import NeighborhoodMenu from './NeighborhoodMenu';
import PrecinctMenu from './PrecinctMenu';
 
class HoodsHolder extends Component {
  constructor(props){
    super(props)
  
  }

turn_on_neighborhood_maker=(e)=>{
  this.refs.neighborhood_menu.neighborhood_maker(e);
}
 
  ref_test=(e)=>{
    console.log(e);
  }
  

    render() {
      return (
        <section className="hoods_holder" id='hood_holder' >
         
          

          <NeighborhoodMenu 
          selecting_hood={this.props.selecting_hood}
          hood_sort_display={this.props.hood_sort_display}
            chosenHood={this.props.chosenHood} 
            precinct={this.props.precinct}
            changeMidDisplay={this.changeMidDisplay}
            ref="neighborhood_menu"
          />

        </section>

      );
    
  }
}
  export default HoodsHolder;


  // <PrecinctMenu 
  // ref='precinct_menu'
  //   changeMidDisplay={this.changeMidDisplay}
  //   call_precinct_change={this.props.call_precinct_change}
  // />