


let baseTopPlane;

let blockNoChamf;
    
let light0;

var light0Pos;

let blockChamf;

let materials = [];
let materialsBaseLED = [];
let shapesMaterialsStar = []

let renderBlocksPart1 = [];
let renderBlocksPart2 = [];
let renderBlocksPart3 = [];
let renderBlocksPart4 = [];

let renderBlocksLine1A = [];
let renderBlocksLine2A = [];
let renderBlocksLine3A = [];
let renderBlocksLine4A = [];
let renderBlocksLine1B = [];
let renderBlocksLine2B = [];
let renderBlocksLine3B = [];
let renderBlocksLine4B = [];

let renderBlocksBigLine = [];
let renderBlocksSmallLine = [];


let blockSmallLine;
let blockBigLine;

let blockChamfNippleLineA; 
let blockChamfNippleLineB;


let blockChamfArray;
let blockNoChamfArray; 


let baseLEDUp = [];
let baseLEDSide = [];

//let camera;

let blocksAllocated = 0;

let shapesStar;







function shapesAllocateBlocks(currentCount){

    for(let i = blocksAllocated; i <currentCount; i++){
        
                renderBlocksPart1[i] = blockChamf.clone("A" + i);
                renderBlocksPart2[i] = blockChamf.clone("X" + i);
                renderBlocksPart3[i] = blockNoChamf.clone("B" + i);
                renderBlocksPart4[i] = blockNoChamf.clone("C" + i);
        
                renderBlocksLine1A[i] = blockChamfNippleLineA.clone("A" + i);
                renderBlocksLine2A[i] = blockChamfNippleLineA.clone("X" + i); 
                renderBlocksLine3A[i] = blockChamfNippleLineA.clone("B" + i); 
                renderBlocksLine4A[i] = blockChamfNippleLineA.clone("C" + i); 
        
                renderBlocksLine1B[i] = blockChamfNippleLineB.clone("A" + i);
                renderBlocksLine2B[i] = blockChamfNippleLineB.clone("X" + i);
                renderBlocksLine3B[i] = blockChamfNippleLineB.clone("B" + i);
                renderBlocksLine4B[i] = blockChamfNippleLineB.clone("C" + i);
        
                
                renderBlocksLine1A[i].isPickable = false;
                renderBlocksLine2A[i].isPickable = false;
                renderBlocksLine3A[i].isPickable = false; 
                renderBlocksLine4A[i].isPickable = false;
        
                renderBlocksLine1B[i].isPickable = false;
                renderBlocksLine2B[i].isPickable = false;
                renderBlocksLine3B[i].isPickable = false;
                renderBlocksLine4B[i].isPickable = false;
        
                
                renderBlocksBigLine[i] = blockBigLine.clone("Y" + i);
                renderBlocksSmallLine[i] = blockSmallLine.clone("Y" + i);
        
                renderBlocksBigLine[i].isPickable = false;
                renderBlocksSmallLine[i].isPickable = false;
        
                    
            }

            blocksAllocated =  currentCount;

}

function initShapes(scene){
 //   https://doc.babylonjs.com/how_to/parametric_shapes#extruded-shapes

 //   https://www.babylonjs-playground.com/#165IV6#71



 // star shape ----------------
 let starShape = [ new BABYLON.Vector3( 0,0.3,0),		
    new BABYLON.Vector3( 0.069,0.094,0),	
    new BABYLON.Vector3( 0.285,0.093,0), 
    new BABYLON.Vector3( 0.111,-0.036,0),    
    new BABYLON.Vector3( 0.176,-0.243,0), 
    new BABYLON.Vector3( 0,-0.117,0),        
    new BABYLON.Vector3( -0.176,-0.243,0),  
    new BABYLON.Vector3( -0.111,-0.036,0),  
    new BABYLON.Vector3( -0.285,0.093,0),   
    new BABYLON.Vector3( -0.069,0.094,0), 
    new BABYLON.Vector3( 0,0.3,0)
                      
];


var starPath = [
    new BABYLON.Vector3(0, 0, 0),
    new BABYLON.Vector3(0, 0, 0.1)
   // new BABYLON.Vector3(0, 0, 0.1)
    
  
    ];



var starScaling = function(i, distance) {
    if(i == 0){
        return 1;
    }else if(i == 1){
        return 0;
    }else if(i == 2){
        return 0;
    }else if(i == 3){
        return 0.9;
    }

};

shapesMaterialsStar[0] = new BABYLON.StandardMaterial("STAR STEEL", scene);
shapesMaterialsStar[0].diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
shapesMaterialsStar[0].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

shapesMaterialsStar[1] = new BABYLON.StandardMaterial("STAR BRONZE", scene);
shapesMaterialsStar[1].diffuseColor = new BABYLON.Color3(0.9, 0.4, 0.1);
shapesMaterialsStar[1].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);

