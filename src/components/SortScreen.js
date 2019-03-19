import React, { Component } from 'react';
import Calendar from 'react-calendar';

const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
class SortScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
    date: new Date(),
       row_1_column_1_month: 1,
       row_1_column_2_month: 1,
       row_2_column_1_month: 1,
       row_2_column_2_month: 1,
       row_count: 1,
       row_1_column_1_year: 2008,
       row_1_column_2_year: 2019,
       row_2_column_1_year: 2008,
       row_2_column_2_year: 2019,
  }
}
componentDidMount(){
    this.create_date_sections();
}

create_date_sections=()=>{
    let top_block = document.getElementById('top_block_id');
    let bottom_block = document.getElementById('bottom_block_id');
    
    let top_hoods_holder = document.createElement('DIV');
        top_hoods_holder.setAttribute('class','top_hoods_holder');
        top_hoods_holder.setAttribute('id','top_hood_holder_id');
    let top_hoods = this.props.top_chosen_array;
    

  

    let date_nav_one = document.createElement('DIV');
        date_nav_one.setAttribute('class','date_nav_holder');
        date_nav_one.setAttribute('id','date_nav_one_id');

        let start_title_holder = document.createElement('P');
            start_title_holder.setAttribute('class', 'start_title_holder');
            
        let start_title = document.createTextNode('Start');    
            start_title_holder.appendChild(start_title);
            let end_title_holder = document.createElement('P');
            end_title_holder.setAttribute('class', 'end_title_holder');
            
        let end_title = document.createTextNode('End');    
            end_title_holder.appendChild(end_title);
            
         
        
 
  
    for(let i = 0; i < top_hoods.length; i++){
        let a_hood = document.createElement('DIV');
            a_hood.setAttribute('class','a_hood');
        
        let a_hood_text_holder = document.createElement('P');
            a_hood_text_holder.setAttribute('class','a_text_holder');
       
        let a_hood_text = document.createTextNode(this.props.top_chosen_array[i])
            a_hood_text_holder.appendChild(a_hood_text);

            a_hood.appendChild(a_hood_text_holder);

        let precinct_holder = document.createElement('DIV');
            precinct_holder.setAttribute('class','precinct_sort_holder');
        
        let precinct_holder_text_holder = document.createElement('P');
            precinct_holder_text_holder.setAttribute('class', 'precinct_holder_text_holder');
        
        let precinct_text = document.createTextNode(this.props.top_precincts[i]);
            precinct_holder_text_holder.appendChild(precinct_text);

            precinct_holder.appendChild(precinct_holder_text_holder);
            a_hood.appendChild(precinct_holder);
            top_hoods_holder.appendChild(a_hood);

    }
    top_block.appendChild(top_hoods_holder);
    top_block.appendChild(start_title_holder);
    top_block.appendChild(end_title_holder);
    let bottom_hoods_holder = document.createElement('DIV');
        bottom_hoods_holder.setAttribute('class','bottom_hoods_holder');
    let bottom_hoods = this.props.bottom_chosen_array;  
  
        for(let i = 0; i < bottom_hoods.length; i++){
            let b_hood = document.createElement('DIV');
                b_hood.setAttribute('class','b_hood');
            
            let b_hood_text_holder = document.createElement('P');
                b_hood_text_holder.setAttribute('class','b_text_holder');
           
            let b_hood_text = document.createTextNode(this.props.bottom_chosen_array[i])
                b_hood_text_holder.appendChild(b_hood_text);
    
                b_hood.appendChild(b_hood_text_holder);
    
            let precinct_holder = document.createElement('DIV');
                precinct_holder.setAttribute('class','precinct_sort_holder');
            
            let precinct_holder_text_holder = document.createElement('P');
                precinct_holder_text_holder.setAttribute('class', 'precinct_holder_text_holder');
            
            let precinct_text = document.createTextNode(this.props.top_precincts[i]);
                precinct_holder_text_holder.appendChild(precinct_text);
    
                precinct_holder.appendChild(precinct_holder_text_holder);
                b_hood.appendChild(precinct_holder);
                bottom_hoods_holder.appendChild(b_hood);
    
            }
            bottom_block.appendChild(bottom_hoods_holder);

              this.first_hood_start_date_button();
        }


