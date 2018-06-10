//guided build
//set shape, randomize colors
//wait untill time out or added block match shape

let memoLevel = 0;
let memoStage = 0;

//!!!!!!!!!!!!!!!!!!!

//Wrong in turning off block colors when showing 

/*
let displayTimeOut;
let displayTimeOutRunning = false;

let buildTimeOut;
let buildTimeOutRunning = false;
*/
let timeOut;
let tiemOutRunning = false;


let memoState = 0;

let blockIndex = 0;
//let lastBlockIndex = -1;

let levelBlockPixelCount;
let levelBlockPixelX = [];
let levelBlockPixelY = [];
let levelBlockPixelZ = [];
let levelBlockPixelColor = [];

let memoWinning;

let memoBlockX = [];
let memoBlockY = [];
let memoBlockZ = [];
let memoBlockRT = [];
//let memoBlockLED = [];
let memoBlockNextLED = 0x00;

let memoBlockCount = 0; 

//0 - build base shape
//1 - delay
//2 - randomize sequence
//3 - play sequencee
//4 - start timer
//5 - wait match sequence or timeout, show correct
//6 - delay
//7 - show fail
//8 - delay, restart
//9 - winning, wait push next buttion


function memoRender(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset){

   // guidedBuildWinning = 0;
    
      //  guidedBuildRender(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset);
    //console.log("memoState: " + memoState);




    if(memoState == 0){

        memoBlockCount = 0; 
        //clear LEDs
       /* for(let i = blocksOffset; i < blocksOffset +blocksCount; i++ ){
            blockLED2x2[i] = 0;
            blockLED2x4[i] = 0;
        }*/
       // clearTimeout(timeOut);
        timeOutRunning = false;

        for(let i = blocksOffset; i < blocksOffset +blocksCount; i++ ){
            blockLED2x2[i] = 0;
            blockLED2x4[i] = 0;
        }

        for(let i = 0; i < levelBlockCount[memoLevel][memoStage]; i++){
            levelBlockLED2x2[memoLevel][memoStage][i] = 0;
            levelBlockLED2x4[memoLevel][memoStage][i] = 0;
        }

        baseLED[0] = 0x20;
        baseLED[1] = 0x0A;
        memoWinning = 0;
        //do I need to clear the colors
        if(memoRenderBaseShape(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset)){
            memoState++;
            timeOutRunning = true;     
            clearTimeout(timeOut);       
            timeOut = setTimeout(timeOutFunction, 2000);
        }
    }else if(memoState == 1){
        if(!timeOutRunning){
            blocksRender = 1;
            memoState++;            
        }
    
    }else if(memoState == 2){
        // randomize colors
        //use no color for some games
        for(let i = 0; i < levelBlockCount[memoLevel][memoStage]; i++){                    
            levelBlockLED2x2[memoLevel][memoStage][i] = 0x09 << Math.floor(Math.random()*3) ;
            levelBlockLED2x4[memoLevel][memoStage][i] = levelBlockLED2x2[memoLevel][memoStage][i] ;
        }
      //  lastBlockIndex = -1;
        blockIndex = 0;
        blocksRender = 1;
        memoState++;

    }else if(memoState == 3){


        if(!timeOutRunning){
           
            //random order for some games
            if(blockIndex < levelBlockCount[memoLevel][memoStage]){
                let i = memoBlockFind(blockIndex);
                /*for( i = blocksOffset; i < blocksCount + blocksOffset; i++){
                    if(blocksY[i] == levelBlockY[memoLevel][memoStage][blockIndex] &&
                        blocksX[i] == levelBlockX[memoLevel][memoStage][blockIndex] &&
                        blocksZ[i] == levelBlockZ[memoLevel][memoStage][blockIndex] &&
                        blocksRT[i] == levelBlockRT[memoLevel][memoStage][blockIndex]  ){

                            if(lastBlockIndex > -1){
                                blockLED2x2[lastBlockIndex] = 0;
                                blockLED2x4[lastBlockIndex] = 0;
                            }

                            blockLED2x2[i] = levelBlockLED2x2[memoLevel][memoStage][blockIndex];
                            blockLED2x4[i] = levelBlockLED2x4[memoLevel][memoStage][blockIndex];
                            lastBlockIndex = i;

                            blockIndex++;
                            break;
                    }
                }*/
              

                //can't find block
                //console.log( Math.round(Date.now()/100) - 15212697051 ) ;
                //console.log( "timeOutRunning A: " + timeOutRunning);

                console.log("main i " + i);
       
                if(i == blocksCount + blocksOffset){//?????
                    memoState = 0;
                }else{
                   // console.log("tick") //do timestamps!!!

                   if(blockIndex > 0){
                       let lastBlockIndex = memoBlockFind(blockIndex-1);
                       console.log("lastBlockIndex :" + lastBlockIndex);
                        blockLED2x2[lastBlockIndex] = 0;
                        blockLED2x4[lastBlockIndex] = 0;
                    }

                    blockLED2x2[i] = levelBlockLED2x2[memoLevel][memoStage][blockIndex];
                    blockLED2x4[i] = levelBlockLED2x4[memoLevel][memoStage][blockIndex];
                    //lastBlockIndex = i - blocksOffset;

                    blockIndex++;
                    
                    timeOutRunning = true;      
                    clearTimeout(timeOut);      
                    timeOut = setTimeout(timeOutFunction, 1000);
                }

                //console.log( "timeOutRunning B: " + timeOutRunning);
            
            }else{

                gameDefineBlockPixels(levelBlockCount[memoLevel][memoStage], levelBlockX[memoLevel][memoStage], levelBlockY[memoLevel][memoStage], levelBlockZ[memoLevel][memoStage], levelBlockRT[memoLevel][memoStage], levelBlockLED2x2[memoLevel][memoStage], levelBlockLED2x4[memoLevel][memoStage], 0)

                levelBlockPixelCount = blockPixelCount;
                for(let i = 0; i < levelBlockPixelCount; i++){
                    levelBlockPixelX[i] = blockPixelX[i];
                    levelBlockPixelY[i] = blockPixelY[i];
                    levelBlockPixelZ[i] = blockPixelZ[i];
                    levelBlockPixelColor[i] = blockPixelColor[i];
                }

                let lastBlockIndex = memoBlockFind(blockIndex-1);

                blockLED2x2[lastBlockIndex] = 0;
                blockLED2x4[lastBlockIndex] = 0;
                blocksRender = 1;
                memoState++;
                console.log("Start, timeOutRunning: " + timeOutRunning);
            }
        
       }

         
        

    }else if(memoState == 4){

    

        console.log("Start 10s");
        timeOutRunning = true;            
        clearTimeout(timeOut);
       // timeOut = setTimeout(timeOutFunction, 10000);

       timeOut = setTimeout(timeOutFunction, 6000 + 7000*levelBlockCount[memoLevel][memoStage]);
        memoState++;
        
    }else if(memoState == 5){
        if(timeOutRunning){


            let memoBlockXLast = [];
            let memoBlockYLast = [];
            let memoBlockZLast = [];
            let memoBlockRTLast = [];
            let memoBlockLEDLast = [];

            let memoBlockCountLast = memoBlockCount; 
            memoBlockCount = 0; 
           
            for(let i = 0; i < memoBlockCountLast; i++){
                memoBlockXLast[i] = memoBlockX[i];
                memoBlockYLast[i] = memoBlockY[i];
                memoBlockZLast[i] = memoBlockZ[i];
                memoBlockRTLast[i] = memoBlockRT[i];
                //memoBlockLEDLast[i] = memoBlockLED;
               
            }
            //
            //
            //set colors of blocks
            /*
            for(let z = blocksOffset; z < blocksCount + blocksOffset; z++ ){

                if((blocksX[z] >= 6 && blocksX[z] <= 9) &&
                (blocksZ[z] == 0 || blocksZ[z] == 1) ){
                    blockLED2x2[z] = 0x09;
                    blockLED2x4[z] = 0x09;

                    memoBlockNextLED = 0x09;
   
                    //memoBlockLED = [];

                    
                   // blocksRender =1;
                }
            }*/

            for(let i = blocksOffset; i < blocksCount + blocksOffset; i++){
                if( (blocksRT[i] != 1 && blocksRT[i] != 3 ) &&
                    (((blocksX[i] >= 6 && blocksX[i] <= 9) && (blocksRT[i] == 4 || blocksRT[i] == 5 )) ||
                    ((blocksX[i] >= 7 && blocksX[i] <= 9) && (blocksRT[i] == 6 || blocksRT[i] == 7 )) ||
                    ((blocksX[i] == 9) && (blocksRT[i] == 2)) ||
                    ((blocksX[i] == 6) && (blocksRT[i] == 0)) )&&
                (blocksZ[i] == 0 || (blocksZ[i] == 1 && (blocksRT[i] != 7 && blocksRT[i] != 4 ) )) ){
                    blockLED2x2[i] = 0x09;
                    blockLED2x4[i] = 0x09;

                    memoBlockNextLED = 0x09;
   

      

                    //memoBlockLED = [];

                    
                   // blocksRender =1;
                }else if(( (blocksX[i] == 9 && (blocksRT[i] & 0x0F) != 2 ) || (blocksX[i] == 8 && ((blocksRT[i] & 0x0F) == 4 || (blocksRT[i] & 0x0F) == 5 || (blocksRT[i] & 0x0F) == 1)) ) &&
                 (((blocksZ[i] > 2 && blocksZ[i] < 8) && (blocksRT[i] == 5 || blocksRT[i] == 6 ) ) ||
                 ((blocksZ[i] > 1 && blocksZ[i] < 7) && (blocksRT[i] == 4 || blocksRT[i] == 7 ) ) ||
                 ((blocksZ[i] > 4 && blocksZ[i] < 7) && (blocksRT[i] == 1 ) ) ||
                 ((blocksZ[i] > 1 && blocksZ[i] < 5) && (blocksRT[i] == 3 ) ) 
            )
                ){
                    blockLED2x2[i] = 0x12;
                    blockLED2x4[i] = 0x12;

                    memoBlockNextLED = 0x12;
                   
   
                    //memoBlockLED = [];

                    
                   // blocksRender =1;
                }
                
                else if((blocksRT[i] != 1 && blocksRT[i] != 3 ) &&                    
                    (((blocksX[i] >= 6 && blocksX[i] <= 9) && (blocksRT[i] == 4 || blocksRT[i] == 5 )) ||
                    ((blocksX[i] >= 7 && blocksX[i] <= 9) && (blocksRT[i] == 6 || blocksRT[i] == 7 )) ||
                    ((blocksX[i] == 9) && (blocksRT[i] == 2)) ||
                    ((blocksX[i] == 6) && (blocksRT[i] == 0)) )&&
                ((blocksZ[i] == 8  && (blocksRT[i] != 5 && blocksRT[i] != 6 )) || blocksZ[i] == 9) ){
                    blockLED2x2[i] = 0x24;
                    blockLED2x4[i] = 0x24;

                    memoBlockNextLED = 0x24;
   
                    //memoBlockLED = [];
                   
                    
                   // blocksRender =1;
                }
                
                else if (memoLevelBlockFind(i) == levelBlockCount[memoLevel][memoStage]){
                    let z;
                    for(z = 0 ; z < memoBlockCountLast; z++){
                        if(memoBlockXLast[z] == blocksX[i] &&
                            memoBlockYLast[z] == blocksY[i] &&
                            memoBlockZLast[z] == blocksZ[i] &&
                            memoBlockRTLast[z] == blocksRT[i] ){

                                memoBlockX[memoBlockCount] = blocksX[i] ;
                                memoBlockY[memoBlockCount] = blocksY[i] ;
                                memoBlockZ[memoBlockCount] = blocksZ[i] ;
                                memoBlockRT[memoBlockCount] = blocksRT[i] ;

                                memoBlockCount++;
                                break;
                            }

                    }

                    if(z == memoBlockCountLast){


                        blockLED2x2[i] = memoBlockNextLED;
                        blockLED2x4[i] = memoBlockNextLED;

                        memoBlockNextLED = 0x00;

                        memoBlockX[memoBlockCount] = blocksX[i] ;
                        memoBlockY[memoBlockCount] = blocksY[i] ;
                        memoBlockZ[memoBlockCount] = blocksZ[i] ;
                        memoBlockRT[memoBlockCount] = blocksRT[i] ;
                        
                        memoBlockCount++;
                    }

                }
            }




  /*          let memoBlockX = [];
let memoBlockY = [];
let memoBlockZ = [];
let memoBlockRT = [];
let memoBlockLED = [];
let memoBlockNextLED;


let memoBlockCount = 0; 
*/

            gameDefineBlockPixels(blocksCount, blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksOffset);

          //  console.log("blockscouont: " +blocksCount);

            let i;
            for(i = 0; i < blockPixelCount; i++ ){
                if(levelBlockPixelColor[0] == blockPixelColor[i]){
                    
                    let iG;
                    let iL;
                    let xOffset = levelBlockPixelX[0] - blockPixelX[i];  
                    let yOffset = levelBlockPixelY[0] - blockPixelY[i]; 
                    let zOffset = levelBlockPixelZ[0] - blockPixelZ[i]; 
                 
                    for(iL = 1; iL < levelBlockPixelCount; iL++){
                        for(iG = 0; iG < blockPixelCount; iG++){
                            if(levelBlockPixelColor[iL] == blockPixelColor[iG] &&
                                levelBlockPixelX[iL] == blockPixelX[iG] + xOffset &&
                                levelBlockPixelY[iL] == blockPixelY[iG] + yOffset &&
                                levelBlockPixelZ[iL] == blockPixelZ[iG] + zOffset){                              
                                   
                                    break;
                                    

                                }
                        }

                        if(iG == blockPixelCount){
                            break;
                            //not found
                        }
                    }

                    if(iL == levelBlockPixelCount){
                        //found
                       // displayWinningCombination();
                        break;
                    }
                }
            }

            if(i != blockPixelCount){
                // found
                memoWinning++;
                //console.log("tangram win!");
                if(memoWinning > 2){
                    
                    //biloWinning = true;
                    
                displayWinningCombination();
                memoState = 9;

                timeOutRunning = true;   
                clearTimeout(timeOut);         
                timeOut = setTimeout(timeOutFunction, 3000);
                    
                }
                memoWinning++;

            }

        

        }else{
            displayWinningCombination();
            memoState = 6;

            timeOutRunning = true;     
            clearTimeout(timeOut);   
           // console.log("!!!!!!!!!!!!!!!!!");
            timeOut = setTimeout(timeOutFunction, 3000);

        }

    }else if(memoState == 6){

        //console.log("b");
        if(!timeOutRunning){
            memoState++;
            //blocksRender = 1;

        }
    
    }else if(memoState == 7){

        baseLED[0] = 0x09;
        baseLED[1] = 0x09;
        for(let i = blocksOffset; i < blocksOffset +blocksCount; i++ ){
            blockLED2x2[i] = 0;
            blockLED2x4[i] = 0;
        }


        blocksRender = 1;
        timeOutRunning = true; 
        clearTimeout(timeOut);           
        timeOut = setTimeout(timeOutFunction, 3000);
        memoState++;
        console.log("fail");
    }else if(memoState == 8){

        if(!timeOutRunning){
            
            memoState = 0;
            blocksRender = 1;

        }
    
    }else if(memoState == 9){

        if(!timeOutRunning && memoWinning ==4){
            
            biloWinning = true;
            memoWinning++;

        }

      //  console.log("winning");
    } //end delay

//!!!! show correct

     //   console.log("AA");


}

