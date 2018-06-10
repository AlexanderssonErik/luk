
let guidedBuildWinning = 0;

let guidedBuildLastStage =[];

let guidedBuildLevel = 0;
let guidedBuildStage = 0;



function guidedBuildCreateGame(level){

    console.log("guidedBuildCreateGame " +level);
   // console.log("guidedBuildLevel: " +guidedBuildLevel);
   // console.log("guidedBuildStage: " +guidedBuildStage);

   guiAnimateflashColorsAtEnd = false;
    
    guidedBuildLevel = level - 1;
    guidedBuildStage = Math.floor(Math.random()*levelBlockNumberStages[guidedBuildLevel]) ;
    
    while(guidedBuildStage == guidedBuildLastStage[guidedBuildLevel]){
        guidedBuildStage = Math.floor(Math.random()*levelBlockNumberStages[guidedBuildLevel]) ;
    }

    guidedBuildLastStage[guidedBuildLevel] = guidedBuildStage;
    guidedBuildWinning = 0;


    baseLED[0] = 0x10;
    baseLED[1] = 0x20;

    //defineLevelPlanes();

    guidedBuildRender();


}


function initGuidedBuild(){


   //1


      //levelBlockX[0][0][0] = 3;
      //levelBlockX[0][0][0] = 3;
      //0-0
      levelBlockX[0][0][0] = 3;
      levelBlockY[0][0][0] = 0;
      levelBlockZ[0][0][0] = 3;
      levelBlockRT[0][0][0] = 2;
      levelBlockLED2x2[0][0][0] = 0;
      levelBlockLED2x4[0][0][0] = 0;

      levelBlockX[0][0][1] = 3;
      levelBlockY[0][0][1] = 1;
      levelBlockZ[0][0][1] = 3;
      levelBlockRT[0][0][1] = 2;
      levelBlockLED2x2[0][0][1] = 0;
      levelBlockLED2x4[0][0][1] = 0;

      levelBlockCount[0][0] = 2;

       //0-1
       levelBlockX[0][1][0] = 5;
       levelBlockY[0][1][0] = 0;
       levelBlockZ[0][1][0] = 3;
       levelBlockRT[0][1][0] = 4;
       levelBlockLED2x2[0][1][0] = 0;
       levelBlockLED2x4[0][1][0] = 0;
       levelBlockCount[0][1] = 1;

      //0-2
      levelBlockX[0][2][0] = 5;
      levelBlockY[0][2][0] = 0;
      levelBlockZ[0][2][0] = 6;
      levelBlockRT[0][2][0] = 4;
      levelBlockLED2x2[0][2][0] = 0;
      levelBlockLED2x4[0][2][0] = 0;
      levelBlockCount[0][2] = 1;


      levelBlockNumberStages[0] = 3;

      //------------
//2

            //1-0
            levelBlockX[1][0][0] = 3;
            levelBlockY[1][0][0] = 0;
            levelBlockZ[1][0][0] = 3;
            levelBlockRT[1][0][0] = 2;
            levelBlockLED2x2[1][0][0] = 0;
            levelBlockLED2x4[1][0][0] = 0;
      
            levelBlockX[1][0][1] = 3;
            levelBlockY[1][0][1] = 1;
            levelBlockZ[1][0][1] = 3;
            levelBlockRT[1][0][1] = 2;
            levelBlockLED2x2[1][0][1] = 0;
            levelBlockLED2x4[1][0][1] = 0;
      
            levelBlockCount[1][0] = 2;
      
             //1-1
             levelBlockX[1][1][0] = 5;
             levelBlockY[1][1][0] = 0;
             levelBlockZ[1][1][0] = 3;
             levelBlockRT[1][1][0] = 4;
             levelBlockLED2x2[1][1][0] = 0;
             levelBlockLED2x4[1][1][0] = 0;
             levelBlockCount[1][1] = 1;
      
            //1-2
            levelBlockX[1][2][0] = 5;
            levelBlockY[1][2][0] = 0;
            levelBlockZ[1][2][0] = 6;
            levelBlockRT[1][2][0] = 4;
            levelBlockLED2x2[1][2][0] = 0;
            levelBlockLED2x4[1][2][0] = 0;
            levelBlockCount[1][2] = 1;
      
      
            levelBlockNumberStages[1] = 3;

              //------------


//3

            //2-0
            levelBlockX[2][0][0] = 6;
            levelBlockY[2][0][0] = 0;
            levelBlockZ[2][0][0] = 7;
            levelBlockRT[2][0][0] = 2;
            levelBlockLED2x2[2][0][0] = 36;
            levelBlockLED2x4[2][0][0] = 36;
            levelBlockX[2][0][1] = 3;
            levelBlockY[2][0][1] = 0;
            levelBlockZ[2][0][1] = 2;
            levelBlockRT[2][0][1] = 7;
            levelBlockLED2x2[2][0][1] = 9;
            levelBlockLED2x4[2][0][1] = 0;
            levelBlockX[2][0][2] = 7;
            levelBlockY[2][0][2] = 0;
            levelBlockZ[2][0][2] = 2;
            levelBlockRT[2][0][2] = 7;
            levelBlockLED2x2[2][0][2] = 9;
            levelBlockLED2x4[2][0][2] = 0;
            levelBlockX[2][0][3] = 4;
            levelBlockY[2][0][3] = 1;
            levelBlockZ[2][0][3] = 8;
            levelBlockRT[2][0][3] = 1;
            levelBlockLED2x2[2][0][3] = 18;
            levelBlockLED2x4[2][0][3] = 18;
            levelBlockX[2][0][4] = 6;
            levelBlockY[2][0][4] = 1;
            levelBlockZ[2][0][4] = 4;
            levelBlockRT[2][0][4] = 2;
            levelBlockLED2x2[2][0][4] = 18;
            levelBlockLED2x4[2][0][4] = 18;
            levelBlockX[2][0][5] = 5;
            levelBlockY[2][0][5] = 2;
            levelBlockZ[2][0][5] = 3;
            levelBlockRT[2][0][5] = 6;
            levelBlockLED2x2[2][0][5] = 9;
            levelBlockLED2x4[2][0][5] = 0;
            levelBlockCount[2][0] = 6;
            levelBlockX[2][1][0] = 6;
            levelBlockY[2][1][0] = 0;
            levelBlockZ[2][1][0] = 6;
            levelBlockRT[2][1][0] = 7;
            levelBlockLED2x2[2][1][0] = 18;
            levelBlockLED2x4[2][1][0] = 0;
            levelBlockX[2][1][1] = 3;
            levelBlockY[2][1][1] = 0;
            levelBlockZ[2][1][1] = 3;
            levelBlockRT[2][1][1] = 3;
            levelBlockLED2x2[2][1][1] = 0;
            levelBlockLED2x4[2][1][1] = 0;
            levelBlockX[2][1][2] = 6;
            levelBlockY[2][1][2] = 0;
            levelBlockZ[2][1][2] = 2;
            levelBlockRT[2][1][2] = 7;
            levelBlockLED2x2[2][1][2] = 18;
            levelBlockLED2x4[2][1][2] = 0;
            levelBlockX[2][1][3] = 5;
            levelBlockY[2][1][3] = 1;
            levelBlockZ[2][1][3] = 6;
            levelBlockRT[2][1][3] = 2;
            levelBlockLED2x2[2][1][3] = 36;
            levelBlockLED2x4[2][1][3] = 36;
            levelBlockX[2][1][4] = 5;
            levelBlockY[2][1][4] = 1;
            levelBlockZ[2][1][4] = 4;
            levelBlockRT[2][1][4] = 2;
            levelBlockLED2x2[2][1][4] = 36;
            levelBlockLED2x4[2][1][4] = 36;
            levelBlockX[2][1][5] = 3;
            levelBlockY[2][1][5] = 2;
            levelBlockZ[2][1][5] = 5;
            levelBlockRT[2][1][5] = 6;
            levelBlockLED2x2[2][1][5] = 0;
            levelBlockLED2x4[2][1][5] = 0;
            levelBlockX[2][1][6] = 4;
            levelBlockY[2][1][6] = 3;
            levelBlockZ[2][1][6] = 3;
            levelBlockRT[2][1][6] = 7;
            levelBlockLED2x2[2][1][6] = 9;
            levelBlockLED2x4[2][1][6] = 0;
            levelBlockX[2][1][7] = 3;
            levelBlockY[2][1][7] = 3;
            levelBlockZ[2][1][7] = 5;
            levelBlockRT[2][1][7] = 4;
            levelBlockLED2x2[2][1][7] = 9;
            levelBlockLED2x4[2][1][7] = 0;
            levelBlockCount[2][1] = 8;
      
      
            levelBlockNumberStages[2] = 2;

              //------------




}


