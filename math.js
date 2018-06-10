let mathtextblock1;
let mathtextblock2;
let mathtextblock3;
let mathtextblock4;
let mathtextblock5;

let mathPlane1;
let mathPlane2;
let mathPlane3;
let mathPlane4;
let mathPlane5;

let mathWinning = 0;
let mathLost;
//let mathLastStage =[];


let mathBlockLeftPlane; 
let mathBlockMidPlane; 
let mathBlockRightPlane; 


let mathLevel = 0;
let randNumber = 0;

let randNumberLeft = 0;
let randNumberMid = 0;
let randNumberRight = 0;

let mathTimeOut;
let mathSign;

let mathFindRightPos;

//let mathStage = 0;

//1 only show number
//2 calculator +, green if =, blue if <, red if >
//3 calculator -, green if =, blue if <, red if >
//4 show number with >=< against random number, win when get it right
//5 show number with >=< against random number fraction, win when get it right
//6 make left and mid green + hit ok button when right is correct
//7 make left and mid green - hit ok button when right is correct
//8 make left and right green  + hit ok button when mid is correct
//9 make left and right green  + hit ok button when mid is correct
//10 random positions fraction


function mathCreateGame(level){
  

  mathLevel = level;

/*
   let stage = Math.floor(Math.random()*levelBlockNumberStages[level -1]) ;
   
   while(stage == tangramLastStage[level-1]){
       stage = Math.floor(Math.random()*levelBlockNumberStages[level -1]) ;
   }

   console.log("level: " + level);
   console.log("stage: " + stage);


   mathLastStage[level -1] = stage;*/
   mathWinning = 0;

   baseLED[0] = 0x00;
   baseLED[1] = 0x10;


   if(mathLevel == 0 ){ 
    guiLevelNoOKButton();
   }

   if(mathLevel == 1 ){ 
    guiLevelNoOKButton();
    
    mathBlockLeftPlane.setEnabled(0);  
    mathBlockMidPlane.setEnabled(1);  
    mathBlockRightPlane.setEnabled(0);  

    mathPlane1.setEnabled(0);
    mathPlane2.setEnabled(0);
    mathPlane3.setEnabled(1);
    mathPlane4.setEnabled(0);
    mathPlane5.setEnabled(0);
    
  }else if(mathLevel == 2){
    guiLevelNoOKButton();

    mathBlockLeftPlane.setEnabled(1);  
    mathBlockMidPlane.setEnabled(1);  
    mathBlockRightPlane.setEnabled(1);  

    mathPlane1.setEnabled(1);
    mathPlane2.setEnabled(1);
    mathPlane3.setEnabled(1);
    mathPlane4.setEnabled(1);
    mathPlane5.setEnabled(1);

    mathtextblock2.text = "+";

  }else if(mathLevel == 3){
    guiLevelNoOKButton();
    
    mathBlockLeftPlane.setEnabled(1);  
    mathBlockMidPlane.setEnabled(1);  
    mathBlockRightPlane.setEnabled(1);  
    
    mathPlane1.setEnabled(1);
    mathPlane2.setEnabled(1);
    mathPlane3.setEnabled(1);
    mathPlane4.setEnabled(1);
    mathPlane5.setEnabled(1);
    
    mathtextblock2.text = "-";
    
  }else if(mathLevel == 4 || mathLevel == 5 ){
    guiLevelNoOKButton();
    
    mathBlockLeftPlane.setEnabled(0);  
    mathBlockMidPlane.setEnabled(1);  
    mathBlockRightPlane.setEnabled(0);  
    
    mathPlane1.setEnabled(0);
    mathPlane2.setEnabled(0);
    mathPlane3.setEnabled(1);
    mathPlane4.setEnabled(1);
    mathPlane5.setEnabled(1);
    
    //mathtextblock4.text = "-";

    randNumber = Math.floor(Math.random()*10);
    if(mathLevel == 5){
      randNumber += Math.floor(Math.random()*4)/4;

    }

    
  }else if(mathLevel == 6 ||  mathLevel == 7 || mathLevel == 8 || mathLevel == 9 || mathLevel == 10){

    guiLevelOKButton();

    mathLost = false;

    mathBlockLeftPlane.setEnabled(1);  
    mathBlockMidPlane.setEnabled(1);  
    mathBlockRightPlane.setEnabled(1);  

    mathPlane1.setEnabled(1);
    mathPlane2.setEnabled(1);
    mathPlane3.setEnabled(1);
    mathPlane4.setEnabled(1);
    mathPlane5.setEnabled(1);

    if(mathLevel == 6 || mathLevel == 8){
      mathtextblock2.text = "+";
      mathSign = 1;
    }else if(mathLevel == 7 || mathLevel == 9){
      mathtextblock2.text = "-";
      mathSign = -1;
    }else if(mathLevel == 10){
      if(Math.floor(Math.random()*2) == 0){
        mathtextblock2.text = "+";
        mathSign = 1;
      }else{
        mathtextblock2.text = "-";
        mathSign = -1;
      }
    }
    mathtextblock4.text = "=";

    randNumberLeft = 99;
    randNumberMid = 99;
    randNumberRight = 99;

if(mathLevel == 6 || mathLevel == 7){
    while( randNumberLeft + randNumberMid + randNumberLeft + mathSign* randNumberMid > 12 || randNumberLeft + mathSign* randNumberMid < 0 ){
      randNumberLeft = Math.floor(Math.random()*10);
      randNumberMid = Math.floor(Math.random()*10);
    }

    mathtextblock1.text = textFraction(randNumberLeft);//txtLeft;
    mathtextblock3.text =  textFraction(randNumberMid); 
  }else if(mathLevel == 8 || mathLevel == 9){
    while( randNumberLeft + randNumberRight +  mathSign*(randNumberRight + -1*randNumberLeft)  > 12 || mathSign*(randNumberRight + -1*randNumberLeft) < 0 ){
      randNumberLeft = Math.floor(Math.random()*10);
      randNumberRight = Math.floor(Math.random()*10);

    }
    mathtextblock1.text = textFraction(randNumberLeft);//txtLeft;
    mathtextblock5.text =  textFraction(randNumberRight); 
     
  }else if(mathLevel == 10){
    mathFindRightPos = Math.floor(Math.random()*2);
    let mathNumberBlocks = 99;

    if(mathFindRightPos == 1 ){
      while( mathNumberBlocks > 12 || randNumberLeft + mathSign* randNumberMid < 0 ){
        randNumberLeft = Math.floor(Math.random()*10) + Math.floor(Math.random()*4)/4;
        randNumberMid = Math.floor(Math.random()*10) + Math.floor(Math.random()*4)/4;

        mathNumberBlocks = 0;
        mathNumberBlocks += Math.floor(randNumberLeft);
        mathNumberBlocks += Math.floor(randNumberMid);
        mathNumberBlocks += Math.floor(randNumberLeft + mathSign* randNumberMid );

        if(randNumberLeft - Math.floor(randNumberLeft) == 0 ){

        }else if (randNumberLeft - Math.floor(randNumberLeft) == 0.75){
          mathNumberBlocks += 2;
        }else{
          mathNumberBlocks += 1;
        }

        if(randNumberMid - Math.floor(randNumberMid) == 0 ){

        }else if (randNumberMid - Math.floor(randNumberMid) == 0.75){
          mathNumberBlocks += 2;
        }else{
          mathNumberBlocks += 1;
        }

        
        if(randNumberLeft + mathSign* randNumberMid - Math.floor(randNumberLeft + mathSign* randNumberMid) == 0 ){

        }else if (randNumberLeft + mathSign* randNumberMid - Math.floor(randNumberLeft + mathSign* randNumberMid) == 0.75){
          mathNumberBlocks += 2;
        }else{
          mathNumberBlocks += 1;
        }

        
        
      }
  
      mathtextblock1.text = textFraction(randNumberLeft);//txtLeft;
      mathtextblock3.text =  textFraction(randNumberMid); 


    }else{

      while( mathNumberBlocks > 12 || mathSign*(randNumberRight + -1*randNumberLeft) < 0 ){
        randNumberLeft = Math.floor(Math.random()*10) + Math.floor(Math.random()*4)/4;
        randNumberRight = Math.floor(Math.random()*10) + Math.floor(Math.random()*4)/4;

        mathNumberBlocks = 0;
        mathNumberBlocks += Math.floor(randNumberLeft);
        mathNumberBlocks += Math.floor(randNumberRight);
        mathNumberBlocks += Math.floor(mathSign*(randNumberRight + -1*randNumberLeft) );

        if(randNumberLeft - Math.floor(randNumberLeft) == 0 ){

        }else if (randNumberLeft - Math.floor(randNumberLeft) == 0.75){
          mathNumberBlocks += 2;
        }else{
          mathNumberBlocks += 1;
        }

        if(randNumberRight - Math.floor(randNumberRight) == 0 ){

        }else if (randNumberRight - Math.floor(randNumberRight) == 0.75){
          mathNumberBlocks += 2;
        }else{
          mathNumberBlocks += 1;
        }

        
        if(mathSign*(randNumberRight + -1*randNumberLeft) - Math.floor(mathSign*(randNumberRight + -1*randNumberLeft)) == 0 ){

        }else if (mathSign*(randNumberRight + -1*randNumberLeft) - Math.floor(mathSign*(randNumberRight + -1*randNumberLeft)) == 0.75){
          mathNumberBlocks += 2;
        }else{
          mathNumberBlocks += 1;
        }

  
      }
      mathtextblock1.text = textFraction(randNumberLeft);//txtLeft;
      mathtextblock5.text =  textFraction(randNumberRight); 

    }


  }
    

    



  }

  //6 make left and mid green + hit ok button when right is correct
//7 make left and mid green - hit ok button when right is correct
//8 make left and right green  + hit ok button when mid is correct
//9 make left and right green  + hit ok button when mid is correct

  

   

  }


