import React, { Component } from 'react';
import Header from './Header';
import MidHolder from './MidHolder';
import HoodsHolder from './HoodsHolder';
import DataDisplay from './DataDisplay';
import SortScreen from './SortScreen';

let hoods_ids =['north_hoods_id','east_hoods_id'];

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            top_chosen_array: [],
            bottom_chosen_array: [],
            merged_chosen_array: [],
            neighborhood_count: 0,
            screen: 'navigation',
            first_hood_data: [],
            second_hood_data: [],
            first_merged: [],
            precinct_selected: '',       
            display: 'precincts',
            precinct: '',
            top_bottom: 'top',
            top_precincts: [],
            bottom_precincts: [],
            first_date_array: [],
            second_date_array: [],  
    }
  }
  changeMidDisplay = (e) =>{
    this.setState({display: 'neighborhood'});
    this.setState({precinct: e});
    this.refs.hood_holder.turn_on_neighborhood_maker(e);
   }
top_bottom_switch=()=>{
  let top_bottom_dot=document.getElementById('switch_id');
  let top_words = document.getElementById('first_selected_hood_button_id').firstChild;
  let bottom_words = document.getElementById('second_selected_hood_button_id').firstChild;
  if(this.state.top_bottom === 'top') 
  { 
   
    top_bottom_dot.classList.add('switch_down');
    bottom_words.style.opacity = 1;
    top_words.style.opacity= .7;
    this.setState({top_bottom: 'bottom'});
  } else {
    let top_bottom_dot=document.getElementById('switch_id')
   top_bottom_dot.classList.remove('switch_down');
   this.setState({top_bottom: 'top'});    
   top_words.style.opacity= 1;
   bottom_words.style.opacity = .7;
  }  


}
   screen_change = (e,f) =>{
    this.setState({first_hood_data: e});
    this.setState({second_hood_data: f});
    this.setState({screen: 'data'})
    }

  call_precinct_change = (e) => {
   
    this.setState({precinct_selected: e});
    this.refs.midholder.neighborhood_switch(e);
  }
  reset_all_precincts=()=>{
    this.setState({precinct_selected: ''});
    this.add_listeners();
  }   

  selecting_hood=(e,g,h)=>{
    console.log('selecting_hood---e: ' + e + ' g: ' + g + ' h: ' + h );
    if(this.state.top_bottom === 'top' && this.state.top_chosen_array.includes(e)){
     
    }
    else if(this.state.top_bottom === 'top' && this.state.top_chosen_array.length <= 2){
      this.state.top_chosen_array.push(e);
      this.state.top_precincts.push(g);
    }
    else if(this.state.top_bottom === 'top' && this.state.top_chosen_array.length > 2){
    
    }
    else if(this.state.top_bottom === 'bottom' && this.state.bottom_chosen_array.includes(e)){
      
  }
    else if(this.state.top_bottom === 'bottom' && this.state.bottom_chosen_array.length <=2){
      this.state.bottom_chosen_array.push(e);
      this.state.bottom_precincts.push(g);
    }
    else if(this.state.top_bottom === 'bottom' && this.state.bottom_chosen_array.length > 2){
    
    }
   
    console.log('e: ' + e + ' g: ' + g + ' h: ' + h);
    this.place_hood(h,g)
  }

  place_hood=(h,g)=>{
    if(this.state.top_bottom === 'top'){
      let put_hoods_here = document.getElementById('first_selected_hood_button_id');
      while (put_hoods_here.hasChildNodes()) {
             put_hoods_here.removeChild(put_hoods_here.lastChild);
         }
         if(this.state.top_chosen_array.length === 0){
           let blank_text_here = document.createElement('DIV');
                blank_text_here.setAttribute('class','first_selected_hood_button');
                blank_text_here.setAttribute('id', 'first_selected_hood_button_id')
            let blank_text_p = document.createElement('P');
                blank_text_p.setAttribute('class', 'hood_name');
                blank_text_p.setAttribute('id', 'first_hood_name');
            let blank_text = document.createTextNode('Place Up to Three Neighborhoods Here');
                blank_text_p.appendChild(blank_text);
                blank_text_here.appendChild(blank_text_p);

                put_hoods_here.appendChild(blank_text_here);
              
         }
          else if(this.state.top_chosen_array.length === 1){
            let one_hood_holder = document.createElement('DIV');
                one_hood_holder.setAttribute('class','top_one_hood_holder');
                let single_hood_name = document.createElement('P');
                single_hood_name.setAttribute('class','single_hood_name');
            let one_hood_text = document.createTextNode(this.state.top_chosen_array[0]);
                single_hood_name.appendChild(one_hood_text);    
                one_hood_holder.appendChild(single_hood_name);
            let remove_button = document.createElement('BUTTON');
                remove_button.setAttribute('class','remove_button');
                remove_button.addEventListener('click', e => this.remove_top_hood(this.state.top_chosen_array[0], h));
            let the_x = document.createTextNode('X');
                remove_button.appendChild(the_x);
                let precinct_loop_holder = document.createElement('P');
                precinct_loop_holder.setAttribute('class','precinct_loop_holder');
            let precinct_text = document.createTextNode(this.state.top_precincts[0]);
                precinct_loop_holder.appendChild(precinct_text);

                one_hood_holder.appendChild(precinct_loop_holder);
                one_hood_holder.appendChild(remove_button);
                put_hoods_here.appendChild(one_hood_holder);
          
          }
          else if(this.state.top_chosen_array.length === 2){
            let two_hood_holder = document.createElement('DIV');
                two_hood_holder.setAttribute('class', 'top_two_hood_holder');
            
            let one_of_two_hood_holder = document.createElement('DIV');
                one_of_two_hood_holder.setAttribute('class', 'one_of_two_hood_holder')
            
            let one_name_of_two = document.createElement('P');
                one_name_of_two.setAttribute('class','top_one_name_of_two');
            let one_name_of_two_text = document.createTextNode(this.state.top_chosen_array[0]);
                one_name_of_two.appendChild(one_name_of_two_text);    

            let top_precinct_loop_holder_one_of_two = document.createElement('P');
                top_precinct_loop_holder_one_of_two.setAttribute('class','bottom_precinct_loop_holder_one_of_two');
            let top_precinct_text_one_of_two = document.createTextNode(this.state.top_precincts[0]);
                top_precinct_loop_holder_one_of_two.appendChild(top_precinct_text_one_of_two);
    
            let two_of_two_hood_holder = document.createElement('DIV');
                two_of_two_hood_holder.setAttribute('class', 'two_of_two_hood_holder')
            
            let two_name_of_two = document.createElement('P');
                two_name_of_two.setAttribute('class','top_two_name_of_two');
            let two_name_of_two_text = document.createTextNode(this.state.top_chosen_array[1]);
                two_name_of_two.appendChild(two_name_of_two_text);  
              

            let top_precinct_loop_holder_two_of_two = document.createElement('P');
               top_precinct_loop_holder_two_of_two.setAttribute('class','bottom_precinct_loop_holder_two_of_two');
            let top_precinct_text_two_of_two = document.createTextNode(this.state.top_precincts[1]);
                top_precinct_loop_holder_two_of_two.appendChild(top_precinct_text_two_of_two);

            let remove_button_one = document.createElement('BUTTON');
                remove_button_one.setAttribute('class','remove_button');
                remove_button_one.addEventListener('click', e => this.remove_top_hood(this.state.top_chosen_array[0], h));
            let the_first_x = document.createTextNode('X');
                remove_button_one.appendChild(the_first_x);

                let remove_button_two = document.createElement('BUTTON');
                remove_button_two.setAttribute('class','remove_button');
                remove_button_two.addEventListener('click', e => this.remove_top_hood(this.state.top_chosen_array[1],h));
            let the_second_x = document.createTextNode('X');
                remove_button_two.appendChild(the_second_x);
            one_of_two_hood_holder.appendChild(one_name_of_two);
            one_of_two_hood_holder.appendChild(remove_button_one);
            one_of_two_hood_holder.append(top_precinct_loop_holder_one_of_two);

            two_of_two_hood_holder.appendChild(two_name_of_two);
            two_of_two_hood_holder.appendChild(remove_button_two);
            two_of_two_hood_holder.appendChild(top_precinct_loop_holder_two_of_two);

            two_hood_holder.appendChild(one_of_two_hood_holder);
            two_hood_holder.appendChild(two_of_two_hood_holder);

            put_hoods_here.appendChild(two_hood_holder);

          }
          else if(this.state.top_chosen_array.length === 3){
            let three_hood_holder = document.createElement('DIV');
            three_hood_holder.setAttribute('class', 'top_three_hood_holder');
        
        let one_of_three_hood_holder = document.createElement('DIV');
            one_of_three_hood_holder.setAttribute('class', 'one_of_three_hood_holder')
        
        let one_name_of_three = document.createElement('P');
            one_name_of_three.setAttribute('class','top_one_name_of_three');
        let one_name_of_three_text = document.createTextNode(this.state.top_chosen_array[0]);
            one_name_of_three.appendChild(one_name_of_three_text);    

            let top_precinct_loop_holder_one_of_three = document.createElement('P');
            top_precinct_loop_holder_one_of_three.setAttribute('class','bottom_precinct_loop_holder_one_of_three');
        let top_precinct_text_one_of_three = document.createTextNode(this.state.top_precincts[0]);
            top_precinct_loop_holder_one_of_three.appendChild(top_precinct_text_one_of_three); 


        let two_of_three_hood_holder = document.createElement('DIV');
            two_of_three_hood_holder.setAttribute('class', 'two_of_three_hood_holder')
        
        let two_name_of_three = document.createElement('P');
            two_name_of_three.setAttribute('class','top_two_name_of_three');
        let two_name_of_three_text = document.createTextNode(this.state.top_chosen_array[1]);
            two_name_of_three.appendChild(two_name_of_three_text);  

        let top_precinct_loop_holder_two_of_three = document.createElement('P');
            top_precinct_loop_holder_two_of_three.setAttribute('class','bottom_precinct_loop_holder_two_of_three');
        let top_precinct_text_two_of_three = document.createTextNode(this.state.top_precincts[1]);
            top_precinct_loop_holder_two_of_three.appendChild(top_precinct_text_two_of_three);

            let three_of_three_hood_holder = document.createElement('DIV');
            three_of_three_hood_holder.setAttribute('class', 'three_of_three_hood_holder')
        
        let three_name_of_three = document.createElement('P');
            three_name_of_three.setAttribute('class','top_three_name_of_three');
        let three_name_of_three_text = document.createTextNode(this.state.top_chosen_array[2]);
            three_name_of_three.appendChild(three_name_of_three_text);

        let top_precinct_loop_holder_three_of_three = document.createElement('P');
            top_precinct_loop_holder_three_of_three.setAttribute('class','bottom_precinct_loop_holder_three_of_three');
        let top_precinct_text_three_of_three = document.createTextNode(this.state.top_precincts[2]);
            top_precinct_loop_holder_three_of_three.appendChild(top_precinct_text_three_of_three);

        let remove_button_one = document.createElement('BUTTON');
            remove_button_one.setAttribute('class','remove_button');
            remove_button_one.addEventListener('click', e => this.remove_top_hood(this.state.top_chosen_array[0],h));
        let the_first_x = document.createTextNode('X');
            remove_button_one.appendChild(the_first_x);

        let remove_button_two = document.createElement('BUTTON');
            remove_button_two.setAttribute('class','remove_button');
            remove_button_two.addEventListener('click', e => this.remove_top_hood(this.state.top_chosen_array[1],h));
        let the_second_x = document.createTextNode('X');
            remove_button_two.appendChild(the_second_x);

        let remove_button_three = document.createElement('BUTTON');
            remove_button_three.setAttribute('class','remove_button');
            remove_button_three.addEventListener('click', e => this.remove_top_hood(this.state.top_chosen_array[2],h));
        let the_third_x = document.createTextNode('X');
            remove_button_three.appendChild(the_third_x);
        
        
        one_of_three_hood_holder.appendChild(one_name_of_three);
        one_of_three_hood_holder.appendChild(remove_button_one);
        one_of_three_hood_holder.appendChild(top_precinct_loop_holder_one_of_three);

        two_of_three_hood_holder.appendChild(two_name_of_three);
        two_of_three_hood_holder.appendChild(remove_button_two);
        two_of_three_hood_holder.appendChild(top_precinct_loop_holder_two_of_three);

        three_of_three_hood_holder.appendChild(three_name_of_three);
        three_of_three_hood_holder.appendChild(remove_button_three);
        three_of_three_hood_holder.appendChild(top_precinct_loop_holder_three_of_three);

        three_hood_holder.appendChild(one_of_three_hood_holder);
        three_hood_holder.appendChild(two_of_three_hood_holder);
        three_hood_holder.appendChild(three_of_three_hood_holder);

        put_hoods_here.appendChild(three_hood_holder);
        
          }
          
          
    }
    else if(this.state.top_bottom === 'bottom'){
      let put_hoods_here = document.getElementById('second_selected_hood_button_id');
      while (put_hoods_here.hasChildNodes()) {
        put_hoods_here.removeChild(put_hoods_here.lastChild);
    }
    if(this.state.bottom_chosen_array.length === 0){
      let blank_text_here = document.createElement('DIV');
           blank_text_here.setAttribute('class','second_selected_hood_button');
           blank_text_here.setAttribute('id', 'second_selected_hood_button_id')
       let blank_text_p = document.createElement('P');
           blank_text_p.setAttribute('class', 'hood_name');
           blank_text_p.setAttribute('id', 'second_hood_name');
       let blank_text = document.createTextNode('Place Up to Three Neighborhoods Here');
           blank_text_p.appendChild(blank_text);
           blank_text_here.appendChild(blank_text_p);

           put_hoods_here.appendChild(blank_text_here);
           let bottom_words = document.getElementById('second_hood_name')
           bottom_words.style.opacity = 1;
       
          }
     else if(this.state.bottom_chosen_array.length === 1){
        let one_hood_holder = document.createElement('DIV');
            one_hood_holder.setAttribute('class','bottom_one_hood_holder');
            let single_hood_name = document.createElement('P');
            single_hood_name.setAttribute('class','single_hood_name');
        let one_hood_text = document.createTextNode(this.state.bottom_chosen_array[0]);
            single_hood_name.appendChild(one_hood_text);    
        one_hood_holder.appendChild(single_hood_name);
        let remove_button = document.createElement('BUTTON');
            remove_button.setAttribute('class','remove_button');
            remove_button.addEventListener('click', e => this.remove_bottom_hood(this.state.bottom_chosen_array[0],h));
        let the_x = document.createTextNode('X');
            remove_button.appendChild(the_x);
        
        let precinct_loop_holder = document.createElement('P');
            precinct_loop_holder.setAttribute('class','precinct_loop_holder');
        let precinct_text = document.createTextNode(this.state.bottom_precincts[0]);
            precinct_loop_holder.appendChild(precinct_text);

            one_hood_holder .appendChild(precinct_loop_holder);
            one_hood_holder.appendChild(remove_button);
            put_hoods_here.appendChild(one_hood_holder);
      
      }
      else if(this.state.bottom_chosen_array.length === 2){
        let two_hood_holder = document.createElement('DIV');
            two_hood_holder.setAttribute('class', 'bottom_two_hood_holder');
        
        let one_of_two_hood_holder = document.createElement('DIV');
            one_of_two_hood_holder.setAttribute('class', 'one_of_two_hood_holder')
        
        let one_name_of_two = document.createElement('P');
            one_name_of_two.setAttribute('class','top_one_name_of_two');
        let one_name_of_two_text = document.createTextNode(this.state.bottom_chosen_array[0]);
            one_name_of_two.appendChild(one_name_of_two_text);    

        let bottom_precinct_loop_holder_one_of_two = document.createElement('P');
            bottom_precinct_loop_holder_one_of_two.setAttribute('class','bottom_precinct_loop_holder_one_of_two');
        let bottom_precinct_text_one_of_two = document.createTextNode(this.state.bottom_precincts[0]);
            bottom_precinct_loop_holder_one_of_two.appendChild(bottom_precinct_text_one_of_two);

        let two_of_two_hood_holder = document.createElement('DIV');
            two_of_two_hood_holder.setAttribute('class', 'two_of_two_hood_holder')
        
        let two_name_of_two = document.createElement('P');
            two_name_of_two.setAttribute('class','top_two_name_of_two');
        let two_name_of_two_text = document.createTextNode(this.state.bottom_chosen_array[1]);
            two_name_of_two.appendChild(two_name_of_two_text);  

        let bottom_precinct_loop_holder_two_of_two = document.createElement('P');
            bottom_precinct_loop_holder_two_of_two.setAttribute('class','bottom_precinct_loop_holder_two_of_two');
        let bottom_precinct_text_two_of_two = document.createTextNode(this.state.bottom_precincts[1]);
            bottom_precinct_loop_holder_two_of_two.appendChild(bottom_precinct_text_two_of_two);


        let remove_button_one = document.createElement('BUTTON');
            remove_button_one.setAttribute('class','remove_button');
            remove_button_one.addEventListener('click', e => this.remove_bottom_hood(this.state.bottom_chosen_array[0],h));
        let the_first_x = document.createTextNode('X');
            remove_button_one.appendChild(the_first_x);

            let remove_button_two = document.createElement('BUTTON');
            remove_button_two.setAttribute('class','remove_button');
            remove_button_two.addEventListener('click', e => this.remove_bottom_hood(this.state.bottom_chosen_array[1],h));
        let the_second_x = document.createTextNode('X');
            remove_button_two.appendChild(the_second_x);

        one_of_two_hood_holder.appendChild(one_name_of_two);
        one_of_two_hood_holder.appendChild(remove_button_one);
        one_of_two_hood_holder.append(bottom_precinct_loop_holder_one_of_two);

        two_of_two_hood_holder.appendChild(two_name_of_two);
        two_of_two_hood_holder.appendChild(remove_button_two);
        two_of_two_hood_holder.appendChild(bottom_precinct_loop_holder_two_of_two);
        two_hood_holder.appendChild(one_of_two_hood_holder);
        two_hood_holder.appendChild(two_of_two_hood_holder);

        put_hoods_here.appendChild(two_hood_holder);

      }
      else if(this.state.bottom_chosen_array.length === 3){
        let three_hood_holder = document.createElement('DIV');
        three_hood_holder.setAttribute('class', 'bottom_three_hood_holder');
    
    let one_of_three_hood_holder = document.createElement('DIV');
        one_of_three_hood_holder.setAttribute('class', 'one_of_three_hood_holder')
    
    let one_name_of_three = document.createElement('P');
        one_name_of_three.setAttribute('class','top_one_name_of_three');
    let one_name_of_three_text = document.createTextNode(this.state.bottom_chosen_array[0]);
        one_name_of_three.appendChild(one_name_of_three_text);  
        
        
    let bottom_precinct_loop_holder_one_of_three = document.createElement('P');
        bottom_precinct_loop_holder_one_of_three.setAttribute('class','bottom_precinct_loop_holder_one_of_three');
    let bottom_precinct_text_one_of_three = document.createTextNode(this.state.bottom_precincts[0]);
        bottom_precinct_loop_holder_one_of_three.appendChild(bottom_precinct_text_one_of_three);    

    let two_of_three_hood_holder = document.createElement('DIV');
        two_of_three_hood_holder.setAttribute('class', 'two_of_three_hood_holder')
    
    let two_name_of_three = document.createElement('P');
        two_name_of_three.setAttribute('class','top_two_name_of_three');
    let two_name_of_three_text = document.createTextNode(this.state.bottom_chosen_array[1]);
        two_name_of_three.appendChild(two_name_of_three_text);  

    let bottom_precinct_loop_holder_two_of_three = document.createElement('P');
        bottom_precinct_loop_holder_two_of_three.setAttribute('class','bottom_precinct_loop_holder_two_of_three');
    let bottom_precinct_text_two_of_three = document.createTextNode(this.state.bottom_precincts[1]);
        bottom_precinct_loop_holder_two_of_three.appendChild(bottom_precinct_text_two_of_three);

        let three_of_three_hood_holder = document.createElement('DIV');
        three_of_three_hood_holder.setAttribute('class', 'three_of_three_hood_holder')
    
    let three_name_of_three = document.createElement('P');
        three_name_of_three.setAttribute('class','top_three_name_of_three');
    let three_name_of_three_text = document.createTextNode(this.state.bottom_chosen_array[2]);
        three_name_of_three.appendChild(three_name_of_three_text);

    let bottom_precinct_loop_holder_three_of_three = document.createElement('P');
        bottom_precinct_loop_holder_three_of_three.setAttribute('class','bottom_precinct_loop_holder_three_of_three');
    let bottom_precinct_text_three_of_three = document.createTextNode(this.state.bottom_precincts[2]);
        bottom_precinct_loop_holder_three_of_three.appendChild(bottom_precinct_text_three_of_three);

    let remove_button_one = document.createElement('BUTTON');
        remove_button_one.setAttribute('class','remove_button');
        remove_button_one.addEventListener('click', e => this.remove_bottom_hood(this.state.bottom_chosen_array[0],h));
    let the_first_x = document.createTextNode('X');
        remove_button_one.appendChild(the_first_x);

    let remove_button_two = document.createElement('BUTTON');
        remove_button_two.setAttribute('class','remove_button');
        remove_button_two.addEventListener('click', e => this.remove_bottom_hood(this.state.bottom_chosen_array[1],h));
    let the_second_x = document.createTextNode('X');
        remove_button_two.appendChild(the_second_x);

    let remove_button_three = document.createElement('BUTTON');
        remove_button_three.setAttribute('class','remove_button');
        remove_button_three.addEventListener('click', e => this.remove_bottom_hood(this.state.bottom_chosen_array[2],h));
    let the_third_x = document.createTextNode('X');
        remove_button_three.appendChild(the_third_x);
    
    
    one_of_three_hood_holder.appendChild(one_name_of_three);
    one_of_three_hood_holder.appendChild(remove_button_one);
    one_of_three_hood_holder.appendChild(bottom_precinct_loop_holder_one_of_three);


    two_of_three_hood_holder.appendChild(two_name_of_three);
    two_of_three_hood_holder.appendChild(remove_button_two);
    two_of_three_hood_holder.appendChild(bottom_precinct_loop_holder_two_of_three);

    three_of_three_hood_holder.appendChild(three_name_of_three);
    three_of_three_hood_holder.appendChild(remove_button_three);
    three_of_three_hood_holder.appendChild(bottom_precinct_loop_holder_three_of_three);

    three_hood_holder.appendChild(one_of_three_hood_holder);
    three_hood_holder.appendChild(two_of_three_hood_holder);
    three_hood_holder.appendChild(three_of_three_hood_holder);

    put_hoods_here.appendChild(three_hood_holder);
      
      }
    }
 
    this.button_check(h);
  }

  button_check=(h)=>{
    if(this.state.bottom_chosen_array.length === 0 || this.state.top_chosen_array.length === 0){
      let view_button = document.getElementById('view_data_id');
          view_button.style.opacity = 1;
          view_button.disabled = false;
          let compare_button = document.getElementById('compare_id');
          compare_button.style.opacity = .4;
          compare_button.disabled = true;
    
        }
    else{
      let view_button = document.getElementById('view_data_id');
          view_button.style.opacity = .4;
          view_button.disabled = true;
      let compare_button = document.getElementById('compare_id');
          compare_button.style.opacity = 1;
          compare_button.disabled = false;
    }
    this.hood_fade(h);
  }
  hood_fade=(h)=>{
   let the_precinct = document.getElementById(this.state.precinct + '_hoods_id');
   let the_children = the_precinct.children;
   let the_nav = document.getElementById('neighborhood_nav');
   let the_nav_children = the_nav.children;
   let top_hoods = this.state.top_chosen_array;
   let bottom_hoods = this.state.bottom_chosen_array;
   let hoods_combo = top_hoods.concat(bottom_hoods);

    for(let i = 0; i < the_children.length; i++){
        if(the_children[i].nodeName === 'path'){ 
          the_children[i].style.opacity = 1;
      }
    }
    
    for(let i = 0; i< the_nav_children.length; i++){
      the_nav_children[i].style.opacity = 1;
    }
    for(let i = 0; i < the_children.length; i++){
        let minus = the_children[i].id;
        let minus_minus = minus.substring(0, minus.length -3)
 
    if(the_children[i].nodeName === 'path' && hoods_combo.includes(minus_minus) ){ 
       the_children[i].style.opacity = .4;
      }
    }
    for(let i = 0; i< the_nav_children.length; i++){
        let child = the_nav_children[i].id
        let child_minus_hood = child.substring(0,child.length -5);

    if(hoods_combo.includes(child_minus_hood)){
       the_nav_children[i].style.opacity = .4;
      }
    }

  }
  remove_top_hood=(e,h)=>{
    if(this.state.top_bottom === 'top'){
    let top_array = this.state.top_chosen_array;
    let top_precincts = this.state.top_precincts;
    for(let i = 0;i < top_array.length; i++){
      if(e === top_array[i]){
        top_array.splice(i, 1, );
        top_precincts.splice(i,1,);
      }
      this.setState({top_chosen_array: top_array});
      this.setState({top_precincts: top_precincts});
    }

    this.place_hood(h);
    }
  }
  remove_bottom_hood=(e,h)=>{
   if(this.state.top_bottom === 'bottom'){
    let bottom_array = this.state.bottom_chosen_array;
    let bottom_precincts = this.state.bottom_precincts;
    for(let i = 0;i < bottom_array.length; i++){
      if(e === bottom_array[i]){
        bottom_array.splice(i, 1, );
        bottom_precincts.splice(i,1,);
      }
      this.setState({bottom_chosen_array: bottom_array});
      this.setState({bottom_precincts: bottom_precincts});
    }
    this.place_hood(h);

  }
  }
  set_dates=(f)=>{

    this.setState({screen: 'date_picker'})
  
  }
  prep_data=(a,b,c,d,e,f,g,h)=>{
    console.log('prep_data: ' + a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g + ' ' + h);
          let top_chosen = this.state.top_chosen_array;
          let bottom_chosen = this.state.bottom_chosen_array;

          let first_dates = []
          first_dates.push(a,e,b,f);
          this.setState({first_date_array: first_dates});

      if(bottom_chosen.length === 0){
          this.change_to_data();
      }
      else{
        let second_dates = [];
            second_dates.push(c, g, d, h);
            this.setState({second_date_array: second_dates});
          this.change_to_data();
          }
          console.log('top_chosen: ' + this.state.top_chosen_array);
          console.log('bottom_chosen: ' + this.state.bottom_chosen_array);
  }
  change_to_data=()=>{
    this.setState({screen: 'data_display'})
  }

  
    render() {
      if(this.state.screen === 'navigation'){
      return (
        <main className="container">
        <Header />
        <MidHolder 
          ref='midholder'
          set_dates={this.set_dates}
          top_bottom_switch={this.top_bottom_switch}
          chosen_array={this.state.chosen_array}
          neighborhood_count ={this.state.neighborhood_count}
          column_count ={this.state.column_count}
          screen_change = {this.screen_change}
          merge_hoods ={this.merge_hoods}
          selecting_hood={this.selecting_hood}
          start_data_processing={this.props.start_data_processing}
          first_hood_data={this.state.first_hood_data}
          second_hood_data={this.state.second_hood_data}
          call_precinct_change={this.call_precinct_change} 
          precinct_selected = {this.state.precinct_selected} 
          reset_all_precincts = {this.reset_all_precincts}
          precinct = {this.state.precinct}
          changeMidDisplay={this.changeMidDisplay}
          chosenHood = {this.chosenHood}
          merge_hoods_up={this.merge_hoods_up}
          merge_hoods_down={this.merge_hoods_down}
      />
        <HoodsHolder 
        ref='hood_holder'
        selecting_hood={this.selecting_hood}
                chosenHood = {this.chosenHood}
                neighborhood_count ={this.state.neighborhood_count}
                call_precinct_change={this.call_precinct_change}
                precinct = {this.state.precinct}
                
        />
     
        </main>
      );
    }
  
  else if (this.state.screen === 'data_display') {
    return(
      <main className='container'>
      <Header />
      <DataDisplay 
      first_date_array = {this.state.first_date_array}
      second_date_array= {this.state.second_date_array}
      top_chosen_array = {this.state.top_chosen_array}
      bottom_chosen_array = {this.state.bottom_chosen_array}
      first_hood_data={this.state.first_hood_data}
      second_hood_data={this.state.second_hood_data}
      chosen_array={this.state.chosen_array}
      merge_hoods ={this.merge_hoods}
      screen_change = {this.screen_change}
      start_data_processing={this.props.start_data_processing}
      neighborhood_count ={this.state.neighborhood_count}
             
      />

      </main>
    )
  }
  else if(this.state.screen === 'date_picker'){
    return(
      <main className='container'>
      <Header />
      <SortScreen 
      prep_data = {this.prep_data}
      top_chosen_array={this.state.top_chosen_array}
      bottom_chosen_array={this.state.bottom_chosen_array}
      top_precincts={this.state.top_precincts}
      bottom_precincts={this.state.bottom_precincts}/>
      </main>
    )
  }

}}
  
  export default Main;
  

 