first_hood_start_date_button = () =>{
        let nav_id = 'row_1_column_1';
        //MAKES FIRST HOOD MONTH BUTTONS
        let put_start_date_button_here = document.getElementById('top_block_id');
        let first_hood_date_display = document.createElement('BUTTON');
            first_hood_date_display.addEventListener('click', e => this.which_calendar(1));
            first_hood_date_display.setAttribute('class','first_date_button');
            first_hood_date_display.setAttribute('id',nav_id +'_start_date_button');
        let first_hood_start_display = document.createElement('P');
            first_hood_start_display.setAttribute('class','start_month');
        let first_hood_year_display = document.createElement('P');
            first_hood_year_display.setAttribute('class','start_year');

            
        let first_month_text = document.createTextNode(months[this.state.row_1_column_1_month] + '    ' + this.state.row_1_column_1_year);
            first_hood_start_display.appendChild(first_month_text);
            first_hood_date_display.appendChild(first_hood_start_display);
 
   
        // let start_year_text = document.createTextNode(this.state.row_1_column_1_year);
        //     first_hood_year_display.appendChild(start_year_text);
        //     first_hood_date_display.appendChild(first_hood_year_display);
            
        
            put_start_date_button_here.appendChild(first_hood_date_display);

            this.first_hood_end_date_button();
}


first_hood_end_date_button=()=>{
        let nav_id = 'row_1_column_2'
        let put_end_date_button_here = document.getElementById('top_block_id');
        let first_hood_date_display = document.createElement('BUTTON');
            first_hood_date_display.addEventListener('click', e => this.which_calendar(2));
            first_hood_date_display.setAttribute('class','first_end_date_button');
            first_hood_date_display.setAttribute('id',nav_id +'_end_date_button');
        let first_hood_start_display = document.createElement('P');
            first_hood_start_display.setAttribute('class','end_month');
        let first_hood_year_display = document.createElement('P');
            first_hood_year_display.setAttribute('class','end_year');
    
        let first_month_text = document.createTextNode(months[this.state.row_1_column_2_month] + '    ' + this.state.row_1_column_2_year);
            first_hood_start_display.appendChild(first_month_text);
            first_hood_date_display.appendChild(first_hood_start_display);
   
        // let end_year_text = document.createTextNode(this.state.row_1_column_2_year);
        //     first_hood_year_display.appendChild(end_year_text);
        //     first_hood_date_display.appendChild(first_hood_year_display);

        
            put_end_date_button_here.appendChild(first_hood_date_display);
        
            this.second_or_not();
}
second_or_not=()=>{
    let bottom = this.props.bottom_chosen_array;
    if(bottom.length > 0){
        let start = document.getElementById('second_start_title_holder_id')
        let end = document.getElementById('second_end_title_holder_id')
        let second_instruction = document.getElementById('second_instruction_id');
        let bottom_block = document.getElementById('bottom_block_id');
        bottom_block.style.border = '1px solid azure';
        second_instruction.style.display = 'inline';
        start.style.display = 'inline';
        end.style.display = 'inline';
        this.second_hood_start_date_buttons();
    }
}
second_hood_start_date_buttons = () => { 
        let nav_id = 'row_2_column_1';
        //    // MAKES SECOND HOOD MONTH BUTTONS
        let put_date_button_here = document.getElementById('bottom_block_id');
        let first_hood_date_display = document.createElement('BUTTON');
            first_hood_date_display.addEventListener('click', e => this.which_calendar(3));
            first_hood_date_display.setAttribute('class','first_date_button');
            first_hood_date_display.setAttribute('id',nav_id +'_start_date_button');
        let first_hood_start_display = document.createElement('P');
            first_hood_start_display.setAttribute('class','start_month');
        let first_hood_year_display = document.createElement('P');
            first_hood_year_display.setAttribute('class','start_year');
    
            
        let first_month_text = document.createTextNode(months[this.state.row_2_column_1_month] + '     ' + this.state.row_2_column_1_year);
            first_hood_start_display.appendChild(first_month_text);
            first_hood_date_display.appendChild(first_hood_start_display);
         
           
            put_date_button_here.appendChild(first_hood_date_display);
                
             this.second_hood_end_date_buttons();
}
second_hood_end_date_buttons=()=>{
        let nav_id = 'row_2_column_2';  
        let put_date_button_here = document.getElementById('bottom_block_id');
        let first_hood_date_display = document.createElement('BUTTON');
            first_hood_date_display.addEventListener('click', e => this.which_calendar(4));
            first_hood_date_display.setAttribute('class','first_end_date_button');
            first_hood_date_display.setAttribute('id',nav_id +'_start_date_button');
        let first_hood_start_display = document.createElement('P');
            first_hood_start_display.setAttribute('class','end_month');
        let first_hood_year_display = document.createElement('P');
            first_hood_year_display.setAttribute('class','end_year');  
        let first_month_text = document.createTextNode(months[this.state.row_2_column_2_month] + '     ' + this.state.row_2_column_2_year);
            first_hood_start_display.appendChild(first_month_text);
            first_hood_date_display.appendChild(first_hood_start_display);
   
       
            put_date_button_here.appendChild(first_hood_date_display);           
        
            // this.removeCompareCombineButton(2);
}
which_calendar=(e)=>{
    
    if(e === 1){ 
        let parent = document.getElementById('sort_screen_id');
        let childrens = parent.children;

        let calendar = childrens[0];
        calendar.style.display= 'inline';   
    }
    else if(e === 2){ 
        let parent = document.getElementById('sort_screen_id');
        let childrens = parent.children;

        let calendar = childrens[1];
        calendar.style.display= 'inline';   
    }
    else if(e === 3){ 
        let parent = document.getElementById('sort_screen_id');
        let childrens = parent.children;

        let calendar = childrens[2];
        calendar.style.display= 'inline';   
    }
    else if(e === 4){ 
        let parent = document.getElementById('sort_screen_id');
        let childrens = parent.children;

        let calendar = childrens[3];
        calendar.style.display= 'inline';   
    }
}