shapesMaterialsStar[2] = new BABYLON.StandardMaterial("STAR SILVER", scene);
shapesMaterialsStar[2].diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
shapesMaterialsStar[2].emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
//shapesMaterialsStar[2].specularColor = new BABYLON.Color3(0.6, 0.6, 0.6);

shapesMaterialsStar[3] = new BABYLON.StandardMaterial("STAR GOLD", scene);
shapesMaterialsStar[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
shapesMaterialsStar[3].emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.1);

shapesMaterialsStar[4] = new BABYLON.StandardMaterial("STAR WHITE", scene);
shapesMaterialsStar[4].diffuseColor = new BABYLON.Color3(1, 1, 1);
shapesMaterialsStar[4].emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.1);

let shapesStar1 = BABYLON.MeshBuilder.ExtrudeShapeCustom("shapesStar1", {shape: starShape, path: starPath, scaleFunction: starScaling, sideOrientation: BABYLON.Mesh.BACKSIDE, updatable: false}, scene);
shapesStar1.rotation.x = Math.PI;
shapesStar1.rotation.y = Math.PI + Math.PI/2;
shapesStar1.rotation.z = Math.PI;
//shapesStar1.rotation.z = Math.PI/10;
//shapesStar1.position.x =4.5; 
//shapesStar1.position.y =2; 
//shapesStar1.position.z =4.5;
shapesStar1.isPickable = false;
shapesStar1.scaling = new BABYLON.Vector3(3, 3, 3);

let shapesStar2 = shapesStar1.clone("shapesStar2");
//shapesStar2.rotation.x = Math.PI;
shapesStar2.isPickable = false;
shapesStar2.rotation.y = Math.PI/2;


shapesStar2Array = [shapesStar1, shapesStar2];
shapesStar = BABYLON.Mesh.MergeMeshes(shapesStar2Array); 
shapesStar.material = shapesMaterialsStar[0];
shapesStar.setEnabled(0); 
shapesStar.isPickable = false;

//scene.meshes.pop();




//shapesStar.setEnabled(1); 

//shapesStar2.position.x =1; 
//shapesStar2.position.y =2; 
//shapesStar2.position.z =4.5;
//shapesStar2.isPickable = false;
//shapesStar2.scaling = new BABYLON.Vector3(3, 3, 3);

/*
 var octahedron = BABYLON.MeshBuilder.CreatePolyhedron("oct", {type: 0, size: 0.5}, scene);
 octahedron.position.y = 1;

 var octahedron2 = BABYLON.MeshBuilder.CreatePolyhedron("oct", {type: 1, size: 0.5}, scene);
 octahedron2.position.y = 2;
*/

