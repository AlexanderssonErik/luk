let guiColorWheelLimitedFunction = false;
let guiColorWheelMid;
let guiColorWheelSection;
let guiColorWheelSectionR;
let guiColorWheelSectionG;
let guiColorWheelSectionB;
let guiColorWheelSectionRG;
let guiColorWheelSectionRB;
let guiColorWheelSectionGB;
let guiColorWheelSectionRGB;


let colorWheelActive = false;


let guiColorWheelFull;
let guiColorWheelFullR;
let guiColorWheelFullG;
let guiColorWheelFullB;
let guiColorWheelFullRG;
let guiColorWheelFullRB;
let guiColorWheelFullGB;
let guiColorWheelFullRGB;


//color wheel
var buttonColorWheel = [];
var advancedTextureColorSelect; //= BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ColorSelect");

function guiColorWheelFunctionSection(colorWheel, color) {


    colorWheel.onPointerMoveObservable.add(function() {
        console.log("MOOOOOOOOOOOOVE");
        //console.log('buttoncolorwheel R: ' + tmpI);
        //blockLED2x2[colorWheelMeshI] = tmpI;

    if(guiColorWheelLimitedFunction){

        

            if( colorWheelMeshType == 'B' || colorWheelMeshType == 'A' || colorWheelMeshType == 'D'|| colorWheelMeshType == 'C'){
                //  console.log('A colorWheelMeshI: ' + colorWheelMeshI);
                //  console.log(' ( tmpI | (0xF1 & blockLED2x2[colorWheelMeshI] )): ' +  ( tmpI | (0xF8 & blockLED2x2[colorWheelMeshI] )));
                  if(blockLED2x2[colorWheelMeshI+blocksOffset] != ( color | (0xF8 & blockLED2x2[colorWheelMeshI+blocksOffset] )) ||
                  blockLED2x2[colorWheelMeshI+blocksOffset] != ( (color << 3) | (0xC7 & blockLED2x2[colorWheelMeshI+blocksOffset])) ||
                  blockLED2x4[colorWheelMeshI+blocksOffset] != ( color | (0xF8 & blockLED2x4[colorWheelMeshI+blocksOffset] )) ||
                  blockLED2x4[colorWheelMeshI+blocksOffset] != ( (color << 3) | (0xC7 & blockLED2x4[colorWheelMeshI+blocksOffset])) 
                      ){
                      blockLED2x2[colorWheelMeshI+blocksOffset] = ( color | (0xF8 & blockLED2x2[colorWheelMeshI+blocksOffset] )); 
                      blockLED2x2[colorWheelMeshI+blocksOffset] = ( (color << 3) | (0xC7 & blockLED2x2[colorWheelMeshI+blocksOffset]));
                      blockLED2x4[colorWheelMeshI+blocksOffset] = ( color | (0xF8 & blockLED2x4[colorWheelMeshI+blocksOffset] )); 
                      blockLED2x4[colorWheelMeshI+blocksOffset] = ( (color << 3) | (0xC7 & blockLED2x4[colorWheelMeshI+blocksOffset]));
                      blocksRender = 1;
                    //  console.log('B colorWheelMeshI+blocksOffset: ' + (colorWheelMeshI+blocksOffset));
                    //  console.log('B blockLED2x2[colorWheelMeshI+blocksOffset]: ' + blockLED2x2[colorWheelMeshI+blocksOffset]);
                    //  console.log('B blockLED2x2[0]: ' + blockLED2x2[0]);
                     
                  }
              }
            

    }else{

        if( colorWheelMeshType == 'B'){
          //  console.log('A colorWheelMeshI: ' + colorWheelMeshI);
          //  console.log(' ( tmpI | (0xF1 & blockLED2x2[colorWheelMeshI] )): ' +  ( tmpI | (0xF8 & blockLED2x2[colorWheelMeshI] )));
            if(blockLED2x2[colorWheelMeshI+blocksOffset] != ( color | (0xF8 & blockLED2x2[colorWheelMeshI+blocksOffset] ))){
                blockLED2x2[colorWheelMeshI+blocksOffset] = ( color | (0xF8 & blockLED2x2[colorWheelMeshI+blocksOffset] )); 
                blocksRender = 1;
              //  console.log('B colorWheelMeshI+blocksOffset: ' + (colorWheelMeshI+blocksOffset));
              //  console.log('B blockLED2x2[colorWheelMeshI+blocksOffset]: ' + blockLED2x2[colorWheelMeshI+blocksOffset]);
              //  console.log('B blockLED2x2[0]: ' + blockLED2x2[0]);
               
            }
        }else if (colorWheelMeshType == 'A'){
           // console.log('B colorWheelMeshI: ' + colorWheelMeshI);
           // console.log(' ( (tmpI << 3) | (0xC7 & blockLED2x2[colorWheelMeshI]))' + ( (tmpI << 3) | (0xC7 & blockLED2x2[colorWheelMeshI])));
            if(blockLED2x2[colorWheelMeshI+blocksOffset] != ( (color << 3) | (0xC7 & blockLED2x2[colorWheelMeshI+blocksOffset]))){
                blockLED2x2[colorWheelMeshI+blocksOffset] = ( (color << 3) | (0xC7 & blockLED2x2[colorWheelMeshI+blocksOffset])); 
                blocksRender = 1;
            //    console.log('A colorWheelMeshI+blocksOffset: ' + (colorWheelMeshI+blocksOffset));
             //   console.log('A blockLED2x2[colorWheelMeshI+blocksOffset]: ' + blockLED2x2[colorWheelMeshI+blocksOffset]);
            //    console.log('A blockLED2x2[0]: ' + blockLED2x2[0]);
            }
        }else if (colorWheelMeshType == 'D'){
            if(blockLED2x4[colorWheelMeshI+blocksOffset] != ( color | (0xF8 & blockLED2x4[colorWheelMeshI+blocksOffset] ))){
                blockLED2x4[colorWheelMeshI+blocksOffset] = ( color | (0xF8 & blockLED2x4[colorWheelMeshI+blocksOffset] )); 
                blocksRender = 1;
            }
            
        }else if (colorWheelMeshType == 'C'){
            if(blockLED2x4[colorWheelMeshI+blocksOffset] != ( (color << 3) | (0xC7 & blockLED2x4[colorWheelMeshI+blocksOffset])) ){
                blockLED2x4[colorWheelMeshI+blocksOffset] = ( (color << 3) | (0xC7 & blockLED2x4[colorWheelMeshI+blocksOffset])); 
                blocksRender = 1;
            }
            
        }else if (colorWheelMeshType == 'E'){
            if(baseLED[colorWheelMeshI] != ( color | (0xF8 & baseLED[colorWheelMeshI]))){
                baseLED[colorWheelMeshI] = ( color | (0xF8 & baseLED[colorWheelMeshI]));            
          //  console.log('E colorWheelMeshI: ' + colorWheelMeshI);
            //console.log(' ( tmpI | (0xF8 & blockLED2x4[colorWheelMeshI]))' + ( tmpI | (0xF8 & blockLED2x4[colorWheelMeshI])));
            blocksRender = 1;
            }
                  
        }else if (colorWheelMeshType == 'F'){
            if(baseLED[colorWheelMeshI] != ( (color << 3) | (0xC7 & baseLED[colorWheelMeshI]))){
                baseLED[colorWheelMeshI] = ( (color << 3) | (0xC7 & baseLED[colorWheelMeshI])); 
          //  console.log('F colorWheelMeshI: ' + colorWheelMeshI);
          //  console.log('( (tmpI << 3) | (0xC7 & blockLED2x4[colorWheelMeshI]))' + ( (tmpI << 3) | (0xC7 & blockLED2x4[colorWheelMeshI])));
            blocksRender = 1;
            }
        }
    }        

        
    });
}

