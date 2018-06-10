let levelActive;

let advancedTextureLevel;
let guiLevelNext;
let guiLevelNextImage;

let guiLevelRotateBlock;
let guiLevelRotateBlockImage;

let guiLevelOK;
let guiLevelOKImage;
let guiLevelOKClick;

let levelStart;
let levelStartImage;

let level = [];
let levelImage = [];
let levelHorizontalCount = 0;
let levelVerticalCount = 0;

function guiLevelButtonSize(guiSettingsSizeM){
    let guiSettingsPaddingBottom = 10;
    let guiSettingsPaddingTop = 5;    

    if(levelStart){
   
        guiSettingsSizeChange(guiLevelRotateBlock, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, true);
        guiSettingsSizeChange(guiLevelRotateBlockImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, true);


    guiSettingsSizeChange(guiLevelNext, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, true);
    guiSettingsSizeChange(guiLevelNextImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, true);

    //guiSettingsSizeChange(guiLevelOK, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, false);
    //guiSettingsSizeChange(guiLevelOKImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, false);
    
    guiSettingsSizeChange(guiLevelOK, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
    guiSettingsSizeChange(guiLevelOKImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);

    guiSettingsSizeChange(levelStart, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom, true);
    guiSettingsSizeChange(levelStartImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom, true);

    for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){

        if(i < levelHorizontalCount){
            guiSettingsSizeChange(level[i], guiSettingsSizeM, guiSettingsPaddingBottom+guiSettingsSizeM*(i+1), guiSettingsPaddingBottom, true);
            guiSettingsSizeChange(levelImage[i], guiSettingsSizeM, guiSettingsPaddingBottom+guiSettingsSizeM*(i+1), guiSettingsPaddingBottom, true);
        
        }else{
            guiSettingsSizeChange(level[i], guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM*(i+1-levelHorizontalCount), true);
            guiSettingsSizeChange(levelImage[i], guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM*(i+1-levelHorizontalCount), true);
        }
    }

    }

}

