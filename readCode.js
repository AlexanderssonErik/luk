
   //settings for forbidden shapes
   //winning

let readCodeWinning = 0;

let readCodeLastStage =[];

let readCodeLevelBlockPixelCount ;

let readCodeLost = false;
let readCodeLevel;
let readCodeStage;
let readCodeTimeOut;

let readCodeTimeOutBlockDelay;
let readCodeTimeOutBlockDelayRunning;

let readCodeGameLevel = [];
//let readCodeGameLevelCount = [];
let readCodeGameNumberStages = [];

let readCodeIStack = [];
let readCodeIStackCounter;
let readCodeRoutineStack = [];
let readCodeRoutineStackCounter;

let readCodePosX;
let readCodePosZ;
let readCodePosY;
let readCodeDir;  //0 = +z
let readCodeOnBlock;


let readCodeSphere;

//Icons
let readCodeadvancedTextureIcon ;
let readCodeImageStack = [];
let readCodeEllipseStack = [];
let readCodeStackCounter = [];

let readCodeHighlightIconLastColumn; 
let readCodeHighlightIconLastRow;


//left, 0 = left, 1= center, 2= right
//top, 0 = top, 1 = center, 2 bottom
//column, -1, 0, 1

//delete icon??

function readCodeHighlightIcon(routine, step){
      let elipseColor = "#006060";

      readCodeEllipseStack[routine][step].background = elipseColor;



}

function readCodeDisplayIcons(){

      let readCodeCommandsImages = [];

      readCodeCommandsImages[0] = "./icon/level/lvl1.svg";
      readCodeCommandsImages[1] = "./icon/readCode/forward.svg";
      readCodeCommandsImages[2] = "./icon/readCode/right.svg";
      readCodeCommandsImages[3] = "./icon/readCode/left.svg";
      readCodeCommandsImages[4] = "./icon/readCode/up.svg";
      readCodeCommandsImages[5] = "./icon/readCode/down.svg";
      readCodeCommandsImages[6] = "./icon/level/lvl7.svg";
      readCodeCommandsImages[7] = "./icon/level/lvl8.svg";
      readCodeCommandsImages[8] = "./icon/level/lvl9.svg";
      readCodeCommandsImages[9] = "./icon/level/lvl10.svg";
      readCodeCommandsImages[10] = "./icon/level/lvl.svg";
      readCodeCommandsImages[11] = "./icon/level/lvl.svg";

      let size = 60;
      let columnSize = 100;
      let rowSize = 62;
      let elipseColor = "#606060";
      let elipseAlpha = 0.5;
      let rowOffset = -4;
      let columnOffset = -1;

      let s = readCodeLastStage[readCodeLevel  -1];
      let l = readCodeLevel -1;

      if(typeof(readCodeadvancedTextureIcon) != 'undefined'){
            readCodeadvancedTextureIcon.dispose();
      }
      
      readCodeadvancedTextureIcon = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("readCodeadvancedTextureIcon");

      for(routine = 0; routine <3; routine++){
            readCodeStackCounter[routine] = 0;

                 
            while(readCodeGameLevel[l][s][routine][readCodeStackCounter[routine]] != 11){

                

                  readCodeImageStack[routine][readCodeStackCounter[routine]] = new BABYLON.GUI.Image("Icon", readCodeCommandsImages[readCodeGameLevel[l][s][routine][readCodeStackCounter[routine]] ]);
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]] = new BABYLON.GUI.Ellipse();

                  readCodeImageStack[routine][readCodeStackCounter[routine]].horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
      
                  readCodeImageStack[routine][readCodeStackCounter[routine]].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

                  readCodeImageStack[routine][readCodeStackCounter[routine]].left = (routine + columnOffset) * columnSize + "px";
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].left = (routine +columnOffset) * columnSize + "px";

                  readCodeImageStack[routine][readCodeStackCounter[routine]].top = (readCodeStackCounter[routine] + rowOffset) * rowSize + "px";
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].top = (readCodeStackCounter[routine] + rowOffset) * rowSize + "px";


                  readCodeImageStack[routine][readCodeStackCounter[routine]].width = size + "px";
                  readCodeImageStack[routine][readCodeStackCounter[routine]].height = size + "px";
            
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].width = size + "px";
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].height = size + "px";
            
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].thickness = 0;
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].background = elipseColor;
                  readCodeEllipseStack[routine][readCodeStackCounter[routine]].alpha = elipseAlpha;
            
                  
                  readCodeadvancedTextureIcon.addControl(readCodeEllipseStack[routine][readCodeStackCounter[routine]]); 
                  readCodeadvancedTextureIcon.addControl(readCodeImageStack[routine][readCodeStackCounter[routine]]); 

                  readCodeStackCounter[routine]++;
                  

            }


      }



}