function displayWinningCombination(){


    

for(let iB = 0; iB < levelBlockCount[memoLevel][memoStage]; iB++ )  { 
    let i = memoBlockFind(iB);

    if(i < blocksCount + blocksOffset ){
        blockLED2x2[i] = levelBlockLED2x2[memoLevel][memoStage][iB];
        blockLED2x4[i] = levelBlockLED2x4[memoLevel][memoStage][iB];

    }

    /*for(let i = blocksOffset; i < blocksCount + blocksOffset; i++){
        if(blocksY[i] == levelBlockY[memoLevel][memoStage][iB] &&
            blocksX[i] == levelBlockX[memoLevel][memoStage][iB] &&
            blocksZ[i] == levelBlockZ[memoLevel][memoStage][iB] &&
            blocksRT[i] == levelBlockRT[memoLevel][memoStage][iB]  ){

                blockLED2x2[i] = levelBlockLED2x2[memoLevel][memoStage][iB];
                blockLED2x4[i] = levelBlockLED2x4[memoLevel][memoStage][iB];
                break;
        }
    }*/
}
}



function timeOutFunction() {

   // blocksRender = 1;
 clearTimeout(timeOut);
 timeOutRunning = false;

}



function memoCreateGame(level){
    clearTimeout(timeOut);
    memoState = 0;
    memoLevel = (level-1);
    memoStage = 0;
    blocksRender = 1;

}

