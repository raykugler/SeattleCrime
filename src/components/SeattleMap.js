import React, { Component } from 'react';

import EastVectorMap from './EastMapVector';
import  WestVectorMap  from './WestVectorMap';
import NorthVectorMap from './NorthVectorMap';
import  SoutheastVectorMap  from './SoutheastVectorMap';
import  SouthwestVectorMap  from './SouthwestMapVector';
import  NorthHoods from './NorthHoods';
import  EastHoods  from './EastHood';
import SouthHoods from './SouthHoods';
import WestHoods from './WestHoods';
import SouthwestHoods from './SouthwestHoods';
 
class SeattleMap extends Component {
  

componentDidMount(){
  console.log('gaaaaa');
  // let north = document.getElementById('north_id');
  // north.addEventListener('click',e => this.props.call_precinct_change('north') );
  // let east = document.getElementById('east_id');
  // east.addEventListener('click',e => this.props.call_precinct_change('east') );
  // let southeast = document.getElementById('se_id');
  // southeast.addEventListener('click',e => this.props.call_precinct_change('south') );
  // let west = document.getElementById('west_id');
  // west.addEventListener('click',e => this.props.call_precinct_change('west') );
  // let southwest = document.getElementById('sw_id');
  // southwest.addEventListener('click',e => this.props.call_precinct_change('southwest') );

}

    render() {
      if(this.props.precinct_selected===''){
      return (
        
        <section className="map">
   
           <NorthVectorMap call_precinct_change={this.props.call_precinct_change}/>   
          <EastVectorMap call_precinct_change={this.props.call_precinct_change}/>
          <WestVectorMap call_precinct_change={this.props.call_precinct_change}/>
          <SoutheastVectorMap call_precinct_change={this.props.call_precinct_change}/>
          <SouthwestVectorMap call_precinct_change={this.props.call_precinct_change}/>
          
        </section>
      );
    }
    else if(this.props.precinct_selected === 'north_precinct'){
      return(
        <section className='map'>
          <NorthHoods 
          selecting_hood={this.props.selecting_hood}
          chosenHood = {this.props.chosenHood}
          />
         
        
        </section>
          )    
        }

    else if(this.props.precinct_selected === 'east_precinct'){
        return(
          <section className='map'>
            <EastHoods 
              selecting_hood={this.props.selecting_hood}
              chosenHood = {this.props.chosenHood}

              />
    
          </section>
                )    
        }
        
    else if(this.props.precinct_selected === 'south_precinct'){
      return(
        <section className='map'>
        <SouthHoods 
        selecting_hood={this.props.selecting_hood}
        chosenHood = {this.props.chosenHood}
        />  
       
        </section>
              )    
      }
      else if(this.props.precinct_selected === 'west_precinct'){
        return(
          <section className='map'>
          <WestHoods 
          selecting_hood={this.props.selecting_hood}
          chosenHood = {this.props.chosenHood}/>  
         
          </section>
                )    
        }
        else if(this.props.precinct_selected === 'southwest_precinct'){
          return(
            <section className='map'>
            <SouthwestHoods 
            selecting_hood={this.props.selecting_hood}
            chosenHood = {this.props.chosenHood}
            /> 
           
            </section>
                  )    
          }
    }
  }
  
  export default SeattleMap;

  // <img src={seattlemap} alt='map of Seattle' className='mapimg'/>

  //  <North_Hoods />