function readCodeCreateGame(level){

   // console.log("guidedBuildCreateGame " +level);
   // console.log("guidedBuildLevel: " +guidedBuildLevel);
   // console.log("guidedBuildStage: " +guidedBuildStage);

  // let emptyBlockLED2x2 = new Array(100);

    
    //readCodeLevel = level;

    readCodeHighlightIconLastColumn = -1;
    readCodeHighlightIconLastRow = -1;

    readCodeOnBlock = -1;
    biloRenderBlocks = false;

    clearTimeout(readCodeTimeOut); 
    clearTimeout(readCodeTimeOutBlockDelay);
    readCodeTimeOutBlockDelayRunning = false;


    let stage = Math.floor(Math.random()*readCodeGameNumberStages[level -1]) ;

    baseLED[0] = 0x10;
    baseLED[1] = 0x20;
    
    while(stage == readCodeLastStage[level-1]){
      stage = Math.floor(Math.random()*readCodeGameNumberStages[level -1]) ;
    }

    readCodeLastStage[level -1] = stage;
    readCodeWinning = 0;
    readCodeIStack[0] = 0;
    readCodeIStackCounter = 0;
     readCodeRoutineStack[0] = 0;
     readCodeRoutineStackCounter = 0;
     readCodePosX = 5;
     readCodePosZ = 3;
      readCodePosY = 0;
    readCodeDir = 0;  //0 = +z

    readCodeSphere.position.x = readCodePosX;
    readCodeSphere.position.y = readCodePosY+1;
    readCodeSphere.position.z = readCodePosZ;

    readCodeLevel = level;
 

    console.log("LEvel: " +level);
    console.log("stage: " +stage);

    readCodeLost = false;

    guiLevelOKButton();

    for(let i = blocksOffset; i < blocksCount + blocksOffset; i++){

      blockLED2x2[i] = 0x00;
      blockLED2x4[i] = 0x00;
    }

    readCodeDisplayIcons();
    //readCodeDisplayProgram(level, stage);

    //defineLevelPlanes();

   // console.log("LEvel: " +level);

    //gameDefineBlockPixels(levelBlockCount[level-1][stage],  levelBlockX[level-1][stage], levelBlockY[level - 1][stage], levelBlockZ[level - 1][stage], levelBlockRT[level-1][stage], levelBlockLED2x2[level -1][stage], levelBlockLED2x4[level -1][stage], 0);
  

    

   

}


