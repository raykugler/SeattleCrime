export const test_run=(e,f)=>{
   console.log('testtttt: ' + e);
}
export const test_run_two=(e)=>{
    console.log('test_run two')
}
export const set_urls=(e,f) =>{
    let top_hoods= e;
    let bottom_hoods = f;
    let URL = `https://data.seattle.gov/resource/xurz-654a.json`
    let length = '?$limit=5000000';
    let top_url_array = [];
    let bottom_url_array = [];
    let all_arrays = [];
    for(let i = 0; i < top_hoods.length; i++){
            let pick_hood = top_hoods[i];
            let pick_hood_over = '&neighborhood=' + pick_hood;
            let URLTotal = URL + length + pick_hood_over;
            top_url_array.push(URLTotal);
        }
    if(bottom_hoods.length > 0){
        for(let u = 0; u < bottom_hoods.length; u++){
            let pick_hood = bottom_hoods[u];
            let pick_hood_over = '&neighborhood=' + pick_hood;
            let URLTotal = URL + length + pick_hood_over;
            bottom_url_array.push(URLTotal);
        }
    }
            all_arrays.push(top_url_array, bottom_url_array);
            return(all_arrays);     
}      

export const the_fetch = (all_url_array)=>{
let first_hoods = all_url_array[0];
let first_hoods_data = [];
for(let i = 0; i< first_hoods.length; i++){
        let url = first_hoods[i];
        console.log('url: ' + url);

        fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    first_hoods_data.push(data)// Create and append the li's to the ul
    })

  }

  return(first_hoods_data)
  
}

export const the_second_fetch=(all_url_array)=>{
    let second_hoods = all_url_array[1];
    let second_hoods_data = [];
    for(let i = 0; i< second_hoods.length; i++){
        let url = second_hoods[i];

        fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    second_hoods_data.push(data)// Create and append the li's to the ul
    })
    }
    return(second_hoods_data);
}

export const date_sift=(first_length,top_data,top_dates,bottom_length,bottom_data,bottom_dates)=>{
    // let start_date = top_dates[0];
    // let end_date = top_dates[1];
    // let all_hood_crimes = [];
    // let big_crimes = [];
    // let crimes = [];

    // for (let t = 0; t < first_length; t++){      
            
    //     for(let h = 0; h < top_data[t].length; h++){
           
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
    //     if(bottom_chosen_array.length === 0){
    //             return(arrayOfcrimes);
    //     }
    //     else{

    //         second_date_sift(bottom_length,bottom_data,bottom_dates, arrayOfcrimes);
    //                 }
}
                    
// export const second_date_sift = (bottom_length,bottom_data,bottom_dates, arrayOfcrimes)=>{

//     console.log(arrayOfcrimes); 
//                    for (let t = 0; t < bottom_chosen_array.length; t++){      
            
//                 console.log(bottom_data);
//                 for(let h = 0; h < bottom_data[t].length; h++){
                   
//                     if(bottom_data[t][h].reported_date > start_date && bottom_data[t][h].reported_date < end_date){
                        
//                       crimes.push(bottom_data[t][h].crime_subcategory);
//                     }
                    
//                 }

//                         }
//                 const set2 = new Set(crimes);
//                 let second_arrayOfcrimes = Array.from(set2);
//                 let arrays_of_crimes=[];
//                 arrays_of_crimes.push('array one: ');
//                 arrays_of_crimes.push(arrayOfcrimes);
//                 arrays_of_crimes.push('array two: ');
//                 arrays_of_crimes.push(second_arrayOfcrimes);
//                 return(arrays_of_crimes);

//         }
     
    
            //     const set1 = new Set(crimes);
        //     let arrayOfcrimes = Array.from(set1);
        //         for(let p = 0; p < arrayOfcrimes.length; p++){
        //             let spec_crime_count = 0;
        //             let specific_crime= arrayOfcrimes[p];
        //             for(let d = 0; d < crimes.length; d++){
        //                 if(specific_crime === crimes[d] ){
        //                     spec_crime_count++;
        //                 }
        //             }
        //             crime_count.push(spec_crime_count)
        //              let crime_object={
        //               crime: specific_crime,
        //               count: spec_crime_count    
        //           }
        //       all_hood_crimes.push(crime_object);
        //     }
        //   console.log(all_hood_crimes);
           
    
// console.log(top_chosen_array);
// console.log(top_data);
// console.log(top_dates);
// console.log(bottom_chosen_array);
// console.log(bottom_data);
// console.log(bottom_dates);



        
    // return('this is the hoods array: ' + e + ', this is the data: ' + f[0][0].neighborhood + ' this is the date: ' + first_date);
    



