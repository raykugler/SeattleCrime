import React from 'react';
class CrimeData extends React.Component{
    constructor(props){
        super(props)
        this.state = { data: [] };
    }
    



    componentDidMount() {
        fetch(`https://data.seattle.gov/resource/xurz-654a.json?$limit=500000`)
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
      }
dig_crime =() =>{
    var start_date = '2017-01-01';
    let crime_hood = this.props.neighborhood;
    let crimes = [];
    var crime_count = [];    
    var spec_crime = [];
    var all_crime= this.state.data;
    for (var t = 0; t < all_crime.length; t++){      
        if (all_crime[t].neighborhood === crime_hood && all_crime[t].occ_datetime > start_date){       
            crimes.push(all_crime[t].crime_subcategory);
          }
    }
     
    const set1 = new Set(crimes);
    let arrayOfcrimes = Array.from(set1);
    
    for(let p = 0; p < arrayOfcrimes.length; p++){
        var spec_crime_count = 0;
        var specific_crime= arrayOfcrimes[p];
    
        for(var d = 0; d < crimes.length; d++){
            if(specific_crime === crimes[d] ){
                spec_crime_count++;
            }
        }
            spec_crime.push(specific_crime);
            crime_count.push(spec_crime_count)
    }
    for(var h= 0; h< spec_crime.length; h++){
        console.log(spec_crime[h] + ': ' + crime_count[h])
    }
}
    


render(props){
return(
    <div className='crime_data' id='test_id'>
    <p>{this.props.neighborhood} </p>
    </div>
);
   }
}
       export default CrimeData;
   
//        fetch("https://api.example.com/items")
//        .then(res => res.json())
//        .then(
//          (result) => {
//            this.setState({
//              isLoaded: true,
//              items: result.items
//            });
//          },
//          // Note: it's important to handle errors here
//          // instead of a catch() block so that we don't swallow
//          // exceptions from actual bugs in components.
//          (error) => {
//            this.setState({
//              isLoaded: true,
//              error
//            });
//          }
//        )
//    }