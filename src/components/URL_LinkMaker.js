import React, { Component } from 'react';
import Data from './Data';

class URL_LinkMaker extends Component {
    constructor(props){
        super(props)
        this.state = {
            links:'',
            URLone: '',
            URLtwo: '',
        }
    }

    componentDidMount(){
     this.set_url_one()       
    }
 set_url_one=() =>{
        
        let URL = `https://data.seattle.gov/resource/xurz-654a.json`
    let length = '?$limit=1000000';
    let pick_hood = this.props.chosen_array[0];
    let pick_hood_over = '&neighborhood=' + pick_hood;
    let URLTotal = URL + length + pick_hood_over;
    this.setState({URLone: URLTotal});
     setTimeout(this.check_length, 1000);      
    // setTimeout(this.refs.loader.raise_percent, 400); 
    }
    check_length=()=>{
        if (this.props.chosen_array.length === 1){
            console.log(this.state.URLone);
            this.setState({linkOrData:'start_data'});
        }
        else{
            this.set_url_two();
        }
    }
    set_url_two=()=>{

        let URLtwo = `https://data.seattle.gov/resource/xurz-654a.json`
        let length_two = '?$limit=1000000';
        let pick_hood_two = this.props.chosen_array[1];
        let pick_hood_over_two = '&neighborhood=' + pick_hood_two;
        let URLTotalTwo = URLtwo + length_two + pick_hood_over_two;
        this.setState({URLtwo: URLTotalTwo});
        // setTimeout(this.fetch_one, 1000);
        // setTimeout(this.refs.loader.raise_percent_two, 100);
        console.log(this.state.URLone);
        console.log(this.state.URLtwo);
        
    }
    render() {
        
        return (
  
          <section className="loader">
           <Data 
           second_hood_data = { this.props.second_hood_data}
           start_processing={this.props.start_processing}
           chosen_array={this.props.chosen_array}
           first_date={this.props.first_date}
           second_date={this.props.second_date}
           third_date={this.props.third_date}
           fourth_date={this.props.fourth_date}
           screen_change={this.props.screen_change}/>
          </section>
        );
      }
  }
  
  export default URL_LinkMaker;

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