/*
var x = []

 for(var i = 0; i < 15; i++){
x[i] = BABYLON.MeshBuilder.CreatePolyhedron("oct", {type: i, size: 0.5}, scene);
x[i].position.y = i;

 }*/

   // baseLED side -------------------------------------------------------

    let baseLEDSideShape = [ new BABYLON.Vector3( -0.2,0,-0.5),		
        new BABYLON.Vector3( -0.15,0,-0.6),	
        new BABYLON.Vector3( 0.15,0,-0.6), 
        new BABYLON.Vector3( 0.2,0,-0.5),    
        new BABYLON.Vector3( 0.2,0,0.5),      
        new BABYLON.Vector3( 0.15,0,0.6),  
        new BABYLON.Vector3( -0.15,0,0.6),  
        new BABYLON.Vector3( -0.2,0,0.5)    
                          
    ];

    // baseLED up -------------------------------------------------------
    let baseLEDUpShape = [ new BABYLON.Vector3( 0,0,-0.5),		
        new BABYLON.Vector3( 0.1,0,-0.5),	
        new BABYLON.Vector3( 0.2,0,-0.4), 
        new BABYLON.Vector3( 0.2,0,0.4),    
        new BABYLON.Vector3( 0.1,0,0.5),        
        new BABYLON.Vector3( 0,0,0.5)                        
    ];


    for(let i = 0; i < 3; i++){
        if(i==0){
     
            baseLEDUp[i] = BABYLON.MeshBuilder.CreatePolygon("baseLEDUp", {shape:baseLEDUpShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
            baseLEDSide[i] = BABYLON.MeshBuilder.ExtrudePolygon("baseLEDSide", {shape:baseLEDSideShape, depth: 0.08, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
        }else{
            baseLEDUp[i] =  baseLEDUp[0].createInstance("baseLEDUp");
            baseLEDSide[i] = baseLEDSide[0].createInstance("baseLEDSide");
        }
        baseLEDUp[i].position.x =1 + i%3 * 3.5; 
        baseLEDUp[i].position.y =0.001;
        baseLEDUp[i].position.z =-0.5;
        baseLEDUp[i].rotation.y = -Math.PI/2;
        baseLEDUp[i].name = "F1";

        baseLEDSide[i].position.x  =1 + i%3 * 3.5;
        baseLEDSide[i].position.y =-0.5;
        baseLEDSide[i].position.z =-0.1;
        baseLEDSide[i].rotation.y = -Math.PI/2;
        baseLEDSide[i].rotation.z = -Math.PI/2 + Math.PI/12;
        baseLEDSide[i].name = "F1"; 



    }

    for(let i = 3; i < 6; i++){
        if(i == 3){
            baseLEDUp[i] = BABYLON.MeshBuilder.CreatePolygon("baseLEDUp", {shape:baseLEDUpShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
            baseLEDSide[i] = BABYLON.MeshBuilder.ExtrudePolygon("baseLEDSide", {shape:baseLEDSideShape, depth: 0.08, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
        }else{
             baseLEDUp[i] =  baseLEDUp[3].createInstance("baseLEDUp");
             baseLEDSide[i] = baseLEDSide[3].createInstance("baseLEDSide");
        }
        baseLEDUp[i].position.x =-0.5;
        baseLEDUp[i].position.y =0.001;
        baseLEDUp[i].position.z = 1 + i%3 * 3.5; 
        baseLEDUp[i].name = "E0";

        baseLEDSide[i].position.x  = -0.1;
        baseLEDSide[i].position.y =-0.5;
        baseLEDSide[i].position.z =1 + i%3 * 3.5;
        //baseLEDSide[i].rotation.y = -Math.PI/2;
        //baseLEDSide[i].rotation.z = -Math.PI/2 + Math.PI/12;
        baseLEDSide[i].rotation.z = -Math.PI/2 + Math.PI/12;

        baseLEDSide[i].name = "E0";
    }

    for(let i = 6; i < 9; i++){
                
        if(i == 6){
            baseLEDUp[i] = BABYLON.MeshBuilder.CreatePolygon("baseLEDUp", {shape:baseLEDUpShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);       
            baseLEDSide[i] = BABYLON.MeshBuilder.ExtrudePolygon("baseLEDSide", {shape:baseLEDSideShape, depth: 0.08, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
        }else{
            baseLEDUp[i] =  baseLEDUp[6].createInstance("baseLEDUp");
            baseLEDSide[i] = baseLEDSide[6].createInstance("baseLEDSide");
        }
        baseLEDUp[i].position.x = 1 + i%3 * 3.5;
        baseLEDUp[i].position.y =0.001;
        baseLEDUp[i].position.z =  9.5;
        baseLEDUp[i].rotation.y = Math.PI/2;       
        baseLEDUp[i].name = "F0";

        baseLEDSide[i].position.x  = 1 + i%3 * 3.5;
        baseLEDSide[i].position.y =-0.5;
        baseLEDSide[i].position.z = 9.18;
        baseLEDSide[i].rotation.y = -Math.PI/2;
        //baseLEDSide[i].rotation.z = -Math.PI/2 + Math.PI/12;
        baseLEDSide[i].rotation.z = -Math.PI/2 - Math.PI/12;

        baseLEDSide[i].name = "F0";
    

                
     }

     for(let i = 9; i < 12; i++){        
        if(i == 9){
            baseLEDUp[i] = BABYLON.MeshBuilder.CreatePolygon("baseLEDUp", {shape:baseLEDUpShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);     
            baseLEDSide[i] = BABYLON.MeshBuilder.ExtrudePolygon("baseLEDSide", {shape:baseLEDSideShape, depth: 0.08, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);    
        }else{
             baseLEDUp[i] =  baseLEDUp[9].createInstance("baseLEDUp");
             baseLEDSide[i] = baseLEDSide[9].createInstance("baseLEDSide");
        }
        baseLEDUp[i].position.x = 9.5;
        baseLEDUp[i].position.y =0.001;
        baseLEDUp[i].position.z = 1 + i%3 * 3.5;
        baseLEDUp[i].rotation.y = Math.PI;        
        baseLEDUp[i].name = "E1";      
        
        baseLEDSide[i].position.x  = 9.18;
        baseLEDSide[i].position.y =-0.5;
        baseLEDSide[i].position.z =1 + i%3 * 3.5;
        //baseLEDSide[i].rotation.y = -Math.PI/2;
        //baseLEDSide[i].rotation.z = -Math.PI/2 + Math.PI/12;
        baseLEDSide[i].rotation.z = -Math.PI/2 - Math.PI/12;

        baseLEDSide[i].name = "E1";
    }
    
    // nipple -------------------------------------------------------

    let  nippleShape = [ new BABYLON.Vector3(-0.21,0, -0.29),		
        new BABYLON.Vector3(0.21,0, -0.29), 
        new BABYLON.Vector3(0.29,0, -0.21),    
        new BABYLON.Vector3(0.29,0, 0.21), 
        new BABYLON.Vector3(0.21,0, 0.29), 
        new BABYLON.Vector3(-0.21,0, 0.29), 
        new BABYLON.Vector3(-0.29,0, 0.21), 
        new BABYLON.Vector3(-0.29, 0, -0.21) 		                    
    ];
    let  nippleLineShape = [ new BABYLON.Vector3(-0.21,0, -0.29),		
        new BABYLON.Vector3(0.21,0, -0.29), 
        new BABYLON.Vector3(0.29,0, -0.21),    
        new BABYLON.Vector3(0.29,0, 0.21), 
        new BABYLON.Vector3(0.21,0, 0.29), 
        new BABYLON.Vector3(-0.21,0, 0.29), 
        new BABYLON.Vector3(-0.29,0, 0.21), 
        new BABYLON.Vector3(-0.29, 0, -0.21),
        new BABYLON.Vector3(-0.21,0, -0.29)			                    
    ];

    let  nippleLineShapeA = [ new BABYLON.Vector3(-0.21,1.35, -0.29),		
        new BABYLON.Vector3(0.21,1.35, -0.29), 
        new BABYLON.Vector3(0.29,1.35, -0.21),    
        new BABYLON.Vector3(0.29,1.35, 0.21), 
        new BABYLON.Vector3(0.21,1.35, 0.29), 
        new BABYLON.Vector3(-0.21,1.35, 0.29), 
        new BABYLON.Vector3(-0.29,1.35, 0.21), 
        new BABYLON.Vector3(-0.29, 1.35, -0.21),
        new BABYLON.Vector3(-0.21,1.35, -0.29)			                    
    ];


    let  nippleLineShapeB = [ new BABYLON.Vector3(-0.21,1.35, 0.71),		
        new BABYLON.Vector3(0.21,1.35, 0.71), 
        new BABYLON.Vector3(0.29,1.35, 0.79),    
        new BABYLON.Vector3(0.29,1.35, 1.21), 
        new BABYLON.Vector3(0.21,1.35, 1.29), 
        new BABYLON.Vector3(-0.21,1.35, 1.29), 
        new BABYLON.Vector3(-0.29,1.35, 1.21), 
        new BABYLON.Vector3(-0.29, 1.35, 0.79),
        new BABYLON.Vector3(-0.21,1.35, 0.71)			                    
    ];

 

	
	//Create lines 
	let nippleLine = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShape}, scene); 
    nippleLine.color = new BABYLON.Color3(0.6, 0.6, 0.6);
    nippleLine.isPickable = false;
    nippleLine.position.y = 0.16;
  //let baseNipples = baseNipple.createInstance("baseNipple: " +x+y);
  

    // baseSidePlane -------------------------------------------------------

    let baseSideShape = [ new BABYLON.Vector3( -4.8,-5,0),		
        new BABYLON.Vector3( -5,-4.8,0),	
        new BABYLON.Vector3( -5,4.8,0), 
        new BABYLON.Vector3( -4.8,5,0),    
        new BABYLON.Vector3( 4.8,5,0),        
        new BABYLON.Vector3( 5,4.8,0),   
        new BABYLON.Vector3( 5,-4.8,0),    
        new BABYLON.Vector3( 4.8,-5,0)                            
        ];

    baseSideShape.push(baseSideShape[0]); //why?

	var myPath = [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(0, 0, 0.1),
        new BABYLON.Vector3(0, 0, 0.2),
        new BABYLON.Vector3(0, 0, 1.19)
      
        ];



    var scaling = function(i, distance) {
        if(i == 0){
            return 1;
        }else if(i == 1){
            return 1;
        }else if(i == 2){
            return 0.95;
        }else if(i == 3){
            return 0.9;
        }

    };

    let baseSidePlane = BABYLON.MeshBuilder.ExtrudeShapeCustom("baseSidePlane", {shape: baseSideShape, path: myPath, scaleFunction: scaling, sideOrientation: BABYLON.Mesh.BACKSIDE, updatable: false}, scene);
    baseSidePlane.rotation.x = Math.PI/2;
    baseSidePlane.position.x =4.5; 
    baseSidePlane.position.z =4.5;
    baseSidePlane.isPickable = false;

     // baseTopPlane -------------------------------------------------------

     let baseTopShape = [ new BABYLON.Vector3( -4.8,0,-5),		
        new BABYLON.Vector3( -5,0,-4.8),	
        new BABYLON.Vector3( -5,0,4.8), 
        new BABYLON.Vector3( -4.8,0,5),    
        new BABYLON.Vector3( 4.8,0,5),        
        new BABYLON.Vector3( 5,0,4.8),   
        new BABYLON.Vector3( 5,0,-4.8),    
        new BABYLON.Vector3( 4.8,0,-5)                        
        ];

    baseTopPlane = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape:baseTopShape, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    baseTopPlane.position.x =4.5; 
    baseTopPlane.position.y =0;
    baseTopPlane.position.z =4.5;
    baseTopPlane.isPickable = false;
    
   /* baseTopPlane.enableEdgesRendering();    
    baseTopPlane.edgesWidth = 2.0;
    baseTopPlane.edgesColor = new BABYLON.Color4(0, 0, 0, 0.5);
*/
    // block -------------------------------------------------------


    let chamfBlockShape = [	
          
              
            
         
            new BABYLON.Vector3(-0.3,0,-0.48 ) , 
            new BABYLON.Vector3( 1.3,0,-0.48), 
            new BABYLON.Vector3( 1.48,0, -0.3),
            new BABYLON.Vector3( 1.48,0,0.5),  
            new BABYLON.Vector3( -0.48,0,0.5), 
            new BABYLON.Vector3( -0.48,0,-0.3)	
            ];


        let noChamfBlockShape = [ 		
            
            
            new BABYLON.Vector3( 1.48,0,-0.5), 
            new BABYLON.Vector3( 1.48,0,0.5), 
            new BABYLON.Vector3(-0.48,0,0.5 ), 
            new BABYLON.Vector3( -0.48,0,-0.5)                            
            ];

     let blockSmallLineShape = [ new BABYLON.Vector3( -0.48,1.18,-0.3),		
            new BABYLON.Vector3( -0.48,1.18,1.3), 
            new BABYLON.Vector3( -0.3,1.18,1.48), 
            new BABYLON.Vector3( 1.3,1.18,1.48), 
            new BABYLON.Vector3( 1.48,1.18,1.3),     
            new BABYLON.Vector3( 1.48,1.18, -0.3), 
            new BABYLON.Vector3( 1.3,1.18,-0.48), 
            new BABYLON.Vector3(-0.3,1.18,-0.48 ),
            new BABYLON.Vector3( -0.48,1.18,-0.3),                             
            ];

    let blockBigLineShape = [ new BABYLON.Vector3( -0.48,1.18,-0.3),		
                new BABYLON.Vector3( -0.48,1.18,1.3), 
                new BABYLON.Vector3( -0.3,1.18,1.48), 
                new BABYLON.Vector3( 3.3,1.18,1.48), 
                new BABYLON.Vector3( 3.48,1.18,1.3),     
                new BABYLON.Vector3( 3.48,1.18, -0.3), 
                new BABYLON.Vector3( 3.3,1.18,-0.48), 
                new BABYLON.Vector3(-0.3,1.18,-0.48 ),
                new BABYLON.Vector3( -0.48,1.18,-0.3),                             
                ];

    let blockChamfBody = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:chamfBlockShape, depth: 1.18, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    blockChamfBody.rotation.z = Math.PI;
    blockChamfBody.rotation.y = Math.PI/2;;
    
    let blockNoChamfBody = BABYLON.MeshBuilder.ExtrudePolygon("polygonx", {shape:noChamfBlockShape, depth: 1.18, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    blockNoChamfBody.rotation.z = Math.PI;
    blockNoChamfBody.rotation.y = Math.PI/2;;

    blockSmallLine = BABYLON.MeshBuilder.CreateLines("lines", {points: blockSmallLineShape}, scene); 
    blockSmallLine.color = new BABYLON.Color3(0.6, 0.6, 0.6);
    blockSmallLine.isPickable = false;
   // blockChamfNippleLineA.position.y = 1.35;
    blockSmallLine.setEnabled(0); 

    blockBigLine = BABYLON.MeshBuilder.CreateLines("lines", {points: blockBigLineShape}, scene); 
   blockBigLine.color = new BABYLON.Color3(0.6, 0.6, 0.6);
   blockBigLine.isPickable = false;
   blockBigLine.setEnabled(0); 
    
    let blockChamfNipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    blockChamfNipple1.position.y =1.19;
    blockChamfNipple1.rotation.z = Math.PI;

     blockChamfNippleLineA = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShapeA}, scene); 
    blockChamfNippleLineA.color = new BABYLON.Color3(0.6, 0.6, 0.6);
    blockChamfNippleLineA.isPickable = false;
   // blockChamfNippleLineA.position.y = 1.35;
    blockChamfNippleLineA.setEnabled(0); 
   
    let blockChamfNipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    blockChamfNipple2.position.z =1;//!
    blockChamfNipple2.position.y =1.19;
    blockChamfNipple2.rotation.z = Math.PI;

     blockChamfNippleLineB = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShapeB}, scene); 
    blockChamfNippleLineB.color = new BABYLON.Color3(0.6, 0.6, 0.6);
    //blockChamfNippleLineB.useVertexColor = true;
    //blockChamfNippleLineB.color = new BABYLON.Color4(1, 1, 1, 1);
    blockChamfNippleLineB.isPickable = false;
    //blockChamfNippleLineB.position.z = 1;
    //blockChamfNippleLineB.position.y = 1.35;
    blockChamfNippleLineB.setEnabled(0); 
  
    let blockNoChamfNipple1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    blockNoChamfNipple1.position.y =1.19;
    blockNoChamfNipple1.rotation.z = Math.PI;

  /*  let blockNoChamfNippleLine1 = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShape}, scene); 
    blockNoChamfNippleLine1.color = new BABYLON.Color3(0.6, 0.6, 0.6);
   // blockNoChamfNippleLine1.isPickable = false;
    blockNoChamfNippleLine1.position.y = 1.35;
    */
    let blockNoChamfNipple2 = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    blockNoChamfNipple2.position.z =1;//!
    blockNoChamfNipple2.position.y =1.19;
    blockNoChamfNipple2.rotation.z = Math.PI;
/*
    let blockNoChamfNippleLine2 = BABYLON.MeshBuilder.CreateLines("lines", {points: nippleLineShape}, scene); 
    blockNoChamfNippleLine2.color = new BABYLON.Color3(0.6, 0.6, 0.6);
   // blockNoChamfNippleLine2.isPickable = false;
    blockNoChamfNippleLine2.position.y = 1.35;
    blockNoChamfNippleLine2.position.z = 1;
  */ 
     blockChamfArray = [blockChamfBody, blockChamfNipple1, blockChamfNipple2];
    blockChamf = BABYLON.Mesh.MergeMeshes(blockChamfArray); 
    scene.meshes.pop();
    
     blockNoChamfArray = [blockNoChamfBody, blockNoChamfNipple1, blockNoChamfNipple2];
    blockNoChamf = BABYLON.Mesh.MergeMeshes(blockNoChamfArray); 
    scene.meshes.pop();

   // let blockChamfLineArray = [blockChamfNippleLine1, blockChamfNippleLine2];
   // blockChamfLine = BABYLON.Mesh.MergeMeshes(blockChamfLineArray); 
  //  scene.meshes.pop();
    
  //  let blockNoChamfLineArray = [blockNoChamfNippleLine1, blockNoChamfNippleLine2];
   // blockNoChamfLine = BABYLON.Mesh.MergeMeshes(blockNoChamfLineArray); 
    //scene.meshes.pop();



    let baseNipple = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape:nippleShape, depth: 0.16, sideOrientation: BABYLON.Mesh.FRONTSIDE }, scene);
    baseNipple.rotation.x = Math.PI;

    // baseNipple -------------------------------------------------------

    /*baseNipple.enableEdgesRendering();    
    baseNipple.edgesWidth = 2.0;
    baseNipple.edgesColor = new BABYLON.Color4(0.5, 0.5, 0.5, 1);
*/
    baseNipple.isPickable = false;
    for (let x= 0; x< 10; ++x) {  

        for(let y=0; y<10; y++){        

            if( x == 0 && y ==0){		
                                 
            }else{
                let baseNipples = baseNipple.createInstance("baseNipple: " +x+y);
                baseNipples.position.x = x;
                baseNipples.position.z = y;
                baseNipples.isPickable = false;

                let nippleLines = nippleLine.clone("nippleLine: " +x+y);
                nippleLines.position.x = x;
                nippleLines.position.z = y;
                nippleLines.isPickable = false;
/*
                baseNipples.enableEdgesRendering();    
                baseNipples.edgesWidth = 2.0;
                baseNipples.edgesColor = new BABYLON.Color4(0.5, 0.5, 0.5, 1);        */         
            }        
        }
    }

    // materials -------------------------------------------------------
        
    let whiteMaterial = new BABYLON.StandardMaterial("whiteMaterial", scene);  
    let emissiveColor = 0.2;
    let emissiveColorBaseLED = 1;
        
    materials[0] = new BABYLON.StandardMaterial("NA", scene);
    materials[1] = new BABYLON.StandardMaterial("RED", scene);
    materials[2] = new BABYLON.StandardMaterial("GREEN", scene);
    materials[3] = new BABYLON.StandardMaterial("YELLOW", scene);
    materials[4] = new BABYLON.StandardMaterial("BLUE", scene);
    materials[5] = new BABYLON.StandardMaterial("PURPLE", scene);
    materials[6] = new BABYLON.StandardMaterial("CYAN", scene);
    materials[7] = new BABYLON.StandardMaterial("WHITE", scene);

    materials[8] = new BABYLON.StandardMaterial("NA", scene);
    materials[9] = new BABYLON.StandardMaterial("RED", scene);
    materials[10] = new BABYLON.StandardMaterial("GREEN", scene);
    materials[11] = new BABYLON.StandardMaterial("YELLOW", scene);
    materials[12] = new BABYLON.StandardMaterial("BLUE", scene);
    materials[13] = new BABYLON.StandardMaterial("PURPLE", scene);
    materials[14] = new BABYLON.StandardMaterial("CYAN", scene);
    materials[15] = new BABYLON.StandardMaterial("WHITE", scene);

        
    materials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
    materials[0].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    materials[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
    materials[1].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
    materials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
    materials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
    materials[3].diffuseColor = new BABYLON.Color3(1, 1, 0);
    materials[3].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
    materials[4].diffuseColor = new BABYLON.Color3(0, 0, 1);
    materials[4].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
    materials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
    materials[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
    materials[6].diffuseColor = new BABYLON.Color3(0, 1, 1);
    materials[6].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
    materials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
    materials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);


    let alphaSetting1 = 0.6;


    materials[8].diffuseColor = new BABYLON.Color3(1, 1, 1);
    materials[8].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    materials[8].alpha = alphaSetting1;
    materials[9].diffuseColor = new BABYLON.Color3(1, 0, 0);
    materials[9].emissiveColor = new BABYLON.Color3(emissiveColor, 0, 0);
    materials[9].alpha = alphaSetting1;
    materials[10].diffuseColor = new BABYLON.Color3(0, 1, 0);
    materials[10].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
    materials[10].alpha = alphaSetting1;
    materials[11].diffuseColor = new BABYLON.Color3(1, 1, 0);
    materials[11].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
    materials[11].alpha = alphaSetting1;
    materials[12].diffuseColor = new BABYLON.Color3(0, 0, 1);
    materials[12].emissiveColor = new BABYLON.Color3(0, 0,emissiveColor );
    materials[12].alpha = alphaSetting1;
    materials[13].diffuseColor = new BABYLON.Color3(1, 0, 1);
    materials[13].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
    materials[13].alpha = alphaSetting1;
    materials[14].diffuseColor = new BABYLON.Color3(0, 1, 1);
    materials[14].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
    materials[14].alpha = alphaSetting1;
    materials[15].diffuseColor = new BABYLON.Color3(1, 1, 1);
    materials[15].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    materials[15].alpha = alphaSetting1;


    /*materials[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
    materials[0].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    materials[1].diffuseColor = new BABYLON.Color3(0, 0, 1);
    materials[1].emissiveColor = new BABYLON.Color3(0, 0, emissiveColor);
    materials[2].diffuseColor = new BABYLON.Color3(0, 1, 0);
    materials[2].emissiveColor = new BABYLON.Color3(0, emissiveColor, 0);
    materials[3].diffuseColor = new BABYLON.Color3(0, 1, 1);
    materials[3].emissiveColor = new BABYLON.Color3(0, emissiveColor, emissiveColor);
    materials[4].diffuseColor = new BABYLON.Color3(1, 0, 0);
    materials[4].emissiveColor = new BABYLON.Color3(emissiveColor, 0,0 );
    materials[5].diffuseColor = new BABYLON.Color3(1, 0, 1);
    materials[5].emissiveColor = new BABYLON.Color3(emissiveColor, 0, emissiveColor);
    materials[6].diffuseColor = new BABYLON.Color3(1, 1, 0);
    materials[6].emissiveColor = new BABYLON.Color3(emissiveColor, emissiveColor, 0);
    materials[7].diffuseColor = new BABYLON.Color3(1, 1, 1);
    materials[7].emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);*/

    materialsBaseLED[0] = new BABYLON.StandardMaterial("BASE NA", scene);
    materialsBaseLED[1] = new BABYLON.StandardMaterial("BASE RED", scene);

    materialsBaseLED[0].diffuseColor = new BABYLON.Color3(1, 1, 1);
    materialsBaseLED[0].emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    materialsBaseLED[1].diffuseColor = new BABYLON.Color3(1, 0, 0);
    materialsBaseLED[1].emissiveColor = new BABYLON.Color3(emissiveColorBaseLED, 0, 0);


        
        /*
        .specularColor = new BABYLON.Color3(0, 0, 0);
        .ambientColor = new BABYLON.Color3(0, 0, 0);
        .alpha = 0.1;
        .backFaceCulling = false;*/
     
    whiteMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
    whiteMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
    whiteMaterial.alpha = 100;
    whiteMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    whiteMaterial.ambientColor = new BABYLON.Color3(0, 0, 0);

    baseNipple.material = whiteMaterial  ;
    baseTopPlane.material =  whiteMaterial  ;
    baseSidePlane.material  =  whiteMaterial  ;
    //blockChamf.material =  whiteMaterial ;
    blockNoChamf.material =  whiteMaterial ;


    baseLEDSide.material = materialsBaseLED[1];
      
    //new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-0.5, -0.8, 5), scene);
    //new BABYLON.SpotLight("spotLight1", new BABYLON.Vector3(3, 1, 6), new BABYLON.Vector3(-0.7, -1, 0), Math.PI /1, 10, scene);
    light0 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 5,0), scene);
        
    light0.specular = new BABYLON.Color3(0, 0, 0);
    light0.specularPower = 0;
    light0.diffuse = new BABYLON.Color3(1, 1, 1);
    light0.intensity =0.75;

    light1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(4.5, -5, 4.5), scene);
    
light1.specular = new BABYLON.Color3(0, 0, 0);
light1.specularPower = 0;
light1.diffuse = new BABYLON.Color3(1, 1, 1);
light1.intensity =0.15;
/*
var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
sphere.position.x = 4.5;
sphere.position.y = -5;
sphere.position.z = 4.5;
*/
    //.excludeMeshes  = [environtmentPlane];
    //.includedOnlyMeshes = [baseTopPlane];
    //.range = 0.5;
     

  //  light0Pos = BABYLON.Mesh.CreateBox("light0Pos", 1.0, scene);     
    //light0Pos.scaling = new BABYLON.Vector3(3, 1, 1.5);
   // light0Pos.position.y = 0;  
   // light0Pos.setEnabled(0); 
  //  light0.parent = light0Pos;
   // light0Pos.position.x = 10; //?
   // light0Pos.position.z = 10; //?

    // whiteMaterial.maxSimultaneousLights = 20;

    // camera -------------------------------------------------------

        // Parameters: alpha, beta, radius, target position, scene
        /*
        camera = new BABYLON.ArcRotateCamera("Camera", 0,0, 10, new BABYLON.Vector3(4.5,0 ,4.5), scene);
        
       // camera.rotation = new BABYLON.Vector3(0, 1, 1);
        //camera.setTarget(BABYLON.Vector3.Zero());
  //  camera.upVector =  new BABYLON.Vector3(0, 0, 1);
   // camera.setPosition(new BABYLON.Vector3(15, 4.5,15));

   camera.setPosition(new BABYLON.Vector3(15,15,15));

    //camera.lowerAlphaLimit =1;
   //camera.upperAlphaLimit =2;

    //ADDcamera.lowerBetaLimit =Math.PI/8;
    //camera.upperBetaLimit  = Math.PI - Math.PI/2;

    camera.lowerRadiusLimit = 5;
    camera.upperRadiusLimit = 40;
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    
    camera.angularSensibilityX = 2000;
    camera.angularSensibilityY = 2000;
    camera.angularSensibilityZ = 2000;
    camera.wheelPrecision = 50;*/

    //camera.parent = light0;
    //camera.useBouncingBehavior = false;

    

}