onClickMonthOne = (month) =>{
       this.setState({row_count: 1});
       let first_date = new Date(month);
       let first_date_year = first_date.getFullYear();
       let first_date_month = first_date.getMonth();
       this.setState({row_1_column_1_year: first_date_year});
       this.setState({row_1_column_1_month: first_date_month});
        let close_calendar = document.getElementById('sort_screen_id');
        let close_cal_chil = close_calendar.children;
        close_cal_chil[0].style.display = 'none';       
        this.clear_one('one');
}
onClickMonthTwo = (month) =>{
    this.setState({row_count: 1});
    let first_date = new Date(month);
    let first_date_year = first_date.getFullYear();
    let first_date_month = first_date.getMonth();
    this.setState({row_1_column_2_year: first_date_year});
    this.setState({row_1_column_2_month: first_date_month});
    let close_calendar = document.getElementById('sort_screen_id');
        let close_cal_chil = close_calendar.children;
        close_cal_chil[1].style.display = 'none';       
        this.clear_one('two');
    
}
onClickMonthThree = (month) =>{
    this.setState({row_count: 1});
    let first_date = new Date(month);
    let first_date_year = first_date.getFullYear();
    let first_date_month = first_date.getMonth();
    this.setState({row_2_column_1_year: first_date_year});
    this.setState({row_2_column_1_month: first_date_month});
    let close_calendar = document.getElementById('sort_screen_id');
    let close_cal_chil = close_calendar.children;
    close_cal_chil[2].style.display = 'none';       
    this.clear_one('three');
    
}
onClickMonthFour = (month) =>{
    this.setState({row_count: 2});
    let first_date = new Date(month);
    let first_date_year = first_date.getFullYear();
    let first_date_month = first_date.getMonth();
    this.setState({row_2_column_2_year: first_date_year});
    this.setState({row_2_column_2_month: first_date_month});
    let close_calendar = document.getElementById('sort_screen_id');
    let close_cal_chil = close_calendar.children;
    close_cal_chil[3].style.display = 'none';       
    this.clear_one('four');
    
} 
clear_one=(e)=>{
    if(e === 'one'){
    let header= document.getElementById('top_block_id');
    header.removeChild(header.childNodes[3]);   
    setTimeout(this.first_hood_start_date_button,100);
    }
    else if(e === 'two'){
        let header= document.getElementById('top_block_id');
        header.removeChild(header.childNodes[4]);   
        setTimeout(this.first_hood_start_date_button,100);
        }
        else if(e === 'three'){
           console.log('three')
            setTimeout(this.first_hood_start_date_button,100);
            }
            else if(e === 'four'){
                console.log('four');
                setTimeout(this.first_hood_start_date_button,100);
                }
}
pre_data=()=>{
    let first_month = this.state.row_1_column_1_month;
    let second_month = this.state.row_1_column_2_month;
    let first_year = this.state.row_1_column_1_year;
    let second_year = this.state.row_1_column_2_year;

    let third_month = this.state.row_2_column_1_month;
    let fourth_month = this.state.row_2_column_2_month;
    let third_year = this.state.row_2_column_1_year;
    let fourth_year = this.state.row_2_column_2_year;

    this.props.prep_data(first_month, second_month, third_month, fourth_month, first_year, second_year, third_year, fourth_year);
}

    render() {
        return(
    <section className='sort_screen' id='sort_screen_id'>
        <Calendar 
            className='calendar_one'    
            id='calendar_one_id'    
            view='decade'
            maxDetail='year'
            onClickMonth={this.onClickMonthOne}
            value={this.state.date}
        />   
        <Calendar 
            className='calendar_two'        
            view='decade'
            maxDetail='year'
            onClickMonth={this.onClickMonthTwo}
            value={this.state.date}
        />  
        <Calendar 
            className='calendar_three'        
            view='decade'
            maxDetail='year'
            onClickMonth={this.onClickMonthThree}
            value={this.state.date}
        />    
        <Calendar 
            className='calendar_four'        
            view='decade'
            maxDetail='year'
            onClickMonth={this.onClickMonthFour}
            value={this.state.date}
        />
        <div className='top_block' id='top_block_id'>
            <div className='instruction'>
                <p className='select_date_text'>Select Date Range</p>
            </div>
        </div>


        <button className='process_data_button' id='process_data_button_id' onClick={this.pre_data}>Get Data</button>
   

        <div className='bottom_block' id='bottom_block_id'></div>
        <p className='second_start_title_holder' id='second_start_title_holder_id'>Start</p> 
        <p className='second_end_title_holder' id='second_end_title_holder_id'>End</p>
        <div className='second_instruction' id='second_instruction_id'>
            <p className='select_date_text' >Select Date Range</p>
        </div>
    </section>
        )  
    }
}
    
  
  
  export default SortScreen;

