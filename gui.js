let textFps;
let fpsTimeOut;


let guiSettingsSizeM = 100;
let guiSettingsPaddingBottom = 10;
let guiSettingsPaddingTop = 5;    
let guiSettingsColor = "#606060";
let guiSettingsLineThickness = 0;    
let guiSettingsClickColor = "#606060";

let guiSettingsZoomEnabled = true;

//--
let guiAdvancedTextureGameSelect;
let guiGameSelectBuilder;
let guiGameSelectBuilderImage;

let guiGameSelectTangram;
let guiGameSelectTangramImage;

let guiGameSelectMemo;
let guiGameSelectMemoImage;

let guiGameSelectFindShape;
let guiGameSelectFindShapeImage;

let guiGameSelectFree;
let guiGameSelectFreeImage;

let guiGameSelectProgram;
let guiGameSelectProgramImage;

let guiGameSelectMath;
let guiGameSelectMathImage;

let guiGameSelectFreeTangram;
let guiGameSelectFreeTangramImage;

//MATH

//--


let guiAdvancedTextureSettings;


let guiSettingsStart;

let guiSettingsZoom;
let guiSettingsZoomImage;
let guiSettingsHide;
let guiSettingsHideImage;



let guiSettingsSnap;
let guiSettingsSnapImage;
let guiSettingsSnapOff;
let guiSettingsSnapOffImage;
let guiSettingsSnap4Diagonal;
let guiSettingsSnap4DiagonalImage;
let guiSettingsSnap4Horizontal;
let guiSettingsSnap4HorizontalImage;
let guiSettingsSnap8;
let guiSettingsSnap8Image;

let guiSettingsRender;
let guiSettingsRenderImage;
let guiSettingsRenderLow;
let guiSettingsRenderLowImage;
let guiSettingsRenderMid;
let guiSettingsRenderMidImage;
let guiSettingsRenderHigh;
let guiSettingsRenderHighImage;

let guiSettingsCompass;
let guiSettingsCompassImage;
let guiSettingsCompassOff;
let guiSettingsCompassOffImage;
let guiSettingsCompassOn;
let guiSettingsCompassOnImage;

let guiFps = 60;




let snapDistance = (Math.PI/4); 
var cameraAnimateFrameRate = 10;
var cameraAnimateFrameTime = 5; //speed
var cameraAnimate;
var cameraAnimateKeyFrames = []; 
let cameraAnimatable;

let snapDiagonalA = 0; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
let snapDiagonalB = 2; //1 for 8pos, 2 4pos

    
function initGui() {

    //--
    /*
     cameraAnimate = new BABYLON.Animation("cameraAnimate", "alpha", cameraAnimateFrameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT  );
    
    
    //!!!!!!!!!!!

    
    cameraAnimateKeyFrames.push({
        frame: 0,
        value: 0
    });
    
    cameraAnimateKeyFrames.push({
        frame: cameraAnimateFrameRate,
        value: 0.1
    });
    
 
    //cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 2 * cameraAnimateFrameRate, false);
    cameraAnimatable = scene.beginDirectAnimation(camera, [cameraAnimate], 0, 0, false);
    cameraAnimatable.animationStarted = false;
      
    cameraAnimate.setKeys(cameraAnimateKeyFrames);*/

    //!!!!!!!!!!!!!!
    /*
        scene.activeCamera.attachControl(canvas);
        
   
        camera.alpha = - Math.PI/2;*/

    var advancedTextureFPS = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    
        textFps = new BABYLON.GUI.TextBlock();
        textFps.text = "FPS: ";
        textFps.color = "white";
        textFps.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        textFps.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    
        textFps.fontSize = 24;
        advancedTextureFPS.addControl(textFps);    

        fpsTimeOut = setTimeout(guiFpsFunction, 1000);



  //  Color Wheel

 






         

           
                  
                 
        
                   




                    

                
 

}

function guiPointerUp(pickResult, scene){

                        //SettingsMenu
                        guiSettingsFocusChange();
                        
                                   
                           
               
                                      // console.log('Pointer up ');
                                     
                                   /*    if(colorWheelActive){
                                           
                               
                                           
                                               advancedTextureColorSelect.dispose();
                                           
                               
                                           
                                           scene.activeCamera.attachControl(canvas);
                                        
                                       }*/
               
                                   
                                       if(guiSettingsActive){
               
                                           guiSettingsActive = false;
                                           scene.activeCamera.attachControl(canvas);

                                           if(biloHideBlocks){
                                           biloHideBlocks = false;
                                           blocksRender = 1;
                                           }
               
                                       }
                  

}


                              //When pointer down event is raised
   
function guiFpsFunction() {
    
        //textFps.text = fpsCounter;
        textFps.text = "FPS: " + fpsCounter;
        clearTimeout(guiFpsFunction);
        
        guiFps = fpsCounter;
        fpsCounter = 0;
        fpsTimeOut = setTimeout(guiFpsFunction, 1000);

        //console.log(camera.alpha);
        //console.log(camera.alpha%(Math.PI/4));
        //console.log((camera.alpha%(Math.PI/4)) - Math.PI/8);
        
    }


    let guiSettingsClickTransparancy = 0.5;
    let guiSettingsNoClickTransparancy = 0.3;
    let guiSettingsActive  =false ;

function guiSettingsFocusChange(){

    guiSettingsStart.alpha = guiSettingsNoClickTransparancy;

    guiSettingsHide.alpha = guiSettingsNoClickTransparancy;
    guiSettingsHideImage.isVisible = false;
    guiSettingsHide.isVisible = false;
    
    guiSettingsZoom.alpha = guiSettingsNoClickTransparancy;
    guiSettingsZoomImage.isVisible = false;
    guiSettingsZoom.isVisible = false;

    guiSettingsSnap.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnapOff.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap4Diagonal.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap4Horizontal.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnap8.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSnapImage.isVisible = false;
    guiSettingsSnap.isVisible = false;
    guiSettingsSnapOffImage.isVisible = false;
    guiSettingsSnapOff.isVisible = false;
    guiSettingsSnap4DiagonalImage.isVisible = false;
    guiSettingsSnap4Diagonal.isVisible = false;
    guiSettingsSnap4HorizontalImage.isVisible = false;
    guiSettingsSnap4Horizontal.isVisible = false;
    guiSettingsSnap8Image.isVisible = false;
    guiSettingsSnap8.isVisible = false;

    guiSettingsRender.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderLow.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderMid.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderHigh.alpha = guiSettingsNoClickTransparancy;
    guiSettingsRenderImage.isVisible = false;
    guiSettingsRender.isVisible = false;
    guiSettingsRenderLowImage.isVisible = false;
    guiSettingsRenderLow.isVisible = false;
    guiSettingsRenderMidImage.isVisible = false;
    guiSettingsRenderMid.isVisible = false;
    guiSettingsRenderHighImage.isVisible = false;
    guiSettingsRenderHigh.isVisible = false;
    
    guiSettingsCompass.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassOff.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassOn.alpha = guiSettingsNoClickTransparancy;
    guiSettingsCompassImage.isVisible = false;
    guiSettingsCompass.isVisible = false;
    guiSettingsCompassOffImage.isVisible = false;
    guiSettingsCompassOff.isVisible = false;
    guiSettingsCompassOnImage.isVisible = false;
    guiSettingsCompassOn.isVisible = false;

    
}

