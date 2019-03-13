import React from 'react';

const north_precinct=[
    "North",
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
    "South",
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
    "Southwest",
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
    "West",
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
    "East",
    "CENTRAL AREA/SQUIRE PARK",
    "FIRST HILL",
    "CAPITOL HILL",
    "MILLER PARK",
    "MADRONA/LESCHI",
    "JUDKINS PARK/NORTH BEACON HILL",
    "MONTLAKE/PORTAGE BAY",
    "MADISON PARK"
]

const color[]

const precincts = [east_precinct, north_precinct, south_precinct, southwest_precinct, west_precinct];

class Neighborhood_Buttons extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            precinct: '',
        
  }
    }
precinct_button =()=>{
    let precinct_display = document.getElementById('neighborhood_nav');
    for   ( let i = 0; i <= 4; i++){
       
       
        var hood_btn = document.createElement("BUTTON"); 
        var hood_section = document.createElement('SECTION');
        hood_btn.setAttribute('class', 'hood_section');
        var the_hood = precincts[i][0].toLowerCase();
        hood_btn.setAttribute('id', the_hood + 'section');
        hood_btn.style.color = color[i];
        hood_btn.innerHTML = precincts[i][0];     
        precinct_display.appendChild(hood_btn);
    }
}    
navMaker = () => {

var neighborhood_groups = [];
var nav_list = document.getElementById('button_holder_id');
//console.log(this.state.neighborhood)
    for ( var i = 0; i <= 4; i++){
       
        var hood_btn = document.createElement("BUTTON"); 
        var hood_section = document.createElement('SECTION');
        hood_btn.setAttribute('class', 'hood_section');
        var the_hood = precincts[i][0].toLowerCase();
        hood_btn.setAttribute('id', the_hood + 'section');
        hood_btn.innerHTML = precincts[i][0];     

        //     nav.setAttribute('class', 'precinct_nav');
    //     var the_precinct = precincts[i][0].toLowerCase();
    //     nav.setAttribute('id', the_precinct);
    //     hood_btn.appendChild(precinct_title);
    //      hood_btn.appendChild(nav);
    //      hood_btn.appendChild(nav);
        
    //      hood_btn.setAttribute('id', the_hood + 'nav2');
    
          nav_list.appendChild(hood_btn);
        
   document.getElementById(the_hood + 'section').addEventListener('click', this.show_hood)
     }
   this.btnMaker();
    }



    btnMaker = (props) => {
       
        var j =0; 
        var all_hood_holder = document.getElementById('neighborhoods');
           while(j< 5){
               
          
            var precinct_group = document.createElement('NAV');
            precinct_group.setAttribute('class', 'hood_button_hide');
            var low_p = precincts[j][0].toLowerCase();
            precinct_group.setAttribute('id', low_p);
           // 
           all_hood_holder.appendChild(precinct_group);
            //INDIVIDUAL BUTTONS
            for(var i = 1; i < precincts[j].length; i++){
                     
                var btn = document.createElement("BUTTON"); 
                var lowcapped = precincts[j][i];
               
                    const toTitleCase = (phrase) => {
                     return phrase
                         .toLowerCase()
                         .split(' ')
                         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                         .join(' ');
                     };
        
                 var title = toTitleCase(lowcapped);
                 var t = document.createTextNode(title);
                 var id_maker =title.replace(/\s/g, '');
                    
                 btn.setAttribute('id', lowcapped);
                 btn.setAttribute('class', 'hood_button');
                 btn.appendChild(t);      
                 
                 
                 var the_nav = document.getElementById(low_p);
                 the_nav.appendChild(btn);
              
                 document.getElementById(lowcapped).addEventListener('click', this.props.crime);              
            } 
            j++;
        }
    }
   
    show_hood=(e)=>{
        var all_sections = document.getElementById("neighborhoods").childNodes;
        for(var i = 0; i < 5; i++){
        all_sections[i].classList.remove("display_nav");
    }
        var current_id = e.target.id.slice(0,-7);
        
        var the_area = document.getElementById(current_id);

        the_area.classList.toggle("display_nav");
    }

   
    componentDidMount(){
        if(this.state.precinct === 'main'){
            this.precinct_button();
        }
        else{
        this.navMaker();
    }} 
   
    render(){
    return(
 <section className='neighborhood_navigation' id='neighborhood_nav' >      
<nav className='button_holder' id='button_holder_id' >
</nav>
<nav className='neighborhood_list' id='neighborhoods'  ></nav>
</section> 
          
    );}
}
    export default Neighborhood_Buttons;

    