/*

function memoRenderBaseShape(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset){
    let initialblocksCount = blocksCount + blocksOffset;
    let i;
    let iGB;
    let noOfBlocksFound = 0;
    let gBNoOfBlocksShown = 1;
    let blocksFound = [];

    for(iGB = 0; iGB < levelBlockCount[memoLevel][memoStage]; iGB++ ){
         //   console.log("iGB: " + iGB);
        //    console.log("levelBlockCount[memoLevel][memoStage]: " + levelBlockCount[memoLevel][memoStage] );
            
            for(i = blocksOffset; i < initialblocksCount; i++ ){
                
    
                if( blocksY[i] == levelBlockY[memoLevel][memoStage][iGB] &&
                    blockLED2x2[i] == levelBlockLED2x2[memoLevel][memoStage][iGB] &&
                    blockLED2x4[i] == levelBlockLED2x4[memoLevel][memoStage][iGB]){
                    
                    //console.log("blocksRT[i]: " + blocksRT[i] );

    
                    if(blocksX[i] == levelBlockX[memoLevel][memoStage][iGB] &&
                        blocksZ[i] == levelBlockZ[memoLevel][memoStage][iGB] &&
                        blocksRT[i] == levelBlockRT[memoLevel][memoStage][iGB] 
                        ){
                            console.log("found");
                            blocksFound[i] = 1;
                            break;
                    //2x4  
                    }else if((blocksRT[i] & 0x04) == 0 && (levelBlockRT[memoLevel][memoStage][iGB] & 0x04) == 0 )
                    {
                     //   console.log("AAAAAAAA"  )
                       if((blocksRT[i] & 0x03) == 0 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 2 &&
                            blocksX[i] +3 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] +1 == levelBlockZ[memoLevel][memoStage][iGB] )
                        {
                          //  console.log("XXXXXXXXXX"  );
                            blocksFound[i] = 1;
                            break;
                        }else if((blocksRT[i] & 0x03) == 1 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 3 &&
                            blocksX[i] +1 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] -3 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 2 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 4 &&
                            blocksX[i] -3 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] -1 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 3 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 1 &&
                            blocksX[i] -1 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] +3 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }

                        
                    //2x2    
                    }else if((blocksRT[i] & 0x04) == 0x04 && (levelBlockRT[memoLevel][memoStage][iGB] & 0x04) == 0x04 )
                    {
                        if((blocksRT[i] & 0x03) == 0 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 2 &&
                            blocksX[i] +3 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] +1 == levelBlockZ[memoLevel][memoStage][iGB] )
                            {
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 1 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 3 &&
                            blocksX[i] +1 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] -3 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 2 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 4 &&
                            blocksX[i] -3 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] -1 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 3 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 1 &&
                            blocksX[i] -1 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] +3 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }
                    }
                }

            
            }
    
         
            if(i == initialblocksCount && noOfBlocksFound < gBNoOfBlocksShown){
                
                
               // console.log("blocksCount 2 : " +blocksCount);
                blocksX[blocksCount + blocksOffset] = levelBlockX[memoLevel][memoStage][iGB];
                blocksY[blocksCount+ blocksOffset] = levelBlockY[memoLevel][memoStage][iGB];
                blocksZ[blocksCount + blocksOffset] = levelBlockZ[memoLevel][memoStage][iGB];
                blocksRT[blocksCount+ blocksOffset] = levelBlockRT[memoLevel][memoStage][iGB];
                blockLED2x2[blocksCount + blocksOffset] = levelBlockLED2x2[memoLevel][memoStage][iGB];
                blockLED2x4[blocksCount + blocksOffset] = levelBlockLED2x4[memoLevel][memoStage][iGB];
                blocksUseAlpha[blocksCount + blocksOffset] = 1;
                blocksCount++;
                noOfBlocksFound++;
             //   console.log("blocksCount 3 : " +blocksCount);
    
    
            }
        }

        if(noOfBlocksFound == 0){
            return true;
        }else {
            return false;
        }
    

    


}*/