//   <section className='selected_box_one' id='row_1'>
// <Calendar className='calendar_one'        
//     view='decade'
//     maxDetail='year'
//     onClickMonth={this.onClickMonthOne}
//     value={this.state.date}
// />   
// <Calendar className='calendar_two'        
// view='decade'
// maxDetail='year'
// onClickMonth={this.onClickMonthTwo}
// value={this.state.date}
// />  
      
//           <section className='column_one' id='row_1_column_1'>
//               <p className='month_title_hide' id='row_1_column_1_month'>MONTH</p>
//               <p className='year_title_hide'  id='row_1_column_1_year'>YEAR</p>
//           </section>    
//           <section className='column_two' id='row_1_column_2'>
//               <p className='month_title_hide'  id='row_1_column_2_month'>MONTH</p>
//               <p className='year_title_hide'  id='row_1_column_2_year'>YEAR</p></section>
              
//       </section>
      
//       <section className='selected_box_two' id='row_2'>
//           <section className='column_one' id='row_2_column_1'>
//               <p className='month_title_hide'  id='row_2_column_1_month'>MONTH</p>
//               <p className='year_title_hide'  id='row_2_column_1_year'>YEAR</p>
//           </section>
//           <section className='column_two' id='row_2_column_2'>
//               <p className='month_title_hide'  id='row_2_column_2_month'>MONTH</p>
//               <p className='year_title_hide'  id='row_2_column_2_year'>YEAR</p>
//           </section>
//       </section>           








  //            componentDidMount(){
