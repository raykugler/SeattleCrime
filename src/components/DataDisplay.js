import React, { Component } from 'react';
import {test_run, date_sift, the_fetch, set_urls, the_second_fetch, fix_dates_here, date_picker, second_date_sift} from './Data_Process';
import { timeout } from 'q';
class DataDisplay extends Component{
    constructor(props){
        super(props)
        
        this.state = { 
        top_data:[],
        bottom_data:[],
        first_start_date:0,
        first_end_date: 0,
        second_start_date: 0,
        second_end_date: 0,
        compare_data: [],
        first_dates: [],
        second_dates:[], 
        top_sorted_data:[],
        bottom_sorted_data:[],   
        top_first_hood_data:[],
        top_second_hood_data:[],        
        top_third_hood_data:[],
        bottom_first_hood_data:[],
        bottom_second_hood_data:[],
        bottom_third_hood_data:[],
        top_array_of_crimes:[],
        }; 
        
    }
 componentDidMount(){
   
    this.get_urls();
    //  test_run(this.props.top_chosen_array);
// console.log('data display---top_chosen: ' + this.props.top_chosen_array + ', bottom chosen: ' + this.props.bottom_chosen_array + 'first date: ' +  this.props.first_date_array + 'second date: ' + this.props.second_date_array);
}

display_test=()=>{
    let hh = test_run(this.props.top_chosen_array);
}
get_urls=()=>{
    let url_array = set_urls(this.props.top_chosen_array, this.props.bottom_chosen_array);

    setTimeout(this.pull_one_data(url_array),300);
}

pull_one_data=(url_array)=>{
    let url = url_array[0][0];
    let top_length = this.props.top_chosen_array.length;
 
    console.log('top_length: ' + top_length);
    let first_hood_data = [];

    let all_hoods_data = [];

        fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {first_hood_data.push(data)
                   

        })
        this.setState({top_first_hood_data: first_hood_data});
    if(top_length > 1){
            setTimeout(e=>this.pull_two_data(url_array), 400);

    }
    else{
        setTimeout(e=>this.handle_bottom_data(url_array),400);
    }
}

pull_two_data = (url_array)=>{
    let url = url_array[0][1];
    let top_length = this.props.top_chosen_array.length;
    let second_hood_data = [];

        fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {second_hood_data.push(data)
     })

     this.setState({top_second_hood_data: second_hood_data});
    
     if(top_length > 2){
         setTimeout(e=>this.pull_three_data(url_array),400);
     }
     else{
            setTimeout(this.handle_bottom_data(url_array),500);
     }
}

pull_three_data =(url_array) =>{
    let url = url_array[0][2];
    let third_hood_data = [];
    let top_length = this.props.top_chosen_array.length;
        fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {third_hood_data.push(data)
     })

     this.setState({top_third_hood_data: third_hood_data});

        setTimeout(e=>this.handle_bottom_data(url_array),500);
}

handle_bottom_data=(url_array)=>{
    let top_one = this.state.top_first_hood_data;
    let top_two = this.state.top_second_hood_data;
    let top_third = this.state.top_third_hood_data;

    let all_top_data=[];
    all_top_data.push(top_one,top_two,top_third);
    this.setState({top_data: all_top_data});
    let bottom_length = this.props.bottom_chosen_array.length;
    if(bottom_length === 0){
        console.log('no bottom hoods');
        setTimeout(e=>this.fix_dates_there(),100);
    }

    else{
        setTimeout(e=>this.pull_bottom_one(url_array),200);
    }
}

pull_bottom_one = (url_array) =>{
    let url = url_array[1][0];
    let bottom_first_data = [];
    let bottom_length = this.props.bottom_chosen_array.length;
    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {bottom_first_data.push(data)
 })

    this.setState({bottom_first_hood_data: bottom_first_data});

    if(bottom_length > 1){
        setTimeout(e=>this.pull_bottom_two_data(url_array), 400);

    }
    else{
    setTimeout(e=>this.present_data(),400);
    }
}

pull_bottom_two_data = (url_array)=>{
    let url = url_array[1][1];
    let bottom_length = this.props.bottom_chosen_array.length;
    let second_hood_data = [];

    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {second_hood_data.push(data)
    })

    this.setState({bottom_second_hood_data: second_hood_data});

    if(bottom_length > 2){
    setTimeout(e=>this.pull_bottom_three_data(url_array),400);
    }
    else{
        setTimeout(this.present_data(),500);
    }
}

