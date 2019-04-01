import React, { Component } from 'react';
import SeattleMap from './SeattleMap';
import Data from './Data';
import SortScreen from './SortScreen';
import PrecinctMenu from './PrecinctMenu';


class MidHolder extends Component {
  constructor(props){
    super(props)
    this.state = { 
      midholder_display: 'map',
      first_date: '0',
      second_date: '0',
      third_date: '0',
      fourth_date: '0',     
     

              
  };

}
componentDidMount(){
  document.getElementById("view_data_id").disabled = true;
}
view_data=(e,f,g,h)=>{
  let start_month = f + 1
      start_month = start_month.toString();
  let end_month = h + 1
      end_month = end_month.toString();
    
      if(start_month.length === 1){
         start_month = '0' + start_month;
  }
      if(end_month.length === 1){
         end_month = '0' + end_month;
  }
  let first_date = e + '-' + start_month + '-01';
  let second_date = g + '-' + end_month + '-01'
  this.setState({first_date: first_date});
  this.setState({second_date: second_date});
  this.setState({midholder_display: 'data'});
  // this.props.screen_change();
}
 test=()=>{
   console.log('gffgfg');
   this.setState({
     midholder_display: 'map'
   })
 }

compare_data=(e,f,g,h,i,j,k,l)=>{
  let start_month = f + 1
  start_month = start_month.toString();
  let end_month = h + 1
  end_month = end_month.toString();
  let second_start_month = j + 1;
  second_start_month = second_start_month.toString();
  let second_end_month = l + 1;
  second_end_month = second_end_month.toString();
  // "2002-03-27T00:00:00.000",
  if(start_month.length === 1){
    start_month = '0' + start_month;
  }
  if(end_month.length === 1){
    end_month = '0' + end_month;
  }
  if(second_start_month.length === 1){
    second_start_month = '0' + second_start_month;
  }
  if(second_end_month.length === 1){
    second_end_month = '0' + second_end_month;
  }
let first_date = e + '-' + start_month + '-01';
let second_date = g + '-' + end_month + '-01';
let third_date = i + '-' + second_start_month + '-01';
let fourth_date = k + '-' + second_end_month + '-01';
this.setState({first_date: first_date});
this.setState({second_date: second_date});
this.setState({third_date: third_date});
this.setState({fourth_date: fourth_date});


  this.setState({midholder_display: 'data'});
}

hood_selected_mid=(e)=>{
this.setState({midholder_display: 'sortscreen'})
 this.refs.sortscreen.hood_selected(e);
}
        
 neighborhood_switch=(e)=>{

    this.refs.precinct_menu.precinctSelected(e);
    
  }
 
    render() {
      if(this.state.midholder_display === 'map'){
        return (      
          <main className="mid-holder" id='midholder'>

          <SeattleMap call_precinct_change={this.props.call_precinct_change} 
          precinct_selected={this.props.precinct_selected}
          test={this.test}
          selecting_hood={this.props.selecting_hood}
          reset_all_precincts = {this.props.reset_all_precincts}
          chosenHood = {this.props.chosenHood}/>
          
          <PrecinctMenu 
          ref='precinct_menu'
            changeMidDisplay={this.props.changeMidDisplay}
            call_precinct_change={this.props.call_precinct_change}
          />
          <nav className='selected_hood_holder'>
          <nav className='switch_holder' id='switch_holder_id' onClick={this.props.top_bottom_switch}>
          <button className='switch' id='switch_id' onClick={this.props.top_bottom_switch}></button>
          </nav>
         
          <div className='first_selected_hood_button' id='first_selected_hood_button_id'>
         
          <p className='hood_name' id='first_hood_name'>Merge Up to Three Neighborhoods Here</p>
         
          </div>
         
         
         
          <nav className='choices'>
            <button className='view_data' id='view_data_id' onClick={e=> this.props.set_dates('view')}>View Data</button>
            
            
            <button className='compare' id='compare_id' onClick={e=> this.props.set_dates('compare')}>Compare</button>
          </nav>
          <div className='second_selected_hood_button' id='second_selected_hood_button_id'><p className='hood_name' id='second_hood_name'>Merge Up to Three Neighborhoods Here</p></div>
          </nav>
            <div className='tapered_line_mid'></div>
           
        </main>
        )}
        else if (this.state.midholder_display === 'sortscreen') {
          return(
            <main className="mid-holder" id='midholder'>
            <SortScreen 
            ref='sortscreen'
            view_data={this.view_data} 
            compare_data={this.compare_data} 
            start_data_processing={this.props.start_data_processing}
            merge_hoods ={this.props.merge_hoods}
          
              hood_sort_display={this.props.hood_sort_display}
              test_stuff={this.props.test_stuff}
              neighborhood_count ={this.props.neighborhood_count}
              column_count ={this.props.column_count}
              second_hood_data = { this.props.second_hood_data}
            
            />
            
            <div className='tapered_line_mid'></div>
          </main>
 
          )
        }
      else if(this.state.midholder_display === 'data'){
        return(
          <main className="mid-holder" id='midholder'>
            <Data 
              ref='datade'
              second_hood_data = { this.props.second_hood_data}
              start_processing={this.props.start_processing}
          
              first_date={this.state.first_date}
              second_date={this.state.second_date}
              third_date={this.state.third_date}
              fourth_date={this.state.fourth_date}
              screen_change={this.props.screen_change}
            />
          
           <div className='tapered_line_mid'></div>
        </main>

        )
      
      }
      }
    }
  
  
  export default MidHolder;
