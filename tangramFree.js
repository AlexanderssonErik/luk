let tangramFree = {
    winningDampenerCount: 0,  

    init: function(){
        //console.log("guidedBuildLevel.init()");
        //guidedBuildLevel.init();
    },

    clear : function(){
        algoBlock.clearLed(world.block);
    },
    render: function (){



        
        let notInterSectBlocks = [];
        let notInterSectBlocksZ = [];
        let notInterSectBlocksX = [];

        notInterSectBlocks = algoBlock.differenceAndIntersect(world.block, tangramFreeLevel.getSideBlocks());
        notInterSectBlocksZ = algoBlock.differenceAndIntersect(world.block, tangramFreeLevel.getSideZBlocks());
        notInterSectBlocksX = algoBlock.differenceAndIntersect(world.block, tangramFreeLevel.getSideXBlocks());

        let foundBlockNotMatchRotation = false;
        for(let i = 0; i < notInterSectBlocks[3].length ; i++ ){ 
            //doesn't match rotation     
            if(!notInterSectBlocks[3][i]){
                foundBlockNotMatchRotation= true;
                notInterSectBlocks[2][i].ledALeft = globalWorldColor.yellow;
                notInterSectBlocks[2][i].ledALeftBlink = true;
    
                notInterSectBlocks[2][i].ledARight = globalWorldColor.yellow;
                notInterSectBlocks[2][i].ledARightBlink = true;
    
                notInterSectBlocks[2][i].ledBLeft = globalWorldColor.yellow;
                notInterSectBlocks[2][i].ledBLeftBlink = true;
    
                notInterSectBlocks[2][i].ledBRight = globalWorldColor.yellow;
                notInterSectBlocks[2][i].ledBRightBlink = true;

            }

            
        }


        if(foundBlockNotMatchRotation){
            guiGame.showRotateBlockIndicator();
        }else{
            guiGame.hideRotateBlockIndicator();
        }



        if(notInterSectBlocks[1].length != 0){
            let tmp = [];
            tmp[0] = notInterSectBlocks[1][0];
            game.addBlocks(tmp);
        }
        else if(!foundBlockNotMatchRotation){
            game.addBlocks([]);


        

            let gameBlockPixels = algoBlockPixel.create(notInterSectBlocks[0]);
            let gameProjectionPixels = algoProjection.create(gameBlockPixels);

  

            algoBlock.clearLed(notInterSectBlocksZ[2]);
            let sideZBlockPixels = algoBlockPixel.create(notInterSectBlocksZ[2]);
            let sideZProjectionPixels = algoProjection.create(sideZBlockPixels);
            sideZProjectionPixels = sideZProjectionPixels[1];

            algoBlock.clearLed(notInterSectBlocksX[2]);
            let sideXBlockPixels = algoBlockPixel.create(notInterSectBlocksX[2]);
            let sideXProjectionPixels = algoProjection.create(sideXBlockPixels);
            sideXProjectionPixels = sideXProjectionPixels[0];

            //XX
            let gameSideZProjectionPixels = algoProjection.differenceAndIntersect(gameProjectionPixels[1], sideZProjectionPixels, false);
            let gameSideXProjectionPixels = []
            if(tangramFreeLevel.projectAllSides()){
                let gameSideXProjectionPixels = algoProjection.differenceAndIntersect(gameProjectionPixels[0], sideZProjectionPixels, false);
            }



             projection.render( [], gameSideZProjectionPixels[2],  []);
            //ok projection.render( sideXProjectionPixels, sideZProjectionPixels,  []);
            // projection of side blocks intersect level plane
            let levelZProjectionPixels = algoProjection.differenceAndIntersect( sideZProjectionPixels ,tangramFreeLevel.sideZPlane, false);
            levelZProjectionPixels = levelZProjectionPixels[2];
            let levelXProjectionPixels = algoProjection.differenceAndIntersect( sideXProjectionPixels ,tangramFreeLevel.sideXPlane, false);
            levelXProjectionPixels = levelXProjectionPixels[2];

            //ok projection.render( levelXProjectionPixels, levelZProjectionPixels,  []);
            let levelAndGameSideZDiffAndIntersect = algoProjection.differenceAndIntersect( levelZProjectionPixels ,gameSideZProjectionPixels[2], false);
            //let levelAndGameSideZDiffAndIntersect = algoProjection.differenceAndIntersect( levelZProjectionPixels ,gameProjectionPixels[1], false);
            let levelAndGameSideXDiffAndIntersect;
            if(tangramFreeLevel.projectAllSides()){
                levelAndGameSideXDiffAndIntersect = algoProjection.differenceAndIntersect( levelXProjectionPixels ,gameSideXProjectionPixels[2], false);
                //levelAndGameSideXDiffAndIntersect = algoProjection.differenceAndIntersect( levelXProjectionPixels ,gameProjectionPixels[0], false);
            }



            //not intersect blue
            // projection.render( levelAndGameSideXDiffAndIntersect[0], levelAndGameSideZDiffAndIntersect[0],  []);
                      
            algoProjection.setColor(levelAndGameSideZDiffAndIntersect[0], globalWorldColor.blue, true, false , true);
            if(tangramFreeLevel.projectAllSides()){
            algoProjection.setColor(levelAndGameSideXDiffAndIntersect[0], globalWorldColor.blue, true, false , true);
            }

            // intersect green
            algoProjection.setColor(levelAndGameSideZDiffAndIntersect[2], globalWorldColor.green, true, false , true);
            if(tangramFreeLevel.projectAllSides()){
            algoProjection.setColor(levelAndGameSideXDiffAndIntersect[2], globalWorldColor.green, true, false , true);
            }

            // outside red
            algoProjection.setColor(levelAndGameSideZDiffAndIntersect[1], globalWorldColor.red, true, false , false);
            if(tangramFreeLevel.projectAllSides()){
            algoProjection.setColor(levelAndGameSideXDiffAndIntersect[1], globalWorldColor.red, true, false , false);
            }



             if(levelAndGameSideZDiffAndIntersect[0].length == 0 && (!tangramFreeLevel.projectAllSides() || levelAndGameSideXDiffAndIntersect[0].length == 0)  && 
                levelAndGameSideZDiffAndIntersect[1].length == 0 && (!tangramFreeLevel.projectAllSides() ||  levelAndGameSideXDiffAndIntersect[1].length == 0)){
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
      

    }
};