function readCodeInit(){

      // only use X
      // 0 = wait
      // 1 = forward
      // 2 = trun right
      // 3 = turn left
      // 4 = jump up
      // 5 = jump down
      // 6 = do Y
      // 7 = do Z           
      //!! 8 = return to X
      //!! 9 = return to Y
      // 10 = return to Z

      // level, stage, process, data

      baseLED[0] = 0x10;
    baseLED[1] = 0x20;


    readCodeImageStack[0] = [];
    readCodeImageStack[1] = [];
    readCodeImageStack[2] = [];
    readCodeEllipseStack[0] = [];
    readCodeEllipseStack[1] = [];
    readCodeEllipseStack[2] = [];
      

      for(let i = 0; i < 10; i++){
            readCodeGameLevel[i] = [];  //???

          //  readCodeGameLevelCount[i] = [];
            for(let a = 0; a < 100; a++){
                  readCodeGameLevel[i][a] = []; // ???
                  for(let b = 0; b < 3; b++){
                        readCodeGameLevel[i][a][b] = []; 
                  }
    
    
            }
        }


        /*readCodeGameLevel[0][0][0][0] = 4;
        readCodeGameLevel[0][0][0][1] = 1;
        readCodeGameLevel[0][0][0][2] = 4;
        readCodeGameLevel[0][0][0][3] = 2;
        readCodeGameLevel[0][0][0][4] = 1;
        readCodeGameLevel[0][0][0][5] = 6;
        readCodeGameLevel[0][0][0][6] = 11;*/
        readCodeGameLevel[0][0][0][0] = 6;
        readCodeGameLevel[0][0][0][1] = 11;


        readCodeGameLevel[0][0][1][0] = 4;
        readCodeGameLevel[0][0][1][1] = 1;
        readCodeGameLevel[0][0][1][2] = 11;

        readCodeGameLevel[0][0][2][0] = 4;
        readCodeGameLevel[0][0][2][1] = 1;
        readCodeGameLevel[0][0][2][2] = 11;



        //readCodeGameLevelCount[0][0] = 5;



        readCodeGameLevel[0][1][0][0] = 4;
        readCodeGameLevel[0][1][0][1] = 1;
        readCodeGameLevel[0][1][0][2] = 4;
        readCodeGameLevel[0][1][0][3] = 2;
        readCodeGameLevel[0][1][0][4] = 1;
        readCodeGameLevel[0][1][0][5] = 6;
        readCodeGameLevel[0][1][0][6] = 11;

        readCodeGameLevel[0][1][1][0] = 4;
        readCodeGameLevel[0][1][1][1] = 1;
        readCodeGameLevel[0][1][1][2] = 11;

        readCodeGameLevel[0][1][2][0] = 4;
        readCodeGameLevel[0][1][2][1] = 1;
        readCodeGameLevel[0][1][2][2] = 11;

        //readCodeGameLevelCount[0][1] = 5;

   readCodeGameNumberStages[0] = 2;

  

 /*let startShape = [ new BABYLON.Vector3( -0.35,0,-0.35),		
      new BABYLON.Vector3( -0.35,0,0.35),          
      new BABYLON.Vector3( 0.35,0,0.35),   
      new BABYLON.Vector3( 0.35,0,-0.35)  
                       
      ];*/

      let startShape = [ new BABYLON.Vector3( -0.35,0,-0.5),		
            new BABYLON.Vector3( -0.35,0,0),     
            new BABYLON.Vector3( -0.65,0,0),   
            new BABYLON.Vector3( 0,0,0.65), 
            new BABYLON.Vector3( 0.65,0,0), 
            new BABYLON.Vector3( 0.35,0,0),   
            new BABYLON.Vector3( 0.35,0,-0.5)  
                             
            ];


      let setAlpha = 0.5;

      let startPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:startShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
      startPlane.position.x =5; 
      startPlane.position.y =0.01;
      startPlane.position.z =3;
     // startPlane.rotation.y = 0;
      startPlane.isPickable = false;
  
  
      let startMaterial = new BABYLON.StandardMaterial("Red Plane", scene);
      startMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      startMaterial.emissiveColor = new BABYLON.Color3(0, 1, 0);
      //colorSelectorRedMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
      //colorSelectorRedMaterial.ambientColor = new BABYLON.Color3(1, 0, 0);
      startMaterial.alpha = setAlpha;   
     
      startPlane.material = startMaterial;

       readCodeSphere = BABYLON.Mesh.CreateSphere("sphere", 16, 1, scene);


}