//             let e = this.props.chosen_array[0];
//             let f = this.props.chosen_array[1]
//             if(this.props.chosen_array.length === 1){
//                 console.log('one: ' + e)
//             }
//             else{
//                 console.log('one: ' + e + ', two: ' + f);
//             }

//                 this.hood_selected(e);
//             }
// hood_selected=(e)=>{
   
//     // TAKES SELECTED HOOD AND MAKES A BUTTON ON TOP
//     // let selected_hood = document.getElementById(e + '_hood');
  
//     // selected_hood.style.opacity = .5;
  
//     // let current_count = this.props.neighborhood_count;
   
//     // let selected_hood_holder = document.getElementById('row_' + current_count);
//     // let selected_hood_button = document.createElement('BUTTON');
  
 
//     // selected_hood_button.setAttribute('class', 'selected_hood_button');
//     // selected_hood_button.style.backgroundColor = current_backgroundColor;
//     // let button_text = document.createTextNode(e);
//     // selected_hood_button.appendChild(button_text);
//     // selected_hood_holder.appendChild(selected_hood_button);
//     this.making_navs();
// }
// making_navs = () => {
//     if(this.props.chosen_array.length === 1){
//         this.first_hood_date_titles();
//     }
//     else if(this.props.chosen_array.length === 2){
//         this.second_hood_date_titles();
//     }

// }
// first_hood_date_titles=()=>{
//     for(let t = 0; t < 2; t++){
//         let nav_id = holders[t];
//         //SHOWS MONTH AND YEAR TITLES
//         let start_month = document.getElementById(nav_id +'_month');
//             start_month.removeAttribute('class','month_title_hide');
//             start_month.setAttribute('class','month_title');    
//         let start_year = document.getElementById(nav_id + '_year');
//             start_year.removeAttribute('class','year_title_hide');
//             start_year.setAttribute('class','year_title')
    
//     }
//     this.first_hood_start_date_button();    
// }
// first_hood_start_date_button = () =>{
//         let nav_id = 'row_1_column_1';
//         //MAKES FIRST HOOD MONTH BUTTONS
//         let put_start_date_button_here = document.getElementById(nav_id);
//         let first_hood_date_display = document.createElement('BUTTON');
//             first_hood_date_display.addEventListener('click', e => this.open_first_calendar(0));
//             first_hood_date_display.setAttribute('class','first_date_button');
//             first_hood_date_display.setAttribute('id',nav_id +'_start_date_button');
//         let first_hood_start_display = document.createElement('P');
//             first_hood_start_display.setAttribute('class','start_month');
//         let first_hood_year_display = document.createElement('P');
//             first_hood_year_display.setAttribute('class','start_year');

            
//         let first_month_text = document.createTextNode(months[this.state.row_1_column_1_month]);
//             first_hood_start_display.appendChild(first_month_text);
//             first_hood_date_display.appendChild(first_hood_start_display);
 
   
//         let start_year_text = document.createTextNode(this.state.row_1_column_1_year);
//             first_hood_year_display.appendChild(start_year_text);
//             first_hood_date_display.appendChild(first_hood_year_display);
//             put_start_date_button_here.appendChild(first_hood_date_display);
            