function memoRenderBaseShape(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset){
    let initialblocksCount = blocksCount + blocksOffset;
    let i;
    let iGB;
    let noOfBlocksFound = 0;
    let gBNoOfBlocksShown = 1;
    let blocksFound = [];

    for(iGB = 0; iGB < levelBlockCount[memoLevel][memoStage]; iGB++ ){
         //   console.log("iGB: " + iGB);
        //    console.log("levelBlockCount[memoLevel][memoStage]: " + levelBlockCount[memoLevel][memoStage] );
            
            for(i = blocksOffset; i < initialblocksCount; i++ ){
                
    
                if( blocksY[i] == levelBlockY[memoLevel][memoStage][iGB] &&
                    blockLED2x2[i] == levelBlockLED2x2[memoLevel][memoStage][iGB] &&
                    blockLED2x4[i] == levelBlockLED2x4[memoLevel][memoStage][iGB]){
                    
                    //console.log("blocksRT[i]: " + blocksRT[i] );

    
                    if(blocksX[i] == levelBlockX[memoLevel][memoStage][iGB] &&
                        blocksZ[i] == levelBlockZ[memoLevel][memoStage][iGB] &&
                        blocksRT[i] == levelBlockRT[memoLevel][memoStage][iGB] 
                        ){
                            console.log("found");
                            blocksFound[i] = 1;
                            break;
                    //2x4  
                    }else if((blocksRT[i] & 0x04) == 0 && (levelBlockRT[memoLevel][memoStage][iGB] & 0x04) == 0 )
                    {
                     //   console.log("AAAAAAAA"  )
                       if((blocksRT[i] & 0x03) == 0 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 2 &&
                            blocksX[i] +3 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] +1 == levelBlockZ[memoLevel][memoStage][iGB] )
                        {
                          //  console.log("XXXXXXXXXX"  );
                            blocksFound[i] = 1;
                            break;
                        }else if((blocksRT[i] & 0x03) == 1 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 3 &&
                            blocksX[i] +1 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] -3 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 2 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 0 &&
                            blocksX[i] -3 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] -1 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 3 && 
                            (levelBlockRT[memoLevel][memoStage][iGB] & 0x03) == 1 &&
                            blocksX[i] -1 == levelBlockX[memoLevel][memoStage][iGB] &&
                            blocksZ[i] +3 == levelBlockZ[memoLevel][memoStage][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }

                        
                    //2x2    
                    }else if((blocksRT[i] & 0x04) == 0x04 && (levelBlockRT[memoLevel][memoStage][iGB] & 0x04) == 0x04 )
                    {
                        if((blocksRT[i] & 0x03) == 0){
                            if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                                levelBlockX[memoLevel][memoStage][iGB] == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] - 1 == blocksZ[i] ){
                                    blocksFound[i] = 1;
                                    break;
        
                            }else if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  2 &&
                                levelBlockX[memoLevel][memoStage][iGB] - 1 == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] - 1 == blocksZ[i] ){
                                blocksFound[i] = 1;
                                break;
                            
                            }else if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  3 &&
                                levelBlockX[memoLevel][memoStage][iGB] - 1 == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] == blocksZ[i] ){
                                blocksFound[i] = 1;
                                break;
                            
                            }
                            
                          }else if((blocksRT[i] & 0x03) == 1){
        
                            if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                                levelBlockX[memoLevel][memoStage][iGB] -1 == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB]  == blocksZ[i] ){
                                    blocksFound[i] = 1;
                                    break;
        
                            }else if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  2 &&
                                levelBlockX[memoLevel][memoStage][iGB] - 1 == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] + 1 == blocksZ[i] ){
                                blocksFound[i] = 1;
                                break;
                            
                            }else if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                                levelBlockX[memoLevel][memoStage][iGB] == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] +1 == blocksZ[i] ){
                                blocksFound[i] = 1;
                                break;
                            
                            }
                            
                            
                        }else if((blocksRT[i] & 0x03) == 2){
        
                            if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                                levelBlockX[memoLevel][memoStage][iGB] == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] + 1 == blocksZ[i] ){
                                    blocksFound[i] = 1;
                                    break;
        
                            }else if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -2 &&
                                levelBlockX[memoLevel][memoStage][iGB] + 1 == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] + 1 == blocksZ[i] ){
                                blocksFound[i] = 1;
                                break;
                            
                            }else if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                                levelBlockX[memoLevel][memoStage][iGB] + 1 == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] == blocksZ[i] ){
                                blocksFound[i] = 1;
                                break;
                            
                            }        
        
                        }else if((blocksRT[i] & 0x03) == 3){
        
                            if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -3 &&
                                levelBlockX[memoLevel][memoStage][iGB] +1 == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB]  == blocksZ[i] ){
                                    blocksFound[i] = 1;
                                    break;
        
                            }else if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -2 &&
                                levelBlockX[memoLevel][memoStage][iGB] + 1 == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] - 1 == blocksZ[i] ){
                                blocksFound[i] = 1;
                                break;
                            
                            }else if((levelBlockRT[memoLevel][memoStage][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                                levelBlockX[memoLevel][memoStage][iGB]  == blocksX[i] &&
                                levelBlockZ[memoLevel][memoStage][iGB] -1 == blocksZ[i] ){
                                blocksFound[i] = 1;
                                break;
                            
                            }
        
                        }
                    }
                }

            
            }
    
         
            if(i == initialblocksCount && noOfBlocksFound < gBNoOfBlocksShown){
                
                
               // console.log("blocksCount 2 : " +blocksCount);
                blocksX[blocksCount + blocksOffset] = levelBlockX[memoLevel][memoStage][iGB];
                blocksY[blocksCount+ blocksOffset] = levelBlockY[memoLevel][memoStage][iGB];
                blocksZ[blocksCount + blocksOffset] = levelBlockZ[memoLevel][memoStage][iGB];
                blocksRT[blocksCount+ blocksOffset] = levelBlockRT[memoLevel][memoStage][iGB];
                blockLED2x2[blocksCount + blocksOffset] = levelBlockLED2x2[memoLevel][memoStage][iGB];
                blockLED2x4[blocksCount + blocksOffset] = levelBlockLED2x4[memoLevel][memoStage][iGB];
                blocksUseAlpha[blocksCount + blocksOffset] = 1;
                blocksCount++;
                noOfBlocksFound++;
             //   console.log("blocksCount 3 : " +blocksCount);
    
    
            }
        }

        if(noOfBlocksFound == 0){
            return true;
        }else {
            return false;
        }
    

    


}



