import React from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';

class The_Map extends React.Component{
    constructor(props){
        super(props)
        
    }
    make_Map = () => {
            
        var stage = new Konva.Stage({
            container: 'map',
            width: 561,
            height: 1016
          });
       
          var layer = new Konva.Layer();
          var hood = new Konva.Layer();
          var imageObj = new Image();
          
          imageObj.onload = function() {
           




              var magnolia = new Konva.Shape({
                sceneFunc: function (context, shape) {
                  context.beginPath();
                  context.moveTo(20, 50);
                  context.lineTo(220, 80);
                  context.quadraticCurveTo(150, 100, 260, 170);
                  context.closePath();
          
                  // (!) Konva specific method, it is very important
                  context.fillStrokeShape(shape);
                },
                fill: '#00D2FF',
                stroke: 'black',
                strokeWidth: 4
              });
          
            var map = new Konva.Image({
              id: 'map',
              x: 50,
              y: 350,
              image: imageObj,
              width: 400,
              height: 700,
              stroke: 'black',
            strokeWidth: 4,
            offset: {
                x: 50,
                y: 350
            },
              
            
            });
          

               
            layer.add(map);
            hood.add(magnolia);
           
    stage.add(layer, hood);
    // the tween has to be created after the node has been added to the layer
    var tween = new Konva.Tween({
        node: magnolia,
        duration: 1,
        x: 140,
        y: 90,
        fill : 'red',
        rotation: Math.PI * 2,
        opacity: 1,
        strokeWidth: 6,
        scaleX: 1.5
    });

    // start tween after 2 seconds
    // setTimeout(function() {
    //     tween.play();
    // }, 2000);
            
            map.on('click', function () {
                tween.play();
                
              });
            // add the shape to the layer
            //layer.add(map);
      
            // add the layer to the stage
            //stage.add(layer);
            };
            
          imageObj.src = './images/seamap.png';
         }
    componentDidMount(){
        this.make_Map();
    }
   
    render(){
        return(
     <section className='map_holder' id='map' >     
     
            
     </section> 
              
        );}
    

}

export default The_Map;