//         this.first_hood_end_date_button();
// }
// first_hood_end_date_button=()=>{
//         let nav_id = 'row_1_column_2'
//         let put_end_date_button_here = document.getElementById(nav_id);
//         let first_hood_date_display = document.createElement('BUTTON');
//             first_hood_date_display.addEventListener('click', e => this.open_first_calendar(2));
//             first_hood_date_display.setAttribute('class','first_date_button');
//             first_hood_date_display.setAttribute('id',nav_id +'_end_date_button');
//         let first_hood_start_display = document.createElement('P');
//             first_hood_start_display.setAttribute('class','start_month');
//         let first_hood_year_display = document.createElement('P');
//             first_hood_year_display.setAttribute('class','start_year');
    
//         let first_month_text = document.createTextNode(months[this.state.row_1_column_2_month]);
//             first_hood_start_display.appendChild(first_month_text);
//             first_hood_date_display.appendChild(first_hood_start_display);
   
//         let start_year_text = document.createTextNode(this.state.row_1_column_2_year);
//             first_hood_year_display.appendChild(start_year_text);
//             first_hood_date_display.appendChild(first_hood_year_display);
//             put_end_date_button_here.appendChild(first_hood_date_display);
        
//             this.removeCompareCombineButton(1);
// }
// second_hood_date_titles=()=>{
//     for(let t = 2; t < 4; t++){
//         let nav_id = holders[t];
        
//     //SHOW MONTH AND YEAR TITLES
//         let start_month = document.getElementById(nav_id +'_month');
//             start_month.removeAttribute('class','month_title_hide');
//             start_month.setAttribute('class','month_title');    
//         let start_year = document.getElementById(nav_id + '_year');
//             start_year.removeAttribute('class','year_title_hide');
//             start_year.setAttribute('class','year_title')
    
//     }
//     this.second_hood_start_date_buttons();
// }
// second_hood_start_date_buttons = () => { 
//         let nav_id = 'row_2_column_1';
//         //    // MAKES SECOND HOOD MONTH BUTTONS
//         let put_date_button_here = document.getElementById(nav_id);
//         let first_hood_date_display = document.createElement('BUTTON');
//             first_hood_date_display.addEventListener('click', e => this.open_second_calendar(2));
//             first_hood_date_display.setAttribute('class','first_date_button');
//             first_hood_date_display.setAttribute('id',nav_id +'_start_date_button');
//         let first_hood_start_display = document.createElement('P');
//             first_hood_start_display.setAttribute('class','start_month');
//         let first_hood_year_display = document.createElement('P');
//             first_hood_year_display.setAttribute('class','start_year');
    
            
//         let first_month_text = document.createTextNode(months[this.state.row_2_column_1_month]);
//             first_hood_start_display.appendChild(first_month_text);
//             first_hood_date_display.appendChild(first_hood_start_display);
         
           
//         let start_year_text = document.createTextNode(this.state.row_2_column_1_year);
//             first_hood_year_display.appendChild(start_year_text);
//             first_hood_date_display.appendChild(first_hood_year_display);
//             put_date_button_here.appendChild(first_hood_date_display);
                
//             this.second_hood_end_date_buttons();
// }
// second_hood_end_date_buttons=()=>{
//         let nav_id = 'row_2_column_2';  
//         let put_date_button_here = document.getElementById(nav_id);
//         let first_hood_date_display = document.createElement('BUTTON');
//             first_hood_date_display.addEventListener('click', e => this.open_second_calendar(4));
//             first_hood_date_display.setAttribute('class','first_date_button');
//             first_hood_date_display.setAttribute('id',nav_id +'_start_date_button');
//         let first_hood_start_display = document.createElement('P');
//             first_hood_start_display.setAttribute('class','start_month');
//         let first_hood_year_display = document.createElement('P');
//             first_hood_year_display.setAttribute('class','start_year');  
//         let first_month_text = document.createTextNode(months[this.state.row_2_column_2_month]);
//             first_hood_start_display.appendChild(first_month_text);
//             first_hood_date_display.appendChild(first_hood_start_display);
   
//         let start_year_text = document.createTextNode(this.state.row_2_column_2_year);
//             first_hood_year_display.appendChild(start_year_text);
//             first_hood_date_display.appendChild(first_hood_year_display);
//             put_date_button_here.appendChild(first_hood_date_display);           
        