function memoInit(){


     //1 - one 2x2




      //levelBlockX[0][0][0] = 3;
      //levelBlockX[0][0][0] = 3;
      //0-0
      levelBlockX[0][0][0] = 0;
      levelBlockY[0][0][0] = 0;
      levelBlockZ[0][0][0] = 4;
      levelBlockRT[0][0][0] = 4;
      levelBlockLED2x2[0][0][0] = 0x00;
      levelBlockLED2x4[0][0][0] = 0x00;

      levelBlockCount[0][0] = 1;


    //2 - two 2x2

      levelBlockX[1][0][0] = 0;
      levelBlockY[1][0][0] = 0;
      levelBlockZ[1][0][0] = 3;
      levelBlockRT[1][0][0] = 4;
      levelBlockLED2x2[1][0][0] = 0x00;
      levelBlockLED2x4[1][0][0] = 0x00;

      levelBlockX[1][0][1] = 0;
      levelBlockY[1][0][1] = 0;
      levelBlockZ[1][0][1] = 5;
      levelBlockRT[1][0][1] = 4;
      levelBlockLED2x2[1][0][1] = 0x00;
      levelBlockLED2x4[1][0][1] = 0x00;

      levelBlockCount[1][0] = 2;


          //3 - 3 2x2

          levelBlockX[2][0][0] = 0;
          levelBlockY[2][0][0] = 0;
          levelBlockZ[2][0][0] = 2;
          levelBlockRT[2][0][0] = 4;
          levelBlockLED2x2[2][0][0] = 0x00;
          levelBlockLED2x4[2][0][0] = 0x00;
    
          levelBlockX[2][0][1] = 0;
          levelBlockY[2][0][1] = 0;
          levelBlockZ[2][0][1] = 4;
          levelBlockRT[2][0][1] = 4;
          levelBlockLED2x2[2][0][1] = 0x00;
          levelBlockLED2x4[2][0][1] = 0x00;

          levelBlockX[2][0][2] = 0;
          levelBlockY[2][0][2] = 0;
          levelBlockZ[2][0][2] = 6;
          levelBlockRT[2][0][2] = 4;
          levelBlockLED2x2[2][0][2] = 0x00;
          levelBlockLED2x4[2][0][2] = 0x00;
    
    
          levelBlockCount[2][0] = 3;


                    //4 - 4 2x2

                    levelBlockX[3][0][0] = 0;
                    levelBlockY[3][0][0] = 0;
                    levelBlockZ[3][0][0] = 1;
                    levelBlockRT[3][0][0] = 4;
                    levelBlockLED2x2[3][0][0] = 0x00;
                    levelBlockLED2x4[3][0][0] = 0x00;
              
                    levelBlockX[3][0][1] = 0;
                    levelBlockY[3][0][1] = 0;
                    levelBlockZ[3][0][1] = 3;
                    levelBlockRT[3][0][1] = 4;
                    levelBlockLED2x2[3][0][1] = 0x00;
                    levelBlockLED2x4[3][0][1] = 0x00;
          
                    levelBlockX[3][0][2] = 0;
                    levelBlockY[3][0][2] = 0;
                    levelBlockZ[3][0][2] = 5;
                    levelBlockRT[3][0][2] = 4;
                    levelBlockLED2x2[3][0][2] = 0x00;
                    levelBlockLED2x4[3][0][2] = 0x00;

                    levelBlockX[3][0][3] = 0;
                    levelBlockY[3][0][3] = 0;
                    levelBlockZ[3][0][3] = 7;
                    levelBlockRT[3][0][3] = 4;
                    levelBlockLED2x2[3][0][3] = 0x00;
                    levelBlockLED2x4[3][0][3] = 0x00;
              
              
              
                    levelBlockCount[3][0] = 4;


                    //5 - cube

                    levelBlockX[4][0][0] = 0;
                    levelBlockY[4][0][0] = 0;
                    levelBlockZ[4][0][0] = 6;
                    levelBlockRT[4][0][0] = 1;
                    levelBlockLED2x2[4][0][0] = 0x00;
                    levelBlockLED2x4[4][0][0] = 0x00;
              
                    levelBlockX[4][0][1] = 2;
                    levelBlockY[4][0][1] = 0;
                    levelBlockZ[4][0][1] = 6;
                    levelBlockRT[4][0][1] = 1;
                    levelBlockLED2x2[4][0][1] = 0x00;
                    levelBlockLED2x4[4][0][1] = 0x00;

                    levelBlockX[4][0][2] = 0;
                    levelBlockY[4][0][2] = 1;
                    levelBlockZ[4][0][2] = 3;
                    levelBlockRT[4][0][2] = 0;
                    levelBlockLED2x2[4][0][2] = 0x00;
                    levelBlockLED2x4[4][0][2] = 0x00;
              
                    levelBlockX[4][0][3] = 0;
                    levelBlockY[4][0][3] = 1;
                    levelBlockZ[4][0][3] = 5;
                    levelBlockRT[4][0][3] = 0;
                    levelBlockLED2x2[4][0][3] = 0x00;
                    levelBlockLED2x4[4][0][3] = 0x00;
          

              
                    levelBlockCount[4][0] = 4;

    /*  let baseTopShape = [ new BABYLON.Vector3( -4.8,0,-5),		
        new BABYLON.Vector3( -5,0,-4.8),	
        new BABYLON.Vector3( -5,0,4.8), 
        new BABYLON.Vector3( -4.8,0,5),    
        new BABYLON.Vector3( 4.8,0,5),        
        new BABYLON.Vector3( 5,0,4.8),   
        new BABYLON.Vector3( 5,0,-4.8),    
        new BABYLON.Vector3( 4.8,0,-5)                        
        ];*/

        /*let colorSelectorShape = [ new BABYLON.Vector3( -4.8,0,-5),		
            new BABYLON.Vector3( -5,0,-4.8),	
            new BABYLON.Vector3( -5,0,4.8), 
            new BABYLON.Vector3( -4.8,0,5),    
            new BABYLON.Vector3( 4.8,0,5),        
            new BABYLON.Vector3( 5,0,4.8),   
            new BABYLON.Vector3( 5,0,-4.8),    
            new BABYLON.Vector3( 4.8,0,-5)                        
            ];*/


            //make square
         /*   let colorSelectorShape = [ new BABYLON.Vector3( -0.5,0,-4.7),		
                new BABYLON.Vector3( -0.7,0,-4.5),	
                new BABYLON.Vector3( -0.7,0,4.5), 
                new BABYLON.Vector3( -0.5,0,4.7),    
                new BABYLON.Vector3( 0.5,0,4.7),        
                new BABYLON.Vector3( 0.7,0,4.5),   
                new BABYLON.Vector3( 0.7,0,-4.5),    
                new BABYLON.Vector3( 0.5,0,-4.7)                        
                ];*/

                let colorSelectorShapeBackFront = [ new BABYLON.Vector3( -0.7,0,-2.7),		
                    new BABYLON.Vector3( -0.7,0,2.7),          
                    new BABYLON.Vector3( 0.7,0,2.7),   
                    new BABYLON.Vector3( 0.7,0,-2.7)  
                                     
                    ];

                /*let colorSelectorShapeSide = [ new BABYLON.Vector3( -0.7,0,-4.7),		
                    new BABYLON.Vector3( -0.7,0,4.7),          
                    new BABYLON.Vector3( 0.7,0,4.7),   
                    new BABYLON.Vector3( 0.7,0,-4.7)  
                                         
                    ];*/

                    /*let colorSelectorShapeSide = [ new BABYLON.Vector3( -0.7,0,-0.7),		
                        new BABYLON.Vector3( -0.7,0,0.7),          
                        new BABYLON.Vector3( 0.7,0,0.7),   
                        new BABYLON.Vector3( 0.7,0,-0.7)  
                                             
                        ];*/


                        let colorSelectorShapeSide = [ new BABYLON.Vector3( -0.7,0,-1.7),		
                            new BABYLON.Vector3( -0.7,0,1.7),          
                            new BABYLON.Vector3( 0.7,0,1.7),   
                            new BABYLON.Vector3( 0.7,0,-1.7)  
                                                 
                            ];
    
   /* colorSelectorRedPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:colorSelectorShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    colorSelectorRedPlane.position.x =4.5; 
    colorSelectorRedPlane.position.y =2;
    colorSelectorRedPlane.position.z =4.5;
    colorSelectorRedPlane.isPickable = false;*/

    let setAlpha = 0.5;

    let colorSelectorRedPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:colorSelectorShapeSide, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    colorSelectorRedPlane.position.x =7.5; 
    colorSelectorRedPlane.position.y =0.01;
    colorSelectorRedPlane.position.z =0.5;
    colorSelectorRedPlane.rotation.y = Math.PI/2;
    colorSelectorRedPlane.isPickable = false;


    let colorSelectorRedMaterial = new BABYLON.StandardMaterial("Red Plane", scene);
    colorSelectorRedMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    colorSelectorRedMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0);
    //colorSelectorRedMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
    //colorSelectorRedMaterial.ambientColor = new BABYLON.Color3(1, 0, 0);
    colorSelectorRedMaterial.alpha = setAlpha;   
   
    colorSelectorRedPlane.material = colorSelectorRedMaterial;

    //--------------------------

  /*  let colorSelectorNAPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:colorSelectorShapeBackFront, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    colorSelectorNAPlane.position.x =0.5; 
    colorSelectorNAPlane.position.y =0.01;
    colorSelectorNAPlane.position.z =4.5;
    colorSelectorNAPlane.isPickable = false;


    let colorSelectorNAMaterial = new BABYLON.StandardMaterial("NA Plane", scene);
    colorSelectorNAMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    colorSelectorNAMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0);
    //colorSelectorRedMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
    //colorSelectorRedMaterial.ambientColor = new BABYLON.Color3(1, 0, 0);
    colorSelectorNAMaterial.alpha = 0.3;   
   
    colorSelectorNAPlane.material = colorSelectorNAMaterial;*/

    //-----------------------------


    let colorSelectorBluePlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:colorSelectorShapeSide, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    colorSelectorBluePlane.position.x =7.5; 
    colorSelectorBluePlane.position.y =0.01;
    colorSelectorBluePlane.position.z =8.5;
    colorSelectorBluePlane.rotation.y = Math.PI/2;
    colorSelectorBluePlane.isPickable = false;


    let colorSelectorBlueMaterial = new BABYLON.StandardMaterial("Blue Plane", scene);
    colorSelectorBlueMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    colorSelectorBlueMaterial.emissiveColor = new BABYLON.Color3(0, 0, 1);
    //colorSelectorRedMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
    //colorSelectorRedMaterial.ambientColor = new BABYLON.Color3(1, 0, 0);
    colorSelectorBlueMaterial.alpha = setAlpha;   
   
    colorSelectorBluePlane.material = colorSelectorBlueMaterial;


        //-----------------------------

    let colorSelectorGreenPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:colorSelectorShapeBackFront, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    colorSelectorGreenPlane.position.x =8.5; 
    colorSelectorGreenPlane.position.y =0.01;
    colorSelectorGreenPlane.position.z =4.5;
    colorSelectorGreenPlane.isPickable = false;


    let colorSelectorGreenMaterial = new BABYLON.StandardMaterial("Green Plane", scene);
    colorSelectorGreenMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    colorSelectorGreenMaterial.emissiveColor = new BABYLON.Color3(0, 1, 0);
    //colorSelectorRedMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
    //colorSelectorRedMaterial.ambientColor = new BABYLON.Color3(1, 0, 0);
    colorSelectorGreenMaterial.alpha = setAlpha;   
   
    colorSelectorGreenPlane.material = colorSelectorGreenMaterial;



}

