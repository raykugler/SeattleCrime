import React, { Component } from 'react';
const east_precinct=[
  "MONTLAKE/PORTAGE BAY",
  "MADRONA/LESCHI",
  "CAPITOL HILL",
  "MADISON PARK",
  "FIRST HILL",
  "JUDKINS PARK/NORTH BEACON HILL",
  "CENTRAL AREA/SQUIRE PARK",  
  "MILLER PARK",
]

class EastHoods extends Component{
  componentDidMount(){
    var theParent = document.getElementById("east_hoods_id");
    let children = theParent.children;
    theParent.addEventListener("click", this.hoodname, false);
    let path_count = 0;
    for(let p = 0; p < children.length; p++){
    
       if(children[p].tagName === 'path' ){

      children[p].setAttribute('id', east_precinct[path_count] + '_id');
        path_count +=1;
    }

    }
  }
    remove_hood_holder=()=>{
      let put_hood_here = document.getElementById('east_hoods_big_id');    
          put_hood_here.removeChild(put_hood_here.lastChild);
      let blank_div = document.createElement('DIV');
          put_hood_here.appendChild(blank_div);
    }
  hoodname=(e)=>{

        let put_hood_here = document.getElementById('east_hoods_big_id');    
      
        if (e.target !== e.currentTarget) {

            var clickedItem = e.target.id;
            let regex = /_/gi;
            let name = clickedItem.replace(regex, ' ');
            let name_minus_id = name.substring(0, name.length - 3);

            this.props.selecting_hood(name_minus_id, 'east','east_hoods_id');
        }
        e.stopPropagation();
    }
  
render(){
  return (
    <div id='east_hoods_big_id'>
    <h2 className='precinct_header'>East</h2>
<svg id="east_hoods_id" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="700.9256" height="599.0054" viewBox="0 0 700.9256 599.0054"><defs></defs><title>eastlines</title>


<path className="montlake_portage_bay" d="M272.0862,541.9519c-13.604-1.1625-10.8971-11.3621-10.7689-19.839q.6887-45.5371,1.8342-91.0658c.0643-2.4359,1.881-6.6339,3.427-6.9043,6.1631-1.0777,12.1874-.5326,16.7,5.26,9.0682,11.6411,19.2564,22.48,27.5758,34.6148,9.0133,13.1466,21.4846,9.74,33.6106,9.4,13.9608-.3918,27.9181-.9139,41.88-1.2346a5.2752,5.2752,0,0,1,3.756,1.5925c7.56,9.3651,16.0805,9.1656,26.2837,4.2308,3.9641-1.9172,9.5-.6175,14.3215-.709,1.4829-.0281,3.0579.5631,4.4426.2388,18.2747-4.28,32.5468,2.2011,44.0967,16.1747,5.1169,10.0769,5.4607,19.7268-.3352,21.6648-9.53,3.1868-18.7066,8.6568-29.8571,5.3649-14.3508-4.2366-21.86,4.1888-19.119,19.4213,1.2416,6.9,1.7488,14.39.427,21.1923-2.2889,11.7781-2.7381,23.0036,4.6367,32.9176,5.0506,6.7893,4.041,13.1608,2.521,20.7237-1.6294,8.1077-3.26,17.5731-.557,24.8333,3.0452,8.1806,3.4672,14.539-.6952,21.6721-4.4491,3.2489-8.8984,6.4978-13.7671,10.0529-.2149-2.3515-.399-4.3657-.5831-6.38,2.2513-5.5069,2.559-10.5694-1.7281-15.595-2.768-3.2449-4.5188-7.3555-6.7407-11.069-1.3249-2.2143-2.2917-5.9031-4.0847-6.369-10.2326-2.659-8.6833-10.4558-8.6621-17.7981.0091-3.1457-.2948-6.2923-.5066-10.4152h-74.645a8.1264,8.1264,0,0,1-1.3614-2.2823c-2.6167-13.0829-5.0863-26.1958-7.7937-39.2595a19.8955,19.8955,0,0,0-2.8883-6.3868c-3.24-5.0844-6.7021-10.0269-9.4148-14.0469Z" transform="translate(-19.6689 -398.651)"/>

<path className="madrona_leschi" d="M503.7574,665.0794c-4.3992,11.2206-.594,20.31,6.7174,29.0137,2.3719,2.8235,3.5972,7.2139,3.9614,11.02,2.0833,21.7768-3.0848,42.7391-6.9414,63.98-5.052,27.826-7.6794,56.0868-12.4686,83.9684-2.266,13.1916-7.3641,25.876-10.7569,38.9-3.6968,14.191-7.7083,28.3849-9.9475,42.831-.9562,6.1684,2.0622,13.0189,3.5921,19.4843,1.0849,4.5857,2.7022,9.0455,4.5533,15.1045-12.99-.8053-23.78-1.8536-34.5851-2.0579-17.6284-.3335-35.2685-.0076-52.9006-.2142-4.02-.0471-8.0276-1.1318-12.041-1.7389l.051-96.5575H437.493c.2509-2.625.5148-4.3355.5639-6.052,1.6918-59.182-3.9418-118.514,3.6325-177.5629.4935-3.8475,2.5407-7.4957,3.8651-11.2366,4.7579-.0241,9.5232.1093,14.2717-.1138,5.45-.256,8.6629.6485,12.2622,6.4382,6.44,10.36,6.2873,12.0783,13.8321,7.67-5.919-20.71-4.1676-29.68,7.9375-37.932-.7954,4.91-1.5343,9.4717-2.2684,14.0032Z" transform="translate(-19.6689 -398.651)"/>

<path className="capitol_hill" d="M272.0862,541.9519h32.0045c2.7127,4.02,6.1751,8.9625,9.4148,14.0469a19.8955,19.8955,0,0,1,2.8883,6.3868c2.7074,13.0637,5.177,26.1766,7.7937,39.26a8.17,8.17,0,0,0,1.3607,2.2839c-1.8382,9.6485-4.8166,19.2462-5.2344,28.9542-.5674,13.1824,1.0322,26.4447,1.3232,39.681.3648,16.5913.3452,33.191.4915,49.7871-.0716,7.728.094,15.4675-.279,23.181-.4032,8.34-1.3094,16.6559-1.9963,24.9822-3.566.012-7.2736-.6039-10.6694.1623-7.87,1.7757-15.8768,3.5243-23.2909,6.585-7.6407,3.1542-13.4229,8.7985-13.1531,19.0254-2.3827-2.49-4.3611-5.3821-5.01-5.11-8.2745,3.4756-7.9928-4.2546-10.7858-7.89-3.1781-4.1362-6.0916-11.5-9.6044-11.8-11.5323-.9866-13.2381-9.7472-17.2194-17.189-1.0633-1.9876-2.96-3.53-4.4735-5.2762.8264-4.5353,2.1983-9.0483,2.3844-13.61.7857-19.2654,1.2358-38.5448,1.7649-57.82.1041-3.7941.015-7.5935.015-11.8913l10.6953-1c.2156-1.6826.8625-3.4526.5772-5.0569-1.4525-8.1686,1.9468-12.2429,9.7321-15.0587,4.6916-1.6968,9.1332-6.0213,11.99-10.2985,2.7444-4.1089,3.301-9.6791,5.0753-15.439l10.9148-.5913c0-12.6007,4.5138-27.8784-1.059-36.9808C269.397,567.6551,273.036,555.0672,272.0862,541.9519Z" transform="translate(-19.6689 -398.651)"/>

<path className="madison_park" d="M503.7574,665.0794,491.59,664.0275c.7341-4.5315,1.473-9.0931,2.2684-14.0032-12.1051,8.2522-13.8565,17.2218-7.9375,37.932-7.5448,4.4084-7.3918,2.69-13.8321-7.67-3.5993-5.79-6.8123-6.6942-12.2622-6.4382-4.7485.2231-9.5138.09-14.2735.1155q-4.6452-6.23-9.2867-12.463c4.1627-7.1331,3.7407-13.4915.6955-21.6721-2.7026-7.26-1.0724-16.7256.557-24.8333,1.52-7.5629,2.53-13.9344-2.521-20.7237-7.3748-9.914-6.9256-21.1395-4.6367-32.9176,1.3218-6.8022.8146-14.2921-.427-21.1923-2.7411-15.2325,4.7682-23.6579,19.119-19.4213,11.1505,3.2919,20.3268-2.1781,29.8571-5.3649,5.7959-1.938,5.4521-11.5879.3352-21.6648,10.0611,1.1085,20.4079,1.12,30.1016,3.6412,9.2629,2.4095,17.8462,7.4315,26.5846,11.2425.7637,14.1991,2.3672,28.3175,2.0811,42.3975-.4232,20.8284-1.166,41.7653-3.9021,62.3733-1.0452,7.8719-7.8269,15.046-12.2381,22.3916C515.9579,645.6055,509.8069,655.312,503.7574,665.0794Z" transform="translate(-19.6689 -398.651)"/>

<path className="first_hill" d="M225.6466,749.0226c1.5139,1.7466,3.41,3.2886,4.4735,5.2762,3.9813,7.4418,5.6871,16.2024,17.2194,17.189,3.5128.3005,6.4263,7.664,9.6044,11.8,2.793,3.6351,2.5113,11.3653,10.7858,7.89.649-.2726,2.6274,2.62,5.01,5.11-.27-10.2269,5.5124-15.8712,13.1531-19.0254,7.4141-3.0607,15.4206-4.8093,23.2909-6.585,3.3958-.7662,7.1034-.15,10.67-.162.5127,4.0712,1.4419,8.1394,1.47,12.2138.1924,28.088.1965,56.1774.2612,84.2663l-28.1718.2914c-11.1591-.1075-22.3488-.7592-33.4668-.1347-7.6429.4292-12.4743-2.2725-15.8083-8.7748-9.4371-18.4046-19.0477-36.722-28.2693-55.2334a15.383,15.383,0,0,1-1.2642-9.5085C217.9928,778.6979,221.9129,763.8813,225.6466,749.0226Z" transform="translate(-19.6689 -398.651)"/>

<path className="judkins_park_north_beacon_hill" d="M293.4128,867.2863q14.0859-.1456,28.174-.291c17.7351.0279,35.4688-.0177,53.2.16,2.74.0275,5.47,1.08,8.2045,1.6581l-.051,96.5575c-13.6791.3961-27.4146,1.6126-41.0024.6789-3.9763-.2732-8.1415-6.2241-11.12-10.3642-3.384-4.7042-5.4335-10.3511-8.2443-15.4891-4.4655-8.1627-10.6681-13.6249-20.62-14.2954-2.3253-.1567-4.4524-3.2538-6.6707-4.998,2.3234-1.2179,4.6315-3.4293,6.973-3.4653,6.7143-.1031,13.4456.9458,20.1614.8583,1.2154-.0158,3.831-4.0283,3.3642-4.919-6.5827-12.5606-12.0835-25.8175-24.696-34.3088C297.5064,876.6587,295.9156,871.2952,293.4128,867.2863Z" transform="translate(-19.6689 -398.651)"/>

<path className="central_area_squire_park" d="M382.9915,868.8135c-2.7345-.5783-5.4644-1.6306-8.2045-1.6581-17.7314-.1778-35.4651-.1322-53.2-.16-.0669-28.0893-.071-56.1787-.2634-84.2667-.0279-4.0744-.9571-8.1426-1.47-12.2138.6865-8.3266,1.5927-16.6424,1.9959-24.9825.373-7.7135.2074-15.453.2783-23.1809,14.46.0108,28.9981-.9,43.357.313,12.3021,1.039,15.2-.6048,15.4936-13.2957.301-13.0144.895-26.033,1.8864-39.01.164-2.1474,2.9884-5.8172,4.638-5.8478,11.463-.2132,22.9405.349,34.4133.6625.1841,2.0142.3682,4.0284.5831,6.38,4.8687-3.5551,9.318-6.804,13.7671-10.0529q4.642,6.2323,9.2864,12.463c-1.3226,3.7392-3.37,7.3874-3.8633,11.2349-7.5743,59.0489-1.9407,118.3809-3.6325,177.5629-.0491,1.7165-.313,3.427-.5639,6.052Z" transform="translate(-19.6689 -398.651)"/>

<path className="miller_park" d="M421.9161,665.1737c-11.4728-.3135-22.95-.8757-34.4133-.6625-1.65.0306-4.474,3.7-4.638,5.8478-.9914,12.9767-1.5854,25.9953-1.8864,39.01-.2936,12.6909-3.1915,14.3347-15.4936,13.2957-14.3589-1.2128-28.8971-.3022-43.3569-.313-.1457-16.5962-.1261-33.1959-.4909-49.7872-.291-13.2363-1.8906-26.4986-1.3232-39.681.4178-9.708,3.3962-19.3057,5.2344-28.9542,24.5932-.0016,49.1857-.0016,74.6457-.0016.2118,4.1229.5157,7.2695.5066,10.4152-.0212,7.3423-1.57,15.1391,8.6621,17.7981,1.793.4659,2.76,4.1547,4.0847,6.369,2.2219,3.7135,3.9727,7.8241,6.7407,11.069C424.4751,654.6043,424.1674,659.6668,421.9161,665.1737Z" transform="translate(-19.6689 -398.651)"/>

</svg>


</div>
)}
  }
  export default EastHoods;