function readCodeOKPos(posX,posY,posZ){

      

      let i;



      //check nothing above

      for(i = 0; i < blockPixelCount; i++){  
            //console.log("X " +blockPixelX[i]);
            //console.log("Z " +blockPixelZ[i]);
            //console.log("Y " +blockPixelY[i]);
            //console.log("..");
            if( blockPixelX[i] == posX &&
            blockPixelZ[i] == posZ &&
            blockPixelY[i] == posY){
                  console.log("on fail above");
                  console.log("pos X. Z, Y: " + posX + ", " + posZ + ", " + posY) ;
                  console.log("on X. Z, Y: " + blockPixelX[i] + ", " + blockPixelZ[i] + ", " + blockPixelY[i] ) ;
                  return -102;

            }
      }

      //check ground under
      

      for(i = 0; i < blockPixelCount; i++){  
            if( blockPixelX[i] == posX &&
                  blockPixelZ[i] == posZ &&
                  blockPixelY[i] == posY-1){
                        console.log("on block");
                        console.log("pos X. Z, Y: " + posX + ", " + posZ + ", " + posY) ;
                  console.log("on X. Z, Y: " + blockPixelX[i] + ", " + blockPixelZ[i] + ", " + blockPixelY[i] ) ;

                      return (blockPixelMapToBlock[i] - blocksOffset);

            }
      }

      if(posY == 0 && (posX < 10 && posX > -1) && (posZ < 10 && posZ > -1) ){
            console.log("on base");
            return -101; //on base
            
      }else{
            console.log("on fail under");
            return -102;
      }



}