function guiSettingsSizeChange (button, size, paddingLeft, paddingTop, plus){

    button.width = size + "px";
    button.height = size + "px";
    button.left = paddingLeft + "px";

    if(plus){
        button.top = paddingTop + "px";

    }else{

    button.top = "-" + paddingTop + "px";
    }


}


function guiInitButtonEllipseImage(ellipse, image, paddingLeft, paddingTop, center, top, plus){

  


   guiSettingsSizeChange(image, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM * paddingLeft, guiSettingsPaddingBottom + guiSettingsSizeM * paddingTop, plus); 
   
   image.paddingTop = guiSettingsPaddingTop;              
   image.paddingRight = guiSettingsPaddingTop;
    if(top){
        if(center){
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        }else{
           image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
           image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        }

    }else{
        if(center){
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;

        }else{
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        }
    }
    
ellipse.color = guiSettingsColor;
ellipse.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(ellipse, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM * paddingLeft, guiSettingsPaddingBottom + guiSettingsSizeM * paddingTop, plus);
    //guiSettingsSnap.width = guiSettingsSizeM + "px";
    //guiSettingsSnap.height = guiSettingsSizeM + "px";
    //guiSettingsSnap.left =(guiSettingsPaddingBottom) + "px";
    //guiSettingsSnap.top = "-" + (guiSettingsPaddingBottom + guiSettingsSizeM) + "px";
    ellipse.paddingTop = guiSettingsPaddingTop;              
    ellipse.paddingRight = guiSettingsPaddingTop;

    if(top){
        if(center){
            ellipse.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            ellipse.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        }else {
        ellipse.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        ellipse.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        }


    }else{
        if(center){
            ellipse.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            ellipse.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;

        }else{
            ellipse.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            ellipse.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        }
    }

    ellipse.background = guiSettingsClickColor;
    ellipse.alpha = guiSettingsNoClickTransparancy;

}


