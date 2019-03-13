import React from 'react';


const north_precinct=[
    'N',
    "north_precinct",
    "NORTHGATE",
    "LAKECITY",
    "ROOSEVELT/RAVENNA",
    "WALLINGFORD",
    "SANDPOINT",
    "BITTERLAKE",
    "GREENWOOD",
    "PHINNEY RIDGE",
    "UNIVERSITY",
    "BALLARD NORTH",
    "BALLARD SOUTH",
    "FREMONT"
  ]                
const south_precinct =[
    'SE',
    "south_precinct",
    "LAKEWOOD/SEWARD PARK",
    "BRIGHTON/DUNLAP",
    "CLAREMONT/RAINIER VISTA",
    "HILLMAN CITY",
    "SODO",
    "SOUTH BEACON HILL",
    "RAINIER VIEW",
    "NORTH BEACON HILL",
    "RAINIER BEACH",
    "MID BEACON HILL",
    "MOUNT BAKER",
    "GENESEE",
    "COLUMBIA CITY",
    "NEW HOLLY",
    "GEORGETOWN"
  ]
const southwest_precinct = [
    'SW',
    "southwest_precinct",
    "ALKI",
    "HIGH POINT",
    "ROXHILL/WESTWOOD/ARBOR HEIGHTS",
    "ALASKA JUNCTION",
    "SOUTH PARK",
    "NORTH ADMIRAL",
    "HIGHLAND PARK",
    "FAUNTLEROY SW",
    "MORGAN",
    "SOUTH DELRIDGE",
    "NORTH DELRIDGE",
    "COMMERCIAL HARBOR ISLAND",
    "COMMERCIAL DUWAMISH",
    "PIGEON POINT"
  ]
  const west_precinct = [  
    'W',
    "west_precinct",
    "QUEEN ANNE",
    "SLU/CASCADE",
    "MAGNOLIA",
    "CHINATOWN/INTERNATIONAL DISTRICT",
    "BELLTOWN",
    "PIONEER SQUARE",
    "DOWNTOWN COMMERCIAL",
    "EASTLAKE - WEST"
]
const east_precinct=[
    'E',
    "east_precinct",
    "CENTRAL AREA/SQUIRE PARK",
    "FIRST HILL",
    "CAPITOL HILL",
    "MILLER PARK",
    "MADRONA/LESCHI",
    "JUDKINS PARK/NORTH BEACON HILL",
    "MONTLAKE/PORTAGE BAY",
    "MADISON PARK"
]

const colors = ['#345593', '#2B47A7', '#F93882', '#FF746C', '#00CAC6'];
const precincts_array = [east_precinct, north_precinct, south_precinct, southwest_precinct, west_precinct];

class PrecinctMenu extends React.Component{
 
  precinctSelected=(e)=>{
    
    // this.props.changeMidDisplay('');
    var current_id = e.slice(0,-9);  
     
      this.props.changeMidDisplay(current_id);
  }
  precinctMaker = () => {
    let precinct_display = document.getElementById('precinct_nav');
    for( let i = 0; i < 5;i++){
      var precinct_btn = document.createElement("BUTTON"); 
      precinct_btn.innerHTML = precincts_array[i][0];
      precinct_btn.setAttribute('class', 'precinct_button');
      precinct_btn.setAttribute('id', precincts_array[i][1] + 'precinct');
      precinct_btn.addEventListener('click', e => this.props.call_precinct_change(precincts_array[i][1])) ;
      precinct_btn.style.backgroundColor = colors[i];
      precinct_display.appendChild(precinct_btn);
    }
    var all_precinct_btn = document.createElement("BUTTON"); 
    all_precinct_btn.innerHTML = 'ALL';
      all_precinct_btn.setAttribute('class', 'precinct_button');
      all_precinct_btn.setAttribute('id', 'all_precincts_id');
      all_precinct_btn.addEventListener('click', e => this.props.call_precinct_change(''));
      all_precinct_btn.style.backgroundColor = colors[0];
      precinct_display.appendChild(all_precinct_btn);
    }
    
    componentDidMount(){
         this.precinctMaker();
    }
    render(){
        return(
     <section className='precinct_navigation' id='precinct_nav' >      
         <p className='precinct_nav_header'>Precincts</p>
     </section> 
              
        );}
    }
        export default PrecinctMenu;
    