function guiColorWheelFunctionFull(colorWheel, color) {
    
    
        colorWheel.onPointerMoveObservable.add(function() {
            console.log("MOOOOOOOOVE")
            //console.log('buttoncolorwheel R: ' + tmpI);
            //blockLED2x2[colorWheelMeshI] = tmpI;
            if( colorWheelMeshType == 'B' || colorWheelMeshType == 'A' || colorWheelMeshType == 'D'|| colorWheelMeshType == 'C'){
              //  console.log('A colorWheelMeshI: ' + colorWheelMeshI);
              //  console.log(' ( tmpI | (0xF1 & blockLED2x2[colorWheelMeshI] )): ' +  ( tmpI | (0xF8 & blockLED2x2[colorWheelMeshI] )));
                if(blockLED2x2[colorWheelMeshI+blocksOffset] != ( color | (0xF8 & blockLED2x2[colorWheelMeshI+blocksOffset] )) ||
                blockLED2x2[colorWheelMeshI+blocksOffset] != ( (color << 3) | (0xC7 & blockLED2x2[colorWheelMeshI+blocksOffset])) ||
                blockLED2x4[colorWheelMeshI+blocksOffset] != ( color | (0xF8 & blockLED2x4[colorWheelMeshI+blocksOffset] )) ||
                blockLED2x4[colorWheelMeshI+blocksOffset] != ( (color << 3) | (0xC7 & blockLED2x4[colorWheelMeshI+blocksOffset])) 
                    ){
                    blockLED2x2[colorWheelMeshI+blocksOffset] = ( color | (0xF8 & blockLED2x2[colorWheelMeshI+blocksOffset] )); 
                    blockLED2x2[colorWheelMeshI+blocksOffset] = ( (color << 3) | (0xC7 & blockLED2x2[colorWheelMeshI+blocksOffset]));
                    blockLED2x4[colorWheelMeshI+blocksOffset] = ( color | (0xF8 & blockLED2x4[colorWheelMeshI+blocksOffset] )); 
                    blockLED2x4[colorWheelMeshI+blocksOffset] = ( (color << 3) | (0xC7 & blockLED2x4[colorWheelMeshI+blocksOffset]));
                    blocksRender = 1;
                  //  console.log('B colorWheelMeshI+blocksOffset: ' + (colorWheelMeshI+blocksOffset));
                  //  console.log('B blockLED2x2[colorWheelMeshI+blocksOffset]: ' + blockLED2x2[colorWheelMeshI+blocksOffset]);
                  //  console.log('B blockLED2x2[0]: ' + blockLED2x2[0]);
                   
                }
            }else if (colorWheelMeshType == 'E' || colorWheelMeshType == 'F'){

                for(let i = blocksOffset; i < blocksCount + blocksOffset; i++){
                
                blockLED2x2[i] = ( color | (0xF8 & blockLED2x2[i] )); 
                blockLED2x2[i] = ( (color << 3) | (0xC7 & blockLED2x2[i]));
                blockLED2x4[i] = ( color | (0xF8 & blockLED2x4[i] )); 
                blockLED2x4[i] = ( (color << 3) | (0xC7 & blockLED2x4[i]));
                }
                blocksRender = 1;
               
            }
                
    
            
        });
    }