function mathInit(){

  //Block indications

  guiSettingsZoomEnabled = false;


  let blockBottomShape = [ new BABYLON.Vector3( -0.7,0,-0.7),		
    new BABYLON.Vector3( -0.7,0,0.7),          
    new BABYLON.Vector3( 0.7,0,0.7),   
    new BABYLON.Vector3( 0.7,0,-0.7)  
                         
    ];


  let blockBottomMaterial = new BABYLON.StandardMaterial("Block Bottom", scene);
  blockBottomMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  blockBottomMaterial.emissiveColor = new BABYLON.Color3(0.5, 1, 0.2);
  //colorSelectorRedMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
  //colorSelectorRedMaterial.ambientColor = new BABYLON.Color3(1, 0, 0);
  blockBottomMaterial.alpha = 0.9;   



  
       mathBlockLeftPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:blockBottomShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
      mathBlockLeftPlane.position.x =1.5; 
      mathBlockLeftPlane.position.y =0.01;
      mathBlockLeftPlane.position.z =4.5;
      mathBlockLeftPlane.rotation.y = Math.PI/2;
      mathBlockLeftPlane.isPickable = false;  
      mathBlockLeftPlane.material = blockBottomMaterial;


       mathBlockMidPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:blockBottomShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
      mathBlockMidPlane.position.x =4.5; 
      mathBlockMidPlane.position.y =0.01;
      mathBlockMidPlane.position.z =4.5;
      mathBlockMidPlane.rotation.y = Math.PI/2;
      mathBlockMidPlane.isPickable = false;  
      mathBlockMidPlane.material = blockBottomMaterial;


       mathBlockRightPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:blockBottomShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
      mathBlockRightPlane.position.x =7.5; 
      mathBlockRightPlane.position.y =0.01;
      mathBlockRightPlane.position.z =4.5;
      mathBlockRightPlane.rotation.y = Math.PI/2;
      mathBlockRightPlane.isPickable = false;  
      mathBlockRightPlane.material = blockBottomMaterial;

  //--
   

    mathPlane1 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane1.position.y = 1;
    mathPlane1.position.x = 1;
    mathPlane1.position.z = -0.5;
    mathPlane1.rotation.x =  Math.PI/8;
 
       let mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane1);
 
 
       mathtextblock1 = new BABYLON.GUI.TextBlock();
       mathtextblock1.height = "100px";
       mathtextblock1.fontSize = 100;
       mathtextblock1.text = "";//"1≠";
       mathtextblock1.color= "#00E000";
 
     mathAdvancedTexture.addControl(mathtextblock1);  
 
     //------------
 
     mathPlane2 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane2.position.y = 1;
    mathPlane2.position.z = -0.5;
    mathPlane2.position.x = 2.75;
    mathPlane2.rotation.x = Math.PI/8;
 
       //var mathAdvancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
       mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
 
 
        mathtextblock2 = new BABYLON.GUI.TextBlock();
       mathtextblock2.height = "100px";
       mathtextblock2.fontSize = 100;
       mathtextblock2.text = "";
       mathtextblock2.color = "#00E000";
 
     mathAdvancedTexture.addControl(mathtextblock2);  
 
     //--------------
 
     mathPlane3 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane3.position.y = 1;
    mathPlane3.position.x = 4.5;
    mathPlane3.position.z = -0.5;
    mathPlane3.rotation.x = Math.PI/8;
 
       //var mathAdvancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
       mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane3);
 
 
        mathtextblock3 = new BABYLON.GUI.TextBlock();
       mathtextblock3.height = "100px";
       mathtextblock3.fontSize = 100;
       mathtextblock3.text = "";// "2";
       mathtextblock3.color = "#00E000";
 
     mathAdvancedTexture.addControl(mathtextblock3);  
 
         //--------------
 
         mathPlane4 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane4.position.y = 1;
    mathPlane4.position.x = 6.25;
    mathPlane4.position.z = -0.5;
    mathPlane4.rotation.x = Math.PI/8;
 
       //var mathAdvancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
       mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane4);
 
 
        mathtextblock4 = new BABYLON.GUI.TextBlock();
       mathtextblock4.height = "100px";
       mathtextblock4.fontSize = 100;
       mathtextblock4.text = "";//"=";
       mathtextblock4.color = "#00E000";
 
     mathAdvancedTexture.addControl(mathtextblock4);  
 
             //--------------
 
              mathPlane5 = BABYLON.Mesh.CreatePlane("plane", 15);
    // plane.parent = sphere4;
    mathPlane5.position.y = 1;
    mathPlane5.position.x = 8;
    mathPlane5.position.z = -0.5;
    mathPlane5.rotation.x = Math.PI/8;
 
       //var mathAdvancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane2);
       mathAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(mathPlane5);
 
 
        mathtextblock5 = new BABYLON.GUI.TextBlock();
       mathtextblock5.height = "100px";
       mathtextblock5.fontSize = 100;
      // mathtextblock5.text = '¼';
       mathtextblock5.text = "";//"¼½3";
      // mathtextblock5.color = "green";
      mathtextblock5.color = "#00E000";
     mathAdvancedTexture.addControl(mathtextblock5); 
 
     camera.setTarget(new BABYLON.Vector3(4.5,2, 4.5));
   
     camera.alpha = - Math.PI/2;
     camera.beta =  Math.PI/2.5; // more
     camera.radius = 18;
    
    


     scene.activeCamera.detachControl(canvas);
}