pull_bottom_three_data =(url_array) =>{
    let url = url_array[1][2];
    let third_hood_data = [];
    let bottom_length = this.props.top_chosen_array.length;
    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {third_hood_data.push(data)
    })

    this.setState({bottom_third_hood_data: third_hood_data});

    setTimeout(e=>this.present_data(),500);
    }

present_data=()=>{
    let all_top_data = [];
    let all_bottom_data = [];
        all_top_data.push(this.state.top_first_hood_data); 
        all_top_data.push(this.state.top_second_hood_data);
        all_top_data.push(this.state.top_third_hood_data);
        all_bottom_data.push(this.state.bottom_first_hood_data);
        all_bottom_data.push(this.state.bottom_second_hood_data);
        all_bottom_data.push(this.state.bottom_third_hood_data);
        console.log(all_top_data);
        console.log(all_bottom_data);

}

first_date_sift=()=>{
    let start_date = this.state.first_dates[0];
    let end_date = this.state.first_dates[1];
    let top_data = this.state.top_data;
    let all_hood_crimes = [];
    let big_crimes = [];
    let crimes = [];
    let first_length = this.props.top_chosen_array.length;
   
   console.log('start_date: ' + start_date);
   console.log('end_date: ' + end_date);
   console.log('top_data: ' + top_data);
   console.log('first_length: ' + first_length);
   
     for (let t = 0; t < first_length; t++){      
        console.log('top_data: ' + top_data[t][0][0].neighborhood);
     
        for(let h = 0; h < top_data[t][0].length; h++){
            if(top_data[t][0][h].reported_date > start_date && top_data[t][0][h].reported_date < end_date){
                crimes.push(top_data[t][0][h].crime_subcategory);
          }
          
        }
       
    }
    const set1 = new Set(crimes);
    let arrayOfcrimes = Array.from(set1);
    this.setState({top_array_of_crimes: arrayOfcrimes});  
    setTimeout(e=>this.countFirst(),100);
}

countFirst=()=>{
    let crime_list = this.state.top_array_of_crimes;

    for(let i = 0; i < crime_list.length; i++){
        let current_crime = crime_list[i]
        console.log(current_crime);
    }
}
    //         if(top_data[t][h].reported_date > start_date && top_data[t][h].reported_date < end_date){
                
    //           crimes.push(top_data[t][h].crime_subcategory);
    //         }
            
    //     }
    //     const settttt = new Set(crimes);
    //     let arr = Array.from(settttt);
    //     console.log('length: ' + arr.length);
    //             }
    //     const set1 = new Set(crimes);
    //     let arrayOfcrimes = Array.from(set1);
    //     if(this.props.bottom_chosen_array.length === 0){
    //             console.log(arrayOfcrimes);
    //     }
    //     else{

    //         // second_date_sift(bottom_length,bottom_data,bottom_dates, arrayOfcrimes);
    //                 }


//      this.setState({top_data: b})
// if(url_array[1].length > 0){
//     this.to_the_second_fetch(url_array);
// }
// else{

//     setTimeout(this.fix_dates_there,1500);
// }

// }

to_the_second_fetch=(url_array)=>{
   let c =  the_second_fetch(url_array);
   this.setState({bottom_data: c});
   setTimeout(this.fix_dates_there, 1500);


}