function guiColorWheelSetSize( guiColorWheelSize) {

    
    
    guiColorWheelMid.color =  "#000050";
    guiColorWheelMid.width = "0px";//"160px"
    guiColorWheelMid.height = "0px";//"160px";    
    guiColorWheelMid.paddingTop = 0;
    guiColorWheelMid.paddingBottom = -guiColorWheelSize*0.8;
    guiColorWheelMid.paddingLeft = 0;
    guiColorWheelMid.paddingRight = -guiColorWheelSize*0.8;
    guiColorWheelMid.thickness = 0;
  //  guiColorWheelMid.background =    "#FF0000";

    guiColorWheelSection.color =  "#101050";
    guiColorWheelSection.width = "0px";//"160px"
    guiColorWheelSection.height = "0px";//"160px";
    guiColorWheelSection.paddingTop = 0;
    guiColorWheelSection.paddingBottom = -guiColorWheelSize*2;
    guiColorWheelSection.paddingLeft = 0;
    guiColorWheelSection.paddingRight = -guiColorWheelSize*2;
    guiColorWheelSection.thickness = 0;
    guiColorWheelFunctionSection(guiColorWheelSection, 0) ;
       // guiColorWheelSection.background =    "#00FF00";



    guiColorWheelSectionRGB.color =  "#101050";
    guiColorWheelSectionRGB.width = "0px";//"160px"
    guiColorWheelSectionRGB.height = "0px";//"160px";  
    guiColorWheelSectionRGB.paddingTop = 0;
    guiColorWheelSectionRGB.paddingBottom = -guiColorWheelSize*6;
    guiColorWheelSectionRGB.paddingLeft = 0;
    guiColorWheelSectionRGB.paddingRight = -guiColorWheelSize*6;  
    guiColorWheelSectionRGB.thickness = 0;
    guiColorWheelFunctionSection(guiColorWheelSectionRGB, 7) ;
       //   guiColorWheelSectionRGB.background =    "#0000FF";


    guiColorWheelSectionR.color =  "#101050";
    guiColorWheelSectionR.width = "0px";//"160px"
    guiColorWheelSectionR.height = "0px";//"160px";  
    guiColorWheelSectionR.paddingTop = -guiColorWheelSize*1.2;
    guiColorWheelSectionR.paddingBottom = guiColorWheelSize*0.2;
    guiColorWheelSectionR.paddingLeft = 0;
    guiColorWheelSectionR.paddingRight = -guiColorWheelSize;  
    guiColorWheelSectionR.thickness = 3;
    guiColorWheelFunctionSection(guiColorWheelSectionR, 1) ;
    guiColorWheelSectionR.background =    "#FF0000";


  guiColorWheelSectionG.color =  "#101050";
  guiColorWheelSectionG.width = "0px";//"160px"
  guiColorWheelSectionG.height = "0px";//"160px";  
  guiColorWheelSectionG.paddingTop = guiColorWheelSize*0.6;
  guiColorWheelSectionG.paddingBottom = -guiColorWheelSize*1.6;
  guiColorWheelSectionG.paddingLeft = guiColorWheelSize*1.04;  
  guiColorWheelSectionG.paddingRight = -guiColorWheelSize*2.04;  
  guiColorWheelSectionG.thickness = 3;
  guiColorWheelFunctionSection(guiColorWheelSectionG, 2) ;
  guiColorWheelSectionG.background =    "#00FF00";


  guiColorWheelSectionB.color =  "#101050";
  guiColorWheelSectionB.width = "0px";//"160px"
  guiColorWheelSectionB.height = "0px";//"160px";  
  guiColorWheelSectionB.paddingTop = guiColorWheelSize*0.6;
  guiColorWheelSectionB.paddingBottom = -guiColorWheelSize*1.6;
  guiColorWheelSectionB.paddingLeft = -guiColorWheelSize*1.04;  
  guiColorWheelSectionB.paddingRight = guiColorWheelSize*0.04;  
  guiColorWheelSectionB.thickness = 3;
  guiColorWheelFunctionSection(guiColorWheelSectionB, 4) ;
  guiColorWheelSectionB.background =    "#0000FF";


  guiColorWheelSectionRG.color =  "#101050";
  guiColorWheelSectionRG.width = "0px";//"160px"
  guiColorWheelSectionRG.height = "0px";//"160px";  
  guiColorWheelSectionRG.paddingTop = -guiColorWheelSize*0.6;
  guiColorWheelSectionRG.paddingBottom = -guiColorWheelSize*0.4;
  guiColorWheelSectionRG.paddingLeft = guiColorWheelSize*1.04;  
  guiColorWheelSectionRG.paddingRight = -guiColorWheelSize*2.04;  
  guiColorWheelSectionRG.thickness = 3;
  guiColorWheelFunctionSection(guiColorWheelSectionRG, 3) ;
  guiColorWheelSectionRG.background =    "#FFFF00";

  
  guiColorWheelSectionRB.color =  "#101050";
  guiColorWheelSectionRB.width = "0px";//"160px"
  guiColorWheelSectionRB.height = "0px";//"160px";  
  guiColorWheelSectionRB.paddingTop = -guiColorWheelSize*0.6;
  guiColorWheelSectionRB.paddingBottom = -guiColorWheelSize*0.4;
  guiColorWheelSectionRB.paddingLeft = -guiColorWheelSize*1.04;  
  guiColorWheelSectionRB.paddingRight = guiColorWheelSize*0.04;  
  guiColorWheelSectionRB.thickness = 3;
  guiColorWheelFunctionSection(guiColorWheelSectionRB, 5) ;
  guiColorWheelSectionRB.background =    "#FF00FF";



  guiColorWheelSectionGB.color =  "#101050";
  guiColorWheelSectionGB.width = "0px";//"160px"
  guiColorWheelSectionGB.height = "0px";//"160px";  
  guiColorWheelSectionGB.paddingTop = guiColorWheelSize*1.2;
  guiColorWheelSectionGB.paddingBottom = -guiColorWheelSize*2.2;
  guiColorWheelSectionGB.paddingLeft = 0;
  guiColorWheelSectionGB.paddingRight = -guiColorWheelSize;  
  guiColorWheelSectionGB.thickness = 3;
    guiColorWheelFunctionSection(guiColorWheelSectionGB, 6) ;
    guiColorWheelSectionGB.background =    "#00FFFF";

   //--
   

   guiColorWheelFull.color =  "#101050";
   guiColorWheelFull.width = "0px";//"160px"
   guiColorWheelFull.height = "0px";//"160px";
  /* guiColorWheelFull.paddingTop = 0;
   guiColorWheelFull.paddingBottom = -guiColorWheelSize*5.5;
   guiColorWheelFull.paddingLeft = 0;
   guiColorWheelFull.paddingRight = -guiColorWheelSize*5.5;*/

  

   guiColorWheelFull.paddingTop = guiColorWheelSize*2.4;
   guiColorWheelFull.paddingBottom = -guiColorWheelSize*3.4;

   guiColorWheelFull.paddingLeft = -guiColorWheelSize*2.08;  
   guiColorWheelFull.paddingRight = guiColorWheelSize*1.04 ;

   guiColorWheelFull.thickness = 3;
   guiColorWheelFunctionFull(guiColorWheelFull, 0) ;
       //guiColorWheelFull.background =    "#FFFF00";


   guiColorWheelFullRGB.color =  "#101050";
   guiColorWheelFullRGB.width = "0px";//"160px"
   guiColorWheelFullRGB.height = "0px";//"160px";  

   guiColorWheelFullRGB.paddingTop = guiColorWheelSize*2.4;
   guiColorWheelFullRGB.paddingBottom = -guiColorWheelSize*3.4;
   guiColorWheelFullRGB.paddingLeft = guiColorWheelSize*2.08;  
   guiColorWheelFullRGB.paddingRight = -guiColorWheelSize*3.08;  

   /*guiColorWheelFullRGB.paddingTop = 0;
   guiColorWheelFullRGB.paddingBottom = -guiColorWheelSize*8;
   guiColorWheelFullRGB.paddingLeft = 0;
   guiColorWheelFullRGB.paddingRight = -guiColorWheelSize*8;  */


   guiColorWheelFullRGB.thickness = 3;
   guiColorWheelFunctionFull(guiColorWheelFullRGB, 7) ;
         guiColorWheelFullRGB.background =    "#FFFFFF";


   guiColorWheelFullR.color =  "#101050";
   guiColorWheelFullR.width = "0px";//"160px"
   guiColorWheelFullR.height = "0px";//"160px";  
   guiColorWheelFullR.paddingTop = -guiColorWheelSize*2.4;
   guiColorWheelFullR.paddingBottom = guiColorWheelSize*1.4;
   guiColorWheelFullR.paddingLeft = 0;
   guiColorWheelFullR.paddingRight = -guiColorWheelSize;  
   guiColorWheelFullR.thickness = 3;
   guiColorWheelFunctionFull(guiColorWheelFullR, 1) ;
   guiColorWheelFullR.background =    "#FF0000";



 guiColorWheelFullG.color =  "#101050";
 guiColorWheelFullG.width = "0px";//"160px"
 guiColorWheelFullG.height = "0px";//"160px";  
 guiColorWheelFullG.paddingTop = guiColorWheelSize*1.2;
 guiColorWheelFullG.paddingBottom = -guiColorWheelSize*2.2;
 guiColorWheelFullG.paddingLeft = guiColorWheelSize*2.08;  
 guiColorWheelFullG.paddingRight = -guiColorWheelSize*3.08;  
 guiColorWheelFullG.thickness = 3;
 guiColorWheelFunctionFull(guiColorWheelFullG, 2) ;
 guiColorWheelFullG.background =    "#00FF00";


 guiColorWheelFullB.color =  "#101050";
 guiColorWheelFullB.width = "0px";//"160px"
 guiColorWheelFullB.height = "0px";//"160px";  
 guiColorWheelFullB.paddingTop = guiColorWheelSize*1.2;
 guiColorWheelFullB.paddingBottom = -guiColorWheelSize*2.2;
 guiColorWheelFullB.paddingLeft = -guiColorWheelSize*2.08;  
 guiColorWheelFullB.paddingRight = guiColorWheelSize*1.04 ;
 guiColorWheelFullB.thickness = 3;
 guiColorWheelFunctionFull(guiColorWheelFullB, 4) ;
 guiColorWheelFullB.background =    "#0000FF";


 guiColorWheelFullRG.color =  "#101050";
 guiColorWheelFullRG.width = "0px";//"160px"
 guiColorWheelFullRG.height = "0px";//"160px";  
 guiColorWheelFullRG.paddingTop = -guiColorWheelSize*1.2;
 guiColorWheelFullRG.paddingBottom = guiColorWheelSize*0.2;
 guiColorWheelFullRG.paddingLeft = guiColorWheelSize*2.04;  
 guiColorWheelFullRG.paddingRight = -guiColorWheelSize*3.04;  
 guiColorWheelFullRG.thickness = 3;
 guiColorWheelFunctionFull(guiColorWheelFullRG, 3) ;
 guiColorWheelFullRG.background =    "#FFFF00";

 
 guiColorWheelFullRB.color =  "#101050";
 guiColorWheelFullRB.width = "0px";//"160px"
 guiColorWheelFullRB.height = "0px";//"160px";  

 guiColorWheelFullRB.paddingTop = -guiColorWheelSize*1.2;
 guiColorWheelFullRB.paddingBottom = guiColorWheelSize*0.2;
 guiColorWheelFullRB.paddingLeft = -guiColorWheelSize*2.04;  
 guiColorWheelFullRB.paddingRight = guiColorWheelSize*1.04; 
 guiColorWheelFullRB.thickness = 3;
 guiColorWheelFunctionFull(guiColorWheelFullRB, 5) ;
 guiColorWheelFullRB.background =    "#FF00FF";



 guiColorWheelFullGB.color =  "#101050";
 guiColorWheelFullGB.width = "0px";//"160px"
 guiColorWheelFullGB.height = "0px";//"160px";  
 /*guiColorWheelFullGB.paddingTop = guiColorWheelSize*1.2;
 guiColorWheelFullGB.paddingBottom = -guiColorWheelSize*2.2;
 guiColorWheelFullGB.paddingLeft = 0;
 guiColorWheelFullGB.paddingRight = -guiColorWheelSize;  
*/
 guiColorWheelFullGB.paddingTop = guiColorWheelSize*2.4;
 guiColorWheelFullGB.paddingBottom = -guiColorWheelSize*3.4;
 guiColorWheelFullGB.paddingLeft = 0;
 guiColorWheelFullGB.paddingRight = -guiColorWheelSize;  

 guiColorWheelFullGB.thickness = 3;
   guiColorWheelFunctionFull(guiColorWheelFullGB, 6) ;
   guiColorWheelFullGB.background =    "#00FFFF";

}


