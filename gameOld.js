let levelBlockX = [];
let levelBlockY = [];
let levelBlockZ = [];
let levelBlockRT = [];
let levelBlockLED2x2 = [];
let levelBlockLED2x4 = [];

let levelBlockCount = [];
let levelBlockNumberStages = [];


let blockPixelCount;
let blockPixelX = [];
let blockPixelY = [];
let blockPixelZ = [];
let blockPixelColor = [];
let blockPixelMapToBlock = [];


let errorBlinkTimeOut;
let errorBlinkTimeOutRunning = false;

function gameInit(){

    for(let i = 0; i < 10; i++){
        levelBlockX[i] = [];  //???
        levelBlockX[i] = [];
        levelBlockY[i] = [];
        levelBlockZ[i] = [];
        levelBlockRT[i] = [];
        levelBlockLED2x2[i] = [];
        levelBlockLED2x4[i] = [];
        levelBlockCount[i] = [];
        for(let a = 0; a < 100; a++){
            levelBlockX[i][a] = []; // ???
            levelBlockX[i][a] = [];
            levelBlockY[i][a] = [];
            levelBlockZ[i][a] = [];
            levelBlockRT[i][a] = [];
            levelBlockLED2x2[i][a] = [];
            levelBlockLED2x4[i][a] = [];
            //levelBlockCount[i][a] = [];

        }
    }

}
function gameErrorBlink(i) {

    
    if(!errorBlinkTimeOutRunning){
        if(blockLED2x2[i]  == 0x09){
            blockLED2x2[i] = 0x00; 
            blockLED2x4[i] = 0x00;                        
        }else{
            blockLED2x2[i] = 0x09; 
            blockLED2x4[i] = 0x09; 
        }
        errorBlinkTimeOutRunning = true;
       
        errorBlinkTimeOut = setTimeout(errorBlinkTimeOutFunction, 1000);
        blocksRender = 1;
    }  
}


