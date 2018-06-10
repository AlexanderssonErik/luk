//make option to only care about one side

//block outside playing field blink read (don't care about color)
//match shape disapear

//tutorial

//1
//only one side - easy

//2
//all sides - easy

//3
//one side - pocket 

//4
//all sides color - easy

//5
//all sides color and pocket

//--

//6
//all sides moderate difficult

//7
//all sides moderate difficult color

//8
//all sides difficult no color no indication

//9
//all sides difficult color no indication


let tile;
let tangramPitchY;
let tangramOffsetY;
let tangramMaterials = [];
let tangramMaterialsC = [];





let renderAllocatedCountSideA;
//let renderCountSideA;
let renderCountSideA;
let renderSideA = [];
let renderSideA2 = [];
let renderSideAX = [];
let renderSideAY = [];
let renderSideAZ = [];
let renderSideAColor = [];

let renderSideAZMax = [];
let renderSideAZMin = [];
let renderSideAZCount = [];



let renderAllocatedCountSideB;
let renderCountSideB;
let renderSideB = [];
let renderSideB2 = [];
let renderSideBX = [];
let renderSideBY = [];
let renderSideBZ = [];
let renderSideBColor = [];

let renderSideBXMax = [];
let renderSideBXMin = [];
let renderSideBXCount = [];



let renderAllocatedCountSideC;
let renderCountSideC;
let renderSideC = [];
let renderSideCX = [];
let renderSideCY = [];
let renderSideCZ = [];
let renderSideCColor = [];

let renderSideCYMax = [];
let renderSideCYMin = [];
let renderSideCYCount = [];



//--
let renderGameAllocatedCountSideA;
let renderGameCountSideA;
let renderGameSideA = [];
let renderGameSideA2 = [];
let renderGameSideAX = [];
let renderGameSideAY = [];
let renderGameSideAZ = [];
let renderGameSideAColor = [];

let renderGameSideAZMax = [];
let renderGameSideAZMin = [];
let renderGameSideAZCount = [];

let renderGameSideAMapToBlock = [];


let renderGameAllocatedCountSideB;
let renderGameCountSideB;
let renderGameSideB = [];
let renderGameSideB2 = [];
let renderGameSideBX = [];
let renderGameSideBY = [];
let renderGameSideBZ = [];
let renderGameSideBColor = [];

let renderGameSideBXMax = [];
let renderGameSideBXMin = [];
let renderGameSideBXCount = [];

let renderGameSideBMapToBlock = [];


let renderGameAllocatedCountSideC;
let renderGameCountSideC;
let renderGameSideC = [];
let renderGameSideCX = [];
let renderGameSideCY = [];
let renderGameSideCZ = [];
let renderGameSideCColor = [];

let renderGameSideCYMax = [];
let renderGameSideCYMin = [];
let renderGameSideCYCount = [];

let renderGameSideCMapToBlock = [];


//--


let tangramBlockPixel;
let tangramBlockPixelBottom;



/*let levelBlockX = [];
let levelBlockY = [];
let levelBlockZ = [];
let levelBlockRT = [];
let levelBlockLED2x2 = [];
let levelBlockLED2x4 = [];

let levelBlockCount = [];
let levelBlockNumberStages = [];*/

let tangramRemoveShadowEnabled = true;
let tangramErrorColorEnabled = true;
let tangramCareColor= false;
let tangramIncludeSideA = true;
let tangramIncludeSideB = true;
let tangramIncludeSideC = true;

let tangramWinning = 0;

let tangramLastStage =[];


//how to deal with holes
//deal when mapping pixels


function tangramCreateGame(level){
   


    let stage = Math.floor(Math.random()*levelBlockNumberStages[level -1]) ;
    
    while(stage == tangramLastStage[level-1]){
        stage = Math.floor(Math.random()*levelBlockNumberStages[level -1]) ;
    }

    console.log("level: " + level);
    console.log("stage: " + stage);


    tangramLastStage[level -1] = stage;
    tangramWinning = 0;
    tangramCareColor = false;

    tangramRemoveShadowEnabled = true;
    tangramErrorColorEnabled = true;

    tangramIncludeSideA = true;
    tangramIncludeSideB = true;
    tangramIncludeSideC = true;
    

    gameDefineBlockPixels(levelBlockCount[level-1][stage],  levelBlockX[level-1][stage], levelBlockY[level - 1][stage], levelBlockZ[level - 1][stage], levelBlockRT[level-1][stage], levelBlockLED2x2[level -1][stage], levelBlockLED2x4[level -1][stage], 0);
    
  /*  console.log("blockPixelCount: " + blockPixelCount);

    for(let g = 0; g < blockPixelCount; g++){

        console.log(blockPixelX[g] + "," + blockPixelZ[g]);
    }*/

    if(level == 1){
        let side = Math.floor(Math.random()*3) ;
        if(side == 0){
            tangramIncludeSideA = true;
            tangramIncludeSideB = false;
            tangramIncludeSideC = false;

        }else if(side ==1){
            tangramIncludeSideA = false;
            tangramIncludeSideB = true;
            tangramIncludeSideC = false;

        }else if(side == 2){
            tangramIncludeSideA = false;
            tangramIncludeSideB = false;
            tangramIncludeSideC = true;
        }
    }
    
    if(level == 3){
       // tangramCareColor = true;
        tangramIncludeSideA = true;
        tangramIncludeSideB = false;
        tangramIncludeSideC = false;

    }

    if(level >2){
        tangramCareColor = true;


    }

  /*  if(level == 7 || level == 9){
        tangramCareColor = true;
    }*/

    if(level == 8 || level == 9 ){
        tangramRemoveShadowEnabled = false;
        tangramErrorColorEnabled = false;

    }

   // baseLED[0] = 0x11;
  //  baseLED[1] = 0x34;
  baseLED[0] = 0x10;
    baseLED[1] = 0x20;

    defineLevelPlanes();

    tangramLevelRender();


}