//             // this.removeCompareCombineButton(2);
// }
// removeCompareCombineButton=(e)=>{
//     let get_rid_of = document.getElementById('compare_button_holder_id');
//     if(get_rid_of){
//         get_rid_of.parentNode.removeChild(get_rid_of);
//         this.viewCompareCombineButton(e)
//     }
//     else{
//         // this.viewCompareCombineButton(e);
//     }
// }
// viewCompareCombineButton=(e)=>{
//     let put_compare_button_here = document.getElementById('sort_screen_id');
//     let compare_button_holder = document.createElement('NAV');
//     compare_button_holder.setAttribute('class','compare_button_holder');
//     compare_button_holder.setAttribute('id','compare_button_holder_id');
//     put_compare_button_here.appendChild(compare_button_holder);
//     if(this.props.chosen_array.length === 1){
    
   
//         let view_data_button = document.createElement('BUTTON');
//         view_data_button.setAttribute('class','view_data_button');
//         view_data_button.setAttribute('id','view_data_button_id');
//         let view_data_button_text = document.createTextNode('VIEW DATA');

//         view_data_button.addEventListener('click', e =>this.props.view_data(this.state.row_1_column_1_year,this.state.row_1_column_1_month,this.state.row_1_column_2_year,this.state.row_1_column_2_month));
//         view_data_button.appendChild(view_data_button_text);
//         compare_button_holder.appendChild(view_data_button);

//         let compare_data_button = document.createElement('BUTTON');
//         compare_data_button.setAttribute('class','compare_data_button');
//         compare_data_button.setAttribute('id','compare_data_button_id');
//         let compare_data_button_text = document.createTextNode('COMPARE DATA');
        
//         compare_data_button.appendChild(compare_data_button_text);
//         compare_button_holder.appendChild(compare_data_button);

//         let merge_data_button = document.createElement('BUTTON');
//         merge_data_button.setAttribute('class','merge_data_button');
//         merge_data_button.setAttribute('id','merge_data_button_id');
//         let merge_data_button_text = document.createTextNode('MERGE HOODS');
        
//         merge_data_button.appendChild(merge_data_button_text);
//         compare_button_holder.appendChild(merge_data_button);
//  }
//  else{
//          let view_data_button = document.createElement('BUTTON');
//         view_data_button.setAttribute('class','view_data_button');
//         view_data_button.setAttribute('id','view_data_button_id');
//         let view_data_button_text = document.createTextNode('VIEW DATA');
//         view_data_button.style.opacity = .1;
//         // view_data_button.addEventListener('click', e =>this.props.view_data(this.state.row_1_column_2_year,this.state.row_1_column_2_month));
//         view_data_button.appendChild(view_data_button_text);
//         compare_button_holder.appendChild(view_data_button);

//         let compare_data_button = document.createElement('BUTTON');
//         compare_data_button.setAttribute('class','compare_data_button');
//         compare_data_button.setAttribute('id','compare_data_button_id');
//         let compare_data_button_text = document.createTextNode('COMPARE DATA');
//         compare_data_button.addEventListener('click', e =>this.props.compare_data(this.state.row_1_column_1_year,this.state.row_1_column_1_month,this.state.row_1_column_2_year,this.state.row_1_column_2_month,this.state.row_2_column_1_year,this.state.row_2_column_1_month,this.state.row_2_column_2_year,this.state.row_2_column_2_month));
//         compare_data_button.appendChild(compare_data_button_text);
//         compare_button_holder.appendChild(compare_data_button);

//         let merge_data_button = document.createElement('BUTTON');
//         merge_data_button.setAttribute('class','merge_data_button');
//         merge_data_button.setAttribute('id','merge_data_button_id');
//         let merge_data_button_text = document.createTextNode('MERGE HOODS');
//         merge_data_button.addEventListener('click', e =>this.props.merge_hoods(this.state.row_1_column_1_year,this.state.row_1_column_1_month,this.state.row_1_column_2_year,this.state.row_1_column_2_month));
//         merge_data_button.appendChild(merge_data_button_text);
//         compare_button_holder.appendChild(merge_data_button);
//      let compare_highlight = document.getElementById('compare_data_button_id');
//      compare_highlight.style.opacity = 1;
//      let merge_highlight = document.getElementById('merge_data_button_id');
//      merge_highlight.style.opacity= 1;


