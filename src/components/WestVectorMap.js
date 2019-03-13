import React, { Component } from 'react';

class WestVectorMap extends Component {
  render(){
  return ( 
    <div className='w_map_vector' onClick={e => this.props.call_precinct_change('west_precinct')}>
     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 238.4549 223.5809" className='w_map_vector' id='west_id'><defs><style></style></defs><title>Asset 4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-3" d="M238.3542,196.5615a6.62,6.62,0,0,0-4.4825,2.0016q-5.7748,5.202-11.4572,10.5061a8.4371,8.4371,0,0,0-2.64,6.2157c-.0351,1.5937.0651,3.1912.0069,4.7834-.07,1.9013-.6485,2.617-2.4561,2.9827a27.1887,27.1887,0,0,1-4.0259.522c-1.7737.0882-2.4928-.5526-2.6466-2.3191-.1174-1.3473-.0755-2.7087-.0981-4.0639a7.6236,7.6236,0,0,0-.7018-3.2471,4.0457,4.0457,0,0,0-3.2964-2.0708c-2.4355-.4358-4.9339-.1453-7.3609-.7557a92.6414,92.6414,0,0,0-9.683-1.45c-.7079-.772-1.6773-.25-2.4959-.501-.8029-.2457-1.5746-.5066-1.52-1.54a1.764,1.764,0,0,1,1.5478-1.8535,25.8968,25.8968,0,0,1,2.8737-.0935c.7267-.0148,1.3105-.2976,1.3111-1.0772.0007-.8-.6216-.9571-1.3269-1.0557-3.0608-.4277-3.538-.8671-3.6633-3.862a9.8914,9.8914,0,0,0-4.1038-8.0158,7.7259,7.7259,0,0,1-1.9426-2.1055,24.6565,24.6565,0,0,0-6.3217-6.4994c-5.8369-4.3447-11.3421-9.1183-17.301-13.3066a43.9749,43.9749,0,0,1-4.4463-3.6472c-1.4352-1.3208-1.3449-1.5758.3922-2.4638.2081-.1064.399-.2465.5959-.37.1926-.9491-.6823-1.1933-1.0881-1.7174a60.4286,60.4286,0,0,0-9.0629-8.8819,52.741,52.741,0,0,1-9.3576-9.9157,19.187,19.187,0,0,0-6.3586-5.7348c-2.5717-1.4567-5.0063-3.1538-7.7136-4.3746a15.4927,15.4927,0,0,0-10.972-1.1122c-2.3583.6819-4.7781.1067-7.157.4088-.8184.104-1.11-.6157-1.0851-1.2861.1893-5.1051-.607-10.2335.3541-15.3194a15.6041,15.6041,0,0,0,.32-1.6436c.0425-.5406.0982-1.2715-.6227-1.3479a1.2591,1.2591,0,0,0-1.3818,1.0784,6.8913,6.8913,0,0,0-.0575.7152c-.253,2.3446-.6937,2.8265-2.9949,3.2537-.7847.1457-1.5758.2568-2.3595.407a12.9,12.9,0,0,0-5.39,2.4993,6.9,6.9,0,0,1-9.6367-.9528,17.6807,17.6807,0,0,0-6.6555-4.993c-7.494-3.0913-13.9031-7.8265-20.1019-12.918-2.1618-1.7757-4.402-3.4569-6.6217-5.1612-7.01-5.3823-10.5477-12.4521-10.3913-21.323a49.5636,49.5636,0,0,0-.04-7.1875A27.1859,27.1859,0,0,0,30.7765,57.053,65.1727,65.1727,0,0,0,25.57,49.874,58.8412,58.8412,0,0,1,21.46,44.5669,23.2424,23.2424,0,0,0,11.7738,36.23c-1.5045-.7441-3.0059-1.4969-4.5329-2.1928A19.4508,19.4508,0,0,1,.6822,28.9a1.9137,1.9137,0,0,1,.4417-3.2112,5.9814,5.9814,0,0,1,2.7406-.7775c6.5834-.782,12.1344-3.8148,17.1925-7.9081a4.16,4.16,0,0,0,.9316-1.0838c2.1219-3.5546,5.2975-5.938,8.8058-7.9443,2.984-1.7065,5.9851-3.3833,8.9893-5.0541A26.8935,26.8935,0,0,1,50.8341.0246c1.7883-.1513,2.447.375,2.9,2.1461a24.4893,24.4893,0,0,1,1.07,6.8487,11.0478,11.0478,0,0,0,.16,1.91c.3357,2.3284,1.3164,3.56,3.66,3.74,5.0922.391,9.5656,2.3752,13.9371,4.7993a26.2645,26.2645,0,0,0,10.3288,2.89,30.6641,30.6641,0,0,1,12.0381,3.7672c3.006,1.6678,5.9579,3.4343,8.9812,5.0693a3.7343,3.7343,0,0,1,2.1168,4.3628c-.3557,1.8836-.808,3.7487-1.1788,5.63-.5173,2.6242-.0482,3.3379,2.6507,3.5932a50.2343,50.2343,0,0,0,5.7505.1216c1.45-.03,1.7972-.4435,1.9512-1.8644.3671-3.3863.5215-3.5024,3.8076-2.3031a10.3433,10.3433,0,0,0,4.4943.4966c2.9712-.2547,4.8788,1.1155,6.08,3.6986.4716,1.0146.91,2.0445,1.3768,3.0615a3.3718,3.3718,0,0,0,3.0582,2.3274,2.1942,2.1942,0,0,1,2.353,2.1874,5.394,5.394,0,0,0,.4154,1.3738c.5895,1.3307,1.4906,1.9812,2.8477,1.5625,1.7418-.5375,3.1393.0773,4.5569.8155a21.2655,21.2655,0,0,1,2.4242,1.5418c6.0054,4.2491,11.99,8.5274,18.0075,12.7594a11.5569,11.5569,0,0,1,4.44,4.8866,4.9389,4.9389,0,0,0,3.3683,2.8306,11.46,11.46,0,0,1,7.78,7.2293c.73,1.86,1.4979,3.7076,2.3346,5.5211a34.7109,34.7109,0,0,1,3.509,15.293,8.4692,8.4692,0,0,0,.1693,2.1482,4.9577,4.9577,0,0,1-.9876,4.2766,6.5978,6.5978,0,0,0-1.52,3.9553,3.3614,3.3614,0,0,0,1.3636,3.1395,2.3091,2.3091,0,0,1,.8315,3.3222,4.8761,4.8761,0,0,0-.2538,3.9542c.2555.6748.822,1.1676,1.2952.1537a1.1916,1.1916,0,0,1,1.34-.7133c.7192.0253,1.4394.04,2.1572.0891,1.8011.1237,1.7874.13,1.7009,1.8823-.033.6685-.3806,1.6248.5334,1.8108.7363.15,1.2-.6574,1.5581-1.2972a2.7475,2.7475,0,0,0,.2919-.6564c.4185-1.6862.8017-3.264,3.2316-2.7386.8939.1932,1.6864-.7185,1.8905-1.5791.6524-2.7506,3.0044-3.9854,4.8214-5.7058a2.6594,2.6594,0,0,1,2.1927-.7462,1.4978,1.4978,0,0,0,1.7192-1.2971,18.5925,18.5925,0,0,1,.654-2.0557,6.5669,6.5669,0,0,0-1.2692-7.5385,11.2378,11.2378,0,0,1-2.9234-8.4977c.1321-4.2253-.4027-8.472.4437-12.6744.1734-.8611.3853-1.7151.599-2.5674a2.4332,2.4332,0,0,1,1.3563-1.8458c1.98-.8765,2.2645-2.5149,1.8668-4.4128-.131-.6251-.338-1.2349-.4593-1.8615-.5909-3.0528.6156-4.447,3.8217-4.44.0559,1.436.1576,2.8719.16,4.308q.05,26.1251.0642,52.25c-.0071,9.2668-.1254,18.5337-.1805,27.8006a27.9653,27.9653,0,0,0,.2327,4.7791c.705,4.2472,2.8445,7.7517,5.5444,10.9849,6.6068,7.9117,12.9047,16.07,19.29,24.1591C238.0078,195.239,238.7186,195.69,238.3542,196.5615Z"/></g></g></svg>
     </div>
  )
}}
export default WestVectorMap;

// .cls-1{fill:#fe746b;}