function memoBlockFind(blockIndex){


///let aBlockFound = false;
let i;

for(i = blocksOffset; i < blocksCount + blocksOffset; i++ ){



    if( blocksY[i] == levelBlockY[memoLevel][memoStage][blockIndex]){ //&&
        //blockLED2x2[i] == levelBlockLED2x2[memoLevel][memoStage][blockIndex] &&
      //  blockLED2x4[i] == levelBlockLED2x4[memoLevel][memoStage][blockIndex]
        
        //console.log("blocksRT[i]: " + blocksRT[i] );


        if(blocksX[i] == levelBlockX[memoLevel][memoStage][blockIndex] &&
            blocksZ[i] == levelBlockZ[memoLevel][memoStage][blockIndex] &&
            blocksRT[i] == levelBlockRT[memoLevel][memoStage][blockIndex] 
            ){
                //console.log("found");
                //let aBlockFound = true;
                break;
        //2x4  
        }else if((blocksRT[i] & 0x04) == 0 && (levelBlockRT[memoLevel][memoStage][blockIndex] & 0x04) == 0 )
        {
         //   console.log("AAAAAAAA"  )
           if((blocksRT[i] & 0x03) == 0 && 
                (levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) == 2 &&
                blocksX[i] +3 == levelBlockX[memoLevel][memoStage][blockIndex] &&
                blocksZ[i] +1 == levelBlockZ[memoLevel][memoStage][blockIndex] )
            {
              //  console.log("XXXXXXXXXX"  );
              //let aBlockFound = true;
                break;
            }else if((blocksRT[i] & 0x03) == 1 && 
                (levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) == 3 &&
                blocksX[i] +1 == levelBlockX[memoLevel][memoStage][blockIndex] &&
                blocksZ[i] -3 == levelBlockZ[memoLevel][memoStage][blockIndex] ){
                    //let aBlockFound = true;
                    break;
            }else if((blocksRT[i] & 0x03) == 2 && 
                (levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) == 0 &&
                blocksX[i] -3 == levelBlockX[memoLevel][memoStage][blockIndex] &&
                blocksZ[i] -1 == levelBlockZ[memoLevel][memoStage][blockIndex] ){
                    //let aBlockFound = true;
                    break;
            }else if((blocksRT[i] & 0x03) == 3 && 
                (levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) == 1 &&
                blocksX[i] -1 == levelBlockX[memoLevel][memoStage][blockIndex] &&
                blocksZ[i] +3 == levelBlockZ[memoLevel][memoStage][blockIndex] ){
                    //let aBlockFound = true;
                    break;
            }

            
        //2x2    
        }else if((blocksRT[i] & 0x04) == 0x04 && (levelBlockRT[memoLevel][memoStage][blockIndex] & 0x04) == 0x04 )
        {
            if((blocksRT[i] & 0x03) == 0){
                if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] - 1 == blocksZ[i] ){
                        //let aBlockFound = true;
                        break;

                }else if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  2 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] - 1 == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] - 1 == blocksZ[i] ){
                    //let aBlockFound = true;
                    break;
                
                }else if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  3 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] - 1 == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] == blocksZ[i] ){
                    //let aBlockFound = true;
                    break;
                
                }
                
              }else if((blocksRT[i] & 0x03) == 1){

                if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] -1 == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex]  == blocksZ[i] ){
                        //let aBlockFound = true;
                        break;

                }else if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  2 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] - 1 == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] + 1 == blocksZ[i] ){
                    //let aBlockFound = true;
                    break;
                
                }else if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] +1 == blocksZ[i] ){
                    //let aBlockFound = true;
                    break;
                
                }
                
                
            }else if((blocksRT[i] & 0x03) == 2){

                if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] + 1 == blocksZ[i] ){
                        //let aBlockFound = true;
                        break;

                }else if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  -2 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] + 1 == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] + 1 == blocksZ[i] ){
                    //let aBlockFound = true;
                    break;
                
                }else if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] + 1 == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] == blocksZ[i] ){
                    //let aBlockFound = true;
                    break;
                
                }        

            }else if((blocksRT[i] & 0x03) == 3){

                if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  -3 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] +1 == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex]  == blocksZ[i] ){
                        //let aBlockFound = true;
                        break;

                }else if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  -2 &&
                    levelBlockX[memoLevel][memoStage][blockIndex] + 1 == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] - 1 == blocksZ[i] ){
                    //let aBlockFound = true;
                    break;
                
                }else if((levelBlockRT[memoLevel][memoStage][blockIndex] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                    levelBlockX[memoLevel][memoStage][blockIndex]  == blocksX[i] &&
                    levelBlockZ[memoLevel][memoStage][blockIndex] -1 == blocksZ[i] ){
                    //let aBlockFound = true;
                    break;
                
                }

            }
        }

        
    }
}
//console.log("blocksOffset: " + blocksOffset);
//console.log("blocksCount: " + blocksCount);
//console.log("i: " + i);
return i;
}




