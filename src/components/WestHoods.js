import React, { Component } from 'react';
const west_precinct = [  
    "MAGNOLIA",
    "QUEEN ANNE",
    "SLU/CASCADE",
    "PIONEER SQUARE",
    "DOWNTOWN COMMERCIAL",
    "EASTLAKE - WEST",
    "BELLTOWN",
    "CHINATOWN/INTERNATIONAL DISTRICT"   
]

class WestHoods extends Component{
    componentDidMount(){
        var theParent = document.getElementById("west_hoods_id");
        let children = theParent.children;
        theParent.addEventListener("click", this.hoodname, false);
        let path_count = 0;
        for(let p = 0; p < children.length; p++){
     
           if(children[p].tagName === 'path' ){
    
          children[p].setAttribute('id', west_precinct[path_count] + '_id');
            path_count +=1;
        }
    
        }
        }

        remove_hood_holder=()=>{
            let put_hood_here = document.getElementById('west_hoods_big_id');    
                put_hood_here.removeChild(put_hood_here.lastChild);
            let blank_div = document.createElement('DIV');
                put_hood_here.appendChild(blank_div);
          }
      hoodname=(e)=>{
        if (e.target !== e.currentTarget) {

            var clickedItem = e.target.id;
            let regex = /_/gi;
            let name = clickedItem.replace(regex, ' ');
            let name_minus_id = name.substring(0, name.length - 3);
            this.props.selecting_hood(name_minus_id, 'west','west_hoods_id');
        }
            e.stopPropagation();
        }
      