fix_dates_there = () =>{
    let e = this.props.first_date_array;
    
    let g = this.props.bottom_chosen_array;
    console.log('eeee' + e);
    console.log('gggg: ' + g);
    let first_start_date_array = [];
    let first_end_date_array = [];
    let first_month = e[0] + 1;
    let second_month = e[2] + 1;
    let first_year = e[1];
    let second_year = e[3];

    if(first_month < 10){
        let first_month_string = first_month.toString();
        let fixed_first_month = '0' + first_month_string;
            first_start_date_array.push(fixed_first_month);
            first_start_date_array.push(first_year);
    
    }
    else{
        first_start_date_array.push(first_month);
        first_start_date_array.push(first_year);
    
    }
    
    if(second_month <10 ){
        let second_month_string = second_month.toString();
        let fixed_second_month = '0' + second_month_string;
            first_end_date_array.push(fixed_second_month);
            first_end_date_array.push(second_year);
    
    }
    else{
        first_end_date_array.push(second_month);
        first_start_date_array.push(second_year);
    
    }
    let fixed_start_date = first_start_date_array[1] + '-' + first_start_date_array[0] + '-01' ;
    let fixed_end_date = first_end_date_array[1] + '-' + first_end_date_array[0] + '-01';
    
    let final_first_start_date =  '';
    let final_first_end_date = '';
    let final_second_start_date = '';
    let final_second_end_date = '';
    if(fixed_start_date < fixed_end_date){
        final_first_start_date = fixed_start_date;
        final_first_end_date = fixed_end_date;
    }
    else{
        final_first_start_date = fixed_end_date;
        final_first_end_date = fixed_start_date;
    }
if(g.length === 0){
    let dates = [];
    this.state.first_dates.push(final_first_start_date);
    this.state.first_dates.push(final_first_end_date);
    
    setTimeout(e=>this.first_date_sift(),100);
    
}
else{
    let dates = [];
    this.state.first_dates.push(final_first_start_date);
    this.state.first_dates.push(final_first_end_date);
    this.second_dates();

}    

}

second_dates =() =>{
    let f = this.props.second_date_array;
    let second_start_date_array = [];
let second_end_date_array = [];
let second_first_month = f[0] + 1;
let second_second_month = f[2] + 1;
let second_first_year = f[1];
let second_second_year = f[3];
if(second_first_month < 10){
    let first_month_string = second_first_month.toString();
    let fixed_first_month = '0' + first_month_string;
        second_start_date_array.push(fixed_first_month);
        second_start_date_array.push(second_first_year);

}
else{
    second_start_date_array.push(second_first_month);
    second_start_date_array.push(second_first_year);

}

if(second_second_month <10 ){
    let second_month_string = second_second_month.toString();
    let fixed_second_month = '0' + second_month_string;
       second_end_date_array.push(fixed_second_month);
        second_end_date_array.push(second_second_year);

}
else{
    second_end_date_array.push(second_second_month);
    second_end_date_array.push(second_second_year);

}

console.log('second_end_date_array: ' + second_end_date_array)
let second_fixed_start_date = second_start_date_array[1] + '-' + second_start_date_array[0] + '-01' ;
let second_fixed_end_date = second_end_date_array[1] + '-' + second_end_date_array[0] + '-01';


let final_first_start_date =  '';
let final_first_end_date = '';
let final_second_start_date = '';
let final_second_end_date = '';
if(second_fixed_start_date < second_fixed_end_date){
    final_second_start_date = second_fixed_start_date;
    final_second_end_date = second_fixed_end_date;

}
else{
    final_second_start_date = second_fixed_start_date;
    final_second_end_date = second_fixed_end_date;
}
let dates = [];
this.state.second_dates.push(final_second_start_date);
this.state.second_dates.push(final_second_end_date);
this.show_data();
}


show_data=()=>{
    console.log(this.state.top_data);
    let first_length = this.props.top_chosen_array.length;
    let second_length = this.props.bottom_chosen_array.length;
    console.log('first_length: ' + first_length);
    console.log('second_length: ' + second_length);

    // let top_hoods_date_sorted = date_sift(first_length,this.state.top_data, this.state.first_dates,second_length,this.state.bottom_data, this.state.second_dates);
    // this.setState({top_sorted_data: top_hoods_date_sorted});
if(this.props.bottom_chosen_array.length === 0){
    console.log('top sorted: ' + this.state.top_sorted_data)
}
else{
    this.show_data_two();
}
}

show_data_two=()=>{
    // let bottom_hoods_date_sorted = second_date_sift(this.props.bottom_chosen_array,this.state.bottom_data, this.state.second_dates);
    // this.setState({bottom_sorted_data: bottom_hoods_date_sorted});
    // console.log('top sorted: ' + this.state.top_sorted_data);
    // console.log('bottom sorted: ' + this.state.bottom_sorted_data);
    console.log('show data two');
}

// first_data_count = () => {
//     for(let p = 0; p< arrayOfcrimes.length; p++){
//         let spec_crime_count = 0;
//         let specific_crime = arrayOfcrimes[p];
//     }
// }

// show_one=()=>{
  
