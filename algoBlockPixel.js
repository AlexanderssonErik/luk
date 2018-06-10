let algoBlockPixel = {
   
  create : function(blocks){

    let pixel = [];    
    let bPC = 0;

    let xOffset = []; 
    let zOffset = []; 

    xOffset[0] = [0,0,1,1,   2,2,3,3];
    xOffset[1] = [0,1,0,1,   0,1,0,1];
    xOffset[2] = [0,0,-1,-1, -2,-2,-3,-3];
    xOffset[3] = [0,-1,0,-1, 0,-1,0,-1];

    zOffset[0] = [0,1,0,1,   0,1,0,1];
    zOffset[1] = [0,0,-1,-1, -2,-2,-3,-3];
    zOffset[2] = [0,-1,0,-1, 0,-1,0,-1];
    zOffset[3] = [0,0,1,1,   2,2,3,3];
            
    for(let i = 0; i < blocks.length; i++){
      
      let qtyPixels = 8;
      if(blocks[i].twobytwo){
        qtyPixels = 4;
      }

      for(let a = 0; a < qtyPixels; a++ ){
        pixel[bPC] =  Object.create(blockPixel);
        pixel[bPC].x = blocks[i].x + xOffset[blocks[i].rotation][a];  
        pixel[bPC].y = blocks[i].y;  
        pixel[bPC].z = blocks[i].z + zOffset[blocks[i].rotation][a];  
        pixel[bPC].block = blocks[i];

        if(a < 2){
          pixel[bPC].color = blocks[i].ledALeft;
          if(blocks[i].ledALeftBlink){
            pixel[bPC].color = 0;
          } 
        }else if(a <4){
          pixel[bPC].color = blocks[i].ledARight;
          if(blocks[i].ledARightBlink){
            pixel[bPC].color = 0;
          } 
        }else if(a < 6){
          pixel[bPC].color = blocks[i].ledBLeft;  
          if(blocks[i].ledBLeftBlink){
            pixel[bPC].color = 0;
          }       
        }else if(a < 8){
          pixel[bPC].color = blocks[i].ledBRight;
          if(blocks[i].ledBRightBlink){
            pixel[bPC].color = 0;
          }    
        }

        bPC++;
      }
    }
    return pixel;

    
  }

};