function guiInitSettingsMenu(scene){

    /*
    guiSettingsStart
        guiSettingsSnap
            guiSettingsSnapOff
            guiSettingsSnap4Diagonal
            guiSettingsSnap8
        guiSettingsRender
            guiSettingsRenderLow
            guiSettingsRenderMid
            guiSettingsRenderHigh
        guiSettingsCompass
            guiSettingsCompassOff
            guiSettingsCompassOn
        


            
    */




   
    //let guiSettingsNoClickColor = "black";
    
        //alpha
    //background
    //focusedBackground
    //let paddingPitch = "110px"

    guiAdvancedTextureSettings = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Settings");



    var guiSettingsSizeImage = new BABYLON.GUI.Image("guiSettingsSizeImage", "./icon/size.svg");
    //guiSettingsStartImage.width = 0.2;
    //guiSettingsStartImage.height = "40px";
    guiSettingsSizeChange(guiSettingsSizeImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
    
    guiSettingsSizeImage.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSizeImage.paddingRight = guiSettingsPaddingTop;
    
    guiSettingsSizeImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSizeImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;

 
    guiSettingsSize = new BABYLON.GUI.Ellipse();
    guiSettingsSize.color = guiSettingsColor;
    guiSettingsSize.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiSettingsSize, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
    

    guiSettingsSize.paddingTop = guiSettingsPaddingTop;              
    guiSettingsSize.paddingRight = guiSettingsPaddingTop;
    guiSettingsSize.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    guiSettingsSize.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    guiSettingsSize.background = guiSettingsClickColor;
    guiSettingsSize.alpha = guiSettingsNoClickTransparancy;
    guiSettingsSizeImage.onPointerDownObservable.add(function() {

        if(guiSettingsSizeM == 60){
            guiSettingsSizeM = 100;

                        
        }else if(guiSettingsSizeM == 100){
            guiSettingsSizeM = 150;

  
        }else if(guiSettingsSizeM == 150){
            guiSettingsSizeM = 60;

        }

        if(guiSettingsSizeM == 60){
            guiSettingsSizeChange(guiSettingsSize, 100, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
            guiSettingsSizeChange(guiSettingsSizeImage, 100, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        }else{
            guiSettingsSizeChange(guiSettingsSize, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
            guiSettingsSizeChange(guiSettingsSizeImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        }

        

        guiColorWheelSetSize( guiSettingsSizeM);
        

        guiSettingsSizeChange(guiSettingsHide, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsHideImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsZoom, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsZoomImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM *2, guiSettingsPaddingBottom);

        guiSettingsSizeChange(guiSettingsStart, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
        guiSettingsSizeChange(guiSettingsStartImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom); 
        guiSettingsSizeChange(guiSettingsSnapImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM);
        
        guiSettingsSizeChange(guiSettingsSnapOffImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4DiagonalImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4HorizontalImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap8Image, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*4, guiSettingsPaddingBottom + guiSettingsSizeM);
      

        guiSettingsSizeChange(guiSettingsSnapOff, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4Diagonal, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap4Horizontal, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM);
        guiSettingsSizeChange(guiSettingsSnap8, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*4, guiSettingsPaddingBottom + guiSettingsSizeM);
        
        guiSettingsSizeChange(guiSettingsRenderImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderLowImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderMidImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderHighImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM*2);
   
        guiSettingsSizeChange(guiSettingsRender, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderLow, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderMid, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        guiSettingsSizeChange(guiSettingsRenderHigh, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3, guiSettingsPaddingBottom + guiSettingsSizeM*2);
        
        guiSettingsSizeChange(guiSettingsCompassImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOffImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOnImage, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*3);
 
        guiSettingsSizeChange(guiSettingsCompass, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOff, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        guiSettingsSizeChange(guiSettingsCompassOn, guiSettingsSizeM, guiSettingsPaddingBottom + guiSettingsSizeM*2, guiSettingsPaddingBottom + guiSettingsSizeM*3);
        
       // guiSettingsSizeChange(guiGameSelectBuilder, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom);
      // guiGameSelectBuilderImage.width = guiSettingsSizeM + "px";
       //guiGameSelectBuilderImage.height = guiSettingsSizeM + "px";

      // guiGameSelectTangramImage.width = guiSettingsSizeM + "px";
       //guiGameSelectTangramImage.height = guiSettingsSizeM + "px";
       guiSettingsSizeChange(guiGameSelectBuilder, guiSettingsSizeM, -guiSettingsSizeM, 0);
        guiSettingsSizeChange(guiGameSelectBuilderImage, guiSettingsSizeM, -guiSettingsSizeM, 0);
        guiSettingsSizeChange(guiGameSelectTangram, guiSettingsSizeM, 0, 0);
        guiSettingsSizeChange(guiGameSelectTangramImage, guiSettingsSizeM, 0, 0);
 
        guiSettingsSizeChange(guiGameSelectMemo, guiSettingsSizeM, guiSettingsSizeM, 0);
        guiSettingsSizeChange(guiGameSelectMemoImage, guiSettingsSizeM, guiSettingsSizeM, 0);

        

        guiSettingsSizeChange(guiGameSelectFindShape, guiSettingsSizeM, -guiSettingsSizeM, guiSettingsSizeM);
        guiSettingsSizeChange(guiGameSelectFindShapeImage, guiSettingsSizeM, -guiSettingsSizeM, guiSettingsSizeM);

        guiSettingsSizeChange(guiGameSelectFree, guiSettingsSizeM, 0, guiSettingsSizeM);
        guiSettingsSizeChange(guiGameSelectFreeImage, guiSettingsSizeM, 0, guiSettingsSizeM);
 
        guiSettingsSizeChange(guiGameSelectProgram, guiSettingsSizeM, guiSettingsSizeM, guiSettingsSizeM);
        guiSettingsSizeChange(guiGameSelectProgramImage, guiSettingsSizeM, guiSettingsSizeM, guiSettingsSizeM);

        guiSettingsSizeChange(guiGameSelectMath, guiSettingsSizeM, guiSettingsSizeM*2, guiSettingsSizeM);
        guiSettingsSizeChange(guiGameSelectMathImage, guiSettingsSizeM, guiSettingsSizeM*2, guiSettingsSizeM);

        guiSettingsSizeChange(guiGameSelectFreeTangram, guiSettingsSizeM, guiSettingsSizeM*2, 0);
        guiSettingsSizeChange(guiGameSelectFreeTangramImage, guiSettingsSizeM, guiSettingsSizeM*2, 0);

        //--

        guiLevelButtonSize(guiSettingsSizeM);

        //--

     //   guiSettingsSizeChange(guiLevelNext, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, true);
     //   guiSettingsSizeChange(guiLevelNextImage, guiSettingsSizeM, guiSettingsPaddingBottom, guiSettingsPaddingBottom+guiSettingsSizeM, true);


    });

    

    var guiSettingsStartImage = new BABYLON.GUI.Image("Start", "./icon/settings.svg");
    guiSettingsStart = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsStart, guiSettingsStartImage, 0, 0);

    
    guiSettingsStartImage.onPointerDownObservable.add(function() {
        
        guiSettingsFocusChange();
        guiSettingsHideImage.isVisible = true;
        guiSettingsHide.isVisible = true;
        
        guiSettingsZoomImage.isVisible = true;
        guiSettingsZoom.isVisible = true;

        guiSettingsSnapImage.isVisible = true;
        guiSettingsSnap.isVisible = true;
        
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;
        guiSettingsStart.alpha = guiSettingsClickTransparancy;
        guiSettingsActive = true;
        scene.activeCamera.detachControl(canvas);
    });
    guiSettingsStartImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        if(guiSettingsActive){
            guiSettingsHideImage.isVisible = true;
            guiSettingsHide.isVisible = true;
            
            guiSettingsZoomImage.isVisible = true;
            guiSettingsZoom.isVisible = true;

            guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsRenderImage.isVisible = true;
            guiSettingsRender.isVisible = true;

            guiSettingsCompassImage.isVisible = true;
            guiSettingsCompass.isVisible = true;
            guiSettingsStart.alpha = guiSettingsClickTransparancy;
        }

    });




    guiSettingsHideImage = new BABYLON.GUI.Image("guiSettingsHideImage", "./icon/hide_blocks.svg");
    guiSettingsHide = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsHide, guiSettingsHideImage, 1, 0);
  
    guiSettingsHideImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        //if(guiSettingsActive){
            guiSettingsHideImage.isVisible = true;
            guiSettingsHide.isVisible = true;
            
            guiSettingsZoomImage.isVisible = true;
            guiSettingsZoom.isVisible = true;

            guiSettingsHide.alpha = guiSettingsClickTransparancy;

            biloHideBlocks = true;
            blocksRender =1;

       // }
    });

    guiSettingsZoomImage = new BABYLON.GUI.Image("guiSettingsSnapImage", "./icon/zoom_out.svg");
    guiSettingsZoom = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsZoom, guiSettingsZoomImage, 2, 0);
  
    guiSettingsZoomImage.onPointerMoveObservable.add(function() {

        
        guiSettingsFocusChange();
        //if(guiSettingsActive){
            guiSettingsHideImage.isVisible = true;
            guiSettingsHide.isVisible = true;
            
            guiSettingsZoomImage.isVisible = true;
            guiSettingsZoom.isVisible = true;

            if(guiSettingsZoomEnabled){
                camera.radius = 20;
                camera.setTarget(new BABYLON.Vector3(4.5,0 ,4.5));
            }

          //  camera = new BABYLON.ArcRotateCamera("Camera", 0,0, 10, new BABYLON.Vector3(4.5,0 ,4.5), scene);
            
           // camera.rotation = new BABYLON.Vector3(0, 1, 1);
            //camera.setTarget(BABYLON.Vector3.Zero());
      //  camera.upVector =  new BABYLON.Vector3(0, 0, 1);
       // camera.setPosition(new BABYLON.Vector3(15, 4.5,15));
    
       //camera.setPosition(new BABYLON.Vector3(15,15,15));
           
            guiSettingsZoom.alpha = guiSettingsClickTransparancy;

       // }
    });
    


    guiSettingsSnapImage = new BABYLON.GUI.Image("guiSettingsSnapImage", "./icon/settings_snap.svg");
    guiSettingsSnap = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnap, guiSettingsSnapImage, 0, 1);
  
    guiSettingsSnapImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        //if(guiSettingsActive){
            guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true;
            guiSettingsSnap8.isVisible = true;

            guiSettingsRenderImage.isVisible = true;
            guiSettingsRender.isVisible = true;

            guiSettingsCompassImage.isVisible = true;
            guiSettingsCompass.isVisible = true;
            guiSettingsSnap.alpha = guiSettingsClickTransparancy;
       // }
    });


    guiSettingsSnapOffImage = new BABYLON.GUI.Image("guiSettingsSnapOffImage", "./icon/settings_snap_off.svg");
    guiSettingsSnapOff = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnapOff, guiSettingsSnapOffImage, 1, 1);

    guiSettingsSnapOffImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
        guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
        
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true; 
            guiSettingsSnap8.isVisible = true;            
            guiSettingsSnapOff.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 0; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 1; //1 for 8pos, 2 4pos
       // }
    });

    guiSettingsSnap4DiagonalImage = new BABYLON.GUI.Image("guiSettingsSnap4DiagonalImage", "./icon/settings_snap_4_diagonal.svg");
    guiSettingsSnap4Diagonal = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnap4Diagonal, guiSettingsSnap4DiagonalImage, 2, 1);
  
    guiSettingsSnap4DiagonalImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
        guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap4Diagonal.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = -1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 2; //1 for 8pos, 2 4pos
       // }
    });


    guiSettingsSnap4HorizontalImage = new BABYLON.GUI.Image("guiSettingsSnap4HorizontalImage", "./icon/settings_snap_4_horizontal.svg");
    guiSettingsSnap4Horizontal = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnap4Horizontal, guiSettingsSnap4HorizontalImage, 3, 1);
  
    guiSettingsSnap4HorizontalImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
        guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap4Horizontal.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 2; //1 for 8pos, 2 4pos
        
       // }
    });


    guiSettingsSnap8Image = new BABYLON.GUI.Image("guiSettingsSnap8Image", "./icon/settings_snap_8.svg");
    guiSettingsSnap8 = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsSnap8, guiSettingsSnap8Image, 4, 1);
   
    guiSettingsSnap8Image.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
       // if(guiSettingsActive){
        guiSettingsSnapImage.isVisible = true;
            guiSettingsSnap.isVisible = true;
            
            guiSettingsSnapOffImage.isVisible = true;
            guiSettingsSnapOff.isVisible = true;

            guiSettingsSnap4DiagonalImage.isVisible = true;
            guiSettingsSnap4Diagonal.isVisible = true;

            guiSettingsSnap4HorizontalImage.isVisible = true;
            guiSettingsSnap4Horizontal.isVisible = true;

            guiSettingsSnap8Image.isVisible = true;
            guiSettingsSnap8.isVisible = true;
            guiSettingsSnap8.alpha = guiSettingsClickTransparancy;

            snapDiagonalA = 1; //0 for off, 1 for 8pos, -1 for diagonal, 1 for horizontal 
            snapDiagonalB = 1; //1 for 8pos, 2 4pos
       // }
    });
    

    guiSettingsRenderImage = new BABYLON.GUI.Image("guiSettingsRenderImage", "./icon/settings_render.svg");
    guiSettingsRender = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsRender, guiSettingsRenderImage, 0, 2);
   
    guiSettingsRenderImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();

        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsRenderLowImage.isVisible = true;
        guiSettingsRenderLow.isVisible = true;

        guiSettingsRenderMidImage.isVisible = true;
        guiSettingsRenderMid.isVisible = true;

        guiSettingsRenderHighImage.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;

        
        guiSettingsSnapImage.isVisible = true;
        guiSettingsSnap.isVisible = true;
        
        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;
        guiSettingsRender.alpha = guiSettingsClickTransparancy;
    });


    guiSettingsRenderLowImage = new BABYLON.GUI.Image("guiSettingsRenderLowImage", "./icon/settings_render_low.svg");
    guiSettingsRenderLow = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsRenderLow, guiSettingsRenderLowImage, 1, 2);

    guiSettingsRenderLowImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsRenderLowImage.isVisible = true;
        guiSettingsRenderLow.isVisible = true;

        guiSettingsRenderMidImage.isVisible = true;
        guiSettingsRenderMid.isVisible = true;

        guiSettingsRenderHighImage.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderLow.alpha = guiSettingsClickTransparancy;
    });


    guiSettingsRenderMidImage = new BABYLON.GUI.Image("guiSettingsRenderMidImage", "./icon/settings_render_mid.svg");
    guiSettingsRenderMid = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsRenderMid, guiSettingsRenderMidImage, 2, 2);
    //guiSettingsStartImage.width = 0.2;
    //guiSettingsStartImage.height = "40px";
  
    guiSettingsRenderMidImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsRenderLowImage.isVisible = true;
        guiSettingsRenderLow.isVisible = true;

        guiSettingsRenderMidImage.isVisible = true;
        guiSettingsRenderMid.isVisible = true;

        guiSettingsRenderHighImage.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderMid.alpha = guiSettingsClickTransparancy;
    });


    guiSettingsRenderHighImage = new BABYLON.GUI.Image("guiSettingsRenderHighImage", "./icon/settings_render_high.svg");
    guiSettingsRenderHigh = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsRenderHigh, guiSettingsRenderHighImage, 3, 2);
   
    guiSettingsRenderHighImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsRenderLowImage.isVisible = true;
        guiSettingsRenderLow.isVisible = true;

        guiSettingsRenderMidImage.isVisible = true;
        guiSettingsRenderMid.isVisible = true;

        guiSettingsRenderHighImage.isVisible = true;
        guiSettingsRenderHigh.isVisible = true;
        guiSettingsRenderHigh.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsCompassImage = new BABYLON.GUI.Image("guiSettingsCompassImage", "./icon/settings_compass.svg");
    guiSettingsCompass = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsCompass, guiSettingsCompassImage, 0, 3);
   
    guiSettingsCompassImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsRenderImage.isVisible = true;
        guiSettingsRender.isVisible = true;

        guiSettingsSnapImage.isVisible = true;
        guiSettingsSnap.isVisible = true;
       
        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;

        guiSettingsCompassOffImage.isVisible = true;
        guiSettingsCompassOff.isVisible = true;

        guiSettingsCompassOnImage.isVisible = true;     
        guiSettingsCompassOn.isVisible = true;     
        guiSettingsCompass.alpha = guiSettingsClickTransparancy;
    });

    guiSettingsCompassOffImage = new BABYLON.GUI.Image("guiSettingsCompassOffImage", "./icon/settings_compass_off.svg");
    guiSettingsCompassOff = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsCompassOff, guiSettingsCompassOffImage, 1, 3);
   
    guiSettingsCompassOffImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;

        guiSettingsCompassOffImage.isVisible = true;
        guiSettingsCompassOff.isVisible = true;

        guiSettingsCompassOnImage.isVisible = true; 
        guiSettingsCompassOn.isVisible = true;     
        guiSettingsCompassOff.alpha = guiSettingsClickTransparancy;
    });

    
    guiSettingsCompassOnImage = new BABYLON.GUI.Image("guiSettingsCompassOnImage", "./icon/settings_compass_on.svg");
    guiSettingsCompassOn = new BABYLON.GUI.Ellipse();
    guiInitButtonEllipseImage(guiSettingsCompassOn, guiSettingsCompassOnImage, 2, 3);
    
    guiSettingsCompassOnImage.onPointerMoveObservable.add(function() {
        guiSettingsFocusChange();
        guiSettingsCompassImage.isVisible = true;
        guiSettingsCompass.isVisible = true;

        guiSettingsCompassOffImage.isVisible = true;
        guiSettingsCompassOff.isVisible = true;

        guiSettingsCompassOnImage.isVisible = true; 
        guiSettingsCompassOn.isVisible = true;     
        guiSettingsCompassOn.alpha = guiSettingsClickTransparancy;
        guiPointerUp(0, scene);
        compass.enable();
        
    });



   /* let guiSettingsRenderLow;
    let guiSettingsRenderMid;
    let guiSettingsRenderHigh;
    
    let guiSettingsCompass;
    let guiSettingsCompassOff;
    let guiSettingsCompassOn;   */ 
    //let guiSettingsSnapOff;
    //let guiSettingsSnap4Diagonal;
    //let guiSettingsSnap8;


    //guiSettingsStart.width = 60;
    //guiSettingsStart.height = 60;
  
   
                
    guiAdvancedTextureSettings.addControl(guiSettingsStart);
    guiAdvancedTextureSettings.addControl(guiSettingsStartImage); 


    guiAdvancedTextureSettings.addControl(guiSettingsHide);
    guiSettingsHide.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsHideImage);
    guiSettingsHideImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsZoom);
    guiSettingsZoom.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsZoomImage);
    guiSettingsZoomImage.isVisible = false;


    guiAdvancedTextureSettings.addControl(guiSettingsSnap);
    guiSettingsSnap.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnapImage);
    guiSettingsSnapImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSnapOff);
    guiSettingsSnapOff.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnapOffImage);
    guiSettingsSnapOffImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSnap4Diagonal);
    guiSettingsSnap4Diagonal.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap4DiagonalImage);
    guiSettingsSnap4DiagonalImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSnap4Horizontal);
    guiSettingsSnap4Horizontal.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap4HorizontalImage);
    guiSettingsSnap4HorizontalImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSnap8);
    guiSettingsSnap8.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsSnap8Image);
    guiSettingsSnap8Image.isVisible = false;


    guiAdvancedTextureSettings.addControl(guiSettingsRender);
    guiSettingsRender.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderImage);
    guiSettingsRenderImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsRenderLow);
    guiSettingsRenderLow.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderLowImage);
    guiSettingsRenderLowImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsRenderMid);
    guiSettingsRenderMid.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderMidImage);
    guiSettingsRenderMidImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsRenderHigh);
    guiSettingsRenderHigh.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsRenderHighImage);
    guiSettingsRenderHighImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsCompass);
    guiSettingsCompass.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompassImage);
    guiSettingsCompassImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsCompassOff);
    guiSettingsCompassOff.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompassOffImage);
    guiSettingsCompassOffImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsCompassOn);
    guiSettingsCompassOn.isVisible = false;
    guiAdvancedTextureSettings.addControl(guiSettingsCompassOnImage);
    guiSettingsCompassOnImage.isVisible = false;

    guiAdvancedTextureSettings.addControl(guiSettingsSize);
    guiAdvancedTextureSettings.addControl(guiSettingsSizeImage);
    
    
    
    
}





