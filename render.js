
function renderClear(){

    for(var i = 0; i <100; i++){
        if(renderBlocksPart1[i] != null){
          
            renderBlocksPart1[i].setEnabled(0); 
       
            renderBlocksPart2[i].setEnabled(0); 
        
       
            renderBlocksPart3[i].setEnabled(0); 
        
       
            renderBlocksPart4[i].setEnabled(0); 
        

        renderBlocksLine1A[i].setEnabled(0); 
renderBlocksLine2A[i].setEnabled(0); 
renderBlocksLine3A[i].setEnabled(0); 
renderBlocksLine4A[i].setEnabled(0); 

renderBlocksLine1B[i].setEnabled(0); 
renderBlocksLine2B[i].setEnabled(0); 
renderBlocksLine3B[i].setEnabled(0); 
renderBlocksLine4B[i].setEnabled(0); 

renderBlocksBigLine[i].setEnabled(0); 
renderBlocksSmallLine[i].setEnabled(0); 
    }

    }

}
function render(blocksX, blocksY, blocksZ, blocksRT, blocksLEDs2x2, blocksLEDs2x4, blocksUseAlpha, blocksOffset, blocksCount, biloBaseLED){

   // console.log("render");
 //   console.log(blocksLEDs2x2[0]);

    for(var i = 0; i <100; i++){
        if(renderBlocksPart1[i] != null){
          
            renderBlocksPart1[i].setEnabled(0); 
       
            renderBlocksPart2[i].setEnabled(0); 
        
       
            renderBlocksPart3[i].setEnabled(0); 
        
       
            renderBlocksPart4[i].setEnabled(0); 
        

        renderBlocksLine1A[i].setEnabled(0); 
renderBlocksLine2A[i].setEnabled(0); 
renderBlocksLine3A[i].setEnabled(0); 
renderBlocksLine4A[i].setEnabled(0); 

renderBlocksLine1B[i].setEnabled(0); 
renderBlocksLine2B[i].setEnabled(0); 
renderBlocksLine3B[i].setEnabled(0); 
renderBlocksLine4B[i].setEnabled(0); 

renderBlocksBigLine[i].setEnabled(0); 
renderBlocksSmallLine[i].setEnabled(0); 
    }

    }
/*
    getFront: function(){               
        return this.hex[0] & 0x07;
    },
    getLeft: function(val){
        return this.hex[0] >>3;
    },
    getBack: function(val){
        return this.hex[0] & 0x07;
    },
    getRight: function(val){
        return this.hex[1] >>3;
    },*/

/*
    baseLEDUp[6].material = materials[(baseLED[0] & 0x38) >> 3];              
    baseLEDUp[3].material = materials[baseLED[0] & 0x07];
    baseLEDUp[0].material = materials[(baseLED[1] & 0x38) >> 3];
    baseLEDUp[9].material = materials[baseLED[1] & 0x07];

    baseLEDSide[6].material = materials[(baseLED[0] & 0x38) >> 3];              
    baseLEDSide[3].material = materials[baseLED[0] & 0x07];
    baseLEDSide[0].material = materials[(baseLED[1] & 0x38) >> 3];
    baseLEDSide[9].material = materials[baseLED[1] & 0x07];
*/

baseLEDUp[6].material = materials[biloBaseLED.getLeft()];              
baseLEDUp[3].material = materials[biloBaseLED.getFront()];
baseLEDUp[0].material = materials[biloBaseLED.getRight()];
baseLEDUp[9].material = materials[biloBaseLED.getBack()];

baseLEDSide[6].material = materials[biloBaseLED.getLeft()];              
baseLEDSide[3].material = materials[biloBaseLED.getFront()];
baseLEDSide[0].material = materials[biloBaseLED.getRight()];
baseLEDSide[9].material = materials[biloBaseLED.getBack()];



    //console.log("r blocksOffset:" + blocksOffset);
    for(var i = 0; i < blocksCount; i++){
        
                            
        
                 
                            //!!renderBlocksPart1[i] = blockChamf.clone("A" + i);
                            renderBlocksPart1[i].setEnabled(1); 
                            renderBlocksPart1[i].position.x = blocksX[i+blocksOffset];
                            renderBlocksPart1[i].position.z = blocksZ[i+blocksOffset];
                            renderBlocksPart1[i].position.y = blocksY[i+blocksOffset] * pitchY;
                            renderBlocksPart1[i].rotation.y = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2;
         
                            renderBlocksLine1A[i].setEnabled(1); 
                            renderBlocksLine1A[i].position.x = blocksX[i+blocksOffset];
                            renderBlocksLine1A[i].position.z = blocksZ[i+blocksOffset];
                            renderBlocksLine1A[i].position.y = blocksY[i+blocksOffset] * pitchY ;
                            //renderBlocksLine1A[i].rotation.y = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2;
        
                            renderBlocksLine1B[i].setEnabled(1); 
                            renderBlocksLine1B[i].position.x = blocksX[i+blocksOffset];
                            renderBlocksLine1B[i].position.z = blocksZ[i+blocksOffset];
                            renderBlocksLine1B[i].position.y = blocksY[i+blocksOffset] * pitchY;
                            renderBlocksLine1B[i].rotation.y = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2;
        
                        /*    if(i < blocksCountFromWorld){
                                renderBlocksPart1[i].isPickable = true;
                            }else{
                                renderBlocksPart1[i].isPickable = false;
                            }*/

        
        
        
                            if((blocksRT[i+blocksOffset] & 0x0C) == 4 ){
                                renderBlocksSmallLine[i].setEnabled(1); 
                            renderBlocksSmallLine[i].position.x = blocksX[i+blocksOffset];
                            renderBlocksSmallLine[i].position.z = blocksZ[i+blocksOffset];
                            renderBlocksSmallLine[i].position.y = blocksY[i+blocksOffset] * pitchY;
                            renderBlocksSmallLine[i].rotation.y = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2;
        
                                //renderBlocksPart2[i] = blockChamf.clone("B" + i);
                                renderBlocksPart2[i].setEnabled(1); 
                                renderBlocksPart2[i].name = "B" + i;
        
                                renderBlocksLine2A[i].setEnabled(1);
                                renderBlocksLine2B[i].setEnabled(1);
                            
        
                                if((blocksRT[i+blocksOffset] & 0x03) == 0 ){
                                    renderBlocksPart2[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksPart2[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine2A[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine2A[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine2B[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine2B[i].position.z = blocksZ[i+blocksOffset]+1;
        
        
                                }
                                else if((blocksRT[i+blocksOffset] & 0x03) == 1 ){
                                    renderBlocksPart2[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksPart2[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine2A[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine2A[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine2B[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine2B[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                }else if((blocksRT[i+blocksOffset] & 0x03) == 2 ){
                                    renderBlocksPart2[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksPart2[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine2A[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine2A[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine2B[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine2B[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                } else if((blocksRT[i+blocksOffset] & 0x03) == 3 ){
                                    renderBlocksPart2[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksPart2[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine2A[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine2A[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine2B[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine2B[i].position.z = blocksZ[i+blocksOffset]+1;
                                }  
                                
                                renderBlocksPart2[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksPart2[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlocksLine2A[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                //renderBlocksLine2A[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlocksLine2B[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksLine2B[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                               //!! if(blocksLEDs2x2[i] != null){
                                // console.log('i: ' + i);
                             //   console.log('materials[blocksLEDs2x2[i+blocksOffset] & 0x07]: ' + materials[blocksLEDs2x2[i+blocksOffset] & 0x07]);
                              //  console.log('materials[(blocksLEDs2x2[i+blocksOffset] & 0x38) >> 3]: ' + materials[(blocksLEDs2x2[i+blocksOffset] & 0x38) >> 3]);
                             //   console.log('blocksLEDs2x2[i+blocksOffset] & 0x07: ' + (blocksLEDs2x2[i+blocksOffset] & 0x07));
                             //   console.log('(blocksLEDs2x2[i+blocksOffset] & 0x38) >> 3: ' +((blocksLEDs2x2[i+blocksOffset] & 0x38) >> 3));
                             //   console.log('i+blocksOffset: ' + (i+blocksOffset));
                                
                            // console.log('i+blocksOffset = ' + (i+blocksOffset));
                            // console.log('blocksLEDs2x2[i+blocksOffset] = ' + (blocksLEDs2x2[i+blocksOffset]));
                            // console.log('8*blocksUseAlpha[i+blocksOffset] = ' + (8*blocksUseAlpha[i+blocksOffset]));

                                    renderBlocksPart2[i].material = materials[(blocksLEDs2x2[i+blocksOffset] & 0x07) + 8*blocksUseAlpha[i+blocksOffset]];
                                    renderBlocksPart1[i].material = materials[((blocksLEDs2x2[i+blocksOffset] & 0x38) >> 3) + 8*blocksUseAlpha[i+blocksOffset]];
                                    
                                  //  console.log('renderBlocksPart1[i].material = ' +renderBlocksPart1[i].material);
                              //  console.log('renderBlocksPart2[i].material = ' +renderBlocksPart2[i].material);
        
                              //!!  }
                            
                            //0 = 2x4
                            
                            
                            }else if((blocksRT[i+blocksOffset] & 0x0C) == 0){
        
                                renderBlocksBigLine[i].setEnabled(1); 
                                renderBlocksBigLine[i].position.x = blocksX[i+blocksOffset];
                                renderBlocksBigLine[i].position.z = blocksZ[i+blocksOffset];
                                renderBlocksBigLine[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksBigLine[i].rotation.y = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2;
        
                                
                                renderBlocksPart2[i].setEnabled(1); 
                                renderBlocksPart2[i].name = "D" + i;
        
                                renderBlocksLine2A[i].setEnabled(1);
                                renderBlocksLine2B[i].setEnabled(1);
        
        
                                renderBlocksPart3[i].setEnabled(1); 
        
                                renderBlocksLine3A[i].setEnabled(1);
                                renderBlocksLine3B[i].setEnabled(1);
        
        
                                if((blocksRT[i+blocksOffset] & 0x03) == 0 ){
                                    renderBlocksPart3[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksPart3[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine3A[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine3A[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine3B[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine3B[i].position.z = blocksZ[i+blocksOffset]+1;
                                }
                                else if((blocksRT[i+blocksOffset] & 0x03) == 1 ){
                                    renderBlocksPart3[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksPart3[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine3A[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine3A[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine3B[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine3B[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                }else if((blocksRT[i+blocksOffset] & 0x03) == 2 ){
                                    renderBlocksPart3[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksPart3[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine3A[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine3A[i].position.z = blocksZ[i+blocksOffset]-1;
                                    
                                    renderBlocksLine3B[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine3B[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                } else if((blocksRT[i+blocksOffset] & 0x03) == 3 ){
                                    renderBlocksPart3[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksPart3[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine3A[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine3A[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine3B[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine3B[i].position.z = blocksZ[i+blocksOffset]+1;
                                }  
                                
                                renderBlocksPart3[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksPart3[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlocksLine3A[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                //renderBlocksLine3A[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlocksLine3B[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksLine3B[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
        
                                //!!if(blocksLEDs2x2[i] != null){
                                // console.log('i: ' + i);
                               // console.log('materials[blocksLEDs2x2[i] & 0x07]: ' + materials[blocksLEDs2x2[i] & 0x07]);
                               // console.log('materials[(blocksLEDs2x2[i] & 0x38) >> 3]: ' + materials[(blocksLEDs2x2[i] & 0x38) >> 3]);
                                    renderBlocksPart3[i].material = materials[(blocksLEDs2x2[i+blocksOffset] & 0x07) + 8*blocksUseAlpha[i+blocksOffset]];
                                    renderBlocksPart1[i].material = materials[((blocksLEDs2x2[i+blocksOffset] & 0x38) >> 3)  + 8*blocksUseAlpha[i+blocksOffset]];
        
                               //     console.log('renderBlocksPart1[i].material = ' +renderBlocksPart1[i].material);
                               // console.log('renderBlocksPart1[i].material = ' +renderBlocksPart1[i].material);
                               // console.log('renderBlocksPart2[i].material = ' +renderBlocksPart2[i].material);
        
                                //!!}
        
                                renderBlocksPart4[i].setEnabled(1); 
        
                                renderBlocksLine4A[i].setEnabled(1);
                                renderBlocksLine4B[i].setEnabled(1);
                                
                                //renderBlocksPart3[i] = blockNoChamf.clone("C" + i);
                                //renderBlocksPart4[i] = blockChamf.clone("D" + i);
                              
        
                                if((blocksRT[i+blocksOffset] & 0x03) == 0 ){
                                    renderBlocksPart4[i].position.x = blocksX[i+blocksOffset]+2;
                                    renderBlocksPart4[i].position.z = blocksZ[i+blocksOffset];
        
                                    renderBlocksLine4A[i].position.x = blocksX[i+blocksOffset]+2;
                                    renderBlocksLine4A[i].position.z = blocksZ[i+blocksOffset];
        
                                    renderBlocksLine4B[i].position.x = blocksX[i+blocksOffset]+2;
                                    renderBlocksLine4B[i].position.z = blocksZ[i+blocksOffset];
        
                                    renderBlocksPart2[i].position.x = blocksX[i+blocksOffset]+3;
                                    renderBlocksPart2[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine2A[i].position.x = blocksX[i+blocksOffset]+3;
                                    renderBlocksLine2A[i].position.z = blocksZ[i+blocksOffset]+1;
        
                                    renderBlocksLine2B[i].position.x = blocksX[i+blocksOffset]+3;
                                    renderBlocksLine2B[i].position.z = blocksZ[i+blocksOffset]+1;
                                 }
                                else if((blocksRT[i+blocksOffset] & 0x03) == 1 ){
                                    renderBlocksPart4[i].position.x = blocksX[i+blocksOffset]; 
                                    renderBlocksPart4[i].position.z = blocksZ[i+blocksOffset]-2;      
                                    
                                    renderBlocksLine4A[i].position.x = blocksX[i+blocksOffset]; 
                                    renderBlocksLine4A[i].position.z = blocksZ[i+blocksOffset]-2;  
        
                                    renderBlocksLine4B[i].position.x = blocksX[i+blocksOffset]; 
                                    renderBlocksLine4B[i].position.z = blocksZ[i+blocksOffset]-2;  
        
                                    renderBlocksPart2[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksPart2[i].position.z = blocksZ[i+blocksOffset]-3;
        
                                    renderBlocksLine2A[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine2A[i].position.z = blocksZ[i+blocksOffset]-3;
        
                                    renderBlocksLine2B[i].position.x = blocksX[i+blocksOffset]+1;
                                    renderBlocksLine2B[i].position.z = blocksZ[i+blocksOffset]-3;
        
                                }else if((blocksRT[i+blocksOffset] & 0x03) == 2 ){
                                    
                                    renderBlocksPart4[i].position.x = blocksX[i+blocksOffset]-2;
                                    renderBlocksPart4[i].position.z = blocksZ[i+blocksOffset];
        
                                    renderBlocksLine4A[i].position.x = blocksX[i+blocksOffset]-2;
                                    renderBlocksLine4A[i].position.z = blocksZ[i+blocksOffset];
        
                                    renderBlocksLine4B[i].position.x = blocksX[i+blocksOffset]-2;
                                    renderBlocksLine4B[i].position.z = blocksZ[i+blocksOffset];
                                    
                                    renderBlocksPart2[i].position.x = blocksX[i+blocksOffset]-3;
                                    renderBlocksPart2[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine2A[i].position.x = blocksX[i+blocksOffset]-3;
                                    renderBlocksLine2A[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                    renderBlocksLine2B[i].position.x = blocksX[i+blocksOffset]-3;
                                    renderBlocksLine2B[i].position.z = blocksZ[i+blocksOffset]-1;
        
                                } else if((blocksRT[i+blocksOffset] & 0x03) == 3 ){
                                    renderBlocksPart4[i].position.x = blocksX[i+blocksOffset];
                                    renderBlocksPart4[i].position.z = blocksZ[i+blocksOffset]+2;
        
                                    renderBlocksLine4A[i].position.x = blocksX[i+blocksOffset];
                                    renderBlocksLine4A[i].position.z = blocksZ[i+blocksOffset]+2;
        
                                    renderBlocksLine4B[i].position.x = blocksX[i+blocksOffset];
                                    renderBlocksLine4B[i].position.z = blocksZ[i+blocksOffset]+2;
                                    
                                    renderBlocksPart2[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksPart2[i].position.z = blocksZ[i+blocksOffset]+3;
        
                                    renderBlocksLine2A[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine2A[i].position.z = blocksZ[i+blocksOffset]+3;
        
                                    renderBlocksLine2B[i].position.x = blocksX[i+blocksOffset]-1;
                                    renderBlocksLine2B[i].position.z = blocksZ[i+blocksOffset]+3;
                                }  
                        
                                renderBlocksPart4[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksPart4[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2;
        
                                renderBlocksLine4A[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                //renderBlocksLine4A[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2;
        
                                renderBlocksLine4B[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksLine4B[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2;
        
                                //renderBlocksPart1[i].rotation.y = (blocksRT[i] & 0x03) *Math.PI/2;
        
                                renderBlocksPart2[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksPart2[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlocksLine2A[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                //renderBlocksLine2A[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlocksLine2B[i].position.y = blocksY[i+blocksOffset] * pitchY;
                                renderBlocksLine2B[i].rotation.y  = (blocksRT[i+blocksOffset] & 0x03) *Math.PI/2 -Math.PI;
                                
        
                               //!! if(blocksLEDs2x4[i] != null){
                                    renderBlocksPart2[i].material = materials[(blocksLEDs2x4[i+blocksOffset] & 0x07)  + 8*blocksUseAlpha[i+blocksOffset]];
                                    renderBlocksPart4[i].material = materials[((blocksLEDs2x4[i+blocksOffset] & 0x38) >> 3) + 8*blocksUseAlpha[i+blocksOffset]];
        
                               //!! }
        
                            }
                           
                        }

}