function readCodeRender(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksOffset){



      
     // blockPixelCount
    //  console.log("blockPixelCount" + blockPixelCount);

    if(  readCodeLost == true || readCodeWinning == 4){
          return;
    }



    

    if(guiLevelOKClick){

      biloRenderBlocks = true;

      if(readCodeTimeOutBlockDelayRunning){
            return;
      }
      console.log("AA");
      //convert current blocks to pixels
      //follow blocks

        gameDefineBlockPixels(blocksCount, blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksOffset);
       
    



        let s = readCodeLastStage[readCodeLevel  -1];
        let l = readCodeLevel -1;

    
      
        //0 = +z
       
        //readCodeOKPos(posX,posY,posZ)
        if(readCodeIStackCounter == 0 && readCodeIStack[readCodeIStackCounter] == 0 && readCodeOKPos(readCodePosX,readCodePosY,readCodePosZ) == -102){
            readCodeLost = true;
        }else{

            

       // -102; bad
      
            //return -101; //on base
           // console.log("s" + s); 
            //console.log("l" + l );

            //console.log("readCodeGameLevelCount[l][s]" + readCodeGameLevelCount[l][s]);


            //SSEEEEEEEEEEEEEET not readCodeI transreadCodeIent!!zzzzzzzzzzzz
            //for(let readCodeI = 0; readCodeI < readCodeGameLevelCount[l][s]; readCodeI++){

            
            

              // console.log("loop");
              // console.log("readCodeGameLevel[l][s][readCodeRoutine][readCodeI]: " + readCodeGameLevel[l][s][readCodeRoutine][readCodeI]);
      // 0 = wait
      // 1 = forward
      // 2 = trun right
      // 3 = turn left
      // 4 = jump up
      // 5 = jump down
      // 6 = do Y
      // 7 = do Z           
      // 8 = return to X
      // 9 = return to Y
      // 10 = return to Z
                  
                  if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] != 11){
                        readCodeHighlightIcon(readCodeRoutineStack[readCodeRoutineStackCounter], readCodeIStack[readCodeIStackCounter]);
                
                  }
                  
                  if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] == 0){


                  }
                  else if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] == 1 ){
       // let readCodeDir = 0;  //0 = +z
                        if(readCodeDir == 0){
                              readCodePosZ +=1;
                        }else if(readCodeDir == 1){
                              readCodePosX -= 1;
                        }else if(readCodeDir == 2){
                              readCodePosZ-=1;
                        }else if(readCodeDir == 3){
                              readCodePosX+=1;
                        }
                  }else if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] == 2){
                        readCodeDir -=1;                        
                        if(readCodeDir == -1){
                              readCodeDir = 3;
                        }
                        
                  }else if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] == 3){
                        readCodeDir +=1;
                        readCodeDir %= 4;
                  }
                  else if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] == 4){
                        
                        readCodePosY +=1;
                        if(readCodeDir == 0){
                              readCodePosZ +=1;
                        }else if(readCodeDir == 1){
                              readCodePosX -= 1;
                        }else if(readCodeDir == 2){
                              readCodePosZ-=1;
                        }else if(readCodeDir == 3){
                              readCodePosX+=1;
                        }
                        

                  }else if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] == 5){
                        readCodePosY +=1;
                        if(readCodeDir == 0){
                              readCodePosZ +=1;
                        }else if(readCodeDir == 1){
                              readCodePosX -= 1;
                        }else if(readCodeDir == 2){
                              readCodePosZ-=1;
                        }else if(readCodeDir == 3){
                              readCodePosX+=1;
                        }

                  }else if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] == 6){
                        readCodeRoutineStackCounter++;
                        readCodeRoutineStack[readCodeRoutineStackCounter] = 1;
                        readCodeIStackCounter++
                        readCodeIStack[readCodeIStackCounter] = -1;
                        console.log("jump: readCodeRoutineStackCounter: " + readCodeRoutineStackCounter );

                  }else if(readCodeGameLevel[l][s][readCodeRoutineStack[readCodeRoutineStackCounter]][readCodeIStack[readCodeIStackCounter]] == 11){
                        readCodeRoutineStackCounter--;
                        readCodeIStackCounter--;
                        console.log("jump back: readCodeRoutineStackCounter: " + readCodeRoutineStackCounter );
                  }

                  readCodeSphere.position.x = readCodePosX;
                  readCodeSphere.position.y = readCodePosY+1;
                  readCodeSphere.position.z = readCodePosZ;

                  //!!!!!!!!!!!!
                  if(readCodeOnBlock > -1){
                        blockLED2x2[readCodeOnBlock+blocksOffset] = 0x24;
                        blockLED2x4[readCodeOnBlock +blocksOffset] = 0x24;
                  }

                  readCodeOnBlock = readCodeOKPos(readCodePosX,readCodePosY,readCodePosZ) ;

                  if(readCodeOnBlock == -102){
                        readCodeLost = true;
                        console.log("1");
                        
                  }else if(readCodeOnBlock == -101){
                        console.log("2");
                  }else{
                        blockLED2x2[readCodeOnBlock + blocksOffset] = 0x12;
                        blockLED2x4[readCodeOnBlock + blocksOffset] = 0x12;

                        console.log("3");
                  }


                  readCodeIStack[readCodeIStackCounter]++

                  readCodeTimeOutBlockDelayRunning = true;
                  readCodeTimeOutBlockDelay = setTimeout(readCodeTimeOutBlockDelayFunction, 2000);
                  
            
            
            

      }
//--
      
            if(readCodeLost){

                  console.log("lost");
                  baseLED[0] = 0x09;
                  baseLED[1] = 0x09;
                  clearTimeout(readCodeTimeOut); 
                  readCodeTimeOut = setTimeout(readCodeTimeOutFunction, 3000);


            }else{
                  if(readCodeRoutineStackCounter == -1 ){
                        console.log("win");
                        biloWinning = true;
                        readCodeWinning = 4;
                  }
            }
      
      //blockColor = 0x09;  
     

    }






//

}

function readCodeTimeOutBlockDelayFunction(){
      clearTimeout(readCodeTimeOutBlockDelay); 
      readCodeTimeOutBlockDelayRunning = false;  
    
    }

function readCodeTimeOutFunction(){
      clearTimeout(readCodeTimeOut); 
      readCodeCreateGame(readCodeLevel);
    
    }