function guiColorWheelInit() {
    
       /* let guiColorWheelSection;
        let guiColorWheelSectionR;
        let guiColorWheelSectionG;
        let guiColorWheelSectionB;
        let guiColorWheelSectionRG;
        let guiColorWheelSectionRB;
        let guiColorWheelSectionGB;
        let guiColorWheelSectionRGB;
        */
    
        
    
    
        guiColorWheelMid = new BABYLON.GUI.Ellipse();    
        guiColorWheelSection = new BABYLON.GUI.Ellipse();    
        guiColorWheelSectionRGB = new BABYLON.GUI.Ellipse();
        guiColorWheelSectionR = new BABYLON.GUI.Ellipse();
      guiColorWheelSectionG = new BABYLON.GUI.Ellipse();
      guiColorWheelSectionB = new BABYLON.GUI.Ellipse();
      guiColorWheelSectionRG = new BABYLON.GUI.Ellipse();
      guiColorWheelSectionRB = new BABYLON.GUI.Ellipse();
      guiColorWheelSectionGB = new BABYLON.GUI.Ellipse();
    
    
     
      guiColorWheelFull = new BABYLON.GUI.Ellipse();    
      guiColorWheelFullRGB = new BABYLON.GUI.Ellipse();
      guiColorWheelFullR = new BABYLON.GUI.Ellipse();
    guiColorWheelFullG = new BABYLON.GUI.Ellipse();
    guiColorWheelFullB = new BABYLON.GUI.Ellipse();
    guiColorWheelFullRG = new BABYLON.GUI.Ellipse();
    guiColorWheelFullRB = new BABYLON.GUI.Ellipse();
    guiColorWheelFullGB = new BABYLON.GUI.Ellipse();
    
    
      guiColorWheelSetSize( 100);
       
}