function errorBlinkTimeOutFunction() {
    

        clearTimeout(errorBlinkTimeOutFunction);
        errorBlinkTimeOutRunning = false;

    }




    function gameDefineBlockPixels(C, X, Y, Z, RT, LEDs2x2, LEDs2x4, O){
        
            blockPixelCount = 0;
            
                for(let i = 0; i < C; i++){
            
                    blockPixelX[blockPixelCount] = X[i+O];   
                    blockPixelY[blockPixelCount] = Y[i+O];                 
                    blockPixelZ[blockPixelCount] = Z[i+O];    
                    blockPixelColor[blockPixelCount] = (LEDs2x2[i+O] & 0x38) >> 3;     
                    blockPixelMapToBlock[blockPixelCount] = i+O;           
                    blockPixelCount++;
            
                    blockPixelY[blockPixelCount] = Y[i+O];
                    blockPixelY[blockPixelCount+1] = Y[i+O];
                    blockPixelY[blockPixelCount+2] = Y[i+O];
            
                    
                    blockPixelColor[blockPixelCount] = (LEDs2x2[i+O] & 0x38) >> 3; 
                    blockPixelColor[blockPixelCount+1] = (LEDs2x2[i+O] & 0x07) ;
                    blockPixelColor[blockPixelCount+2] = (LEDs2x2[i+O] & 0x07) ; 
            
                    blockPixelMapToBlock[blockPixelCount] = i+O;  
                    blockPixelMapToBlock[blockPixelCount+1] = i+O;  
                    blockPixelMapToBlock[blockPixelCount+2] = i+O;  
            
            
                    if((RT[i+O] & 0x03) == 0){            
                        
                        blockPixelX[blockPixelCount] = X[i+O];          
                        blockPixelZ[blockPixelCount] = Z[i+O]+1;                        
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]+1;            
                        blockPixelZ[blockPixelCount] = Z[i+O];            
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]+1;           
                        blockPixelZ[blockPixelCount] = Z[i+O]+1;                 
                        blockPixelCount++;
            
                    }else if((RT[i+O] & 0x03) == 1){
                        
                        blockPixelX[blockPixelCount] = X[i+O]+1;            
                        blockPixelZ[blockPixelCount] = Z[i+O];                         
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O];            
                        blockPixelZ[blockPixelCount] = Z[i+O]-1;            
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]+1;            
                        blockPixelZ[blockPixelCount] = Z[i+O]-1;     
                        blockPixelCount++;
            
                    }else if((RT[i+O] & 0x03) == 2){
                        
                        blockPixelX[blockPixelCount] = X[i+O];            
                        blockPixelZ[blockPixelCount] = Z[i+O]-1;           
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]-1;            
                        blockPixelZ[blockPixelCount] = Z[i+O];
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]-1;            
                        blockPixelZ[blockPixelCount] = Z[i+O]-1;                   
                        blockPixelCount++;
            
                    }else{
            
                        
                        blockPixelX[blockPixelCount] = X[i+O]-1;            
                        blockPixelZ[blockPixelCount] = Z[i+O];             
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O];            
                        blockPixelZ[blockPixelCount] = Z[i+O]+1;
                        blockPixelCount++;
            
                        blockPixelX[blockPixelCount] = X[i+O]-1;            
                        blockPixelZ[blockPixelCount] = Z[i+O]+1;                    
                        blockPixelCount++;
            
                    }
                    
                            //2x4
                    if((RT[i+O] & 0x0C) == 0){
            
                        
                         
                        blockPixelY[blockPixelCount] = Y[i+O];                
                        blockPixelY[blockPixelCount+1] = Y[i+O];
                        blockPixelY[blockPixelCount+2] = Y[i+O];
                        blockPixelY[blockPixelCount+3] = Y[i+O];
                                
                        blockPixelColor[blockPixelCount] = (LEDs2x4[i+O] & 0x38) >> 3; 
                        blockPixelColor[blockPixelCount+1] = (LEDs2x4[i+O] & 0x38) >> 3; 
                        blockPixelColor[blockPixelCount+2] = (LEDs2x4[i+O] & 0x07);
                        blockPixelColor[blockPixelCount+3] = (LEDs2x4[i+O] & 0x07); 
    
                        blockPixelMapToBlock[blockPixelCount] = i+O;  
                        blockPixelMapToBlock[blockPixelCount+1] = i+O;  
                        blockPixelMapToBlock[blockPixelCount+2] = i+O;  
                        blockPixelMapToBlock[blockPixelCount+3] = i+O;  
            
                        if((RT[i+O] & 0x03) == 0){       
                            
                            blockPixelX[blockPixelCount] = X[i+O]+2;          
                            blockPixelZ[blockPixelCount] = Z[i+O];                        
                            blockPixelCount++;
                                                
                            blockPixelX[blockPixelCount] = X[i+O]+2;          
                            blockPixelZ[blockPixelCount] = Z[i+O]+1;                        
                            blockPixelCount++;
                                    
                            blockPixelX[blockPixelCount] = X[i+O]+3;            
                            blockPixelZ[blockPixelCount] = Z[i+O];            
                            blockPixelCount++;
                                    
                            blockPixelX[blockPixelCount] = X[i+O]+3;           
                            blockPixelZ[blockPixelCount] = Z[i+O]+1;                 
                            blockPixelCount++;
                                    
                        }else if((RT[i+O] & 0x03) == 1){
            
                            blockPixelX[blockPixelCount] = X[i+O];          
                            blockPixelZ[blockPixelCount] = Z[i+O]-2;                        
                            blockPixelCount++;
                            
                            blockPixelX[blockPixelCount] = X[i+O]+1;            
                            blockPixelZ[blockPixelCount] = Z[i+O]-2;                         
                            blockPixelCount++;
                
                            blockPixelX[blockPixelCount] = X[i+O];            
                            blockPixelZ[blockPixelCount] = Z[i+O]-3;            
                            blockPixelCount++;
                
                            blockPixelX[blockPixelCount] = X[i+O]+1;            
                            blockPixelZ[blockPixelCount] = Z[i+O]-3;     
                            blockPixelCount++;
                
                        }else if((RT[i+O] & 0x03) == 2){
            
                            blockPixelX[blockPixelCount] = X[i+O]-2;          
                            blockPixelZ[blockPixelCount] = Z[i+O];                        
                            blockPixelCount++;
                            
                            blockPixelX[blockPixelCount] = X[i+O]-2;            
                            blockPixelZ[blockPixelCount] = Z[i+O]-1;           
                            blockPixelCount++;
                
                            blockPixelX[blockPixelCount] = X[i+O]-3;            
                            blockPixelZ[blockPixelCount] = Z[i+O];
                            blockPixelCount++;
                
                            blockPixelX[blockPixelCount] = X[i+O]-3;            
                            blockPixelZ[blockPixelCount] = Z[i+O]-1;                   
                            blockPixelCount++;
                
                        }else{
            
                            blockPixelX[blockPixelCount] = X[i+O];          
                            blockPixelZ[blockPixelCount] = Z[i+O]+2;                        
                            blockPixelCount++;    
                            
                            blockPixelX[blockPixelCount] = X[i+O]-1;            
                            blockPixelZ[blockPixelCount] = Z[i+O]+2;             
                            blockPixelCount++;
                
                            blockPixelX[blockPixelCount] = X[i+O];            
                            blockPixelZ[blockPixelCount] = Z[i+O]+3;
                            blockPixelCount++;
                
                            blockPixelX[blockPixelCount] = X[i+O]-1;            
                            blockPixelZ[blockPixelCount] = Z[i+O]+3;                    
                            blockPixelCount++;
                
                        } 
                                            
                    }
            
                    
            
                    
                }
        
        }