function guiInitGameSelectMenu(){
 



   
    //let guiSettingsNoClickColor = "black";
    
        //alpha
    //background
    //focusedBackground
    //let paddingPitch = "110px"

    guiAdvancedTextureGameSelect = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GameSelect");

   
    guiGameSelectBuilderImage = new BABYLON.GUI.Image("Builder", "./icon/game/guided_build.svg");
    //guiSettingsStartImage.width = 0.2;
    //guiSettingsStartImage.height = "40px";
    guiSettingsSizeChange(guiGameSelectBuilderImage, guiSettingsSizeM, -guiSettingsSizeM, 0);
    
    guiGameSelectBuilderImage.paddingTop = guiSettingsPaddingTop;              
    guiGameSelectBuilderImage.paddingRight = guiSettingsPaddingTop;
    
    guiGameSelectBuilderImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    guiGameSelectBuilderImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;

    guiGameSelectBuilder = new BABYLON.GUI.Ellipse();
    guiGameSelectBuilder.color = guiSettingsColor;
    guiGameSelectBuilder.thickness = guiSettingsLineThickness;
    guiSettingsSizeChange(guiGameSelectBuilder, guiSettingsSizeM, -guiSettingsSizeM, 0);
    
 //   guiSettingsSize.width = guiSettingsSizeM + "px";
  //  guiSettingsSize.height = guiSettingsSizeM + "px";
   // guiSettingsSize.left = guiSettingsPaddingBottom + "px";
   // guiSettingsSize.top = "-" + guiSettingsPaddingBottom + "px";
   guiGameSelectBuilder.paddingTop = guiSettingsPaddingTop;              
   guiGameSelectBuilder.paddingRight = guiSettingsPaddingTop;
   guiGameSelectBuilder.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
   guiGameSelectBuilder.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
   guiGameSelectBuilder.background = guiSettingsClickColor;
   guiGameSelectBuilder.alpha = guiSettingsNoClickTransparancy;



   guiGameSelectBuilderImage.onPointerDownObservable.add(function() {

    biloGame = 1;
    biloLevel = 0;

    guiGameSelectBuilder.isVisible = false;
    guiGameSelectBuilderImage.isVisible = false;
   
    guiGameSelectTangram.isVisible = false;
    guiGameSelectTangramImage.isVisible = false;
   
    guiGameSelectMemo.isVisible = false;
    guiGameSelectMemoImage.isVisible = false;
   
    guiGameSelectFindShape.isVisible = false;
    guiGameSelectFindShapeImage.isVisible = false;
   
    guiGameSelectFree.isVisible = false;
    guiGameSelectFreeImage.isVisible = false;
   
    guiGameSelectProgram.isVisible = false;
    guiGameSelectProgramImage.isVisible = false;

      
    guiGameSelectMath.isVisible = false;
    guiGameSelectMathImage.isVisible = false;

    guiGameSelectFreeTangram.isVisible = false;
    guiGameSelectFreeTangramImage.isVisible = false;

    guiLevelInit(0, 3);

    });

//---



guiGameSelectTangramImage = new BABYLON.GUI.Image("Tangram", "./icon/game/tangram.svg");
//guiSettingsStartImage.width = 0.2;
//guiSettingsStartImage.height = "40px";
guiSettingsSizeChange(guiGameSelectTangramImage, guiSettingsSizeM, 0, 0);

guiGameSelectTangramImage.paddingTop = guiSettingsPaddingTop;              
guiGameSelectTangramImage.paddingRight = guiSettingsPaddingTop;

guiGameSelectTangramImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectTangramImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectTangram = new BABYLON.GUI.Ellipse();
guiGameSelectTangram.color = guiSettingsColor;
guiGameSelectTangram.thickness = guiSettingsLineThickness;
guiSettingsSizeChange(guiGameSelectTangram, guiSettingsSizeM, 0, 0);

//   guiSettingsSize.width = guiSettingsSizeM + "px";
//  guiSettingsSize.height = guiSettingsSizeM + "px";
// guiSettingsSize.left = guiSettingsPaddingBottom + "px";
// guiSettingsSize.top = "-" + guiSettingsPaddingBottom + "px";
guiGameSelectTangram.paddingTop = guiSettingsPaddingTop;              
guiGameSelectTangram.paddingRight = guiSettingsPaddingTop;
guiGameSelectTangram.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectTangram.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectTangram.background = guiSettingsClickColor;
guiGameSelectTangram.alpha = guiSettingsNoClickTransparancy;

guiGameSelectTangramImage.onPointerDownObservable.add(function() {

    biloGame = 2;
    biloLevel = 0;

     guiGameSelectBuilder.isVisible = false;
     guiGameSelectBuilderImage.isVisible = false;
    
     guiGameSelectTangram.isVisible = false;
     guiGameSelectTangramImage.isVisible = false;
    
     guiGameSelectMemo.isVisible = false;
     guiGameSelectMemoImage.isVisible = false;
    
     guiGameSelectFindShape.isVisible = false;
     guiGameSelectFindShapeImage.isVisible = false;
    
     guiGameSelectFree.isVisible = false;
     guiGameSelectFreeImage.isVisible = false;
    
     guiGameSelectProgram.isVisible = false;
     guiGameSelectProgramImage.isVisible = false;

     guiGameSelectMath.isVisible = false;
     guiGameSelectMathImage.isVisible = false;

     guiGameSelectFreeTangram.isVisible = false;
    guiGameSelectFreeTangramImage.isVisible = false;


     guiLevelInit(5, 4);
     //guiInitTangramLevelMenu();

});

//--



//--

guiGameSelectMemoImage = new BABYLON.GUI.Image("Memo", "./icon/game/color_match.svg");
guiSettingsSizeChange(guiGameSelectMemoImage, guiSettingsSizeM, guiSettingsSizeM, 0);

guiGameSelectMemoImage.paddingTop = guiSettingsPaddingTop;              
guiGameSelectMemoImage.paddingRight = guiSettingsPaddingTop;

guiGameSelectMemoImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectMemoImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectMemo = new BABYLON.GUI.Ellipse();
guiGameSelectMemo.color = guiSettingsColor;
guiGameSelectMemo.thickness = guiSettingsLineThickness;
guiSettingsSizeChange(guiGameSelectMemo, guiSettingsSizeM, guiSettingsSizeM, 0);

guiGameSelectMemo.paddingTop = guiSettingsPaddingTop;              
guiGameSelectMemo.paddingRight = guiSettingsPaddingTop;
guiGameSelectMemo.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectMemo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectMemo.background = guiSettingsClickColor;
guiGameSelectMemo.alpha = guiSettingsNoClickTransparancy;

guiGameSelectMemoImage.onPointerDownObservable.add(function() {

    biloGame = 3;
    biloLevel = 0;

     guiGameSelectBuilder.isVisible = false;
     guiGameSelectBuilderImage.isVisible = false;
    
     guiGameSelectTangram.isVisible = false;
     guiGameSelectTangramImage.isVisible = false;
    
     guiGameSelectMemo.isVisible = false;
     guiGameSelectMemoImage.isVisible = false;
    
     guiGameSelectFindShape.isVisible = false;
     guiGameSelectFindShapeImage.isVisible = false;
    
     guiGameSelectFree.isVisible = false;
     guiGameSelectFreeImage.isVisible = false;
    
     guiGameSelectProgram.isVisible = false;
     guiGameSelectProgramImage.isVisible = false;

     guiGameSelectMath.isVisible = false;
     guiGameSelectMathImage.isVisible = false;

     guiGameSelectFreeTangram.isVisible = false;
    guiGameSelectFreeTangramImage.isVisible = false;


     guiLevelInit(3, 2);



});

//--


guiGameSelectFindShapeImage = new BABYLON.GUI.Image("FindShape", "./icon/game/shape_hunter.svg");
guiSettingsSizeChange(guiGameSelectFindShapeImage, guiSettingsSizeM, -guiSettingsSizeM, guiSettingsSizeM);

guiGameSelectFindShapeImage.paddingTop = guiSettingsPaddingTop;              
guiGameSelectFindShapeImage.paddingRight = guiSettingsPaddingTop;

guiGameSelectFindShapeImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectFindShapeImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectFindShape = new BABYLON.GUI.Ellipse();
guiGameSelectFindShape.color = guiSettingsColor;
guiGameSelectFindShape.thickness = guiSettingsLineThickness;
guiSettingsSizeChange(guiGameSelectFindShape, guiSettingsSizeM, -guiSettingsSizeM, guiSettingsSizeM);

guiGameSelectFindShape.paddingTop = guiSettingsPaddingTop;              
guiGameSelectFindShape.paddingRight = guiSettingsPaddingTop;
guiGameSelectFindShape.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectFindShape.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectFindShape.background = guiSettingsClickColor;
guiGameSelectFindShape.alpha = guiSettingsNoClickTransparancy;

guiGameSelectFindShapeImage.onPointerDownObservable.add(function() {

    biloGame = 4;
    biloLevel = 0;

     guiGameSelectBuilder.isVisible = false;
     guiGameSelectBuilderImage.isVisible = false;
    
     guiGameSelectTangram.isVisible = false;
     guiGameSelectTangramImage.isVisible = false;
    
     guiGameSelectMemo.isVisible = false;
     guiGameSelectMemoImage.isVisible = false;
    
     guiGameSelectFindShape.isVisible = false;
     guiGameSelectFindShapeImage.isVisible = false;
    
     guiGameSelectFree.isVisible = false;
     guiGameSelectFreeImage.isVisible = false;
    
     guiGameSelectProgram.isVisible = false;
     guiGameSelectProgramImage.isVisible = false;

     guiGameSelectMath.isVisible = false;
     guiGameSelectMathImage.isVisible = false;

     guiGameSelectFreeTangram.isVisible = false;
    guiGameSelectFreeTangramImage.isVisible = false;


     guiLevelInit(4, 4);


});
//--




guiGameSelectFreeImage = new BABYLON.GUI.Image("FreeBuild", "./icon/game/free_build.svg");
guiSettingsSizeChange(guiGameSelectFreeImage, guiSettingsSizeM, 0, guiSettingsSizeM);

guiGameSelectFreeImage.paddingTop = guiSettingsPaddingTop;              
guiGameSelectFreeImage.paddingRight = guiSettingsPaddingTop;

guiGameSelectFreeImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectFreeImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectFree = new BABYLON.GUI.Ellipse();
guiGameSelectFree.color = guiSettingsColor;
guiGameSelectFree.thickness = guiSettingsLineThickness;
guiSettingsSizeChange(guiGameSelectFree, guiSettingsSizeM, 0, guiSettingsSizeM);

guiGameSelectFree.paddingTop = guiSettingsPaddingTop;              
guiGameSelectFree.paddingRight = guiSettingsPaddingTop;
guiGameSelectFree.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectFree.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectFree.background = guiSettingsClickColor;
guiGameSelectFree.alpha = guiSettingsNoClickTransparancy;

guiGameSelectFreeImage.onPointerDownObservable.add(function() {

    biloGame = 5;
    biloLevel = 0;

     guiGameSelectBuilder.isVisible = false;
     guiGameSelectBuilderImage.isVisible = false;
    
     guiGameSelectTangram.isVisible = false;
     guiGameSelectTangramImage.isVisible = false;
    
     guiGameSelectMemo.isVisible = false;
     guiGameSelectMemoImage.isVisible = false;
    
     guiGameSelectFindShape.isVisible = false;
     guiGameSelectFindShapeImage.isVisible = false;
    
     guiGameSelectFree.isVisible = false;
     guiGameSelectFreeImage.isVisible = false;
    
     guiGameSelectProgram.isVisible = false;
     guiGameSelectProgramImage.isVisible = false;

     guiGameSelectMath.isVisible = false;
     guiGameSelectMathImage.isVisible = false;

     guiGameSelectFreeTangram.isVisible = false;
    guiGameSelectFreeTangramImage.isVisible = false;


    // guiLevelInit(0, 0);

});


//--

guiGameSelectProgramImage = new BABYLON.GUI.Image("Programming", "./icon/game/programming.svg");
guiSettingsSizeChange(guiGameSelectProgramImage, guiSettingsSizeM, guiSettingsSizeM, guiSettingsSizeM);

guiGameSelectProgramImage.paddingTop = guiSettingsPaddingTop;              
guiGameSelectProgramImage.paddingRight = guiSettingsPaddingTop;

guiGameSelectProgramImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectProgramImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectProgram = new BABYLON.GUI.Ellipse();
guiGameSelectProgram.color = guiSettingsColor;
guiGameSelectProgram.thickness = guiSettingsLineThickness;
guiSettingsSizeChange(guiGameSelectProgram, guiSettingsSizeM, guiSettingsSizeM, guiSettingsSizeM);

guiGameSelectProgram.paddingTop = guiSettingsPaddingTop;              
guiGameSelectProgram.paddingRight = guiSettingsPaddingTop;
guiGameSelectProgram.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectProgram.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectProgram.background = guiSettingsClickColor;
guiGameSelectProgram.alpha = guiSettingsNoClickTransparancy;



guiGameSelectProgramImage.onPointerDownObservable.add(function() {

    biloGame = 6;
    biloLevel = 0;

     guiGameSelectBuilder.isVisible = false;
     guiGameSelectBuilderImage.isVisible = false;
    
     guiGameSelectTangram.isVisible = false;
     guiGameSelectTangramImage.isVisible = false;
    
     guiGameSelectMemo.isVisible = false;
     guiGameSelectMemoImage.isVisible = false;
    
     guiGameSelectFindShape.isVisible = false;
     guiGameSelectFindShapeImage.isVisible = false;
    
     guiGameSelectFree.isVisible = false;
     guiGameSelectFreeImage.isVisible = false;
    
     guiGameSelectProgram.isVisible = false;
     guiGameSelectProgramImage.isVisible = false;

     guiGameSelectMath.isVisible = false;
     guiGameSelectMathImage.isVisible = false;

     guiGameSelectFreeTangram.isVisible = false;
     guiGameSelectFreeTangramImage.isVisible = false;

     guiLevelInit(4, 4);
    
});

guiGameSelectMathImage = new BABYLON.GUI.Image("Math", "./icon/game/math.svg");
guiSettingsSizeChange(guiGameSelectMathImage, guiSettingsSizeM, guiSettingsSizeM*2, guiSettingsSizeM);

guiGameSelectMathImage.paddingTop = guiSettingsPaddingTop;              
guiGameSelectMathImage.paddingRight = guiSettingsPaddingTop;

guiGameSelectMathImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectMathImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectMath = new BABYLON.GUI.Ellipse();
guiGameSelectMath.color = guiSettingsColor;
guiGameSelectMath.thickness = guiSettingsLineThickness;
guiSettingsSizeChange(guiGameSelectMath, guiSettingsSizeM, guiSettingsSizeM*2, guiSettingsSizeM);

guiGameSelectMath.paddingTop = guiSettingsPaddingTop;              
guiGameSelectMath.paddingRight = guiSettingsPaddingTop;
guiGameSelectMath.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectMath.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectMath.background = guiSettingsClickColor;
guiGameSelectMath.alpha = guiSettingsNoClickTransparancy;

guiGameSelectMathImage.onPointerDownObservable.add(function() {


    biloGame = 7;
    biloLevel = 0;
    
     guiGameSelectBuilder.isVisible = false;
     guiGameSelectBuilderImage.isVisible = false;
    
     guiGameSelectTangram.isVisible = false;
     guiGameSelectTangramImage.isVisible = false;
    
     guiGameSelectMemo.isVisible = false;
     guiGameSelectMemoImage.isVisible = false;
    
     guiGameSelectFindShape.isVisible = false;
     guiGameSelectFindShapeImage.isVisible = false;
    
     guiGameSelectFree.isVisible = false;
     guiGameSelectFreeImage.isVisible = false;
    
     guiGameSelectProgram.isVisible = false;
     guiGameSelectProgramImage.isVisible = false;
    
     guiGameSelectMath.isVisible = false;
     guiGameSelectMathImage.isVisible = false;

     guiGameSelectFreeTangram.isVisible = false;
    guiGameSelectFreeTangramImage.isVisible = false;

    
     guiLevelInit(5, 5);

});

//--

guiGameSelectFreeTangramImage = new BABYLON.GUI.Image("Math", "./icon/game/tangram_free.svg");
guiSettingsSizeChange(guiGameSelectFreeTangramImage, guiSettingsSizeM, guiSettingsSizeM*2, 0);

guiGameSelectFreeTangramImage.paddingTop = guiSettingsPaddingTop;              
guiGameSelectFreeTangramImage.paddingRight = guiSettingsPaddingTop;

guiGameSelectFreeTangramImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectFreeTangramImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectFreeTangram = new BABYLON.GUI.Ellipse();
guiGameSelectFreeTangram.color = guiSettingsColor;
guiGameSelectFreeTangram.thickness = guiSettingsLineThickness;
guiSettingsSizeChange(guiGameSelectFreeTangram, guiSettingsSizeM, guiSettingsSizeM*2, 0);

guiGameSelectFreeTangram.paddingTop = guiSettingsPaddingTop;              
guiGameSelectFreeTangram.paddingRight = guiSettingsPaddingTop;
guiGameSelectFreeTangram.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
guiGameSelectFreeTangram.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
guiGameSelectFreeTangram.background = guiSettingsClickColor;
guiGameSelectFreeTangram.alpha = guiSettingsNoClickTransparancy;

guiGameSelectFreeTangramImage.onPointerDownObservable.add(function() {


    biloGame = 8;
    biloLevel = 0;
    
     guiGameSelectBuilder.isVisible = false;
     guiGameSelectBuilderImage.isVisible = false;
    
     guiGameSelectTangram.isVisible = false;
     guiGameSelectTangramImage.isVisible = false;
    
     guiGameSelectMemo.isVisible = false;
     guiGameSelectMemoImage.isVisible = false;
    
     guiGameSelectFindShape.isVisible = false;
     guiGameSelectFindShapeImage.isVisible = false;
    
     guiGameSelectFree.isVisible = false;
     guiGameSelectFreeImage.isVisible = false;
    
     guiGameSelectProgram.isVisible = false;
     guiGameSelectProgramImage.isVisible = false;
    
     guiGameSelectMath.isVisible = false;
     guiGameSelectMathImage.isVisible = false;

     guiGameSelectFreeTangram.isVisible = false;
    guiGameSelectFreeTangramImage.isVisible = false;

    
     guiLevelInit(5, 5);

});




    //guiAdvancedTextureSettings

  //  guiAdvancedTextureSettings.addControl(guiGameSelectBuilder);
   // guiAdvancedTextureSettings.addControl(guiGameSelectBuilderImage);

  /* var guiPanelGameSelect = new BABYLON.GUI.StackPanel();
   guiPanelGameSelect.width = "1000px";
   guiPanelGameSelect.height = "1000px";
   guiPanelGameSelect.fontSize = "14px";
   guiPanelGameSelect.isVertical = false;
   guiPanelGameSelect.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
   guiPanelGameSelect.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
   guiAdvancedTextureGameSelect.addControl(guiPanelGameSelect);

   
   guiPanelGameSelect.addControl(guiGameSelectBuilderImage);

   
   guiPanelGameSelect.addControl(guiGameSelectTangramImage);
*/
    guiAdvancedTextureGameSelect.addControl(guiGameSelectBuilder);
    guiAdvancedTextureGameSelect.addControl(guiGameSelectBuilderImage);

    guiAdvancedTextureGameSelect.addControl(guiGameSelectTangram);
    guiAdvancedTextureGameSelect.addControl(guiGameSelectTangramImage);

    guiAdvancedTextureGameSelect.addControl(guiGameSelectMemo);
    guiAdvancedTextureGameSelect.addControl(guiGameSelectMemoImage);
    
    guiAdvancedTextureGameSelect.addControl(guiGameSelectFindShape);
    guiAdvancedTextureGameSelect.addControl(guiGameSelectFindShapeImage);
    

    guiAdvancedTextureGameSelect.addControl(guiGameSelectFree);
    guiAdvancedTextureGameSelect.addControl(guiGameSelectFreeImage);

    guiAdvancedTextureGameSelect.addControl(guiGameSelectProgram);
    guiAdvancedTextureGameSelect.addControl(guiGameSelectProgramImage);

    guiAdvancedTextureGameSelect.addControl(guiGameSelectMath);
    guiAdvancedTextureGameSelect.addControl(guiGameSelectMathImage);

    guiAdvancedTextureGameSelect.addControl(guiGameSelectFreeTangram);
    guiAdvancedTextureGameSelect.addControl(guiGameSelectFreeTangramImage);



    
    
}



 




function guiWinningAndNext(wins){

    //console.log("XXXXXXXXX");
    guiAnimateWin(wins);
    
    guiLevelNext.isVisible = true;
    guiLevelNextImage.isVisible = true;


}