function guiColorWheelPointerUp(pickResult){

                                         
                                           if(colorWheelActive){
                                               
                                   
                                               
                                                   advancedTextureColorSelect.dispose();
                                               
                                  
                                                   
                                               scene.activeCamera.attachControl(canvas);

                                               colorWheelActive = false;
                                            
                                           }
                   
                                       
                      
    
    }



    function guiColorWheelPointerDownd(pickResult){

        if(colorWheelActive){
                                               
                                   
                                               
            advancedTextureColorSelect.dispose();
        

        
        scene.activeCamera.attachControl(canvas);

        colorWheelActive = false;
     
    }

        
                if (pickResult.hit) {
        
                    colorWheelActive = true;
                  //  console.log('Pointer down x:' + pickResult.pickedPoint.x);
        
                                        
                    advancedTextureColorSelect = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ColorSelect");
                
                    colorWheelMeshI = Number(pickResult.pickedMesh.name.match(/\d+$/)[0]);
                    colorWheelMeshType = pickResult.pickedMesh.name.slice(0, 1);
        
        
                   // console.log('colorWheelMeshI: X ' + colorWheelMeshI + " X ");
                    //console.log('colorWheelMeshType: X ' + colorWheelMeshType+ " X ");

                    if(guiColorWheelLimitedFunction){
                   

                        advancedTextureColorSelect.addControl(guiColorWheelSection);                                         
                        guiColorWheelSection.linkWithMesh(pickResult.pickedMesh);

  
                       
                        advancedTextureColorSelect.addControl(guiColorWheelMid);                                         
                        guiColorWheelMid.linkWithMesh(pickResult.pickedMesh);

                        advancedTextureColorSelect.addControl(guiColorWheelSectionR);                                         
                        guiColorWheelSectionR.linkWithMesh(pickResult.pickedMesh);

                        advancedTextureColorSelect.addControl(guiColorWheelSectionG);                                         
                        guiColorWheelSectionG.linkWithMesh(pickResult.pickedMesh);


                        advancedTextureColorSelect.addControl(guiColorWheelSectionB);                                         
                        guiColorWheelSectionB.linkWithMesh(pickResult.pickedMesh);

                        /*
                        advancedTextureColorSelect.addControl(guiColorWheelSectionRG);                                         
                        guiColorWheelSectionRG.linkWithMesh(pickResult.pickedMesh);

                        advancedTextureColorSelect.addControl(guiColorWheelSectionRB);                                         
                        guiColorWheelSectionRB.linkWithMesh(pickResult.pickedMesh);

                        advancedTextureColorSelect.addControl(guiColorWheelSectionGB);                                         
                        guiColorWheelSectionGB.linkWithMesh(pickResult.pickedMesh);*/
                                            
                  
                    }else{    
                    advancedTextureColorSelect.addControl(guiColorWheelSectionRGB);                                         
                    guiColorWheelSectionRGB.linkWithMesh(pickResult.pickedMesh);

                    advancedTextureColorSelect.addControl(guiColorWheelSection);                                         
                    guiColorWheelSection.linkWithMesh(pickResult.pickedMesh);


                   
                    advancedTextureColorSelect.addControl(guiColorWheelMid);                                         
                    guiColorWheelMid.linkWithMesh(pickResult.pickedMesh);

                    advancedTextureColorSelect.addControl(guiColorWheelSectionR);                                         
                    guiColorWheelSectionR.linkWithMesh(pickResult.pickedMesh);

                    advancedTextureColorSelect.addControl(guiColorWheelSectionG);                                         
                    guiColorWheelSectionG.linkWithMesh(pickResult.pickedMesh);


                    advancedTextureColorSelect.addControl(guiColorWheelSectionB);                                         
                    guiColorWheelSectionB.linkWithMesh(pickResult.pickedMesh);

                    
                    advancedTextureColorSelect.addControl(guiColorWheelSectionRG);                                         
                    guiColorWheelSectionRG.linkWithMesh(pickResult.pickedMesh);

                    advancedTextureColorSelect.addControl(guiColorWheelSectionRB);                                         
                    guiColorWheelSectionRB.linkWithMesh(pickResult.pickedMesh);

                    advancedTextureColorSelect.addControl(guiColorWheelSectionGB);                                         
                    guiColorWheelSectionGB.linkWithMesh(pickResult.pickedMesh);

                    //--
                      
                     

                                            advancedTextureColorSelect.addControl(guiColorWheelFullRGB);                                         
                                            guiColorWheelFullRGB.linkWithMesh(pickResult.pickedMesh);

                                            advancedTextureColorSelect.addControl(guiColorWheelFull);                                         
                                            guiColorWheelFull.linkWithMesh(pickResult.pickedMesh);

                                            //--
                   


                    advancedTextureColorSelect.addControl(guiColorWheelFullR);                                         
                    guiColorWheelFullR.linkWithMesh(pickResult.pickedMesh);

                    advancedTextureColorSelect.addControl(guiColorWheelFullG);                                         
                    guiColorWheelFullG.linkWithMesh(pickResult.pickedMesh);


                    advancedTextureColorSelect.addControl(guiColorWheelFullB);                                         
                    guiColorWheelFullB.linkWithMesh(pickResult.pickedMesh);

                    
                    advancedTextureColorSelect.addControl(guiColorWheelFullRG);                                         
                    guiColorWheelFullRG.linkWithMesh(pickResult.pickedMesh);

                    advancedTextureColorSelect.addControl(guiColorWheelFullRB);                                         
                    guiColorWheelFullRB.linkWithMesh(pickResult.pickedMesh);

                    advancedTextureColorSelect.addControl(guiColorWheelFullGB);                                         
                    guiColorWheelFullGB.linkWithMesh(pickResult.pickedMesh);


                    }
                      scene.activeCamera.detachControl(canvas);
                     
                    
        
                }

            }