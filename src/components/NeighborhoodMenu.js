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
    'S',
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
const hood_colors = ['#345593', '#2B47A7', '#F93882', '#FF746C', '#00CAC6','#345593', '#2B47A7', '#F93882', '#FF746C', '#00CAC6','#345593', '#2B47A7', '#F93882', '#FF746C', '#00CAC6','#345593', '#2B47A7', '#F93882', '#FF746C', '#00CAC6','#345593', '#2B47A7', '#F93882', '#FF746C', '#00CAC6','#345593', '#2B47A7', '#F93882', '#FF746C', '#00CAC6'];

const precincts_array = [east_precinct, north_precinct, south_precinct, southwest_precinct, west_precinct];

class NeighborhoodMenu extends React.Component{
    
    neighborhood_maker = (precinct) =>{
  
        let neighborhood_display = document.getElementById('neighborhood_nav');
   
        while (neighborhood_display.firstChild) {
            neighborhood_display.removeChild(neighborhood_display.firstChild);
        }
        let current = precinct + '_precinct'
        for (let i = 0; i < precincts_array.length; i++){
            let array_picker = precincts_array[i][1] ;
            if (current === array_picker){
                for (let j = 2; j < precincts_array[i].length; j++ ){

              var neighborhood_btn = document.createElement("BUTTON"); 
              neighborhood_btn.innerHTML = precincts_array[i][j];
              neighborhood_btn.setAttribute('class', 'neighborhood_button');
              neighborhood_btn.setAttribute('id', precincts_array[i][j] + '_hood');         
              let full_id = current.substring(0, current.length - 9);
                    let fixed_id = full_id + '_hoods_id';
              neighborhood_btn.addEventListener('click', e => this.props.selecting_hood(precincts_array[i][j],precinct,fixed_id)) ;
              neighborhood_btn.style.backgroundColor = hood_colors[j];
              neighborhood_display.appendChild(neighborhood_btn);
        }} 

    }
    
}
    render(){
        return(
     <section className='neighborhood_navigation' id='neighborhood_nav' >      
        
          
            
     </section> 
              
        );}
    }
        export default NeighborhoodMenu;
    

        // precinctMaker = () => {
            
        //     for( let i = 0; i < 5;i++){
        //       var precinct_btn = document.createElement("BUTTON"); 
        //       precinct_btn.innerHTML = precincts_array[i][0];
        //       precinct_btn.setAttribute('class', 'precinct_button');
        //       precinct_btn.setAttribute('id', precincts_array[i][1] + 'precinct');
        //       precinct_btn.addEventListener('click', e => this.precinctSelected(precincts_array[i][1])) ;
        //       precinct_btn.style.backgroundColor = colors[i];
        //       precinct_display.appendChild(precinct_btn);
        //     }
             
        //     }