//     let put_table_here = document.getElementById('data_display_id');
//     let single_hood_table = document.createElement('TABLE');
//         single_hood_table.setAttribute('class','single_hood_table');
    
//     let single_hood_name_row = document.createElement('TR');
//     let single_hood_name_title = document.createElement('TH');
//     let single_hood_name_text= document.createTextNode(this.props.chosen_array[0]);

//     single_hood_name_title.appendChild(single_hood_name_text);
//     single_hood_name_row.appendChild(single_hood_name_title);
//     single_hood_table.appendChild(single_hood_name_row);
//     let first_hood_crimes = this.props.first_hood_data;
//     for(let f = 0; f < first_hood_crimes.length; f++){
//         let crime_row = document.createElement('TR');
//         let spec_crime = document.createElement('TD');
//         let spec_crime_count = document.createElement('TD');
//         let spec_crime_text = document.createTextNode(this.props.first_hood_data[f].crime);
//         let spec_crime_count_text = document.createTextNode(this.props.first_hood_data[f].count);
//         spec_crime.appendChild(spec_crime_text);
//         spec_crime_count.appendChild(spec_crime_count_text);
//         crime_row.appendChild(spec_crime);
//         crime_row.appendChild(spec_crime_count);
//         single_hood_table.appendChild(crime_row);
       
//     }
//     put_table_here.appendChild(single_hood_table);
// }
// prep_two=()=>{
//     let first_hood_crimes = this.props.first_hood_data;
//     let second_hood_crimes = this.props.second_hood_data;
//     let just_one_crimes = [];
//     let just_one_spare_crimes = [];
//     let just_two_crimes = [];
//     let just_two_spare_crimes =[];
//     let joint_crimes = [];
//     let joint_crimes_two = [];
//    for(let i = 0; i< first_hood_crimes.length; i++){
//        if(first_hood_crimes[i].crime !== undefined){ 
//            just_one_crimes.push(first_hood_crimes[i].crime);
//        }
// }
// for(let d = 0; d < second_hood_crimes.length; d++){
//     if(second_hood_crimes[d].crime !== undefined){ 
// just_two_crimes.push(second_hood_crimes[d].crime);
//     }
// }

// for(let y = 0; y < just_one_crimes.length; y++){
//     if(just_two_crimes.includes(just_one_crimes[y])){
//         joint_crimes.push(just_one_crimes[y])
//     }
//     else{
//         just_one_spare_crimes.push(just_one_crimes[y]);
//     }
// }


// for(let w = 0; w < just_two_crimes.length; w++){
//     if(just_one_crimes.includes(just_two_crimes[w])){
//         joint_crimes_two.push(just_two_crimes[w])
//     }
//     else{
//         just_two_spare_crimes.push(just_two_crimes[w]);
//     }
// }

// let joint_objects = [];
// for (let t = 0; t < joint_crimes.length; t++){
//     let joint_crimes_object = {
//         crime: joint_crimes[t],
//         first_hood_count: 0,
//         second_hood_count: 0,
//     }
//     joint_objects.push(joint_crimes_object);
// }
//  for(let i = 0; i < first_hood_crimes.length; i++){
//      for(let p = 0; p < joint_objects.length; p++){
//          if(first_hood_crimes[i].crime === joint_objects[p].crime){
//             joint_objects[p].first_hood_count = first_hood_crimes[i].count;
          
//          }
//      }
//  }
//  for(let i = 0; i < second_hood_crimes.length; i++){
//     for(let p = 0; p < joint_objects.length; p++){
//         if(second_hood_crimes[i].crime === joint_objects[p].crime){
//            joint_objects[p].second_hood_count = second_hood_crimes[i].count;
//         }
//     }

// }

// let first_spare_crimes_array=[];
// for(let l = 0; l < just_one_spare_crimes.length; l++){
//     let spare_object_one ={
//         crime: just_one_spare_crimes[l],
//         first_hood_count: 0,
//         second_hood_count: 0,
//     }
//     first_spare_crimes_array.push(spare_object_one);
// }

