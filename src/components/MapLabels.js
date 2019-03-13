import React, { Component } from 'react';

class MapLabels extends Component {
    constructor(props){
      super(props)
    }
  
  
 
  
      render() {
        return (
          <section className="map_labels">
            <p className='n_label'>N</p>
            <p className='w_label'>W</p>
            <p className='e_label'>E</p>
            <p className='se_label'>SE</p>
            <p className='sw_label'>SW</p>
          </section>
        );
      }
    }
    
    export default MapLabels;