    render(){
        return(
            <div className='west_hoods' id='west_hoods_big_id'>
            <h2 className='precinct_header'>WEST</h2>
           <svg id="west_hoods_id" className='west_hoods_precinct' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="748.7975" height="822.5974" viewBox="0 0 748.7975 822.5974"><defs></defs><title>newwest2m</title>
           
           <path className="magnolia" d="M388.2777,764.7437c-40.8783-7.6092-78.7935-24.1953-117.6706-38.047-21.9052-7.8047-37.8238-22.916-54.7153-37.1368-11.0617-9.3126-22.7842-18.6411-31.1366-30.1865a108.5119,108.5119,0,0,1-21.07-62.0995c-.4736-21.4924-10.41-38.5092-25.3944-53.8105-15.1876-15.509-31.5677-28.5931-51.1663-38.0664-15.1265-7.3116-20.8269-23.236-19.1182-39.863,1.5387-14.9736,10.3353-24.4584,22.3217-27.7689,20.9341-5.7818,34.2255-18.0664,45.0891-36.1254,13.0935-21.7656,28.4348-42.1791,43.5051-64.2039,20.6846,19.0261,40.9041,37.3087,60.6493,56.09,3.382,3.2168,5.36,8.3512,6.9189,12.961,4.9333,14.592,11.9475,26.8693,27.7079,32.405,10.5745,3.7142,20.4792,9.3671,31.0975,12.9136,6.3145,2.109,13.4266,1.8593,20.1882,2.5953,18.0434,1.9643,32.0045,12.5526,46.9325,21.4557,8.6627,5.1666,18.6472,8.1036,27.984,12.1655a34.2618,34.2618,0,0,1,4.8964,3.1794c.35,4.3713,1.0544,8.748.9881,13.113-.3194,21.048-1.2666,42.0946-1.1831,63.1385.0854,21.5225,1.1713,43.04,1.7049,64.5622.5462,22.028,1.1184,44.06,1.0979,66.0892-.0016,1.6967-4.4408,3.804-7.1514,4.8755-1.0567.4177-3.0371-1.5012-5.48-2.84.3073,4.505.72,7.7549.7192,11.0048C395.9907,729.3743,399.6978,748.1546,388.2777,764.7437Z" transform="translate(-14.4002 -275.2033)"/>
           
           <path className="queen_anne"  d="M388.2777,764.7437c11.42-16.5891,7.713-35.3694,7.7152-53.5992,0-3.25-.4119-6.5-.7192-11.0048,2.4428,1.3385,4.4232,3.2574,5.48,2.84,2.7106-1.0715,7.15-3.1788,7.1514-4.8755.0205-22.0295-.5517-44.0612-1.0979-66.0892-.5336-21.5224-1.62-43.04-1.7049-64.5622-.0835-21.0439.8637-42.0905,1.1831-63.1385.0663-4.365-.6386-8.7417-.9881-13.113,17.099,8.2914,35.3194,14.8866,51.0311,25.2758,22.9809,15.1959,44.0068,33.3228,66.1907,49.7624,8.408,6.2307,17.9309,10.9376,26.542,16.92,5.964,4.1433,11.94,8.6674,16.68,14.0958,11.6113,13.2976,22.5711,27.1684,33.633,40.9371,1.7867,2.224,2.7515,5.1082,4.0961,7.6865q-.0708,10.8993-.1413,21.8c.4834,5.5479,1.3257,11.092,1.3838,16.6443.1849,17.6554.1018,35.3138.0763,52.971-.0211,14.6364-2.1938,16.7555-17.1723,16.7787-17.5715.0273-35.1432.0064-53.7522.0064,3.7494,12.6936,14.7362,3.4615,20.26,8.5328.3132,15.8264,4.5159,32.9635-13.0915,43.6271q-48.2755.0293-96.5492.0579c-2.2136-.7629-4.8308-1.0078-6.5782-2.3691C421.2791,790.9746,404.8,777.8319,388.2777,764.7437Z" transform="translate(-14.4002 -275.2033)"/>
           
           <path className="slu_cascade"  d="M541.0345,806.2388c17.6064-10.6633,13.4037-27.8,13.0905-43.6268-5.5243-5.0713-16.5111,4.1608-20.26-8.5328,18.609,0,36.1807.0209,53.7522-.0064,14.9785-.0232,17.1512-2.1423,17.1723-16.7787.0255-17.6572.1086-35.3156-.0763-52.971-.0581-5.5523-.9-11.0964-1.3839-16.6438,14.0487-.0248,28.1219-.52,42.1325.2,4.4152.2271,10.3317,2.6034,12.576,5.98,2.9848,4.4909,3.53,10.8655,4.2094,16.54.5075,4.2393-.4316,8.6518-.7266,12.9871l13.4208.4245c-3.73,5.5752-7.1074,11.432-11.2772,16.6564-5.5575,6.9632-8.789,14.2981-8.576,23.473.4034,17.3853.6079,34.8057-.0669,52.1741-.4078,10.4974-2.6248,20.9245-4.0291,31.3834q-24.9336,15.4181-49.8673,30.8358c-2.9071-1.126-6.3874-1.5782-8.63-3.4857q-24.4679-20.8182-48.43-42.226C542.4442,811.1805,542.016,808.3988,541.0345,806.2388Z" transform="translate(-14.4002 -275.2033)"/>
           
           <path className="pioneer_square"  d="M653.3883,1023.7c-4.08-.1741-5.7266,1.4345-5.4941,5.8265.3922,7.4086.1075,14.853.1075,22.769H631.79c0-6.4727.5429-13.27-.2865-19.8959-.3012-2.4067-3.6427-5.9793-5.9986-6.3312-15.2891-2.2836-30.6843-3.8678-46.0585-5.5549-1.8321-.2009-3.7478.3614-6.8127.7019-.7109-30.06-1.4068-59.4872-2.1028-88.9145,2.6874.0368,5.3857-.0683,8.0608.1333,22.1543,1.67,44.3031,3.4109,66.4569,5.086,2.6841.203,5.3883.1415,8.0832.2026Q653.26,980.7112,653.3883,1023.7Z" transform="translate(-14.4002 -275.2033)"/>
           
           <path className="downtown_commercial"  d="M653.132,937.7225c-2.6949-.0611-5.3991,0-8.0832-.2026-22.1538-1.6751-44.3026-3.4163-66.4569-5.086-2.6751-.2016-5.3734-.0965-8.0608-.1333q-13.8226-21.3738-27.6345-42.7549c-1.6092-2.4968-3.0776-5.0844-4.6109-7.6312,14.0935,2.6592,24.648-2.7909,31.2881-15.0811,15.0143,9.8821,15.0265,9.8934,26.36-2.372,1.8149-1.9641,3.4643-4.081,5.19-6.1272q24.9336-15.4178,49.8673-30.8358C649.337,836.491,649.009,846,645.7537,854.37c-6.9774,17.9414-1.4267,33.2651,7.2692,48.4615q9.7959,17.1185,19.6056,34.233Q662.8832,937.3961,653.132,937.7225Z" transform="translate(-14.4002 -275.2033)"/>
           
           <path className="eastlake_west"  d="M674.9409,703.8115,661.52,703.387c.295-4.3353,1.2341-8.7478.7266-12.9871-.6794-5.6747-1.2246-12.0493-4.2094-16.54-2.2443-3.3766-8.1608-5.7529-12.576-5.98-14.0106-.72-28.0838-.2252-42.1326-.2q.0708-10.9013.1415-21.8007c7.0486-8.3921,14.6222-16.4043,21.04-25.2544,14.9591-20.6278,28.9785-41.9448,44.1979-62.3722,5.3483-7.1787,13.0873-12.5763,20.1759-19.1993.1671,2.3755.4874,4.829.49,7.2827.0214,25.43.2,50.8629-.1,76.29-.19,16.064-.0443,32.257-2.0809,48.1316-1.4213,11.0781-6.26,21.7225-9.7058,32.5179C677.3566,703.683,675.8215,703.6428,674.9409,703.8115Z" transform="translate(-14.4002 -275.2033)"/>
           
           <path className="belltown"  d="M601.1244,858.3342c-1.726,2.0462-3.3754,4.1631-5.19,6.1272-11.3338,12.2654-11.346,12.2541-26.36,2.372-6.64,12.29-17.1946,17.74-31.2881,15.0811-28.9954-22.2087-58.0423-44.3521-86.9059-66.7318-2.87-2.2247-4.6228-5.8892-6.8948-8.8856q48.2731-.029,96.5485-.058c.9825,2.16,1.4107,4.9414,3.0311,6.3834q24,21.3576,48.43,42.226C594.737,856.756,598.2173,857.2082,601.1244,858.3342Z" transform="translate(-14.4002 -275.2033)"/>
           
           <path className="chinatown_international_district"  d="M653.132,937.7225q9.75-.3276,19.4965-.6578c9.8638.1849,19.7473.7944,29.5909.4028a15.9662,15.9662,0,0,1,13.9355,6.1c7.9076,9.2387,20.1326,14.834,23.4716,27.9205.8444,3.3093,1.645,6.63,2.5273,10.1937-11.1657.954-21.1887,2.526-31.1987,2.4474-8.563-.0671-14.4482.9775-12.2889,11.2218-9.1542,4.4478-18.16,8.2013-26.468,13.13-3.9826,2.3624-7.4066,6.526-9.6943,10.6455-2.2975,4.1371-4.7141,5.7311-9.1158,4.5737Q653.26,980.7111,653.132,937.7225Z" transform="translate(-14.4002 -275.2033)"/></svg>
           <div>  </div>
</div>
        )
    }
}
export default WestHoods;