// for (let g = 0; g < first_spare_crimes_array.length; g++){
//     for(let p = 0; p < first_hood_crimes.length; p++){
//         if(first_spare_crimes_array[g].crime === first_hood_crimes[p].crime){
//             first_spare_crimes_array[g].first_hood_count = first_hood_crimes[p].count;
//         }
//     }
// }
// let second_spare_crimes_array = [];
// for(let l = 0; l < just_two_spare_crimes.length; l++){
//     let spare_object_two ={
//         crime: just_two_spare_crimes[l],
//         first_hood_count: 0,
//         second_hood_count: 0,
//     }
//     second_spare_crimes_array.push(spare_object_two);
// }

// for (let g = 0; g < second_spare_crimes_array.length; g++){
//     for(let p = 0; p < second_hood_crimes.length; p++){
//         if(second_spare_crimes_array[g].crime === second_hood_crimes[p].crime){
//             second_spare_crimes_array[g].second_hood_count = second_hood_crimes[p].count;
//         }
//     }
// }

// let final_crime_array = joint_objects.concat(first_spare_crimes_array,second_spare_crimes_array);
// for(let i = 0; i < final_crime_array.length; i++){
//   }
// this.setState({compare_data: final_crime_array})
// setTimeout(this.twoHood_display,500);
// }


//     twoHood_display = () =>{
//         let put_table_here = document.getElementById('data_display_id');

//         let two_hood_table_titles = document.createElement('DIV');
//             two_hood_table_titles.setAttribute('class','two_hood_table_titles');
        
//         let first_hood_name_title_holder = document.createElement('DIV');
//             first_hood_name_title_holder.setAttribute('class','first_hood_name_title_holder');

//         let second_hood_name_title_holder = document.createElement('DIV');
//             second_hood_name_title_holder.setAttribute('class','second_hood_name_title_holder');
        
//         let spacer = document.createElement('DIV');
//             spacer.setAttribute('class', 'spacer');
//         let first_hood_name_title = document.createElement('P');
//             first_hood_name_title.setAttribute('class','first_hood_title');
        
//         let second_hood_name_title = document.createElement('P');
//             second_hood_name_title.setAttribute('class','second_hood_title');

//         let first_hood_name_text= document.createTextNode(this.props.chosen_array[0]);
//             first_hood_name_title.appendChild(first_hood_name_text);

//         let second_hood_name_text= document.createTextNode(this.props.chosen_array[1]);
//             second_hood_name_title.appendChild(second_hood_name_text);

//             first_hood_name_title_holder.appendChild(first_hood_name_title);
//             second_hood_name_title_holder.appendChild(second_hood_name_title);

//             two_hood_table_titles.appendChild(first_hood_name_title_holder);
//             two_hood_table_titles.appendChild(second_hood_name_title_holder);
//             two_hood_table_titles.appendChild(spacer);
            
//             put_table_here.appendChild(two_hood_table_titles);
    
       
    
//         let two_hood_table = document.createElement('TABLE');
//             two_hood_table.setAttribute('class', 'two_hood_table');
    
//         for(let h = 0; h < this.state.compare_data.length; h++){
//             let crime_row = document.createElement('TR');
//             let crime_name = document.createElement('TD');
//             let first_crime_count = document.createElement('TD');
//             let second_crime_count = document.createElement('TD');
//                 crime_name.setAttribute('class', 'crime_name');
//                 first_crime_count.setAttribute('class', 'count_cell_one');
//                 second_crime_count.setAttribute('class', 'count_cell_two');
            
//             crime_row.setAttribute('class', 'crime_row');
//             let crime_name_text = document.createTextNode(this.state.compare_data[h].crime);
//             crime_name.appendChild(crime_name_text);
        
//             let first_crime_count_text = document.createTextNode(this.state.compare_data[h].first_hood_count);
//             first_crime_count.appendChild(first_crime_count_text);    
        

//                 let second_crime_count_text = document.createTextNode(this.state.compare_data[h].second_hood_count);
//                 second_crime_count.appendChild(second_crime_count_text);
        

             
//              crime_row.appendChild(crime_name);
//              crime_row.appendChild(first_crime_count);
//              crime_row.appendChild(second_crime_count);

//             two_hood_table.appendChild(crime_row);

        
//         }
// put_table_here.appendChild(two_hood_table);
// }
//     let two_hood_object = {
//         crime:,
//         hood_one_count:,
//         hood_two_count:,
//     }
// }
    render(){
        return(
     <section className='data_display' id='data_display_id' >      
        
          
            
     </section> 
              
        );}
    }
        export default DataDisplay;
    






