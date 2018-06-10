let tangram = {
    winningDampenerCount: 0,  

    init: function(){
        //console.log("guidedBuildLevel.init()");
        //guidedBuildLevel.init();
    },

    clear : function(){
        algoBlock.clearLed(world.block);
    },
    render: function (){

       // console.log("Z1");
      let blockPixels = algoBlockPixel.create(world.block);
      let projectionPixels = algoProjection.create(blockPixels);
     // console.log("Z2");

      if(tangramLevel.colorCavity()){
          
        algoProjection.colorCavity(projectionPixels[0]);
        algoProjection.colorCavity(projectionPixels[1]);
        algoProjection.colorCavity(projectionPixels[2]);
      }

      let diffAndInts = [];
      diffAndInts[0] = algoProjection.differenceAndIntersect( projectionPixels[0] ,tangramLevel.projectionPixels[0], tangramLevel.careColor());
      diffAndInts[1] = algoProjection.differenceAndIntersect( projectionPixels[1] ,tangramLevel.projectionPixels[1], tangramLevel.careColor());
      diffAndInts[2] = algoProjection.differenceAndIntersect( projectionPixels[2] ,tangramLevel.projectionPixels[2], tangramLevel.careColor());




    
       if(tangramLevel.noHints()){

       }else{

        if(tangramLevel.errorBlinkOnlyOnOutOfField()){
            algoProjection.setColor(diffAndInts[1][2], tangramLevel.colorCorrect(), false, false);   
            algoProjection.setColor(diffAndInts[0][2], tangramLevel.colorCorrect(), false, false);        
            algoProjection.setColor(diffAndInts[2][2], tangramLevel.colorCorrect(), false, false);

            let diffAndIntsTmp = [];
            diffAndIntsTmp[0] = algoProjection.differenceAndIntersect( projectionPixels[0] ,tangramLevel.projectionPixels[0], false);
            diffAndIntsTmp[1] = algoProjection.differenceAndIntersect( projectionPixels[1] ,tangramLevel.projectionPixels[1], false);
            diffAndIntsTmp[2] = algoProjection.differenceAndIntersect( projectionPixels[2] ,tangramLevel.projectionPixels[2], false);

            algoProjection.setColor(diffAndIntsTmp[1][0], globalWorldColor.red, true, true );    
            algoProjection.setColor(diffAndIntsTmp[0][0], globalWorldColor.red, true, true );       
           algoProjection.setColor(diffAndIntsTmp[2][0], globalWorldColor.red, true, true );


        }else{

            algoProjection.setColor(diffAndInts[1][2], tangramLevel.colorCorrect(), true, false);    
            if(tangramLevel.projectAllSides()){  
             algoProjection.setColor(diffAndInts[0][2], tangramLevel.colorCorrect(), true, false);        
             algoProjection.setColor(diffAndInts[2][2], tangramLevel.colorCorrect(), true, false);
            }

            algoProjection.setColor(diffAndInts[1][0], globalWorldColor.red, true, true );   
            if(tangramLevel.projectAllSides()){
                algoProjection.setColor(diffAndInts[0][0], globalWorldColor.red, true, true );       
                algoProjection.setColor(diffAndInts[2][0], globalWorldColor.red, true, true );
            }
        }
        }

        let renderProjection = [];

        if(tangramLevel.hideCorrect()){

        renderProjection[0] =  diffAndInts[0][1];
        renderProjection[1] =  diffAndInts[1][1];
        renderProjection[2] =  diffAndInts[2][1];
        
        }else{
            renderProjection[0] =  diffAndInts[0][0].concat( diffAndInts[0][1], diffAndInts[0][2]);
            renderProjection[1] =  diffAndInts[1][0].concat( diffAndInts[1][1], diffAndInts[1][2]);
            renderProjection[2] =  diffAndInts[2][0].concat( diffAndInts[2][1], diffAndInts[2][2]);
        }


    
     //get all colors working
     //do all difficulties
     if (tangramLevel.noHints()){
        projection.render( tangramLevel.projectionPixels[0], tangramLevel.projectionPixels[1],  tangramLevel.projectionPixels[2]);
        
        
     }else if(tangramLevel.projectAllSides()){
        projection.render( renderProjection[0], renderProjection[1],  renderProjection[2]);
     
     }else{
       projection.render([], renderProjection[1], []);
     }

       if((diffAndInts[0][0].length == 0 && diffAndInts[1][0].length  == 0 && diffAndInts[2][0].length  == 0 &&
            diffAndInts[0][1].length == 0 && diffAndInts[1][1].length  == 0 && diffAndInts[2][1].length  == 0) ||
            ( !tangramLevel.projectAllSides() && diffAndInts[1][0].length  == 0  && diffAndInts[1][1].length  == 0) ){

            if(this.winningDampenerCount < 8){
                this.winningDampenerCount++;
            }else if(this.winningDampenerCount == 8){
                this.winningDampenerCount++;                
                activeGame.win();
            }

        }else{
            this.winningDampenerCount = 0;
        }
       


        


    }
};