function guidedBuildRender(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset){
    let initialblocksCount = blocksCount + blocksOffset;
    let i;
    let iGB;
    let noOfBlocksFound = 0;
    let gBNoOfBlocksShown = 1;
    let blocksFound = [];

    if( guidedBuildWinning >= 4){
        return;
  }

   // console.log("blocksCount 1 : " +blocksCount);
  //  console.log("guidedBuildLevel: " +guidedBuildLevel);
  //  console.log("guidedBuildStage: " +guidedBuildStage);

    for(iGB = 0; iGB < levelBlockCount[guidedBuildLevel][guidedBuildStage]; iGB++ ){
    //    console.log("iGB: " + iGB);
    //    console.log("levelBlockCount[guidedBuildLevel][guidedBuildStage]: " + levelBlockCount[guidedBuildLevel][guidedBuildStage] );
        
        for(i = blocksOffset; i < initialblocksCount; i++ ){
            

            if( blocksY[i] == levelBlockY[guidedBuildLevel][guidedBuildStage][iGB] &&
                blockLED2x2[i] == levelBlockLED2x2[guidedBuildLevel][guidedBuildStage][iGB] &&
                blockLED2x4[i] == levelBlockLED2x4[guidedBuildLevel][guidedBuildStage][iGB]){
                
                //console.log("blocksRT[i]: " + blocksRT[i] );
            /*    console.log("levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB]: " + levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] );
                console.log("levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB]: " + levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] );
                console.log("levelBlockX[guidedBuildLevel][guidedBuildStage][iGB]: " + levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] );
               // console.log("1------------------ " );
                console.log("blocksRT[i]: " + blocksRT[i] );
                console.log("blocksZ[i]: " + blocksZ[i] );
                console.log("blocksX[i]: " + blocksX[i]  );
                console.log("2------------------ " );*/

                if(blocksX[i] == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                    blocksZ[i] == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] &&
                    blocksRT[i] == levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] 
                    ){
                        blocksFound[i] = 1;
                        break;
                //2x4  
                }else if((blocksRT[i] & 0x04) == 0 && (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x04) == 0 )
                {
                 //   console.log("AAAAAAAA"  )
                   if((blocksRT[i] & 0x03) == 0 && 
                        (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) == 2 &&
                        blocksX[i] +3 == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                        blocksZ[i] +1 == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] )
                    {
                      //  console.log("XXXXXXXXXX"  );
                        blocksFound[i] = 1;
                        break;
                    }else if((blocksRT[i] & 0x03) == 1 && 
                        (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) == 3 &&
                        blocksX[i] +1 == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                        blocksZ[i] -3 == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] ){
                            blocksFound[i] = 1;
                            break;
                    }else if((blocksRT[i] & 0x03) == 2 && 
                        (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) == 0 &&
                        blocksX[i] -3 == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                        blocksZ[i] -1 == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] ){
                            blocksFound[i] = 1;
                            break;
                    }else if((blocksRT[i] & 0x03) == 3 && 
                        (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) == 1 &&
                        blocksX[i] -1 == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                        blocksZ[i] +3 == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] ){
                            blocksFound[i] = 1;
                            break;
                    }
                  /*  if((blocksRT[i] & 0x03)%2 == (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03)%2 )
                    {
                        
                    }
*/
                    
                //2x2    
                }else if((blocksRT[i] & 0x04) == 0x04 && (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x04) == 0x04 )
                {
                /*    console.log("(blocksRT[i] & 0x03): " + (blocksRT[i] & 0x03));
                    console.log("(levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03): " + (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03));
                    console.log("blocksX[i]: " + blocksX[i]);
                    console.log("levelBlockX[guidedBuildLevel][guidedBuildStage][iGB]: " + levelBlockX[guidedBuildLevel][guidedBuildStage][iGB]);
                    console.log("blocksZ[i]: " + blocksZ[i]);
                    console.log("levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB]: " + levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB]);
*/
                  if((blocksRT[i] & 0x03) == 0){
                    if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] - 1 == blocksZ[i] ){
                            blocksFound[i] = 1;
                            break;

                    }else if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  2 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] - 1 == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] - 1 == blocksZ[i] ){
                        blocksFound[i] = 1;
                        break;
                    
                    }else if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  3 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] - 1 == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] == blocksZ[i] ){
                        blocksFound[i] = 1;
                        break;
                    
                    }
                    
                  }else if((blocksRT[i] & 0x03) == 1){

                    if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] -1 == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB]  == blocksZ[i] ){
                            blocksFound[i] = 1;
                            break;

                    }else if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  2 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] - 1 == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] + 1 == blocksZ[i] ){
                        blocksFound[i] = 1;
                        break;
                    
                    }else if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] +1 == blocksZ[i] ){
                        blocksFound[i] = 1;
                        break;
                    
                    }
                    
                    
                }else if((blocksRT[i] & 0x03) == 2){

                    if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] + 1 == blocksZ[i] ){
                            blocksFound[i] = 1;
                            break;

                    }else if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -2 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] + 1 == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] + 1 == blocksZ[i] ){
                        blocksFound[i] = 1;
                        break;
                    
                    }else if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] + 1 == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] == blocksZ[i] ){
                        blocksFound[i] = 1;
                        break;
                    
                    }        

                }else if((blocksRT[i] & 0x03) == 3){

                    if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -3 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] +1 == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB]  == blocksZ[i] ){
                            blocksFound[i] = 1;
                            break;

                    }else if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -2 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] + 1 == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] - 1 == blocksZ[i] ){
                        blocksFound[i] = 1;
                        break;
                    
                    }else if((levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                        levelBlockX[guidedBuildLevel][guidedBuildStage][iGB]  == blocksX[i] &&
                        levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] -1 == blocksZ[i] ){
                        blocksFound[i] = 1;
                        break;
                    
                    }

                }

                    //---

           

                    /*

                    if((blocksRT[i] & 0x03) == 0 && 
                        (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) == 2 &&
                        blocksX[i] +3 == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                        blocksZ[i] +1 == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] )
                        {
                            blocksFound[i] = 1;
                            break;
                    }else if((blocksRT[i] & 0x03) == 1 && 
                        (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) == 3 &&
                        blocksX[i] +1 == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                        blocksZ[i] -3 == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] ){
                            blocksFound[i] = 1;
                            break;
                    }else if((blocksRT[i] & 0x03) == 2 && 
                        (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) == 0 &&
                        blocksX[i] -3 == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                        blocksZ[i] -1 == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] ){
                            blocksFound[i] = 1;
                            break;
                    }else if((blocksRT[i] & 0x03) == 3 && 
                        (levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] & 0x03) == 1 &&
                        blocksX[i] -1 == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                        blocksZ[i] +3 == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] ){
                            blocksFound[i] = 1;
                            break;
                    }*/
                }
            }
            /*
            if(blocksX[i] == levelBlockX[guidedBuildLevel][guidedBuildStage][iGB] &&
                blocksY[i] == levelBlockY[guidedBuildLevel][guidedBuildStage][iGB] &&
                blocksZ[i] == levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB] &&
                blocksRT[i] == levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB] &&
                blockLED2x2[i] == levelBlockLED2x2[guidedBuildLevel][guidedBuildStage][iGB] &&
                blockLED2x4[i] == levelBlockLED2x4[guidedBuildLevel][guidedBuildStage][iGB]
                ){
                    break;
                  
            }*/
        
        }

        
        if(i == initialblocksCount && noOfBlocksFound < gBNoOfBlocksShown){
            
            
         //   console.log("blocksCount 2 : " +blocksCount);
            blocksX[blocksCount + blocksOffset] = levelBlockX[guidedBuildLevel][guidedBuildStage][iGB];
            blocksY[blocksCount+ blocksOffset] = levelBlockY[guidedBuildLevel][guidedBuildStage][iGB];
            blocksZ[blocksCount + blocksOffset] = levelBlockZ[guidedBuildLevel][guidedBuildStage][iGB];
            blocksRT[blocksCount+ blocksOffset] = levelBlockRT[guidedBuildLevel][guidedBuildStage][iGB];
            blockLED2x2[blocksCount + blocksOffset] = levelBlockLED2x2[guidedBuildLevel][guidedBuildStage][iGB];
            blockLED2x4[blocksCount + blocksOffset] = levelBlockLED2x4[guidedBuildLevel][guidedBuildStage][iGB];
            blocksUseAlpha[blocksCount + blocksOffset] = 1;
            blocksCount++;
            noOfBlocksFound++;
          //  console.log("blocksCount 3 : " +blocksCount);


        }
    }

    for(i = blocksOffset; i < initialblocksCount; i++ ){
       
        if(!blocksFound[i]){
         
            gameErrorBlink(i);
            break;
        }

    }

    if(i == initialblocksCount && noOfBlocksFound == 0 && guidedBuildWinning <4){

       
        //console.log("tangram win!");
        if(guidedBuildWinning > 2){
            
            biloWinning = true;
            
        }
        guidedBuildWinning++;
    }

         
            


}
/*
let gBLevelBlockX = [3,1,2,3,4];
let gBLevelBlockY = [0,1,2,3,4];
let gBLevelBlockZ = [2,1,2,3,4];
let gBLevelBlockRT = [3,1,2,3,4];
let gBLevelBlockLED2x2 = [0,1,2,3,4];
let gBLevelBlockLED2x4 = [0,1,2,3,4];
//let gBLevelBlockFound = [];
let gBLevelBlockCount = 5;
let gBNoOfBlocksShown = 1;

//!!! don't forget that we are matching colors

function renderGuidedBuild(blocksX, blocksY, blocksZ, blocksRT, blocksLEDs2x2, blocksLEDs2x4, blocksUseAlpha, blocksOffset){

    let initialblocksCount = blocksCount + blocksOffset;
    let i;
    let igB;
    let noOfBlocksFound = 0;
   

   
    //
    for(igB = 0; igB < gBLevelBlockCount; igB++ ){
        for(i = blocksOffset; i < initialblocksCount; i++ ){
            if(blocksX[i] == gBLevelBlockX[igB] &&
                blocksY[i] == gBLevelBlockY[igB] &&
                blocksZ[i] == gBLevelBlockZ[igB] &&
                blocksRT[i] == gBLevelBlockRT[igB] &&
                blocksLEDs2x2[i] == gBLevelBlockLED2x2[igB] &&
                blocksLEDs2x4[i] == gBLevelBlockLED2x4[igB]
                ){
                    break;
            }
        }

        
        if(i == initialblocksCount && noOfBlocksFound < gBNoOfBlocksShown){
            
            
            
            blocksX[blocksCount + blocksOffset] = gBLevelBlockX[igB];
            blocksY[blocksCount+ blocksOffset] = gBLevelBlockY[igB];
            blocksZ[blocksCount + blocksOffset] = gBLevelBlockZ[igB];
            blocksRT[blocksCount+ blocksOffset] = gBLevelBlockRT[igB];
            blocksLEDs2x2[blocksCount + blocksOffset] = gBLevelBlockLED2x2[igB];
            blocksLEDs2x4[blocksCount + blocksOffset] = gBLevelBlockLED2x4[igB];
            blocksUseAlpha[blocksCount + blocksOffset] = 1;
            blocksCount++;
            noOfBlocksFound++;
            


        }
    }

    //}

    //blocksX[0] =2;


}
*/