function initTangram(scene, pitchY){
    //   https://doc.babylonjs.com/how_to/parametric_shapes#extruded-shapes
   
    //   https://www.babylonjs-playground.com/#165IV6#71
   
     guiColorWheelLimitedFunction = true;   
      // baseLED side -------------------------------------------------------
      blockPixelCount = 0;
      renderAllocatedCountSideA = 0;
      renderAllocatedCountSideB = 0;
      renderAllocatedCountSideC = 0;

      //renderCountSideB = 0;


      tangramLastStage[0] = 0;
      tangramLastStage[1] = 1;
      tangramLastStage[2] = 2;
      tangramLastStage[3] = 3;
      tangramLastStage[4] = 4;
      tangramLastStage[5] = 5;

      tangramPitchY = pitchY;
      tangramOffsetY = pitchY/2;
      
      tangramBlockPixel = BABYLON.MeshBuilder.CreatePlane("blockPixel", {width: 1, height: tangramPitchY}, scene);

      tangramBlockPixel.setEnabled(0); 
      
      tangramBlockPixelBottom = BABYLON.MeshBuilder.CreatePlane("blockPixel", {width: 1, height: 1}, scene);
      tangramBlockPixelBottom.setEnabled(0); 

      let emissiveColor = 0.8;
      let transparencyCavity = 0.4;


      tangramMaterials[0] = new BABYLON.StandardMaterial("NA", scene);
      tangramMaterials[1] = new BABYLON.StandardMaterial("RED", scene);
      tangramMaterials[2] = new BABYLON.StandardMaterial("GREEN", scene);
      tangramMaterials[3] = new BABYLON.StandardMaterial("YELLOW", scene);
      tangramMaterials[4] = new BABYLON.StandardMaterial("BLUE", scene);
      tangramMaterials[5] = new BABYLON.StandardMaterial("PURPLE", scene);
      tangramMaterials[6] = new BABYLON.StandardMaterial("CYAN", scene);
      tangramMaterials[7] = new BABYLON.StandardMaterial("WHITE", scene);

      tangramMaterials[8] = new BABYLON.StandardMaterial("NA", scene);
      tangramMaterials[9] = new BABYLON.StandardMaterial("RED", scene);
      tangramMaterials[10] = new BABYLON.StandardMaterial("GREEN", scene);
      tangramMaterials[11] = new BABYLON.StandardMaterial("YELLOW", scene);
      tangramMaterials[12] = new BABYLON.StandardMaterial("BLUE", scene);
      tangramMaterials[13] = new BABYLON.StandardMaterial("PURPLE", scene);
      tangramMaterials[14] = new BABYLON.StandardMaterial("CYAN", scene);
      tangramMaterials[15] = new BABYLON.StandardMaterial("WHITE", scene);

      tangramMaterials[16] = new BABYLON.StandardMaterial("NO COLOR SELECTED", scene);
      tangramMaterials[17] = new BABYLON.StandardMaterial("RED", scene);
      
          
      tangramMaterials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterials[0].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
      tangramMaterials[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
      tangramMaterials[1].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
      tangramMaterials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
      tangramMaterials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
      tangramMaterials[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
      tangramMaterials[3].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
      tangramMaterials[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
      tangramMaterials[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
      tangramMaterials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
      tangramMaterials[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
      tangramMaterials[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
      tangramMaterials[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
      tangramMaterials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

      tangramMaterials[8].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterials[8].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
      tangramMaterials[8].alpha =  transparencyCavity;
      tangramMaterials[9].diffuseColor = new BABYLON.Color3(1, 0, 0);
      tangramMaterials[9].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
      tangramMaterials[9].alpha =  transparencyCavity;
      tangramMaterials[10].diffuseColor = new BABYLON.Color3(0, 1, 0);
      tangramMaterials[10].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
      tangramMaterials[10].alpha =  transparencyCavity;
      tangramMaterials[11].diffuseColor = new BABYLON.Color3(1, 1, 0);
      tangramMaterials[11].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
      tangramMaterials[11].alpha =  transparencyCavity;
      tangramMaterials[12].diffuseColor = new BABYLON.Color3(0, 0, 1);
      tangramMaterials[12].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
      tangramMaterials[12].alpha =  transparencyCavity;
      tangramMaterials[13].diffuseColor = new BABYLON.Color3(1, 0, 1);
      tangramMaterials[13].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
      tangramMaterials[13].alpha =  transparencyCavity;
      tangramMaterials[14].diffuseColor = new BABYLON.Color3(0, 1, 1);
      tangramMaterials[14].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
      tangramMaterials[14].alpha =  transparencyCavity;
      tangramMaterials[15].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterials[15].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
      tangramMaterials[15].alpha =  transparencyCavity;

      tangramMaterials[16].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
      tangramMaterials[16].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
      tangramMaterials[16].alpha =  0;

      tangramMaterials[17].diffuseColor = new BABYLON.Color3(1, 0.4, 0.4);
      tangramMaterials[17].emissiveColor = new BABYLON.Color3(1, 0.4, 0.4);


      let emissiveColorC = 0.8;
      let transparencyCavityC = 0.4;

      tangramMaterialsC[0] = new BABYLON.StandardMaterial("NA", scene);
      tangramMaterialsC[1] = new BABYLON.StandardMaterial("RED", scene);
      tangramMaterialsC[2] = new BABYLON.StandardMaterial("GREEN", scene);
      tangramMaterialsC[3] = new BABYLON.StandardMaterial("YELLOW", scene);
      tangramMaterialsC[4] = new BABYLON.StandardMaterial("BLUE", scene);
      tangramMaterialsC[5] = new BABYLON.StandardMaterial("PURPLE", scene);
      tangramMaterialsC[6] = new BABYLON.StandardMaterial("CYAN", scene);
      tangramMaterialsC[7] = new BABYLON.StandardMaterial("WHITE", scene);

      tangramMaterialsC[8] = new BABYLON.StandardMaterial("NA", scene);
      tangramMaterialsC[9] = new BABYLON.StandardMaterial("RED", scene);
      tangramMaterialsC[10] = new BABYLON.StandardMaterial("GREEN", scene);
      tangramMaterialsC[11] = new BABYLON.StandardMaterial("YELLOW", scene);
      tangramMaterialsC[12] = new BABYLON.StandardMaterial("BLUE", scene);
      tangramMaterialsC[13] = new BABYLON.StandardMaterial("PURPLE", scene);
      tangramMaterialsC[14] = new BABYLON.StandardMaterial("CYAN", scene);
      tangramMaterialsC[15] = new BABYLON.StandardMaterial("WHITE", scene);

      tangramMaterialsC[16] = new BABYLON.StandardMaterial("NO COLOR SELECTED", scene);
      tangramMaterialsC[17] = new BABYLON.StandardMaterial("RED", scene);
      
          
      tangramMaterialsC[0].diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
      tangramMaterialsC[0].emissiveColor = new BABYLON.Color3(0, 0, 0);
      tangramMaterialsC[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
      tangramMaterialsC[1].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, 0);
      tangramMaterialsC[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
      tangramMaterialsC[2].emissiveColor = new BABYLON.Color3(0, emissiveColorC, 0);
      tangramMaterialsC[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
      tangramMaterialsC[3].emissiveColor = new BABYLON.Color3(emissiveColorC, emissiveColorC, 0);
      tangramMaterialsC[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
      tangramMaterialsC[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColorC );
      tangramMaterialsC[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
      tangramMaterialsC[5].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, emissiveColorC);
      tangramMaterialsC[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
      tangramMaterialsC[6].emissiveColor = new BABYLON.Color3(0, emissiveColorC, emissiveColorC);
      tangramMaterialsC[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterialsC[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

      tangramMaterialsC[8].diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
      tangramMaterialsC[8].emissiveColor = new BABYLON.Color3(0, 0, 0);
      tangramMaterialsC[8].alpha =  transparencyCavityC;
      tangramMaterialsC[9].diffuseColor = new BABYLON.Color3(1, 0, 0);
      tangramMaterialsC[9].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, 0);
      tangramMaterialsC[9].alpha =  transparencyCavityC;
      tangramMaterialsC[10].diffuseColor = new BABYLON.Color3(0, 1, 0);
      tangramMaterialsC[10].emissiveColor = new BABYLON.Color3(0, emissiveColorC, 0);
      tangramMaterialsC[10].alpha =  transparencyCavityC;
      tangramMaterialsC[11].diffuseColor = new BABYLON.Color3(1, 1, 0);
      tangramMaterialsC[11].emissiveColor = new BABYLON.Color3(emissiveColorC, emissiveColorC, 0);
      tangramMaterialsC[11].alpha =  transparencyCavityC;
      tangramMaterialsC[12].diffuseColor = new BABYLON.Color3(0, 0, 1);
      tangramMaterialsC[12].emissiveColor = new BABYLON.Color3(0, 0,emissiveColorC );
      tangramMaterialsC[12].alpha =  transparencyCavityC;
      tangramMaterialsC[13].diffuseColor = new BABYLON.Color3(1, 0, 1);
      tangramMaterialsC[13].emissiveColor = new BABYLON.Color3(emissiveColorC, 0, emissiveColorC);
      tangramMaterialsC[13].alpha =  transparencyCavityC;
      tangramMaterialsC[14].diffuseColor = new BABYLON.Color3(0, 1, 1);
      tangramMaterialsC[14].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
      tangramMaterialsC[14].alpha =  transparencyCavityC;
      tangramMaterialsC[15].diffuseColor = new BABYLON.Color3(1, 1, 1);
      tangramMaterialsC[15].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
      tangramMaterialsC[15].alpha =  transparencyCavityC;

      tangramMaterialsC[16].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
      tangramMaterialsC[16].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
      tangramMaterialsC[16].alpha =  0;

      tangramMaterialsC[17].diffuseColor = new BABYLON.Color3(1, 0.4, 0.4);
      tangramMaterialsC[17].emissiveColor = new BABYLON.Color3(1, 0.4, 0.4);
 

      tangramLevelInit(); 
 

    }


  
function defineGamePlanes(){
    
        renderGameCountSideA = 0;
        renderGameCountSideB = 0;
        renderGameCountSideC = 0;
        let x;
    
    
        for(let i = 0; i < blockPixelCount; i++){        
    
            for(x = 0; x < renderGameCountSideA; x++){
                if(blockPixelX[i] == renderGameSideAX[x]){
                    if(blockPixelY[i] == renderGameSideAY[x]){

                        renderGameSideAColor[x] |= blockPixelColor[i];
                        

                        
                        if(blockPixelZ[i] > renderGameSideAZMax[x] ){
                           
                           renderGameSideAZMax[x] = blockPixelZ[i];
                           
                            
                        }else if(blockPixelZ[i] < renderGameSideAZMin[x]){ //previous else
                            renderGameSideAZMin[x] = blockPixelZ[i];
                            
                        }
    
                        renderGameSideAZCount[x]++; 
                        break;
                    }                
                }
            }
            
            if(x == renderGameCountSideA){
                renderGameSideAX[renderGameCountSideA] = blockPixelX[i];
                renderGameSideAY[renderGameCountSideA] = blockPixelY[i];
                renderGameSideAZ[renderGameCountSideA] = 9.5;
                renderGameSideAColor[renderGameCountSideA] = blockPixelColor[i];
    
                renderGameSideAZMax[renderGameCountSideA] = blockPixelZ[i];
                renderGameSideAZMin[renderGameCountSideA] = blockPixelZ[i];
                renderGameSideAZCount[renderGameCountSideA] = 0;
                renderGameSideAMapToBlock[renderGameCountSideA] = blockPixelMapToBlock[i];
                renderGameCountSideA++;
    
    
            }
    
            //B
            for(x = 0; x < renderGameCountSideB; x++){
                if(blockPixelZ[i] == renderGameSideBZ[x]){
                    if(blockPixelY[i] == renderGameSideBY[x]){

                        renderGameSideBColor[x] |= blockPixelColor[i];
                        
                        if(blockPixelX[i] > renderGameSideBXMax[x] ){
                           
                           renderGameSideBXMax[x] = blockPixelX[i];
                           
                            
                        }else if(blockPixelX[i] < renderGameSideBXMin[x] ){
                            renderGameSideBXMin[x] = blockPixelX[i];
                            
                        }
    
                        renderGameSideBXCount[x]++; 
                        break;
                    }                
                }
            }
            
            if(x == renderGameCountSideB){
                renderGameSideBX[renderGameCountSideB] = -0.5;
                renderGameSideBY[renderGameCountSideB] = blockPixelY[i];
                renderGameSideBZ[renderGameCountSideB] = blockPixelZ[i];
                renderGameSideBColor[renderGameCountSideB] = blockPixelColor[i];
    
                renderGameSideBXMax[renderGameCountSideB] = blockPixelX[i];
                renderGameSideBXMin[renderGameCountSideB] = blockPixelX[i];
                renderGameSideBXCount[renderGameCountSideB] = 0;
                renderGameSideBMapToBlock[renderGameCountSideB] = blockPixelMapToBlock[i];
                renderGameCountSideB++;
    
    
            }
    
            //C
    
            for(x = 0; x < renderGameCountSideC; x++){
                if(blockPixelX[i] == renderGameSideCX[x]){
                    if(blockPixelZ[i] == renderGameSideCZ[x]){

                        renderGameSideCColor[x] |= blockPixelColor[i];
                        
                        if(blockPixelY[i] > renderGameSideCYMax[x] ){
                           
                           renderGameSideCYMax[x] = blockPixelY[i];
                           
                            
                        }else if(blockPixelY[i] < renderGameSideCYMin[x] ){
                            renderGameSideCYMin[x] = blockPixelY[i];
                            
                        }
    
                        renderGameSideCYCount[x]++; 
                        break;
                    }                
                }
            }
            
            if(x == renderGameCountSideC){
                renderGameSideCX[renderGameCountSideC] = blockPixelX[i];
                renderGameSideCY[renderGameCountSideC] = 0;
                renderGameSideCZ[renderGameCountSideC] = blockPixelZ[i];
                renderGameSideCColor[renderGameCountSideC] = blockPixelColor[i];
    
                renderGameSideCYMax[renderGameCountSideC] = blockPixelY[i];
                renderGameSideCYMin[renderGameCountSideC] = blockPixelY[i];
                renderGameSideCYCount[renderGameCountSideC] = 0;
                renderGameSideCMapToBlock[renderGameCountSideC] = blockPixelMapToBlock[i];
                renderGameCountSideC++;
        
            }
            
            
        }
    
        for(let i = 0; i < renderGameCountSideA; i++){
            
                    if(renderGameSideAZMax[i] - renderGameSideAZMin[i] > renderGameSideAZCount[i]){
                        renderGameSideAColor[i] +=8;//4;
                        
                    }
        }
    
        for(let i = 0; i < renderGameCountSideB; i++){
            
                    if(renderGameSideBXMax[i] - renderGameSideBXMin[i] > renderGameSideBXCount[i]){
                        renderGameSideBColor[i] +=8;//4;
                        
                    }
                }
    
        for(let i = 0; i < renderGameCountSideC; i++){
                    
            if(renderGameSideCYMax[i] - renderGameSideCYMin[i] > renderGameSideCYCount[i]){
                renderGameSideCColor[i] +=8;//4;
                                
            }
        }

    }

function defineLevelPlanes(){

    renderCountSideA = 0;
    renderCountSideB = 0;
    renderCountSideC = 0;
    let x;


    for(let i = 0; i < blockPixelCount; i++){        

        if(tangramIncludeSideA){
        for(x = 0; x < renderCountSideA; x++){
            if(blockPixelX[i] == renderSideAX[x]){
                if(blockPixelY[i] == renderSideAY[x]){
                                        
                    renderSideAColor[x] |= blockPixelColor[i];
                    //renderGameSideAColor[x] |= blockPixelColor[i];
                                      
                    if(blockPixelZ[i] > renderSideAZMax[x] ){                   
                       renderSideAZMax[x] = blockPixelZ[i];
                                              
                    }else if (blockPixelZ[i] < renderSideAZMin[x]){ //previous just else
                        renderSideAZMin[x] = blockPixelZ[i];
                        
                    }

                    renderSideAZCount[x]++; 
                    break;
                }                
            }
        }
        
        if(x == renderCountSideA){
            renderSideAX[renderCountSideA] = blockPixelX[i];
            renderSideAY[renderCountSideA] = blockPixelY[i];
            renderSideAZ[renderCountSideA] = 9.5;
            renderSideAColor[renderCountSideA] = blockPixelColor[i];

            renderSideAZMax[renderCountSideA] = blockPixelZ[i];
            renderSideAZMin[renderCountSideA] = blockPixelZ[i];
            renderSideAZCount[renderCountSideA] = 0;
            renderCountSideA++;


        }
        }
        //B
    if(tangramIncludeSideB){
        for(x = 0; x < renderCountSideB; x++){
            if(blockPixelZ[i] == renderSideBZ[x]){
                if(blockPixelY[i] == renderSideBY[x]){
                    
                    renderSideBColor[x] |= blockPixelColor[i];
                    //renderGameSideBColor[x] |= blockPixelColor[i];

                    if(blockPixelX[i] > renderSideBXMax[x] ){
                       
                       renderSideBXMax[x] = blockPixelX[i];
                       
                       
                    }else if (blockPixelX[i] < renderSideBXMin[x]){
                        renderSideBXMin[x] = blockPixelX[i];
                        
                    }

                    renderSideBXCount[x]++; 
                    break;
                }                
            }
        }
        
        if(x == renderCountSideB){
            renderSideBX[renderCountSideB] = -0.5;
            renderSideBY[renderCountSideB] = blockPixelY[i];
            renderSideBZ[renderCountSideB] = blockPixelZ[i];
            renderSideBColor[renderCountSideB] = blockPixelColor[i];

            renderSideBXMax[renderCountSideB] = blockPixelX[i];
            renderSideBXMin[renderCountSideB] = blockPixelX[i];
            renderSideBXCount[renderCountSideB] = 0;
            renderCountSideB++;


        }
    }
        //C
    if(tangramIncludeSideC){
        for(x = 0; x < renderCountSideC; x++){
            if(blockPixelX[i] == renderSideCX[x]){
                if(blockPixelZ[i] == renderSideCZ[x]){
                       
                    renderSideCColor[x] |= blockPixelColor[i];
                    //renderGameSideCColor[x] |= blockPixelColor[i];

                    if(blockPixelY[i] > renderSideCYMax[x] ){
                       
                       renderSideCYMax[x] = blockPixelY[i];
                       
                        
                    }else if(blockPixelY[i] < renderSideCYMin[x] ){
                        renderSideCYMin[x] = blockPixelY[i];
                        
                    }

                    renderSideCYCount[x]++; 
                    break;
                }                
            }
        }
        
        if(x == renderCountSideC){
            renderSideCX[renderCountSideC] = blockPixelX[i];
            renderSideCY[renderCountSideC] = 0;
            renderSideCZ[renderCountSideC] = blockPixelZ[i];
            renderSideCColor[renderCountSideC] = blockPixelColor[i];

            renderSideCYMax[renderCountSideC] = blockPixelY[i];
            renderSideCYMin[renderCountSideC] = blockPixelY[i];
            renderSideCYCount[renderCountSideC] = 0;
            renderCountSideC++;


        }

    }

        
    }

    
    for(let i = 0; i < renderCountSideA; i++){
        
                if(renderSideAZMax[i] - renderSideAZMin[i] > renderSideAZCount[i]){
                    renderSideAColor[i] +=8;//4;
                    console.log("trans");
                    
                }
    }

    for(let i = 0; i < renderCountSideB; i++){
        
                if(renderSideBXMax[i] - renderSideBXMin[i] > renderSideBXCount[i]){
                    renderSideBColor[i] +=8;//4;
                    
                }
            }

    for(let i = 0; i < renderCountSideC; i++){
                
        if(renderSideCYMax[i] - renderSideCYMin[i] > renderSideCYCount[i]){
            renderSideCColor[i] +=8;//4;
                            
        }
    }

}


function tangramLevelRender(){


    //Define Block Pixels



    //!!blockPixelCount = 12;


    //Define Plane
   
  /*  console.log("renderCountSideA: " + renderCountSideA);
    console.log("renderCountSideB: " + renderCountSideB);
    console.log("renderCountSideC: " + renderCountSideC);
*/
    //Render Plane
    for(let i = 0; i < renderCountSideA; i++){

       /* if(renderSideAZMax[i] - renderSideAZMin[i] > renderSideAZCount[i]){
            renderSideAColor[i] +=4;
            
        }*/

        if(i >=  renderAllocatedCountSideA){
          
            renderSideA[i] = tangramBlockPixel.clone("blockPixelA" +i);
            renderSideA2[i] = tangramBlockPixel.clone("blockPixelA2" +i);
        }
       
        renderSideA[i].isPickable = false;
        renderSideA[i].position.x = renderSideAX[i];
        renderSideA[i].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
        renderSideA[i].position.z = renderSideAZ[i];
        renderSideA[i].material = tangramMaterials[renderSideAColor[i]];
        renderSideA[i].setEnabled(1); 

        renderSideA2[i].isPickable = false;
        renderSideA2[i].position.x = renderSideAX[i];
        renderSideA2[i].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
        renderSideA2[i].position.z = renderSideAZ[i] -10;
        renderSideA2[i].material = tangramMaterials[renderSideAColor[i]];
        renderSideA2[i].rotation.y = Math.PI;
        renderSideA2[i].setEnabled(1); 
        
    }

    if(renderCountSideA > renderAllocatedCountSideA){
        renderAllocatedCountSideA = renderCountSideA;
    }

    for(let i = renderCountSideA; i < renderAllocatedCountSideA; i++){
        renderSideA[i].setEnabled(0);      
        renderSideA2[i].setEnabled(0);       
    }


//B
    for(let i = 0; i < renderCountSideB; i++){
        

                if(i >=  renderAllocatedCountSideB){
                  
                    renderSideB[i] = tangramBlockPixel.clone("blockPixelB" +i);
                    renderSideB2[i] = tangramBlockPixel.clone("blockPixelB2" +i);
                }
               
                renderSideB[i].isPickable = false;
                renderSideB[i].position.x = renderSideBX[i];
                renderSideB[i].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB[i].position.z = renderSideBZ[i];
                renderSideB[i].material = tangramMaterials[renderSideBColor[i]];
                renderSideB[i].rotation.y = -Math.PI/2;
                renderSideB[i].setEnabled(1);   

                renderSideB2[i].isPickable = false;
                renderSideB2[i].position.x = renderSideBX[i] +10;
                renderSideB2[i].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB2[i].position.z = renderSideBZ[i];
                renderSideB2[i].material = tangramMaterials[renderSideBColor[i]];
                renderSideB2[i].rotation.y = Math.PI/2;
                renderSideB2[i].setEnabled(1);   
                        
            }
        
            if(renderCountSideB > renderAllocatedCountSideB){
                renderAllocatedCountSideB = renderCountSideB;
            }
        
            for(let i = renderCountSideB; i < renderAllocatedCountSideB; i++){
                renderSideB[i].setEnabled(0);     
                renderSideB2[i].setEnabled(0);     
            }

    //C

    for(let i = 0; i < renderCountSideC; i++){
        
        
                if(i >=  renderAllocatedCountSideC){
                  
                    renderSideC[i] = tangramBlockPixelBottom.clone("blockPixelC" +i);
                }
               
                renderSideC[i].isPickable = false;
                renderSideC[i].position.x = renderSideCX[i];
                renderSideC[i].position.y = renderSideCY[i] + 0.01;
                
                renderSideC[i].position.z = renderSideCZ[i];
                renderSideC[i].material = tangramMaterialsC[renderSideCColor[i]];
                
                renderSideC[i].rotation.x = Math.PI/2;
                renderSideC[i].setEnabled(1);   
                //renderSideC[i].rotation.x = Math.PI/2;
                
              //  renderSideA[i].position.x = renderSideAX[i];
               // renderSideA[i].position.x = renderSideAX[i];
        
        
        
            }
        
            if(renderCountSideC > renderAllocatedCountSideC){
                renderAllocatedCountSideC = renderCountSideC;
            }
        
            for(let i = renderCountSideC; i < renderAllocatedCountSideC; i++){
                renderSideC[i].setEnabled(0);         
            }


}


function tangramRender(blocksCount){
    
    
        //Define Block Pixels
    
    
    
        //!!blockPixelCount = 12;
    
    
        //Define Plane

        gameDefineBlockPixels(blocksCount, blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksOffset);
       
    
        defineGamePlanes();
    
        
        //Render Plane
        let renderCountA = 0;
        let renderCountB = 0;
        let renderCountC = 0;
        let l;

        let errorBlock = false;
        

        for(let i = 0; i < renderCountSideA; i++){
            for(l = 0; l < renderGameCountSideA; l++){
                if(renderSideAX[i] == renderGameSideAX[l] &&
                    renderSideAY[i] == renderGameSideAY[l] &&
                    renderSideAZ[i] == renderGameSideAZ[l] &&
                    (renderSideAColor[i] == renderGameSideAColor[l] || !tangramCareColor)                               
                ){
                  
                    break;
                }

           }

            if(l == renderGameCountSideA){
                
             //   if(tangramRemoveShadowEnabled){
                if(renderCountA >=  renderAllocatedCountSideA){
                
                      renderSideA[renderCountA] = tangramBlockPixel.clone("blockPixelA" +i);
                      renderSideA2[renderCountA] = tangramBlockPixel.clone("blockPixelA2" +i);
                }

                renderSideA[renderCountA].isPickable = false;
                renderSideA[renderCountA].position.x = renderSideAX[i];
                renderSideA[renderCountA].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
                renderSideA[renderCountA].position.z = renderSideAZ[i];
                renderSideA[renderCountA].material = tangramMaterials[renderSideAColor[i]];
                renderSideA[renderCountA].setEnabled(1);

                renderSideA2[renderCountA].isPickable = false;
                renderSideA2[renderCountA].position.x = renderSideAX[i];
                renderSideA2[renderCountA].position.y = tangramOffsetY + renderSideAY[i] * tangramPitchY;
                renderSideA2[renderCountA].position.z = renderSideAZ[i] -10;
                renderSideA2[renderCountA].material = tangramMaterials[renderSideAColor[i]];
                renderSideA2[renderCountA].rotation.y = Math.PI;
                renderSideA2[renderCountA].setEnabled(1);
         //   }
                renderCountA++;

            }


    
            for(let i = 0; i < renderGameCountSideA; i++){
                for(l = 0; l <  renderCountSideA; l++){
                    if(renderSideAX[l] == renderGameSideAX[i] &&
                        renderSideAY[l] == renderGameSideAY[i] &&
                        renderSideAZ[l] == renderGameSideAZ[i]                                                    
                    ){                   
                        break;
                    }
    
               }

               if(l == renderCountSideA){
                errorBlock = true;
               }
    
                if(l == renderCountSideA && tangramErrorColorEnabled && tangramWinning <4){
                    gameErrorBlink(renderGameSideAMapToBlock[i]);
               


                    /*do not render red
                    if(renderCountA >=  renderAllocatedCountSideA){                      
                          renderSideA[renderCountA] = blockPixel.clone("blockPixelA" +i);
                          renderSideA2[renderCountA] = blockPixel.clone("blockPixelA2" +i);
                    }
    
                    
                    renderSideA[renderCountA].isPickable = false;
                    renderSideA[renderCountA].position.x = renderGameSideAX[i];
                    renderSideA[renderCountA].position.y = tangramOffsetY + renderGameSideAY[i] * tangramPitchY;
                    renderSideA[renderCountA].position.z = renderGameSideAZ[i];
                    
                    renderSideA[renderCountA].material = tangramMaterials[17];
                    renderSideA[renderCountA].setEnabled(1);
    
                    renderSideA2[renderCountA].isPickable = false;
                    renderSideA2[renderCountA].position.x = renderGameSideAX[i];
                    renderSideA2[renderCountA].position.y = tangramOffsetY + renderGameSideAY[i] * tangramPitchY;
                    renderSideA2[renderCountA].position.z = renderGameSideAZ[i] -10;
                    renderSideA2[renderCountA].material = tangramMaterials[17];
                    renderSideA2[renderCountA].rotation.y = Math.PI;
                    renderSideA2[renderCountA].setEnabled(1);
    
                    renderCountA++;
                    */
    
                }
        
        
            }
    
    
        }
    
        if(renderCountA > renderAllocatedCountSideA){
           // if(tangramRemoveShadowEnabled){
            renderAllocatedCountSideA = renderCountA;
         //   }
        }
    
        for(let i = renderCountA; i < renderAllocatedCountSideA; i++){
           // if(tangramRemoveShadowEnabled){
            renderSideA[i].setEnabled(0);      
            renderSideA2[i].setEnabled(0); 
           // } 
         
        }


        //B------------------------------


        for(let i = 0; i < renderCountSideB; i++){
            for(l = 0; l < renderGameCountSideB; l++){
                if(renderSideBX[i] == renderGameSideBX[l] &&
                    renderSideBY[i] == renderGameSideBY[l] &&
                    renderSideBZ[i] == renderGameSideBZ[l] &&
                    (renderSideBColor[i] == renderGameSideBColor[l] || !tangramCareColor)                             
                ){                
                    break;
                }

           }

            if(l == renderGameCountSideB){
            //    if(tangramRemoveShadowEnabled){

                if(renderCountB >=  renderAllocatedCountSideB){                 
                      renderSideB[renderCountB] = tangramBlockPixel.clone("blockPixelB" +i);
                      renderSideB2[renderCountB] = tangramBlockPixel.clone("blockPixelB2" +i);
                }

                renderSideB[renderCountB].isPickable = false;
                renderSideB[renderCountB].position.x = renderSideBX[i];
                renderSideB[renderCountB].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB[renderCountB].position.z = renderSideBZ[i];
                renderSideB[renderCountB].material = tangramMaterials[renderSideBColor[i]];
                renderSideB[renderCountB].rotation.y = -Math.PI/2;
                renderSideB[renderCountB].setEnabled(1);

                renderSideB2[renderCountB].isPickable = false;
                renderSideB2[renderCountB].position.x = renderSideBX[i]+10;
                renderSideB2[renderCountB].position.y = tangramOffsetY + renderSideBY[i] * tangramPitchY;
                renderSideB2[renderCountB].position.z = renderSideBZ[i];
                renderSideB2[renderCountB].material = tangramMaterials[renderSideBColor[i]];
                renderSideB2[renderCountB].rotation.y = Math.PI/2;
                renderSideB2[renderCountB].setEnabled(1);
              //  }

                renderCountB++;

            }


    
            for(let i = 0; i < renderGameCountSideB; i++){
                for(l = 0; l <  renderCountSideB; l++){
                    if(renderSideBX[l] == renderGameSideBX[i] &&
                        renderSideBY[l] == renderGameSideBY[i] &&
                        renderSideBZ[l] == renderGameSideBZ[i]                                                        
                    ){                     
                        break;
                    }
    
               }

               if(l == renderCountSideB){
                errorBlock = true;
               }
    
                if(l == renderCountSideB && tangramErrorColorEnabled && tangramWinning <4){  
                    
                    gameErrorBlink(renderGameSideBMapToBlock[i]);

                    /*do not render red
                    if(renderCountB >=  renderAllocatedCountSideB){                       
                          renderSideB[renderCountB] = blockPixel.clone("blockPixelB" +i);
                          renderSideB2[renderCountB] = blockPixel.clone("blockPixelB2" +i);
                    }
    
                    
                    renderSideB[renderCountB].isPickable = false;
                    renderSideB[renderCountB].position.x = renderGameSideBX[i];
                    renderSideB[renderCountB].position.y = tangramOffsetY + renderGameSideBY[i] * tangramPitchY;
                    renderSideB[renderCountB].position.z = renderGameSideBZ[i];
                    renderSideB[renderCountB].material = tangramMaterials[17];
                    renderSideB[renderCountB].rotation.y = -Math.PI/2;
                    renderSideB[renderCountB].setEnabled(1);
    
                    renderSideB2[renderCountB].isPickable = false;
                    renderSideB2[renderCountB].position.x = renderGameSideBX[i] +10;
                    renderSideB2[renderCountB].position.y = tangramOffsetY + renderGameSideBY[i] * tangramPitchY;
                    renderSideB2[renderCountB].position.z = renderGameSideBZ[i];
                    renderSideB2[renderCountB].material = tangramMaterials[17];
                    renderSideB2[renderCountB].rotation.y = Math.PI/2;
                    renderSideB2[renderCountB].setEnabled(1);
    
                    renderCountB++;
                    */
    
                }
        
        
            }
    
    
        }
    
        if(renderCountB > renderAllocatedCountSideB){
       //     if(tangramRemoveShadowEnabled){
            renderAllocatedCountSideB = renderCountB;
        //    }
        }
    
        for(let i = renderCountB; i < renderAllocatedCountSideB; i++){
           // if(tangramRemoveShadowEnabled){
            renderSideB[i].setEnabled(0);      
            renderSideB2[i].setEnabled(0); 
         //   }    
          //  console.log("destroy " + i);  
        }
    

        //C ------------------------------------------------------

        


          for(let i = 0; i < renderCountSideC; i++){
            for(l = 0; l < renderGameCountSideC; l++){
                if(renderSideCX[i] == renderGameSideCX[l] &&
                    renderSideCY[i] == renderGameSideCY[l] &&
                    renderSideCZ[i] == renderGameSideCZ[l] &&
                    (renderSideCColor[i] == renderGameSideCColor[l] || !tangramCareColor)                                 
                ){                   
                    break;
                }

           }

            if(l == renderGameCountSideC){
                
               // if(tangramRemoveShadowEnabled){
                if(renderCountC >=  renderAllocatedCountSideC){                  
                      renderSideC[renderCountC] = tangramBlockPixelBottom.clone("blockPixelC" +i);
                      
                }

                renderSideC[renderCountC].isPickable = false;
                renderSideC[renderCountC].position.x = renderSideCX[i];
                renderSideC[renderCountC].position.y = renderSideCY[i] + 0.01;
                renderSideC[renderCountC].position.z = renderSideCZ[i];
                renderSideC[renderCountC].material = tangramMaterialsC[renderSideCColor[i]];
                renderSideC[renderCountC].rotation.x = Math.PI/2;
                renderSideC[renderCountC].setEnabled(1);
              //  }

       

                renderCountC++;

            }


    
            for(let i = 0; i < renderGameCountSideC; i++){
                for(l = 0; l <  renderCountSideC; l++){
                    if(renderSideCX[l] == renderGameSideCX[i] &&
                        renderSideCY[l] == renderGameSideCY[i] &&
                        renderSideCZ[l] == renderGameSideCZ[i] 
                                                    
                    ){
                    
                        break;
                    }
    
               }

               if(l == renderCountSideC){
                errorBlock = true;
               }
    
                if(l == renderCountSideC && tangramErrorColorEnabled && tangramWinning <4){
                    gameErrorBlink(renderGameSideCMapToBlock[i]);
                    
               
                    /*do not render red
                    if(renderCountC >=  renderAllocatedCountSideC){
                     
                          renderSideC[renderCountC] = blockPixelBottom.clone("blockPixelC" +i);
                   
                    }
    
                    
                    renderSideC[renderCountC].isPickable = false;
                    renderSideC[renderCountC].position.x = renderGameSideCX[i];
                    renderSideC[renderCountC].position.y =  renderGameSideCY[i] +0.01;
                    renderSideC[renderCountC].position.z = renderGameSideCZ[i];
                    renderSideC[renderCountC].material = tangramMaterials[17];
                    renderSideC[renderCountC].rotation.x = Math.PI/2;
                    renderSideC[renderCountC].setEnabled(1);
                    

           

    
                    renderCountC++;
                    */
    
                }
        
        
            }
    
    
        }
    
        if(renderCountC > renderAllocatedCountSideC){
          //  if(tangramRemoveShadowEnabled){
            renderAllocatedCountSideC = renderCountC;
          //  }
        }
    
        for(let i = renderCountC; i < renderAllocatedCountSideC; i++){
          //  if(tangramRemoveShadowEnabled){
            renderSideC[i].setEnabled(0);  
           // }    
             
         
        }
    



  
        if(renderCountA == 0 && renderCountB == 0 && renderCountC == 0 && !errorBlock && tangramWinning < 4){
            //tangramWinning++;
            //console.log("tangram win!");
            if(tangramWinning > 2){
                biloWinning = true;
                
            }/*else{
                tangramWinning++;
            }*/
            tangramWinning++;
            
        }

        if(!tangramRemoveShadowEnabled){
            tangramLevelRender();
        }

    
    
    }

  