function guiLevelPointerUp(){

    if(levelActive){
        
        levelStart.alpha = guiSettingsNoClickTransparancy;
        levelActive = false;
            scene.activeCamera.attachControl(canvas);

            for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){
                level[i].isVisible = false;                                          
                levelImage[i].isVisible = false;

            }   

        }

}


    function resetTransperancy(){
        levelStart.alpha = guiSettingsNoClickTransparancy;
        for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){
            level[i].alpha = guiSettingsNoClickTransparancy;                                          
        }

    }

    function guiLevelInit(horizontal, vertical){
        
        
        let levelImages = [];

        levelImages[0] = "./icon/level/lvl1.svg";
        levelImages[1] = "./icon/level/lvl2.svg";
        levelImages[2] = "./icon/level/lvl3.svg";
        levelImages[3] = "./icon/level/lvl4.svg";
        levelImages[4] = "./icon/level/lvl5.svg";
        levelImages[5] = "./icon/level/lvl6.svg";
        levelImages[6] = "./icon/level/lvl7.svg";
        levelImages[7] = "./icon/level/lvl8.svg";
        levelImages[8] = "./icon/level/lvl9.svg";
        levelImages[9] = "./icon/level/lvl10.svg";
        levelImages[10] = "./icon/level/lvl.svg";


        levelHorizontalCount = horizontal;
        levelVerticallCount = vertical;
        
        advancedTextureLevel = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Level");
        

        //..
        guiLevelRotateBlockImage = new BABYLON.GUI.Image("guiLevelRotateBlock", "./icon/rotate_block.svg");
        guiLevelRotateBlock = new BABYLON.GUI.Ellipse();

        guiInitButtonEllipseImage(guiLevelRotateBlock, guiLevelRotateBlockImage, 0, 1, true, true, true);

        
        advancedTextureLevel.addControl(guiLevelRotateBlock);
        guiLevelRotateBlock.isVisible = false;
        advancedTextureLevel.addControl(guiLevelRotateBlockImage); 
        guiLevelRotateBlockImage.isVisible = false;

        //..

            guiLevelOKClick = false;
            guiLevelOKImage = new BABYLON.GUI.Image("LevelOK", "./icon/ok.svg");
            guiLevelOK = new BABYLON.GUI.Ellipse();
        
            //guiInitButtonEllipseImage(guiLevelOK, guiLevelOKImage, 0, 0, true, false, false);
            //guiInitButtonEllipseImage(guiLevelOK, guiLevelOKImage, 0, 0, true, false, false);
            guiInitButtonEllipseImage(guiLevelOK, guiLevelOKImage, 0, 0, true, false, false);

            guiLevelOKImage.onPointerDownObservable.add(function() {
                
                guiLevelOK.isVisible = false;
                guiLevelOKImage.isVisible = false;
                guiLevelOKClick = true;
        
            });

            advancedTextureLevel.addControl(guiLevelOK);
            guiLevelOK.isVisible = false;
            advancedTextureLevel.addControl(guiLevelOKImage); 
            guiLevelOKImage.isVisible = false;
        


            guiLevelNextImage = new BABYLON.GUI.Image("Next", "./icon/level_next.svg");
            guiLevelNext = new BABYLON.GUI.Ellipse();


            
            guiInitButtonEllipseImage(guiLevelNext, guiLevelNextImage, 0, 1, true, true, true);
            

            guiLevelNextImage.onPointerDownObservable.add(function() {
                guiLevelNext.isVisible = false;
                guiLevelNextImage.isVisible = false;
        

                guiAnimateStopWinningAndNext();
                /*
                particleSystem.stop();
        
                scene.stopAnimation(shapesStar);
                scene.stopAnimation(shapesStar2);
                scene.stopAnimation(shapesStar3);
    
                starAnimatableScale.stop();
                if(starAnimatableScale2){
                starAnimatableScale2.stop();
                starAnimatableScale3.stop();
                }
                shapesStar.setEnabled(0); 
                shapesStar2.setEnabled(0); 
                shapesStar3.setEnabled(0); */
        
        
                biloNext = true;
        
            });

            advancedTextureLevel.addControl(guiLevelNext);
            guiLevelNext.isVisible = false;
            advancedTextureLevel.addControl(guiLevelNextImage); 
            guiLevelNextImage.isVisible = false;
                
            levelStartImage = new BABYLON.GUI.Image("Start", "./icon/level/lvl_main.svg");
            levelStart = new BABYLON.GUI.Ellipse();

       
           guiInitButtonEllipseImage(levelStart, levelStartImage, 0, 0, false, true, true);
        
            
            levelStartImage.onPointerDownObservable.add(function() {
                
                for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){
                    level[i].isVisible = true;                                          
                    levelImage[i].isVisible = true;
    
                }
                resetTransperancy();

         
                levelStart.alpha = guiSettingsClickTransparancy;

                levelActive = true;
                biloLevel = 0;
                scene.activeCamera.detachControl(canvas);
            });
            levelStartImage.onPointerMoveObservable.add(function() {
                
                if(levelActive){
                 
                   biloLevel = 0;

                   resetTransperancy();

                    levelStart.alpha = guiSettingsClickTransparancy;
      
                }
        
            });

                     
            advancedTextureLevel.addControl(levelStart);
            advancedTextureLevel.addControl(levelStartImage); 
        
        
        //--
        for(let i = 0; i < levelHorizontalCount+ levelVerticallCount; i++){

                                                   
            levelImage[i] = new BABYLON.GUI.Image("levelImage", levelImages[i]);
            level[i] = new BABYLON.GUI.Ellipse();

            if(i < levelHorizontalCount){
                guiInitButtonEllipseImage(level[i], levelImage[i], i+1, 0, false, true, true);
            }else{
                guiInitButtonEllipseImage(level[i], levelImage[i], 0, i+1 - levelHorizontalCount, false, true, true);
            } 
           levelImage[i].onPointerMoveObservable.add(function() {
                
                resetTransperancy();
                level[i].alpha = guiSettingsClickTransparancy;
                biloLevel = i +1;                    
                       
            });

            advancedTextureLevel.addControl(level[i]);
            level[i].isVisible = false;
            advancedTextureLevel.addControl(levelImage[i]);
            levelImage[i].isVisible = false;

        }
   
    }

    function guiWinningAndNext(wins){
        guiAnimateWin(wins);
        
        guiLevelNext.isVisible = true;
        guiLevelNextImage.isVisible = true;
    
    }

    function guiLevelOKButton(){
      
        guiLevelOKClick = false;
        guiLevelOK.isVisible = true;
        guiLevelOKImage.isVisible = true;
    
    }

    function guiLevelNoOKButton(){
      
        guiLevelOKClick = false;
        guiLevelOK.isVisible = false;
        guiLevelOKImage.isVisible = false;
    
    }

    function guiLevelRotateBlockSign(){

        guiLevelRotateBlock.isVisible = true;
        guiLevelRotateBlockImage.isVisible = true;

    }

    function guiLevelNoRotateBlockSign(){

        guiLevelRotateBlock.isVisible = false;
        guiLevelRotateBlockImage.isVisible = false;

    }