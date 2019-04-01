import React, {Component} from 'react';

class Table extends Component {
    constructor(props){
        super(props)
        this.state ={
            compare_data: [],
        }
    }
    componentDidMount(){
        this.check_amount();
       //  console.log(this.props.first_finished);
       //  console.log(this.props.second_finished);
    }
   
    check_amount=()=>{
   
        if(this.props.second_finished.length === 0){
            console.log(this.props.first_finished);
           this.show_one();
           }
        else{
           this.prep_two();
        }
    }
   
    show_one=()=>{
     
       let put_table_here = document.getElementById('data_display_id');
       let single_hood_table = document.createElement('TABLE');
           single_hood_table.setAttribute('class','single_hood_table');
       
       let single_hood_name_row = document.createElement('TR');
       for( let i = 0; i < this.props.top_chosen_array.length; i++){
       let single_hood_name_title = document.createElement('TH');
       let single_hood_name_text= document.createTextNode(this.props.top_chosen_array[i]);
   
       single_hood_name_title.appendChild(single_hood_name_text);
       single_hood_name_row.appendChild(single_hood_name_title);
       single_hood_table.appendChild(single_hood_name_row);
       }
       let first_hood_crimes = this.props.first_finished;
       for(let f = 0; f < first_hood_crimes.length; f++){
           let crime_row = document.createElement('TR');
           let spec_crime = document.createElement('TD');
           let spec_crime_count = document.createElement('TD');
           let spec_crime_text = document.createTextNode(this.props.first_finished[f].crime);
           let spec_crime_count_text = document.createTextNode(this.props.first_finished[f].crime_count);
           spec_crime.appendChild(spec_crime_text);
           spec_crime_count.appendChild(spec_crime_count_text);
           crime_row.appendChild(spec_crime);
           crime_row.appendChild(spec_crime_count);
           single_hood_table.appendChild(crime_row);
          
       }
       put_table_here.appendChild(single_hood_table);
   }
   prep_two=()=>{
       let first_hood_crimes = this.props.first_finished;
       let second_hood_crimes = this.props.second_finished;
       let just_one_crimes = [];
       let just_one_spare_crimes = [];
       let just_two_crimes = [];
       let just_two_spare_crimes =[];
       let joint_crimes = [];
       let joint_crimes_two = [];
      for(let i = 0; i< first_hood_crimes.length; i++){
          if(first_hood_crimes[i].crime !== undefined){ 
              just_one_crimes.push(first_hood_crimes[i].crime);
          }
   }
   for(let d = 0; d < second_hood_crimes.length; d++){
       if(second_hood_crimes[d].crime !== undefined){ 
   just_two_crimes.push(second_hood_crimes[d].crime);
       }
   }
   
   for(let y = 0; y < just_one_crimes.length; y++){
       if(just_two_crimes.includes(just_one_crimes[y])){
           joint_crimes.push(just_one_crimes[y])
       }
       else{
           just_one_spare_crimes.push(just_one_crimes[y]);
       }
   }
   
   
   for(let w = 0; w < just_two_crimes.length; w++){
       if(just_one_crimes.includes(just_two_crimes[w])){
           joint_crimes_two.push(just_two_crimes[w])
       }
       else{
           just_two_spare_crimes.push(just_two_crimes[w]);
       }
   }
   let joint_objects = [];
   for (let t = 0; t < joint_crimes.length; t++){
       let joint_crimes_object = {
           crime: joint_crimes[t],
           first_hood_count: 0,
           second_hood_count: 0,
       }
       joint_objects.push(joint_crimes_object);
   }
    for(let i = 0; i < first_hood_crimes.length; i++){
        for(let p = 0; p < joint_objects.length; p++){
            if(first_hood_crimes[i].crime === joint_objects[p].crime){
               joint_objects[p].first_hood_count = first_hood_crimes[i].crime_count;
             
            }
        }
    }
    for(let i = 0; i < second_hood_crimes.length; i++){
       for(let p = 0; p < joint_objects.length; p++){
           if(second_hood_crimes[i].crime === joint_objects[p].crime){
              joint_objects[p].second_hood_count = second_hood_crimes[i].crime_count;
           }
       }
   
   }
   
   let first_spare_crimes_array=[];
   for(let l = 0; l < just_one_spare_crimes.length; l++){
       let spare_object_one ={
           crime: just_one_spare_crimes[l],
           first_hood_count: 0,
           second_hood_count: 0,
       }
       first_spare_crimes_array.push(spare_object_one);
   }
   
   for (let g = 0; g < first_spare_crimes_array.length; g++){
       for(let p = 0; p < first_hood_crimes.length; p++){
           if(first_spare_crimes_array[g].crime === first_hood_crimes[p].crime){
               first_spare_crimes_array[g].first_hood_count = first_hood_crimes[p].crime_count;
           }
       }
   }
   let second_spare_crimes_array = [];
   for(let l = 0; l < just_two_spare_crimes.length; l++){
       let spare_object_two ={
           crime: just_two_spare_crimes[l],
           first_hood_count: 0,
           second_hood_count: 0,
       }
       second_spare_crimes_array.push(spare_object_two);
   }
   
   for (let g = 0; g < second_spare_crimes_array.length; g++){
       for(let p = 0; p < second_hood_crimes.length; p++){
           if(second_spare_crimes_array[g].crime === second_hood_crimes[p].crime){
               second_spare_crimes_array[g].second_hood_count = second_hood_crimes[p].crime_count;
           }
       }
   }
   
   let final_crime_array = joint_objects.concat(first_spare_crimes_array,second_spare_crimes_array);
   for(let i = 0; i < final_crime_array.length; i++){
     }
   this.setState({compare_data: final_crime_array})
   setTimeout(this.twoHood_display,500);
   }
       twoHood_display = () =>{
           let put_table_here = document.getElementById('data_display_id');
   
           let two_hood_table_titles = document.createElement('DIV');
               two_hood_table_titles.setAttribute('class','two_hood_table_titles');
           
           let first_hood_name_title_holder = document.createElement('DIV');
               first_hood_name_title_holder.setAttribute('class','first_hood_name_title_holder');
   
           let second_hood_name_title_holder = document.createElement('DIV');
               second_hood_name_title_holder.setAttribute('class','second_hood_name_title_holder');
           
           let spacer = document.createElement('DIV');
               spacer.setAttribute('class', 'spacer');
   
               for(let i = 0; i < this.props.top_chosen_array.length; i++){
           let first_hood_name_title = document.createElement('P');
               first_hood_name_title.setAttribute('class','first_hood_title');
           
   
           let first_hood_name_text= document.createTextNode(this.props.top_chosen_array[i]);
               first_hood_name_title.appendChild(first_hood_name_text);
               first_hood_name_title_holder.appendChild(first_hood_name_title);
           }
           for(let g = 0; g < this.props.bottom_chosen_array.length;g++){

               let second_hood_name_title = document.createElement('P');
               second_hood_name_title.setAttribute('class','second_hood_title');
   
               let second_hood_name_text= document.createTextNode(this.props.bottom_chosen_array[g]);
               second_hood_name_title.appendChild(second_hood_name_text);
   
               second_hood_name_title_holder.appendChild(second_hood_name_title);
           }
               two_hood_table_titles.appendChild(first_hood_name_title_holder);
               two_hood_table_titles.appendChild(second_hood_name_title_holder);
               two_hood_table_titles.appendChild(spacer);
               
               put_table_here.appendChild(two_hood_table_titles);
       
          
       
           let two_hood_table = document.createElement('TABLE');
               two_hood_table.setAttribute('class', 'two_hood_table');
       
           for(let h = 0; h < this.state.compare_data.length; h++){
               let crime_row = document.createElement('TR');
               let crime_name = document.createElement('TD');
               let first_crime_count = document.createElement('TD');
               let second_crime_count = document.createElement('TD');
                    crime_name.setAttribute('class', 'crime_name');
                   first_crime_count.setAttribute('class', 'count_cell_one');
                   second_crime_count.setAttribute('class', 'count_cell_two');
               
               crime_row.setAttribute('class', 'crime_row');
               let crime_name_text = document.createTextNode(this.state.compare_data[h].crime);
                    crime_name.appendChild(crime_name_text);
           
               let first_crime_count_text = document.createTextNode(this.state.compare_data[h].first_hood_count);
                    first_crime_count.appendChild(first_crime_count_text);    
           
   
                let second_crime_count_text = document.createTextNode       (this.state.compare_data[h].second_hood_count);
                second_crime_count.appendChild(second_crime_count_text);
           
   
                
                crime_row.appendChild(crime_name);
                crime_row.appendChild(first_crime_count);
                crime_row.appendChild(second_crime_count);
   
               two_hood_table.appendChild(crime_row);
   
           
           }
   put_table_here.appendChild(two_hood_table);
   
   
   }
    render(){
        return(
            <div id='data_display_id' className='table'>
            
            </div>
            
        )
    }
}

export default Table;