function memoLevelBlockFind(blockIndex){


    ///let aBlockFound = false;
    let i;
    
    for(i = 0; i < levelBlockCount[memoLevel][memoStage] ; i++ ){
    
    
    
        if( blocksY[blockIndex] == levelBlockY[memoLevel][memoStage][i]){ //&&
            //blockLED2x2[blockIndex] == levelBlockLED2x2[memoLevel][memoStage][i] &&
          //  blockLED2x4[blockIndex] == levelBlockLED2x4[memoLevel][memoStage][i]
            
            //console.log("blocksRT[i]: " + blocksRT[i] );
    
    
            if(blocksX[blockIndex] == levelBlockX[memoLevel][memoStage][i] &&
                blocksZ[blockIndex] == levelBlockZ[memoLevel][memoStage][i] &&
                blocksRT[blockIndex] == levelBlockRT[memoLevel][memoStage][i] 
                ){
                    //console.log("found");
                    //let aBlockFound = true;
                    break;
            //2x4  
            }else if((blocksRT[blockIndex]  & 0x04) == 0 && (levelBlockRT[memoLevel][memoStage][i] & 0x04) == 0 )
            {
             //   console.log("AAAAAAAA"  )
               if((blocksRT[blockIndex]  & 0x03) == 0 && 
                    (levelBlockRT[memoLevel][memoStage][i] & 0x03) == 2 &&
                    blocksX[blockIndex]  +3 == levelBlockX[memoLevel][memoStage][i] &&
                    blocksZ[blockIndex]  +1 == levelBlockZ[memoLevel][memoStage][i] )
                {
                  //  console.log("XXXXXXXXXX"  );
                  //let aBlockFound = true;
                    break;
                }else if((blocksRT[blockIndex]  & 0x03) == 1 && 
                    (levelBlockRT[memoLevel][memoStage][i] & 0x03) == 3 &&
                    blocksX[blockIndex]  +1 == levelBlockX[memoLevel][memoStage][i] &&
                    blocksZ[blockIndex]  -3 == levelBlockZ[memoLevel][memoStage][i] ){
                        //let aBlockFound = true;
                        break;
                }else if((blocksRT[blockIndex]  & 0x03) == 2 && 
                    (levelBlockRT[memoLevel][memoStage][i] & 0x03) == 0 &&
                    blocksX[blockIndex]  -3 == levelBlockX[memoLevel][memoStage][i] &&
                    blocksZ[blockIndex] -1 == levelBlockZ[memoLevel][memoStage][i] ){
                        //let aBlockFound = true;
                        break;
                }else if((blocksRT[blockIndex]  & 0x03) == 3 && 
                    (levelBlockRT[memoLevel][memoStage][i] & 0x03) == 1 &&
                    blocksX[blockIndex]  -1 == levelBlockX[memoLevel][memoStage][i] &&
                    blocksZ[blockIndex]  +3 == levelBlockZ[memoLevel][memoStage][i] ){
                        //let aBlockFound = true;
                        break;
                }
    
                
            //2x2    
            }else if((blocksRT[blockIndex]  & 0x04) == 0x04 && (levelBlockRT[memoLevel][memoStage][i] & 0x04) == 0x04 )
            {
                if((blocksRT[blockIndex]  & 0x03) == 0){
                    if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  1 &&
                        levelBlockX[memoLevel][memoStage][i] == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] - 1 == blocksZ[blockIndex]  ){
                            //let aBlockFound = true;
                            break;
    
                    }else if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  2 &&
                        levelBlockX[memoLevel][memoStage][i] - 1 == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] - 1 == blocksZ[blockIndex] ){
                        //let aBlockFound = true;
                        break;
                    
                    }else if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  3 &&
                        levelBlockX[memoLevel][memoStage][i] - 1 == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] == blocksZ[blockIndex]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }
                    
                  }else if((blocksRT[blockIndex]  & 0x03) == 1){
    
                    if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  1 &&
                        levelBlockX[memoLevel][memoStage][i] -1 == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i]  == blocksZ[blockIndex]  ){
                            //let aBlockFound = true;
                            break;
    
                    }else if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  2 &&
                        levelBlockX[memoLevel][memoStage][i] - 1 == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] + 1 == blocksZ[blockIndex]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }else if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  -1 &&
                        levelBlockX[memoLevel][memoStage][i] == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] +1 == blocksZ[blockIndex]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }
                    
                    
                }else if((blocksRT[blockIndex]  & 0x03) == 2){
    
                    if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  1 &&
                        levelBlockX[memoLevel][memoStage][i] == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] + 1 == blocksZ[blockIndex]  ){
                            //let aBlockFound = true;
                            break;
    
                    }else if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  -2 &&
                        levelBlockX[memoLevel][memoStage][i] + 1 == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] + 1 == blocksZ[blockIndex]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }else if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex] & 0x03) ==  -1 &&
                        levelBlockX[memoLevel][memoStage][i] + 1 == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] == blocksZ[blockIndex] ){
                        //let aBlockFound = true;
                        break;
                    
                    }        
    
                }else if((blocksRT[blockIndex]  & 0x03) == 3){
    
                    if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  -3 &&
                        levelBlockX[memoLevel][memoStage][i] +1 == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i]  == blocksZ[blockIndex]  ){
                            //let aBlockFound = true;
                            break;
    
                    }else if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  -2 &&
                        levelBlockX[memoLevel][memoStage][i] + 1 == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] - 1 == blocksZ[blockIndex]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }else if((levelBlockRT[memoLevel][memoStage][i] & 0x03) - (blocksRT[blockIndex]  & 0x03) ==  -1 &&
                        levelBlockX[memoLevel][memoStage][i]  == blocksX[blockIndex]  &&
                        levelBlockZ[memoLevel][memoStage][i] -1 == blocksZ[blockIndex]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }
    
                }
            }
    
            
        }
    }
    //console.log("blocksOffset: " + blocksOffset);
    //console.log("blocksCount: " + blocksCount);
    //console.log("i: " + i);
    return i;
    }
    
    