//  }
// }

// open_first_calendar=(e)=>{
//     let calendar_holder = document.getElementById('row_1');
//     if(e === 0){
        
//         let chosen_calendar = calendar_holder.childNodes[0];
//         chosen_calendar.style.display = 'inline';
    
//     }
//     else{
//         let chosen_calendar = calendar_holder.childNodes[1];
//         chosen_calendar.style.display = 'inline';
//     }
  
// }    
// open_second_calendar=(e)=>{
//     let calendar_holder = document.getElementById('row_1');
//     if(e === 2){
        
//         let chosen_calendar = calendar_holder.childNodes[2];
//         chosen_calendar.style.display = 'inline';
       
//     }
//     else{
//         let chosen_calendar = calendar_holder.childNodes[3];
//         chosen_calendar.style.display = 'inline';
//     }
 
// } 
// onClickMonthOne = (month) =>{
//        this.setState({row_count: 1});
//        let first_date = new Date(month);
//        let first_date_year = first_date.getFullYear();
//        let first_date_month = first_date.getMonth();
//        this.setState({row_1_column_1_year: first_date_year});
//        this.setState({row_1_column_1_month: first_date_month});
//        this.close_calendar(0);
       
// }
// onClickMonthTwo = (month) =>{
//     this.setState({row_count: 1});
//     let first_date = new Date(month);
//     let first_date_year = first_date.getFullYear();
//     let first_date_month = first_date.getMonth();
//     this.setState({row_1_column_2_year: first_date_year});
//     this.setState({row_1_column_2_month: first_date_month});
//     this.close_calendar(1);
    
// }
// onClickMonthThree = (month) =>{
//     this.setState({row_count: 2});
//     let first_date = new Date(month);
//     let first_date_year = first_date.getFullYear();
//     let first_date_month = first_date.getMonth();
//     this.setState({row_2_column_1_year: first_date_year});
//     this.setState({row_2_column_1_month: first_date_month});
//     this.close_calendar(2);
    
// }
// onClickMonthFour = (month) =>{
//     this.setState({row_count: 2});
//     let first_date = new Date(month);
//     let first_date_year = first_date.getFullYear();
//     let first_date_month = first_date.getMonth();
//     this.setState({row_2_column_2_year: first_date_year});
//     this.setState({row_2_column_2_month: first_date_month});
//     this.close_calendar(3);
    
// } 
// close_calendar=(e)=>{
//        let close_this = document.getElementById('row_1')
//        let change_display = close_this.childNodes[e];
//        change_display.style.display = 'none';
// }  
// componentDidUpdate(){
//     if(this.state.row_count === 1){
//     this.clear_one();
// }
// else{
//     this.clear_two()
 
// }
// }
// onClickYear = (year) =>{

// }
// clear_one=(e)=>{
  
//     let first_date = document.getElementById('row_1_column_1_start_date_button')
//     let second_date = document.getElementById('row_1_column_2_end_date_button')
//     first_date.parentNode.removeChild(first_date);
//     second_date.parentNode.removeChild(second_date);
//     this.first_hood_start_date_button(e);
// }
// clear_two=(e)=>{
  
//  let first_date = document.getElementById('row_2_column_1_start_date_button')
//  let second_date = document.getElementById('row_2_column_2_start_date_button')
//  first_date.parentNode.removeChild(first_date);
//  second_date.parentNode.removeChild(second_date);
// this.second_hood_start_date_buttons(e);
// }
//   <Calendar className='calendar'
//   id='first_calendar'
//           view='decade'
//           maxDetail='year'
//       onClickMonth={this.onClickMonth}
//       value={this.state.date}

//           />   
//   const style = getComputedStyle(element)

// const backgroundColor = style.backgroundColor