function mathRender(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksOffset){

  
    //mathtextblock3.text = "5";

  if(mathWinning == 4 || mathLost == true){
    return;
  }

    let sumLeft = 0;
    let sumMid = 0;
    let sumRight = 0;

    let mathBlockPixelHit = [];

    
    

    gameDefineBlockPixels(blocksCount, blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksOffset);

    for(let i = 0 ; i < blockPixelCount; i++){
      mathBlockPixelHit[i] = false;
      if((blockPixelX[i] == 1 || blockPixelX[i] == 2) && (blockPixelZ[i] == 4 ||  blockPixelZ[i] == 5)){
        sumLeft += 0.25;
        mathBlockPixelHit[i] = true;
      }else if((blockPixelX[i] == 4 || blockPixelX[i] == 5) && (blockPixelZ[i] == 4 ||  blockPixelZ[i] == 5)){
        sumMid += 0.25;
        mathBlockPixelHit[i] = true;
      }else if((blockPixelX[i] == 7 || blockPixelX[i] == 8) && (blockPixelZ[i] == 4 ||  blockPixelZ[i] == 5)){
        sumRight += 0.25;
        mathBlockPixelHit[i] = true;
      }

    }

    let blockColor = 0x12;

    if(mathLevel == 1 ){ 

      mathtextblock3.text = textFraction(sumMid);
    }else if (mathLevel == 2){
      mathtextblock1.text = textFraction(sumLeft);//txtLeft;
      mathtextblock3.text =  textFraction(sumMid);      
      mathtextblock5.text = textFraction(sumRight);
      if(sumRight < sumMid + sumLeft){
        blockColor = 0x09;
        mathtextblock4.text = ">";        
      }else if (sumRight > sumMid + sumLeft){
        blockColor = 0x24;
        mathtextblock4.text = "<";
      }else{
        mathtextblock4.text = "=";
      }

    }else if (mathLevel == 3){
      mathtextblock1.text = textFraction(sumLeft);//txtLeft;
      mathtextblock3.text =  textFraction(sumMid);      
      mathtextblock5.text = textFraction(sumRight);
      if(sumRight <  sumLeft -  sumMid){
        blockColor = 0x09;
        mathtextblock4.text = ">";        
      }else if (sumRight > sumLeft - sumMid){
        blockColor = 0x24;
        mathtextblock4.text = "<";
      }else{
        mathtextblock4.text = "=";
      }

    }else if (mathLevel == 4 || mathLevel == 5){
      
      mathtextblock3.text =  textFraction(sumMid);      
      mathtextblock5.text = textFraction(randNumber);
      if(randNumber <  sumMid){
        blockColor = 0x09;
        mathtextblock4.text = ">";        
      }else if (randNumber > sumMid){
        blockColor = 0x24;
        mathtextblock4.text = "<";
      }else{
        mathtextblock4.text = "=";

        if(mathWinning == 3){
          biloWinning = true;
          
        }
          mathWinning++;
        
      //tangramWinning++;

        //winning
      }

    }else if(mathLevel == 6 || mathLevel == 7 || mathLevel == 8 || mathLevel == 9 || mathLevel == 10){

          
      
      if(sumLeft != randNumberLeft){
        blockColor = 0x09;            
      }

   

      if(mathLevel == 6 || mathLevel == 7 || (mathLevel == 10 && mathFindRightPos == 1) ){
        mathtextblock5.text = textFraction(sumRight);
        if(sumMid != randNumberMid){
               blockColor = 0x09;
        } 
      }else if(mathLevel == 8 || mathLevel == 9 || mathLevel == 10){

        mathtextblock3.text = textFraction(sumMid);
        if(sumRight != randNumberRight){
          blockColor = 0x09; 
        }
      }

      

      if(guiLevelOKClick){
        if((mathLevel == 6 || mathLevel == 7 || (mathLevel == 10 && mathFindRightPos == 1)) && sumMid == randNumberMid && sumLeft == randNumberLeft && sumLeft + mathSign * sumMid == sumRight){
          biloWinning = true;
          mathWinning = 4;
                   
        }else if((mathLevel == 8 || mathLevel == 9 || mathLevel == 10) && sumRight == randNumberRight && sumLeft == randNumberLeft && sumLeft + mathSign * sumMid == sumRight){
          biloWinning = true;
          mathWinning = 4;
                   
        }else{
          mathLost = true;
          blockColor = 0x09;  
          baseLED[0] = 0x09;
          baseLED[1] = 0x09;
          clearTimeout(mathTimeOut); 
          mathTimeOut = setTimeout(mathTimeOutFunction, 3000);
        }

      }

    }


   
    for(let i = 0 ; i < blockPixelCount; i++){
      if(mathBlockPixelHit[i]){
        blockLED2x2[blockPixelMapToBlock[i]] = blockColor;
        blockLED2x4[blockPixelMapToBlock[i]] = blockColor;

      }
    }





}

function mathTimeOutFunction(){
  clearTimeout(mathTimeOut); 
  mathCreateGame(mathLevel);

}

function textFraction(number){

  let txt = "";


  if(number == 0 || number >= 1){
    txt += Math.floor(number);
  }

  if(number  - Math.floor(number ) == 0.25){
    txt += "¼";
  }else if(number - Math.floor(number) == 0.50){
    txt += "½";
  }else if(number - Math.floor(number) == 0.75){
    txt += "¾";
  }


  return txt;
}