import React, { Component } from 'react';

import Loader from './Loader';


class Data extends Component {
    constructor(props){
        super(props)
        
        this.state = { 
            data: [],
            data_two: [],
            merged_arrays: [],
            selected_neighborhoods: [],
            crimes_array: [],
            crimes_array_two: [],
            all_data_array: [],
            URLone: '',
            URLtwo:'',
            loader: 0,
            number_of_hoods: 0
          
            
                    
        };
    }
      
componentDidMount() {
  console.log(this.props.chosen_array.length);
 this.set_url_one();
   
    }
    set_url_one=() =>{
        
        let URL = `https://data.seattle.gov/resource/xurz-654a.json`
      let length = '?$limit=1000000';
      let pick_hood = this.props.chosen_array[0];
      let pick_hood_over = '&neighborhood=' + pick_hood;
      let URLTotal = URL + length + pick_hood_over;
      this.setState({URLone: URLTotal});
     this.setState({loader: 10});
     setTimeout(this.checkLength,300);
         
    }      
    checkLength=()=>{
    
        if(this.props.chosen_array.length === 2){
            this.set_url_two();
        }
        else{
            console.log(this.state.URLone);
             this.state.crimes_array_two.push('empty');
            // console.log(URLTotal);
             this.setState({loader: 20});
             setTimeout(this.fetch_one,200);
            // this.props.screen_change(this.state.crimes_array, this.state.crimes_array_two);
         
        }
    }
    set_url_two=()=>{

        let URLtwo = `https://data.seattle.gov/resource/xurz-654a.json`
        let length_two = '?$limit=1000000';
        let pick_hood_two = this.props.chosen_array[1];
        let pick_hood_over_two = '&neighborhood=' + pick_hood_two;
        let URLTotalTwo = URLtwo + length_two + pick_hood_over_two;
        this.setState({URLtwo: URLTotalTwo});
       this.setState({loader: 50});
        setTimeout(this.fetch_one, 1000);
         
    
    }

    test=(URLTotal)=>{
        console.log(URLTotal);
    }
//   async fetch_one () {
//        let data_one = [];
//         // let first_url = this.state.URLone;
//      const response = await fetch("https://data.seattle.gov/resource/xurz-654a.json?$limit=1000000&neighborhood=MAGNOLIA");
//      const json = await response.json();   
    
      
//        this.test(json);
//     }

    fetch_one=(a,b)=>{
       
        let first_url = this.state.URLone;
        fetch(first_url)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
        // setTimeout(this.dig_crime, 2000);
        this.setState({loader: 70});
        setTimeout(this.dig_crime,2500);
    }


    fetch_two=()=>{            
   
        let second_url = this.state.URLtwo;
        fetch(second_url)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
        this.setState({loader: 80});
        setTimeout(this.dig_crime_two, 2500)
    }

    dig_crime =() =>{
        console.log('dig crime: ' + this.state.data[9].neighborhood);
         let start_date = this.props.first_date;
         let end_date = this.props.second_date;       
        let crimes = [];
        let crime_count = [];    
        let all_crime= this.state.data;
        for (let t = 0; t < all_crime.length; t++){      
             if (all_crime[t].reported_date > start_date && all_crime[t].reported_date < end_date){       
                 crimes.push(all_crime[t].crime_subcategory);
           
              }
            }
      
            
         const set1 = new Set(crimes);
          let arrayOfcrimes = Array.from(set1);
          for(let p = 0; p < arrayOfcrimes.length; p++){
              let spec_crime_count = 0;
              let specific_crime= arrayOfcrimes[p];
              for(let d = 0; d < crimes.length; d++){
                if(specific_crime === crimes[d] ){
                      spec_crime_count++;
                  }
             }
                 crime_count.push(spec_crime_count)
                 let crime_object={
                      crime: specific_crime,
                      count: spec_crime_count    
                  }
              this.state.crimes_array.push(crime_object);
            }
            
             console.log(this.state.crimes_array);        
       if(this.props.chosen_array.length === 2){
           this.fetch_two();
       }
       else{
           
        this.props.screen_change(this.state.crimes_array, this.state.crimes_array_two); 
       }

}
test_status=()=>{
    console.log('test_status');

}
dig_crime_two =() =>{
       
    let start_date = this.props.third_date;
    let end_date = this.props.fourth_date;
  
    let crimes = [];
    let crime_count = [];    
 let all_crime= this.state.data;
 for (let t = 0; t < all_crime.length; t++){      
     if (all_crime[t].reported_date > start_date && all_crime[t].reported_date < end_date){       
         crimes.push(all_crime[t].crime_subcategory);
        }
        }
    this.setState({loader: 60});
      const set1 = new Set(crimes);
       let arrayOfcrimes = Array.from(set1);
      for(let p = 0; p < arrayOfcrimes.length; p++){
           let spec_crime_count = 0;
          let specific_crime= arrayOfcrimes[p];
           for(let d = 0; d < crimes.length; d++){
             if(specific_crime === crimes[d] ){
                   spec_crime_count++;
               }
          }
              crime_count.push(spec_crime_count)
              let crime_object={
                   crime: specific_crime,
                   count: spec_crime_count    
               }
           this.state.crimes_array_two.push(crime_object);
         }
      console.log(this.state.crimes_array_two);
      this.setState({loader: 75});     
      this.props.screen_change(this.state.crimes_array, this.state.crimes_array_two);   
   
}

    render() {
      return (
        <section className="data" id='data_display_grab'>
     <Loader 
        loader={this.state.loader}
     />
        </section>
      );
    }
  }
  
  export default Data;