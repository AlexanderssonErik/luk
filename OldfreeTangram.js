let freeTangramBlockX = []; 
let freeTangramBlockY = []; 
let freeTangramBlockZ = []; 
let freeTangramBlockRT = []; 
let freeTangramBlockLED2x2 = []; 
let freeTangramBlockLED2x4 = []; 
let freeTangramBlockCount = []; 
let freeTangramBlockRenderSide = []; 

//let freeTangramState;
let freeTangramLevel;
//let freeTangramStage;

let freeTangramWinning;


let freeTangramLastStage = [];


//level 1
    //One side

//level 2
    //two sides

//level 3
    //one side open shape

//level 4 
    //two side open shape

//level 5
    //experiment


function freeTangramInit(){









    for(let i = 0; i < 10; i++){
        freeTangramBlockX[i] = [];
        freeTangramBlockY[i] = [];
        freeTangramBlockZ[i] = [];
        freeTangramBlockRT[i] = [];
        freeTangramBlockLED2x2[i] = [];
        freeTangramBlockLED2x4[i] = [];
        freeTangramBlockRenderSide[i] = [];
        //levelBlockCount[i] = [];

    }

    freeTangramBlockX[0][0] = 0; 
    freeTangramBlockY[0][0] = 0; 
    freeTangramBlockZ[0][0] = 0; 
    freeTangramBlockRT[0][0] = 4; 
    freeTangramBlockLED2x2[0][0] = 0; 
    freeTangramBlockLED2x4[0][0] = 0;
    freeTangramBlockRenderSide[0][0] = 0;

    freeTangramBlockX[0][1] = 2; 
    freeTangramBlockY[0][1] = 0; 
    freeTangramBlockZ[0][1] = 0; 
    freeTangramBlockRT[0][1] = 4; 
    freeTangramBlockLED2x2[0][1] = 0; 
    freeTangramBlockLED2x4[0][1] = 0;
    freeTangramBlockRenderSide[0][1] = 0;

    freeTangramBlockX[0][2] = 4; 
    freeTangramBlockY[0][2] = 0; 
    freeTangramBlockZ[0][2] = 0; 
    freeTangramBlockRT[0][2] = 4; 
    freeTangramBlockLED2x2[0][2] = 0; 
    freeTangramBlockLED2x4[0][2] = 0;
    freeTangramBlockRenderSide[0][2] = 0;
    
    
    freeTangramBlockCount[0] = 3; 



//------------------------------------

    freeTangramBlockX[1][0] = 0; 
    freeTangramBlockY[1][0] = 0; 
    freeTangramBlockZ[1][0] = 0; 
    freeTangramBlockRT[1][0] = 4; 
    freeTangramBlockLED2x2[1][0] = 0; 
    freeTangramBlockLED2x4[1][0] = 0;
    freeTangramBlockRenderSide[1][0] = 0;

    freeTangramBlockX[1][1] = 2; 
    freeTangramBlockY[1][1] = 0; 
    freeTangramBlockZ[1][1] = 0; 
    freeTangramBlockRT[1][1] = 4; 
    freeTangramBlockLED2x2[1][1] = 0; 
    freeTangramBlockLED2x4[1][1] = 0;
    freeTangramBlockRenderSide[1][1] = 0;

    freeTangramBlockX[1][2] = 4; 
    freeTangramBlockY[1][2] = 0; 
    freeTangramBlockZ[1][2] = 0; 
    freeTangramBlockRT[1][2] = 4; 
    freeTangramBlockLED2x2[1][2] = 0; 
    freeTangramBlockLED2x4[1][2] = 0;
    freeTangramBlockRenderSide[1][2] = 0;

    freeTangramBlockX[1][3] = 0; 
    freeTangramBlockY[1][3] = 0; 
    freeTangramBlockZ[1][3] = 2; 
    freeTangramBlockRT[1][3] = 4; 
    freeTangramBlockLED2x2[1][3] = 0; 
    freeTangramBlockLED2x4[1][3] = 0;
    freeTangramBlockRenderSide[1][3] = 1;

    freeTangramBlockX[1][4] = 0; 
    freeTangramBlockY[1][4] = 0; 
    freeTangramBlockZ[1][4] = 4; 
    freeTangramBlockRT[1][4] = 4; 
    freeTangramBlockLED2x2[1][4] = 0; 
    freeTangramBlockLED2x4[1][4] = 0;
    freeTangramBlockRenderSide[1][4] = 1;
    
    
    freeTangramBlockCount[1] = 5; 



    freeTangramBlockX[2][0] = 0;
 freeTangramBlockY[2][0] = 0;
 freeTangramBlockZ[2][0] = 5;
 freeTangramBlockRT[2][0] = 5;
 freeTangramBlockLED2x2[2][0] = 0;
 freeTangramBlockLED2x4[2][0] = 0;
 freeTangramBlockRenderSide[2][0] = 1;


 freeTangramBlockX[2][1] = 2;
 freeTangramBlockY[2][1] = 0;
 freeTangramBlockZ[2][1] = 0;
 freeTangramBlockRT[2][1] = 4;
 freeTangramBlockLED2x2[2][1] = 0;
 freeTangramBlockLED2x4[2][1] = 0;
 freeTangramBlockRenderSide[2][1] = 0;

 freeTangramBlockX[2][2] = 0;
 freeTangramBlockY[2][2] = 0;
 freeTangramBlockZ[2][2] = 2;
 freeTangramBlockRT[2][2] = 4;
 freeTangramBlockLED2x2[2][2] = 0;
 freeTangramBlockLED2x4[2][2] = 0;
 freeTangramBlockRenderSide[2][2] = 1;

 freeTangramBlockX[2][3] = 4;
 freeTangramBlockY[2][3] = 0;
 freeTangramBlockZ[2][3] = 0;
 freeTangramBlockRT[2][3] = 4;
 freeTangramBlockLED2x2[2][3] = 0;
 freeTangramBlockLED2x4[2][3] = 0;
 freeTangramBlockRenderSide[2][3] = 0;

 freeTangramBlockX[2][4] = 1;
 freeTangramBlockY[2][4] = 1;
 freeTangramBlockZ[2][4] = 2;
 freeTangramBlockRT[2][4] = 3;
 freeTangramBlockLED2x2[2][4] = 0;
 freeTangramBlockLED2x4[2][4] = 0;
 freeTangramBlockRenderSide[2][4] = 1;

 freeTangramBlockX[2][5] = 2;
 freeTangramBlockY[2][5] = 1;
 freeTangramBlockZ[2][5] = 0;
 freeTangramBlockRT[2][5] = 0;
 freeTangramBlockLED2x2[2][5] = 0;
 freeTangramBlockLED2x4[2][5] = 0;
 freeTangramBlockRenderSide[2][5] = 0;

 freeTangramBlockCount[2] = 6;




 freeTangramBlockX[3][0] = 0;
 freeTangramBlockY[3][0] = 0;
 freeTangramBlockZ[3][0] = 3;
 freeTangramBlockRT[3][0] = 5;
 freeTangramBlockLED2x2[3][0] = 0;
 freeTangramBlockLED2x4[3][0] = 0;
 freeTangramBlockRenderSide[3][0] = 1;

 freeTangramBlockX[3][1] = 4;
 freeTangramBlockY[3][1] = 0;
 freeTangramBlockZ[3][1] = 0;
 freeTangramBlockRT[3][1] = 4;
 freeTangramBlockLED2x2[3][1] = 0;
 freeTangramBlockLED2x4[3][1] = 0;
 freeTangramBlockRenderSide[3][1] = 0;

 freeTangramBlockX[3][2] = 1;
 freeTangramBlockY[3][2] = 1;
 freeTangramBlockZ[3][2] = 2;
 freeTangramBlockRT[3][2] = 3;
 freeTangramBlockLED2x2[3][2] = 0;
 freeTangramBlockLED2x4[3][2] = 0;
 freeTangramBlockRenderSide[3][2] = 1;

 freeTangramBlockX[3][3] = 2;
 freeTangramBlockY[3][3] = 1;
 freeTangramBlockZ[3][3] = 0;
 freeTangramBlockRT[3][3] = 0;
 freeTangramBlockLED2x2[3][3] = 0;
 freeTangramBlockLED2x4[3][3] = 0;
 freeTangramBlockRenderSide[3][3] = 0;

 freeTangramBlockCount[3] = 4;



 freeTangramBlockX[4][0] = 0;
 freeTangramBlockY[4][0] = 0;
 freeTangramBlockZ[4][0] = 5;
 freeTangramBlockRT[4][0] = 5;
 freeTangramBlockLED2x2[4][0] = 0;
 freeTangramBlockLED2x4[4][0] = 0;
 freeTangramBlockRenderSide[4][0] = 1;

 freeTangramBlockX[4][1] = 0;
 freeTangramBlockY[4][1] = 0;
 freeTangramBlockZ[4][1] = 3;
 freeTangramBlockRT[4][1] = 5;
 freeTangramBlockLED2x2[4][1] = 0;
 freeTangramBlockLED2x4[4][1] = 0;
 freeTangramBlockRenderSide[4][1] = 1;

 freeTangramBlockX[4][2] = 4;
 freeTangramBlockY[4][2] = 0;
 freeTangramBlockZ[4][2] = 0;
 freeTangramBlockRT[4][2] = 4;
 freeTangramBlockLED2x2[4][2] = 0;
 freeTangramBlockLED2x4[4][2] = 0;
 freeTangramBlockRenderSide[4][2] = 0;

 freeTangramBlockX[4][3] = 0;
 freeTangramBlockY[4][3] = 1;
 freeTangramBlockZ[4][3] = 3;
 freeTangramBlockRT[4][3] = 4;
 freeTangramBlockLED2x2[4][3] = 0;
 freeTangramBlockLED2x4[4][3] = 0;
 freeTangramBlockRenderSide[4][3] = 1;

 freeTangramBlockX[4][4] = 5;
 freeTangramBlockY[4][4] = 1;
 freeTangramBlockZ[4][4] = 1;
 freeTangramBlockRT[4][4] = 2;
 freeTangramBlockLED2x2[4][4] = 0;
 freeTangramBlockLED2x4[4][4] = 0;
 freeTangramBlockRenderSide[4][4] = 0;

 freeTangramBlockX[4][5] = 1;
 freeTangramBlockY[4][5] = 2;
 freeTangramBlockZ[4][5] = 3;
 freeTangramBlockRT[4][5] = 3;
 freeTangramBlockLED2x2[4][5] = 0;
 freeTangramBlockLED2x4[4][5] = 0;
 freeTangramBlockRenderSide[4][5] = 1;

 freeTangramBlockX[4][6] = 4;
 freeTangramBlockY[4][6] = 2;
 freeTangramBlockZ[4][6] = 0;
 freeTangramBlockRT[4][6] = 0;
 freeTangramBlockLED2x2[4][6] = 0;
 freeTangramBlockLED2x4[4][6] = 0;
 freeTangramBlockRenderSide[4][6] = 0;

 freeTangramBlockX[4][7] = 3;
 freeTangramBlockY[4][7] = 2;
 freeTangramBlockZ[4][7] = 1;
 freeTangramBlockRT[4][7] = 6;
 freeTangramBlockLED2x2[4][7] = 0;
 freeTangramBlockLED2x4[4][7] = 0;
 freeTangramBlockRenderSide[4][7] = 0;

 freeTangramBlockCount[4] = 8;




 freeTangramBlockX[5][0] = 0;
 freeTangramBlockY[5][0] = 0;
 freeTangramBlockZ[5][0] = 6;
 freeTangramBlockRT[5][0] = 5;
 freeTangramBlockLED2x2[5][0] = 0;
 freeTangramBlockLED2x4[5][0] = 0;
 freeTangramBlockRenderSide[5][0] = 1;

 freeTangramBlockX[5][1] = 8;
 freeTangramBlockY[5][1] = 0;
 freeTangramBlockZ[5][1] = 5;
 freeTangramBlockRT[5][1] = 5;
 freeTangramBlockLED2x2[5][1] = 0;
 freeTangramBlockLED2x4[5][1] = 0;
 freeTangramBlockRenderSide[5][1] = 1;

 freeTangramBlockX[5][2] = 1;
 freeTangramBlockY[5][2] = 0;
 freeTangramBlockZ[5][2] = 1;
 freeTangramBlockRT[5][2] = 5;
 freeTangramBlockLED2x2[5][2] = 0;
 freeTangramBlockLED2x4[5][2] = 0;
 freeTangramBlockRenderSide[5][2] = 0;

 freeTangramBlockX[5][3] = 5;
 freeTangramBlockY[5][3] = 0;
 freeTangramBlockZ[5][3] = 0;
 freeTangramBlockRT[5][3] = 4;
 freeTangramBlockLED2x2[5][3] = 0;
 freeTangramBlockLED2x4[5][3] = 0;
 freeTangramBlockRenderSide[5][3] = 0;

 freeTangramBlockX[5][4] = 1;
 freeTangramBlockY[5][4] = 1;
 freeTangramBlockZ[5][4] = 5;
 freeTangramBlockRT[5][4] = 7;
 freeTangramBlockLED2x2[5][4] = 0;
 freeTangramBlockLED2x4[5][4] = 0;
 freeTangramBlockRenderSide[5][4] = 1;

 freeTangramBlockX[5][5] = 8;
 freeTangramBlockY[5][5] = 1;
 freeTangramBlockZ[5][5] = 6;
 freeTangramBlockRT[5][5] = 1;
 freeTangramBlockLED2x2[5][5] = 0;
 freeTangramBlockLED2x4[5][5] = 0;
 freeTangramBlockRenderSide[5][5] = 1;

 freeTangramBlockX[5][6] = 5;
 freeTangramBlockY[5][6] = 1;
 freeTangramBlockZ[5][6] = 1;
 freeTangramBlockRT[5][6] = 2;
 freeTangramBlockLED2x2[5][6] = 0;
 freeTangramBlockLED2x4[5][6] = 0;
 freeTangramBlockRenderSide[5][6] = 0;

 freeTangramBlockX[5][7] = 0;
 freeTangramBlockY[5][7] = 2;
 freeTangramBlockZ[5][7] = 6;
 freeTangramBlockRT[5][7] = 1;
 freeTangramBlockLED2x2[5][7] = 0;
 freeTangramBlockLED2x4[5][7] = 0;
 freeTangramBlockRenderSide[5][7] = 1;

 freeTangramBlockX[5][8] = 5;
 freeTangramBlockY[5][8] = 2;
 freeTangramBlockZ[5][8] = 0;
 freeTangramBlockRT[5][8] = 4;
 freeTangramBlockLED2x2[5][8] = 0;
 freeTangramBlockLED2x4[5][8] = 0;
 freeTangramBlockRenderSide[5][0] = 0;

 freeTangramBlockCount[5] = 9;
    
//################################################################################################################
    //################################################################################################################
//################################################################################################################
    //---------------------------------------------------------------------------------






levelBlockX[0][0][0] = 6;
 levelBlockY[0][0][0] = 0;
 levelBlockZ[0][0][0] = 3;
 levelBlockRT[0][0][0] = 7;
 levelBlockLED2x2[0][0][0] = 0;
 levelBlockLED2x4[0][0][0] = 0;
 levelBlockCount[0][0] = 1;
 levelBlockX[0][1][0] = 5;
 levelBlockY[0][1][0] = 0;
 levelBlockZ[0][1][0] = 3;
 levelBlockRT[0][1][0] = 7;
 levelBlockLED2x2[0][1][0] = 0;
 levelBlockLED2x4[0][1][0] = 0;
 levelBlockCount[0][1] = 1;
 levelBlockX[0][2][0] = 4;
 levelBlockY[0][2][0] = 0;
 levelBlockZ[0][2][0] = 3;
 levelBlockRT[0][2][0] = 7;
 levelBlockLED2x2[0][2][0] = 0;
 levelBlockLED2x4[0][2][0] = 0;
 levelBlockCount[0][2] = 1;
 levelBlockX[0][3][0] = 3;
 levelBlockY[0][3][0] = 0;
 levelBlockZ[0][3][0] = 3;
 levelBlockRT[0][3][0] = 7;
 levelBlockLED2x2[0][3][0] = 0;
 levelBlockLED2x4[0][3][0] = 0;
 levelBlockCount[0][3] = 1;
 levelBlockX[0][4][0] = 2;
 levelBlockY[0][4][0] = 0;
 levelBlockZ[0][4][0] = 3;
 levelBlockRT[0][4][0] = 7;
 levelBlockLED2x2[0][4][0] = 0;
 levelBlockLED2x4[0][4][0] = 0;
 levelBlockCount[0][4] = 1;
 levelBlockX[0][5][0] = 1;
 levelBlockY[0][5][0] = 0;
 levelBlockZ[0][5][0] = 3;
 levelBlockRT[0][5][0] = 7;
 levelBlockLED2x2[0][5][0] = 0;
 levelBlockLED2x4[0][5][0] = 0;
 levelBlockCount[0][5] = 1;

    levelBlockNumberStages[0] = 6;









    //2------------------

    levelBlockX[1][0][0] = 6;
    levelBlockY[1][0][0] = 0;
    levelBlockZ[1][0][0] = 2;
    levelBlockRT[1][0][0] = 7;
    levelBlockLED2x2[1][0][0] = 0;
    levelBlockLED2x4[1][0][0] = 0;
    levelBlockCount[1][0] = 1;
    levelBlockX[1][1][0] = 5;
    levelBlockY[1][1][0] = 0;
    levelBlockZ[1][1][0] = 2;
    levelBlockRT[1][1][0] = 7;
    levelBlockLED2x2[1][1][0] = 0;
    levelBlockLED2x4[1][1][0] = 0;
    levelBlockCount[1][1] = 1;
    levelBlockX[1][2][0] = 4;
    levelBlockY[1][2][0] = 0;
    levelBlockZ[1][2][0] = 2;
    levelBlockRT[1][2][0] = 7;
    levelBlockLED2x2[1][2][0] = 0;
    levelBlockLED2x4[1][2][0] = 0;
    levelBlockCount[1][2] = 1;
    levelBlockX[1][3][0] = 3;
    levelBlockY[1][3][0] = 0;
    levelBlockZ[1][3][0] = 2;
    levelBlockRT[1][3][0] = 7;
    levelBlockLED2x2[1][3][0] = 0;
    levelBlockLED2x4[1][3][0] = 0;
    levelBlockCount[1][3] = 1;
    levelBlockX[1][4][0] = 6;
    levelBlockY[1][4][0] = 0;
    levelBlockZ[1][4][0] = 3;
    levelBlockRT[1][4][0] = 7;
    levelBlockLED2x2[1][4][0] = 0;
    levelBlockLED2x4[1][4][0] = 0;
    levelBlockCount[1][4] = 1;
    levelBlockX[1][5][0] = 5;
    levelBlockY[1][5][0] = 0;
    levelBlockZ[1][5][0] = 3;
    levelBlockRT[1][5][0] = 7;
    levelBlockLED2x2[1][5][0] = 0;
    levelBlockLED2x4[1][5][0] = 0;
    levelBlockCount[1][5] = 1;
    levelBlockX[1][6][0] = 4;
    levelBlockY[1][6][0] = 0;
    levelBlockZ[1][6][0] = 3;
    levelBlockRT[1][6][0] = 7;
    levelBlockLED2x2[1][6][0] = 0;
    levelBlockLED2x4[1][6][0] = 0;
    levelBlockCount[1][6] = 1;
    levelBlockX[1][7][0] = 3;
    levelBlockY[1][7][0] = 0;
    levelBlockZ[1][7][0] = 3;
    levelBlockRT[1][7][0] = 7;
    levelBlockLED2x2[1][7][0] = 0;
    levelBlockLED2x4[1][7][0] = 0;
    levelBlockCount[1][7] = 1;
    levelBlockX[1][8][0] = 6;
    levelBlockY[1][8][0] = 0;
    levelBlockZ[1][8][0] = 4;
    levelBlockRT[1][8][0] = 7;
    levelBlockLED2x2[1][8][0] = 0;
    levelBlockLED2x4[1][8][0] = 0;
    levelBlockCount[1][8] = 1;
    levelBlockX[1][9][0] = 5;
    levelBlockY[1][9][0] = 0;
    levelBlockZ[1][9][0] = 4;
    levelBlockRT[1][9][0] = 7;
    levelBlockLED2x2[1][9][0] = 0;
    levelBlockLED2x4[1][9][0] = 0;
    levelBlockCount[1][9] = 1;
    levelBlockX[1][10][0] = 4;
    levelBlockY[1][10][0] = 0;
    levelBlockZ[1][10][0] = 4;
    levelBlockRT[1][10][0] = 7;
    levelBlockLED2x2[1][10][0] = 0;
    levelBlockLED2x4[1][10][0] = 0;
    levelBlockCount[1][10] = 1;
    levelBlockX[1][11][0] = 3;
    levelBlockY[1][11][0] = 0;
    levelBlockZ[1][11][0] = 4;
    levelBlockRT[1][11][0] = 7;
    levelBlockLED2x2[1][11][0] = 0;
    levelBlockLED2x4[1][11][0] = 0;
    levelBlockCount[1][11] = 1;


    levelBlockNumberStages[1] = 12;

      //3------------------

      levelBlockX[2][0][0] = 5;
 levelBlockY[2][0][0] = 0;
 levelBlockZ[2][0][0] = 3;
 levelBlockRT[2][0][0] = 5;
 levelBlockLED2x2[2][0][0] = 0;
 levelBlockLED2x4[2][0][0] = 0;
 levelBlockX[2][0][1] = 6;
 levelBlockY[2][0][1] = 1;
 levelBlockZ[2][0][1] = 1;
 levelBlockRT[2][0][1] = 3;
 levelBlockLED2x2[2][0][1] = 0;
 levelBlockLED2x4[2][0][1] = 0;
 levelBlockCount[2][0] = 2;
 levelBlockX[2][1][0] = 4;
 levelBlockY[2][1][0] = 0;
 levelBlockZ[2][1][0] = 4;
 levelBlockRT[2][1][0] = 5;
 levelBlockLED2x2[2][1][0] = 0;
 levelBlockLED2x4[2][1][0] = 0;
 levelBlockX[2][1][1] = 5;
 levelBlockY[2][1][1] = 1;
 levelBlockZ[2][1][1] = 2;
 levelBlockRT[2][1][1] = 3;
 levelBlockLED2x2[2][1][1] = 0;
 levelBlockLED2x4[2][1][1] = 0;
 levelBlockCount[2][1] = 2;
 levelBlockX[2][2][0] = 3;
 levelBlockY[2][2][0] = 0;
 levelBlockZ[2][2][0] = 4;
 levelBlockRT[2][2][0] = 5;
 levelBlockLED2x2[2][2][0] = 0;
 levelBlockLED2x4[2][2][0] = 0;
 levelBlockX[2][2][1] = 4;
 levelBlockY[2][2][1] = 1;
 levelBlockZ[2][2][1] = 2;
 levelBlockRT[2][2][1] = 3;
 levelBlockLED2x2[2][2][1] = 0;
 levelBlockLED2x4[2][2][1] = 0;
 levelBlockCount[2][2] = 2;
 levelBlockX[2][3][0] = 2;
 levelBlockY[2][3][0] = 0;
 levelBlockZ[2][3][0] = 4;
 levelBlockRT[2][3][0] = 5;
 levelBlockLED2x2[2][3][0] = 0;
 levelBlockLED2x4[2][3][0] = 0;
 levelBlockX[2][3][1] = 3;
 levelBlockY[2][3][1] = 1;
 levelBlockZ[2][3][1] = 2;
 levelBlockRT[2][3][1] = 3;
 levelBlockLED2x2[2][3][1] = 0;
 levelBlockLED2x4[2][3][1] = 0;
 levelBlockCount[2][3] = 2;
 levelBlockX[2][4][0] = 3;
 levelBlockY[2][4][0] = 0;
 levelBlockZ[2][4][0] = 3;
 levelBlockRT[2][4][0] = 4;
 levelBlockLED2x2[2][4][0] = 0;
 levelBlockLED2x4[2][4][0] = 0;
 levelBlockX[2][4][1] = 5;
 levelBlockY[2][4][1] = 1;
 levelBlockZ[2][4][1] = 4;
 levelBlockRT[2][4][1] = 2;
 levelBlockLED2x2[2][4][1] = 0;
 levelBlockLED2x4[2][4][1] = 0;
 levelBlockCount[2][4] = 2;
 levelBlockX[2][5][0] = 2;
 levelBlockY[2][5][0] = 0;
 levelBlockZ[2][5][0] = 3;
 levelBlockRT[2][5][0] = 4;
 levelBlockLED2x2[2][5][0] = 0;
 levelBlockLED2x4[2][5][0] = 0;
 levelBlockX[2][5][1] = 5;
 levelBlockY[2][5][1] = 1;
 levelBlockZ[2][5][1] = 4;
 levelBlockRT[2][5][1] = 2;
 levelBlockLED2x2[2][5][1] = 0;
 levelBlockLED2x4[2][5][1] = 0;
 levelBlockCount[2][5] = 2;
 levelBlockX[2][6][0] = 3;
 levelBlockY[2][6][0] = 0;
 levelBlockZ[2][6][0] = 3;
 levelBlockRT[2][6][0] = 4;
 levelBlockLED2x2[2][6][0] = 0;
 levelBlockLED2x4[2][6][0] = 0;
 levelBlockX[2][6][1] = 6;
 levelBlockY[2][6][1] = 1;
 levelBlockZ[2][6][1] = 4;
 levelBlockRT[2][6][1] = 2;
 levelBlockLED2x2[2][6][1] = 0;
 levelBlockLED2x4[2][6][1] = 0;
 levelBlockCount[2][6] = 2;
 levelBlockX[2][7][0] = 4;
 levelBlockY[2][7][0] = 0;
 levelBlockZ[2][7][0] = 3;
 levelBlockRT[2][7][0] = 7;
 levelBlockLED2x2[2][7][0] = 0;
 levelBlockLED2x4[2][7][0] = 0;
 levelBlockX[2][7][1] = 3;
 levelBlockY[2][7][1] = 1;
 levelBlockZ[2][7][1] = 6;
 levelBlockRT[2][7][1] = 1;
 levelBlockLED2x2[2][7][1] = 0;
 levelBlockLED2x4[2][7][1] = 0;
 levelBlockCount[2][7] = 2;
 levelBlockX[2][8][0] = 4;
 levelBlockY[2][8][0] = 0;
 levelBlockZ[2][8][0] = 3;
 levelBlockRT[2][8][0] = 7;
 levelBlockLED2x2[2][8][0] = 0;
 levelBlockLED2x4[2][8][0] = 0;
 levelBlockX[2][8][1] = 2;
 levelBlockY[2][8][1] = 1;
 levelBlockZ[2][8][1] = 5;
 levelBlockRT[2][8][1] = 1;
 levelBlockLED2x2[2][8][1] = 0;
 levelBlockLED2x4[2][8][1] = 0;
 levelBlockCount[2][8] = 2;
 levelBlockX[2][9][0] = 4;
 levelBlockY[2][9][0] = 0;
 levelBlockZ[2][9][0] = 3;
 levelBlockRT[2][9][0] = 7;
 levelBlockLED2x2[2][9][0] = 0;
 levelBlockLED2x4[2][9][0] = 0;
 levelBlockX[2][9][1] = 4;
 levelBlockY[2][9][1] = 1;
 levelBlockZ[2][9][1] = 5;
 levelBlockRT[2][9][1] = 1;
 levelBlockLED2x2[2][9][1] = 0;
 levelBlockLED2x4[2][9][1] = 0;
 levelBlockCount[2][9] = 2;
 levelBlockX[2][10][0] = 4;
 levelBlockY[2][10][0] = 0;
 levelBlockZ[2][10][0] = 3;
 levelBlockRT[2][10][0] = 7;
 levelBlockLED2x2[2][10][0] = 0;
 levelBlockLED2x4[2][10][0] = 0;
 levelBlockX[2][10][1] = 3;
 levelBlockY[2][10][1] = 1;
 levelBlockZ[2][10][1] = 2;
 levelBlockRT[2][10][1] = 4;
 levelBlockLED2x2[2][10][1] = 0;
 levelBlockLED2x4[2][10][1] = 0;
 levelBlockCount[2][10] = 2;
 levelBlockX[2][11][0] = 4;
 levelBlockY[2][11][0] = 0;
 levelBlockZ[2][11][0] = 3;
 levelBlockRT[2][11][0] = 7;
 levelBlockLED2x2[2][11][0] = 0;
 levelBlockLED2x4[2][11][0] = 0;
 levelBlockX[2][11][1] = 3;
 levelBlockY[2][11][1] = 1;
 levelBlockZ[2][11][1] = 3;
 levelBlockRT[2][11][1] = 4;
 levelBlockLED2x2[2][11][1] = 0;
 levelBlockLED2x4[2][11][1] = 0;
 levelBlockCount[2][11] = 2;
 levelBlockX[2][12][0] = 5;
 levelBlockY[2][12][0] = 0;
 levelBlockZ[2][12][0] = 3;
 levelBlockRT[2][12][0] = 7;
 levelBlockLED2x2[2][12][0] = 0;
 levelBlockLED2x4[2][12][0] = 0;
 levelBlockX[2][12][1] = 4;
 levelBlockY[2][12][1] = 1;
 levelBlockZ[2][12][1] = 3;
 levelBlockRT[2][12][1] = 4;
 levelBlockLED2x2[2][12][1] = 0;
 levelBlockLED2x4[2][12][1] = 0;
 levelBlockCount[2][12] = 2;
 levelBlockX[2][13][0] = 5;
 levelBlockY[2][13][0] = 0;
 levelBlockZ[2][13][0] = 3;
 levelBlockRT[2][13][0] = 7;
 levelBlockLED2x2[2][13][0] = 0;
 levelBlockLED2x4[2][13][0] = 0;
 levelBlockX[2][13][1] = 3;
 levelBlockY[2][13][1] = 1;
 levelBlockZ[2][13][1] = 3;
 levelBlockRT[2][13][1] = 4;
 levelBlockLED2x2[2][13][1] = 0;
 levelBlockLED2x4[2][13][1] = 0;
 levelBlockCount[2][13] = 2;
 levelBlockX[2][14][0] = 5;
 levelBlockY[2][14][0] = 0;
 levelBlockZ[2][14][0] = 5;
 levelBlockRT[2][14][0] = 6;
 levelBlockLED2x2[2][14][0] = 0;
 levelBlockLED2x4[2][14][0] = 0;
 levelBlockX[2][14][1] = 5;
 levelBlockY[2][14][1] = 1;
 levelBlockZ[2][14][1] = 3;
 levelBlockRT[2][14][1] = 7;
 levelBlockLED2x2[2][14][1] = 0;
 levelBlockLED2x4[2][14][1] = 0;
 levelBlockCount[2][14] = 2;
 levelBlockX[2][15][0] = 4;
 levelBlockY[2][15][0] = 0;
 levelBlockZ[2][15][0] = 6;
 levelBlockRT[2][15][0] = 6;
 levelBlockLED2x2[2][15][0] = 0;
 levelBlockLED2x4[2][15][0] = 0;
 levelBlockX[2][15][1] = 4;
 levelBlockY[2][15][1] = 1;
 levelBlockZ[2][15][1] = 4;
 levelBlockRT[2][15][1] = 7;
 levelBlockLED2x2[2][15][1] = 0;
 levelBlockLED2x4[2][15][1] = 0;
 levelBlockCount[2][15] = 2;
 levelBlockX[2][16][0] = 3;
 levelBlockY[2][16][0] = 0;
 levelBlockZ[2][16][0] = 4;
 levelBlockRT[2][16][0] = 5;
 levelBlockLED2x2[2][16][0] = 0;
 levelBlockLED2x4[2][16][0] = 0;
 levelBlockX[2][16][1] = 5;
 levelBlockY[2][16][1] = 1;
 levelBlockZ[2][16][1] = 4;
 levelBlockRT[2][16][1] = 6;
 levelBlockLED2x2[2][16][1] = 0;
 levelBlockLED2x4[2][16][1] = 0;
 levelBlockCount[2][16] = 2;

 levelBlockNumberStages[2] = 17;

















 levelBlockX[3][0][0] = 4;
 levelBlockY[3][0][0] = 0;
 levelBlockZ[3][0][0] = 3;
 levelBlockRT[3][0][0] = 7;
 levelBlockLED2x2[3][0][0] = 0;
 levelBlockLED2x4[3][0][0] = 0;
 levelBlockX[3][0][1] = 4;
 levelBlockY[3][0][1] = 1;
 levelBlockZ[3][0][1] = 2;
 levelBlockRT[3][0][1] = 3;
 levelBlockLED2x2[3][0][1] = 0;
 levelBlockLED2x4[3][0][1] = 0;
 levelBlockX[3][0][2] = 2;
 levelBlockY[3][0][2] = 2;
 levelBlockZ[3][0][2] = 6;
 levelBlockRT[3][0][2] = 1;
 levelBlockLED2x2[3][0][2] = 0;
 levelBlockLED2x4[3][0][2] = 0;
 levelBlockX[3][0][3] = 4;
 levelBlockY[3][0][3] = 2;
 levelBlockZ[3][0][3] = 4;
 levelBlockRT[3][0][3] = 5;
 levelBlockLED2x2[3][0][3] = 0;
 levelBlockLED2x4[3][0][3] = 0;
 levelBlockCount[3][0] = 4;
 levelBlockX[3][1][0] = 4;
 levelBlockY[3][1][0] = 0;
 levelBlockZ[3][1][0] = 3;
 levelBlockRT[3][1][0] = 7;
 levelBlockLED2x2[3][1][0] = 0;
 levelBlockLED2x4[3][1][0] = 0;
 levelBlockX[3][1][1] = 5;
 levelBlockY[3][1][1] = 1;
 levelBlockZ[3][1][1] = 3;
 levelBlockRT[3][1][1] = 3;
 levelBlockLED2x2[3][1][1] = 0;
 levelBlockLED2x4[3][1][1] = 0;
 levelBlockX[3][1][2] = 2;
 levelBlockY[3][1][2] = 1;
 levelBlockZ[3][1][2] = 4;
 levelBlockRT[3][1][2] = 5;
 levelBlockLED2x2[3][1][2] = 0;
 levelBlockLED2x4[3][1][2] = 0;
 levelBlockX[3][1][3] = 4;
 levelBlockY[3][1][3] = 2;
 levelBlockZ[3][1][3] = 3;
 levelBlockRT[3][1][3] = 7;
 levelBlockLED2x2[3][1][3] = 0;
 levelBlockLED2x4[3][1][3] = 0;
 levelBlockX[3][1][4] = 3;
 levelBlockY[3][1][4] = 3;
 levelBlockZ[3][1][4] = 3;
 levelBlockRT[3][1][4] = 0;
 levelBlockLED2x2[3][1][4] = 0;
 levelBlockLED2x4[3][1][4] = 0;
 levelBlockCount[3][1] = 5;
 levelBlockX[3][2][0] = 4;
 levelBlockY[3][2][0] = 0;
 levelBlockZ[3][2][0] = 3;
 levelBlockRT[3][2][0] = 7;
 levelBlockLED2x2[3][2][0] = 0;
 levelBlockLED2x4[3][2][0] = 0;
 levelBlockX[3][2][1] = 5;
 levelBlockY[3][2][1] = 1;
 levelBlockZ[3][2][1] = 3;
 levelBlockRT[3][2][1] = 3;
 levelBlockLED2x2[3][2][1] = 0;
 levelBlockLED2x4[3][2][1] = 0;
 levelBlockX[3][2][2] = 2;
 levelBlockY[3][2][2] = 1;
 levelBlockZ[3][2][2] = 4;
 levelBlockRT[3][2][2] = 5;
 levelBlockLED2x2[3][2][2] = 0;
 levelBlockLED2x4[3][2][2] = 0;
 levelBlockX[3][2][3] = 4;
 levelBlockY[3][2][3] = 2;
 levelBlockZ[3][2][3] = 3;
 levelBlockRT[3][2][3] = 7;
 levelBlockLED2x2[3][2][3] = 0;
 levelBlockLED2x4[3][2][3] = 0;
 levelBlockX[3][2][4] = 3;
 levelBlockY[3][2][4] = 3;
 levelBlockZ[3][2][4] = 6;
 levelBlockRT[3][2][4] = 1;
 levelBlockLED2x2[3][2][4] = 0;
 levelBlockLED2x4[3][2][4] = 0;
 levelBlockCount[3][2] = 5;
 levelBlockX[3][3][0] = 4;
 levelBlockY[3][3][0] = 0;
 levelBlockZ[3][3][0] = 4;
 levelBlockRT[3][3][0] = 6;
 levelBlockLED2x2[3][3][0] = 0;
 levelBlockLED2x4[3][3][0] = 0;
 levelBlockX[3][3][1] = 6;
 levelBlockY[3][3][1] = 1;
 levelBlockZ[3][3][1] = 4;
 levelBlockRT[3][3][1] = 2;
 levelBlockLED2x2[3][3][1] = 0;
 levelBlockLED2x4[3][3][1] = 0;
 levelBlockX[3][3][2] = 2;
 levelBlockY[3][3][2] = 2;
 levelBlockZ[3][3][2] = 5;
 levelBlockRT[3][3][2] = 1;
 levelBlockLED2x2[3][3][2] = 0;
 levelBlockLED2x4[3][3][2] = 0;
 levelBlockCount[3][3] = 3;

 levelBlockNumberStages[3] = 4;






 levelBlockX[4][0][0] = 5;
 levelBlockY[4][0][0] = 0;
 levelBlockZ[4][0][0] = 3;
 levelBlockRT[4][0][0] = 3;
 levelBlockLED2x2[4][0][0] = 0;
 levelBlockLED2x4[4][0][0] = 0;
 levelBlockX[4][0][1] = 6;
 levelBlockY[4][0][1] = 1;
 levelBlockZ[4][0][1] = 4;
 levelBlockRT[4][0][1] = 2;
 levelBlockLED2x2[4][0][1] = 0;
 levelBlockLED2x4[4][0][1] = 0;
 levelBlockX[4][0][2] = 6;
 levelBlockY[4][0][2] = 2;
 levelBlockZ[4][0][2] = 4;
 levelBlockRT[4][0][2] = 7;
 levelBlockLED2x2[4][0][2] = 0;
 levelBlockLED2x4[4][0][2] = 0;
 levelBlockX[4][0][3] = 3;
 levelBlockY[4][0][3] = 2;
 levelBlockZ[4][0][3] = 6;
 levelBlockRT[4][0][3] = 1;
 levelBlockLED2x2[4][0][3] = 0;
 levelBlockLED2x4[4][0][3] = 0;
 levelBlockX[4][0][4] = 4;
 levelBlockY[4][0][4] = 3;
 levelBlockZ[4][0][4] = 3;
 levelBlockRT[4][0][4] = 7;
 levelBlockLED2x2[4][0][4] = 0;
 levelBlockLED2x4[4][0][4] = 0;
 levelBlockCount[4][0] = 5;
 levelBlockX[4][1][0] = 5;
 levelBlockY[4][1][0] = 0;
 levelBlockZ[4][1][0] = 3;
 levelBlockRT[4][1][0] = 3;
 levelBlockLED2x2[4][1][0] = 0;
 levelBlockLED2x4[4][1][0] = 0;
 levelBlockX[4][1][1] = 6;
 levelBlockY[4][1][1] = 1;
 levelBlockZ[4][1][1] = 4;
 levelBlockRT[4][1][1] = 2;
 levelBlockLED2x2[4][1][1] = 0;
 levelBlockLED2x4[4][1][1] = 0;
 levelBlockX[4][1][2] = 6;
 levelBlockY[4][1][2] = 2;
 levelBlockZ[4][1][2] = 4;
 levelBlockRT[4][1][2] = 7;
 levelBlockLED2x2[4][1][2] = 0;
 levelBlockLED2x4[4][1][2] = 0;
 levelBlockX[4][1][3] = 3;
 levelBlockY[4][1][3] = 2;
 levelBlockZ[4][1][3] = 2;
 levelBlockRT[4][1][3] = 7;
 levelBlockLED2x2[4][1][3] = 0;
 levelBlockLED2x4[4][1][3] = 0;
 levelBlockCount[4][1] = 4;
 levelBlockX[4][2][0] = 5;
 levelBlockY[4][2][0] = 0;
 levelBlockZ[4][2][0] = 3;
 levelBlockRT[4][2][0] = 3;
 levelBlockLED2x2[4][2][0] = 0;
 levelBlockLED2x4[4][2][0] = 0;
 levelBlockX[4][2][1] = 6;
 levelBlockY[4][2][1] = 1;
 levelBlockZ[4][2][1] = 4;
 levelBlockRT[4][2][1] = 2;
 levelBlockLED2x2[4][2][1] = 0;
 levelBlockLED2x4[4][2][1] = 0;
 levelBlockX[4][2][2] = 6;
 levelBlockY[4][2][2] = 2;
 levelBlockZ[4][2][2] = 4;
 levelBlockRT[4][2][2] = 7;
 levelBlockLED2x2[4][2][2] = 0;
 levelBlockLED2x4[4][2][2] = 0;
 levelBlockX[4][2][3] = 4;
 levelBlockY[4][2][3] = 2;
 levelBlockZ[4][2][3] = 2;
 levelBlockRT[4][2][3] = 7;
 levelBlockLED2x2[4][2][3] = 0;
 levelBlockLED2x4[4][2][3] = 0;
 levelBlockCount[4][2] = 4;
 levelBlockX[4][3][0] = 5;
 levelBlockY[4][3][0] = 0;
 levelBlockZ[4][3][0] = 4;
 levelBlockRT[4][3][0] = 6;
 levelBlockLED2x2[4][3][0] = 0;
 levelBlockLED2x4[4][3][0] = 0;
 levelBlockX[4][3][1] = 3;
 levelBlockY[4][3][1] = 1;
 levelBlockZ[4][3][1] = 4;
 levelBlockRT[4][3][1] = 4;
 levelBlockLED2x2[4][3][1] = 0;
 levelBlockLED2x4[4][3][1] = 0;
 levelBlockX[4][3][2] = 4;
 levelBlockY[4][3][2] = 2;
 levelBlockZ[4][3][2] = 3;
 levelBlockRT[4][3][2] = 7;
 levelBlockLED2x2[4][3][2] = 0;
 levelBlockLED2x4[4][3][2] = 0;
 levelBlockCount[4][3] = 3;
 levelBlockX[4][4][0] = 5;
 levelBlockY[4][4][0] = 0;
 levelBlockZ[4][4][0] = 4;
 levelBlockRT[4][4][0] = 6;
 levelBlockLED2x2[4][4][0] = 0;
 levelBlockLED2x4[4][4][0] = 0;
 levelBlockX[4][4][1] = 5;
 levelBlockY[4][4][1] = 0;
 levelBlockZ[4][4][1] = 5;
 levelBlockRT[4][4][1] = 7;
 levelBlockLED2x2[4][4][1] = 0;
 levelBlockLED2x4[4][4][1] = 0;
 levelBlockX[4][4][2] = 5;
 levelBlockY[4][4][2] = 1;
 levelBlockZ[4][4][2] = 6;
 levelBlockRT[4][4][2] = 1;
 levelBlockLED2x2[4][4][2] = 0;
 levelBlockLED2x4[4][4][2] = 0;
 levelBlockX[4][4][3] = 4;
 levelBlockY[4][4][3] = 2;
 levelBlockZ[4][4][3] = 3;
 levelBlockRT[4][4][3] = 4;
 levelBlockLED2x2[4][4][3] = 0;
 levelBlockLED2x4[4][4][3] = 0;
 levelBlockX[4][4][4] = 3;
 levelBlockY[4][4][4] = 3;
 levelBlockZ[4][4][4] = 4;
 levelBlockRT[4][4][4] = 5;
 levelBlockLED2x2[4][4][4] = 0;
 levelBlockLED2x4[4][4][4] = 0;
 levelBlockCount[4][4] = 5;
 levelBlockX[4][5][0] = 8;
 levelBlockY[4][5][0] = 0;
 levelBlockZ[4][5][0] = 4;
 levelBlockRT[4][5][0] = 6;
 levelBlockLED2x2[4][5][0] = 0;
 levelBlockLED2x4[4][5][0] = 0;
 levelBlockX[4][5][1] = 8;
 levelBlockY[4][5][1] = 0;
 levelBlockZ[4][5][1] = 5;
 levelBlockRT[4][5][1] = 7;
 levelBlockLED2x2[4][5][1] = 0;
 levelBlockLED2x4[4][5][1] = 0;
 levelBlockX[4][5][2] = 6;
 levelBlockY[4][5][2] = 1;
 levelBlockZ[4][5][2] = 6;
 levelBlockRT[4][5][2] = 1;
 levelBlockLED2x2[4][5][2] = 0;
 levelBlockLED2x4[4][5][2] = 0;
 levelBlockX[4][5][3] = 5;
 levelBlockY[4][5][3] = 2;
 levelBlockZ[4][5][3] = 4;
 levelBlockRT[4][5][3] = 4;
 levelBlockLED2x2[4][5][3] = 0;
 levelBlockLED2x4[4][5][3] = 0;
 levelBlockX[4][5][4] = 4;
 levelBlockY[4][5][4] = 1;
 levelBlockZ[4][5][4] = 5;
 levelBlockRT[4][5][4] = 5;
 levelBlockLED2x2[4][5][4] = 0;
 levelBlockLED2x4[4][5][4] = 0;
 levelBlockX[4][5][5] = 3;
 levelBlockY[4][5][5] = 2;
 levelBlockZ[4][5][5] = 5;
 levelBlockRT[4][5][5] = 5;
 levelBlockLED2x2[4][5][5] = 0;
 levelBlockLED2x4[4][5][5] = 0;
 levelBlockCount[4][5] = 6;
 levelBlockX[4][6][0] = 3;
 levelBlockY[4][6][0] = 0;
 levelBlockZ[4][6][0] = 7;
 levelBlockRT[4][6][0] = 6;
 levelBlockLED2x2[4][6][0] = 0;
 levelBlockLED2x4[4][6][0] = 0;
 levelBlockX[4][6][1] = 4;
 levelBlockY[4][6][1] = 0;
 levelBlockZ[4][6][1] = 7;
 levelBlockRT[4][6][1] = 5;
 levelBlockLED2x2[4][6][1] = 0;
 levelBlockLED2x4[4][6][1] = 0;
 levelBlockX[4][6][2] = 2;
 levelBlockY[4][6][2] = 1;
 levelBlockZ[4][6][2] = 5;
 levelBlockRT[4][6][2] = 0;
 levelBlockLED2x2[4][6][2] = 0;
 levelBlockLED2x4[4][6][2] = 0;
 levelBlockX[4][6][3] = 4;
 levelBlockY[4][6][3] = 2;
 levelBlockZ[4][6][3] = 4;
 levelBlockRT[4][6][3] = 7;
 levelBlockLED2x2[4][6][3] = 0;
 levelBlockLED2x4[4][6][3] = 0;
 levelBlockX[4][6][4] = 3;
 levelBlockY[4][6][4] = 1;
 levelBlockZ[4][6][4] = 3;
 levelBlockRT[4][6][4] = 4;
 levelBlockLED2x2[4][6][4] = 0;
 levelBlockLED2x4[4][6][4] = 0;
 levelBlockX[4][6][5] = 3;
 levelBlockY[4][6][5] = 2;
 levelBlockZ[4][6][5] = 2;
 levelBlockRT[4][6][5] = 4;
 levelBlockLED2x2[4][6][5] = 0;
 levelBlockLED2x4[4][6][5] = 0;
 levelBlockCount[4][6] = 6;
 levelBlockX[4][7][0] = 3;
 levelBlockY[4][7][0] = 0;
 levelBlockZ[4][7][0] = 7;
 levelBlockRT[4][7][0] = 6;
 levelBlockLED2x2[4][7][0] = 0;
 levelBlockLED2x4[4][7][0] = 0;
 levelBlockX[4][7][1] = 4;
 levelBlockY[4][7][1] = 0;
 levelBlockZ[4][7][1] = 7;
 levelBlockRT[4][7][1] = 5;
 levelBlockLED2x2[4][7][1] = 0;
 levelBlockLED2x4[4][7][1] = 0;
 levelBlockX[4][7][2] = 2;
 levelBlockY[4][7][2] = 1;
 levelBlockZ[4][7][2] = 5;
 levelBlockRT[4][7][2] = 0;
 levelBlockLED2x2[4][7][2] = 0;
 levelBlockLED2x4[4][7][2] = 0;
 levelBlockX[4][7][3] = 4;
 levelBlockY[4][7][3] = 2;
 levelBlockZ[4][7][3] = 4;
 levelBlockRT[4][7][3] = 7;
 levelBlockLED2x2[4][7][3] = 0;
 levelBlockLED2x4[4][7][3] = 0;
 levelBlockX[4][7][4] = 3;
 levelBlockY[4][7][4] = 1;
 levelBlockZ[4][7][4] = 3;
 levelBlockRT[4][7][4] = 4;
 levelBlockLED2x2[4][7][4] = 0;
 levelBlockLED2x4[4][7][4] = 0;
 levelBlockX[4][7][5] = 3;
 levelBlockY[4][7][5] = 2;
 levelBlockZ[4][7][5] = 2;
 levelBlockRT[4][7][5] = 4;
 levelBlockLED2x2[4][7][5] = 0;
 levelBlockLED2x4[4][7][5] = 0;
 levelBlockCount[4][7] = 6;
 levelBlockX[4][8][0] = 3;
 levelBlockY[4][8][0] = 0;
 levelBlockZ[4][8][0] = 4;
 levelBlockRT[4][8][0] = 6;
 levelBlockLED2x2[4][8][0] = 0;
 levelBlockLED2x4[4][8][0] = 0;
 levelBlockX[4][8][1] = 4;
 levelBlockY[4][8][1] = 0;
 levelBlockZ[4][8][1] = 4;
 levelBlockRT[4][8][1] = 5;
 levelBlockLED2x2[4][8][1] = 0;
 levelBlockLED2x4[4][8][1] = 0;
 levelBlockX[4][8][2] = 3;
 levelBlockY[4][8][2] = 1;
 levelBlockZ[4][8][2] = 4;
 levelBlockRT[4][8][2] = 4;
 levelBlockLED2x2[4][8][2] = 0;
 levelBlockLED2x4[4][8][2] = 0;
 levelBlockCount[4][8] = 3;
 levelBlockX[4][9][0] = 3;
 levelBlockY[4][9][0] = 0;
 levelBlockZ[4][9][0] = 4;
 levelBlockRT[4][9][0] = 6;
 levelBlockLED2x2[4][9][0] = 0;
 levelBlockLED2x4[4][9][0] = 0;
 levelBlockX[4][9][1] = 4;
 levelBlockY[4][9][1] = 0;
 levelBlockZ[4][9][1] = 4;
 levelBlockRT[4][9][1] = 5;
 levelBlockLED2x2[4][9][1] = 0;
 levelBlockLED2x4[4][9][1] = 0;
 levelBlockX[4][9][2] = 3;
 levelBlockY[4][9][2] = 1;
 levelBlockZ[4][9][2] = 4;
 levelBlockRT[4][9][2] = 4;
 levelBlockLED2x2[4][9][2] = 0;
 levelBlockLED2x4[4][9][2] = 0;
 levelBlockX[4][9][3] = 3;
 levelBlockY[4][9][3] = 2;
 levelBlockZ[4][9][3] = 3;
 levelBlockRT[4][9][3] = 4;
 levelBlockLED2x2[4][9][3] = 0;
 levelBlockLED2x4[4][9][3] = 0;
 levelBlockX[4][9][4] = 5;
 levelBlockY[4][9][4] = 3;
 levelBlockZ[4][9][4] = 4;
 levelBlockRT[4][9][4] = 6;
 levelBlockLED2x2[4][9][4] = 0;
 levelBlockLED2x4[4][9][4] = 0;
 levelBlockX[4][9][5] = 3;
 levelBlockY[4][9][5] = 3;
 levelBlockZ[4][9][5] = 4;
 levelBlockRT[4][9][5] = 6;
 levelBlockLED2x2[4][9][5] = 0;
 levelBlockLED2x4[4][9][5] = 0;
 levelBlockCount[4][9] = 6;

 levelBlockNumberStages[4] = 10;

}

function freeTangramCreateGame(level){

    let stage = Math.floor(Math.random()*levelBlockNumberStages[level -1]) ;
    
    while(stage == freeTangramLastStage[level-1]){
        stage = Math.floor(Math.random()*levelBlockNumberStages[level -1]) ;
    }

    console.log("level: " + level);
    console.log("stage: " + stage);


    freeTangramLastStage[level -1] = stage;
    freeTangramWinning = 0;

    //%%%%%%%%%%%%?
    tangramCareColor = false;

    tangramRemoveShadowEnabled = true;
    tangramErrorColorEnabled = true;

    tangramIncludeSideA = true;
    tangramIncludeSideB = true;
    tangramIncludeSideC = true;
    
    //%%%%%%%%%%%%%%%%?

    //freeTangramState = 0;    
    freeTangramLevel = (level-1);
    //freeTangramStage = stage;




    gameDefineBlockPixels(levelBlockCount[level-1][stage],  levelBlockX[level-1][stage], levelBlockY[level - 1][stage], levelBlockZ[level - 1][stage], levelBlockRT[level-1][stage], levelBlockLED2x2[level -1][stage], levelBlockLED2x4[level -1][stage], 0);
  


    //tangram
    defineLevelPlanes();


    
    //level planes:

/*
    console.log("renderCountSideA:  " + renderCountSideA ); 
        for(let l = 0; l < renderCountSideA; l++){

                console.log("renderSideAX " + l + " " +  renderSideAX[l]);
                console.log("renderSideAZ " + l + " " +  renderSideAZ[l]);
             
            }

*/




    baseLED[0] = 0x10;
    baseLED[1] = 0x20;
    
    blocksRender = 1;




}
function freeTangramSetBlockColor(color, side, Y, XZ, blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset ){

    for(let i = blocksOffset; i < blocksCount + blocksOffset; i++){

        
        if(blocksY[i] == Y && freeTangramLevelBlockFind(i) != freeTangramBlockCount[freeTangramLevel]){
            
            
            let z = freeTangramLevelBlockFind(i); 

    
           
            /*console.log("Z: " + z);
            console.log("side: " + side);
            console.log("freeTangramBlockRenderSide[freeTangramLevel][z]: " + freeTangramBlockRenderSide[freeTangramLevel][z]);
*/
            if(z != freeTangramBlockCount[freeTangramLevel] && freeTangramBlockRenderSide[freeTangramLevel][z] == side  ){

               // console.log("Z3: " + color);
                if((blocksX[i] == XZ || side == 1) &&
                    (blocksZ[i] == XZ || side == 0)) {
                       // blockLED2x2[i] &= (color | 0x38); //need to deal with side
                      // console.log("A: " + color);
                      blockLED2x2[i] = (color << 3 | (blockLED2x2[i] & 0x07));
                     // blockLED2x2[i] = (color | (blockLED2x2[i] & 0x38));
                        //blockLED2x2[i] = (color | (blockLED2x2[i] & 0x38));
                }else if((((blocksX[i] == XZ - 1 && (blocksRT[i] & 0x03) == 0) || (blocksX[i] == XZ + 1 && (blocksRT[i] & 0x03) == 2) )|| side == 1) &&
                    (((blocksZ[i] == XZ - 1 && (blocksRT[i] & 0x03) == 3) || (blocksZ[i] == XZ + 1 && (blocksRT[i] & 0x03) == 1) )|| side == 0)) {
                   // blockLED2x2[i] &= (color | 0x38); //need to deal with side
                  // console.log("B: " + color);
                   //
                   blockLED2x2[i] = (color | (blockLED2x2[i] & 0x38));
                   //blockLED2x2[i] = (color << 3 | (blockLED2x2[i] & 0x07));
                    //blockLED2x2[i] = (color | (blockLED2x2[i] & 0x38));


                }else if((((blocksX[i] == XZ - 2 && (blocksRT[i] & 0x0F) == 0) || (blocksX[i] == XZ + 2 && (blocksRT[i] & 0x0F) == 2) )|| side == 1) &&
                    (((blocksZ[i] == XZ - 2 && (blocksRT[i] & 0x0F) == 3) || (blocksZ[i] == XZ + 2 && (blocksRT[i] & 0x0F) == 1) )|| side == 0) ) {
                   // blockLED2x2[i] &= (color | 0x38); //need to deal with side
                  // console.log("B: " + color);
                   //
                   blockLED2x4[i] = (color << 3 | (blockLED2x4[i] & 0x07));
                   //blockLED2x2[i] = (color << 3 | (blockLED2x2[i] & 0x07));
                    //blockLED2x2[i] = (color | (blockLED2x2[i] & 0x38));


                }else if((((blocksX[i] == XZ - 3 && (blocksRT[i] & 0x0F) == 0) || (blocksX[i] == XZ + 3 && (blocksRT[i] & 0x0F) == 2) )|| side == 1) &&

                (((blocksZ[i] == XZ - 3 && (blocksRT[i] & 0x0F) == 3) || (blocksZ[i] == XZ + 3 && (blocksRT[i] & 0x0F) == 1) )|| side == 0)) {
                   // blockLED2x2[i] &= (color | 0x38); //need to deal with side
                  // console.log("B: " + color);
                   //
                   blockLED2x4[i] = (color | (blockLED2x4[i] & 0x38));
                   //blockLED2x2[i] = (color << 3 | (blockLED2x2[i] & 0x07));
                    //blockLED2x2[i] = (color | (blockLED2x2[i] & 0x38));


                }


            }

        }

           //---
    }


}


function freeTangramRender(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset){


    if(freeTangramWinning == 4){
        return;
    }
    if(freeTangramRenderBaseShape(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset)){
       
       
        //translate non base shape into pixels
        //make planes

        //filter out 
        //!!!else if (memoLevelBlockFind(i) == levelBlockCount[memoLevel][memoStage]){
            //freeTangramLevelBlockFind(iB)

        let tmpBlocksX = [];
        let tmpBlocksY = [];
        let tmpBlocksZ = [];
        let tmpBlocksRT = [];
        let tmpBlockLED2x2 = [];
        let tmpBlockLED2x4 = [];
        let tmpBlocksCount = 0;

        for(let i = blocksOffset; i < blocksCount + blocksOffset; i++){
            blockLED2x2[i] = 0;
            blockLED2x4[i] = 0;

            if(freeTangramLevelBlockFind(i) == freeTangramBlockCount[freeTangramLevel]){
                
         tmpBlocksX[tmpBlocksCount] = blocksX[i];
         tmpBlocksY[tmpBlocksCount] = blocksY[i];
         tmpBlocksZ[tmpBlocksCount] = blocksZ[i];
         tmpBlocksRT[tmpBlocksCount] = blocksRT[i];
         tmpBlockLED2x2[tmpBlocksCount] = blockLED2x2[i];
         tmpBlockLED2x4[tmpBlocksCount] = blockLED2x4[i];
         
                tmpBlocksCount++;
            }
        }

        gameDefineBlockPixels(tmpBlocksCount, tmpBlocksX, tmpBlocksY, tmpBlocksZ, tmpBlocksRT, tmpBlockLED2x2, tmpBlockLED2x4, 0);
        
        //tangram 
        defineGamePlanes();

        

        //what do I do in Tangram?
        //compare to level planes
        //map planes onto blocks

        //check if all blocks are off

//Turn to get more pixels

        //--------------------

//clear all blocks
/*
for(let i = blocksOffset; i < blocksCount + blocksOffset; i++){
 blockLED2x2[i] = 0;
 blockLED2x4[i] = 0;
}
*/

        //let renderCountA = 0;
        //let renderCountB = 0;
       // let renderCountC = 0;
        let l;

      //  let errorBlock = false;
      /*
      console.log("renderGameCountSideA:  " + renderGameCountSideA ); 
      for( l = 0; l < renderCountSideA; l++){

              console.log("renderGameSideAX " + l + " " +  renderGameSideAX[l]);
              console.log("renderGameSideAZ " + l + " " +  renderGameSideAZ[l]);
           
      }*/

      //clear all blocks
        //Go though render
            // set blocks accordingly
        
        //go rhough blocks
            // update blocks, check color of level blocks

            //AAAAAA

            for(let i = 0; i < renderCountSideA; i++){
                freeTangramSetBlockColor(0x04, 0, renderSideAY[i] ,renderSideAX[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
             

            }
            
            for(let i = 0; i < renderGameCountSideA; i++){
                for( l = 0; l < renderCountSideA; l++){

                    if(renderSideAX[l] == renderGameSideAX[i] &&
                        renderSideAY[l] == renderGameSideAY[i]// &&
                       // renderSideAZ[i] == renderGameSideAZ[l] 
                                                 
                    ){
                       // console.log("TT");
                       //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! why not trigger on 2x4
                        break;
                    }

                }

                if(l == renderCountSideA){
                    //set red
                    freeTangramSetBlockColor(0x01, 0, renderGameSideAY[i] ,renderGameSideAX[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
               
                }else{
                    freeTangramSetBlockColor(0x02, 0, renderGameSideAY[i] ,renderGameSideAX[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
                
                }


            }
            

            //BBBBBBBBBBBBBBBBBBB

            for(let i = 0; i < renderCountSideB; i++){
                freeTangramSetBlockColor(0x04, 1, renderSideBY[i] ,renderSideBZ[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
             

            }

            for(let i = 0; i < renderGameCountSideB; i++){
                for( l = 0; l < renderCountSideB; l++){

                    if(renderSideBZ[l] == renderGameSideBZ[i] &&
                        renderSideBY[l] == renderGameSideBY[i]// &&
                       // renderSideAZ[i] == renderGameSideAZ[l] 
                                                 
                    ){
                       // console.log("TT");
                       //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! why not trigger on 2x4
                        break;
                    }

                }

                if(l == renderCountSideB){
                    //set red
                    freeTangramSetBlockColor(0x01, 1, renderGameSideBY[i] ,renderGameSideBZ[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
               
                }else{
                    freeTangramSetBlockColor(0x02, 1, renderGameSideBY[i] ,renderGameSideBZ[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
                
                }


            }

            let allGreen = true;

            for(let i = blocksOffset; i < blocksCount + blocksOffset; i++){

                if((blockLED2x2[i] & 0x2D) != 0 ){
                    allGreen = false;
                }else if((blockLED2x4[i] & 0x2D) != 0){
                    allGreen = false;
                }
            }

            if(allGreen){
                if(freeTangramWinning == 3){
                    biloWinning = true;
                    
                  }
                freeTangramWinning++;
                  
                  
                  
            }
/*
        for(let i = 0; i < renderCountSideA; i++){
            for(l = 0; l < renderGameCountSideA; l++){
                if(renderSideAX[i] == renderGameSideAX[l] &&
                    renderSideAY[i] == renderGameSideAY[l]// &&
                   // renderSideAZ[i] == renderGameSideAZ[l] 
                                             
                ){
                    console.log("TT");
                   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! why not trigger on 2x4
                    break;
                }

           }

            if(l == renderGameCountSideA){

              //  console.log("C1");
                freeTangramSetBlockColor(0x00, 0, renderSideAY[i] ,renderSideAX[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
                 

             //render according to game
             //
                
             //   if(tangramRemoveShadowEnabled){

         //   }
               // renderCountA++;

            }else{
                if(renderSideAColor[i] == 0){
                    //console.log("C2");
                    freeTangramSetBlockColor(0x01, 0, renderSideAY[i] ,renderSideAX[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
                    //red
                }else{
                    //console.log("C3");
                    freeTangramSetBlockColor(0x02, 0, renderSideAY[i] ,renderSideAX[i], blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset );
                 
                    //green
                }
                
                //render green
            }

        }
        */
    }
}


//Very similar to MEMO
function freeTangramRenderBaseShape(blocksX, blocksY, blocksZ, blocksRT, blockLED2x2, blockLED2x4, blocksUseAlpha, blocksOffset){
    let initialblocksCount = blocksCount + blocksOffset;
    let i;
    let iGB;
    let noOfBlocksFound = 0;
    let gBNoOfBlocksShown = 1;
    let blocksFound = [];

    guiLevelNoRotateBlockSign();

    for(iGB = 0; iGB < freeTangramBlockCount[freeTangramLevel]; iGB++ ){
           /* console.log("iGB: " + iGB);
            console.log("freeTangramBlockCount[freeTangramLevel]: " + freeTangramBlockCount[freeTangramLevel] );
            console.log("freeTangramLevel: " + freeTangramLevel);*/
            for(i = blocksOffset; i < initialblocksCount; i++ ){
                
    
                if( blocksY[i] == freeTangramBlockY[freeTangramLevel][iGB]){/* &&
                    blockLED2x2[i] == freeTangramBlockLED2x2[freeTangramLevel][iGB] &&
                    blockLED2x4[i] == freeTangramBlockLED2x4[freeTangramLevel][iGB]*/
                    
                    //console.log("blocksRT[i]: " + blocksRT[i] );

    
                    if(blocksX[i] == freeTangramBlockX[freeTangramLevel][iGB] &&
                        blocksZ[i] == freeTangramBlockZ[freeTangramLevel][iGB] &&
                        blocksRT[i] == freeTangramBlockRT[freeTangramLevel][iGB] 
                        ){
                            if(((blocksRT[i] & 0x03) == 0 && freeTangramBlockRenderSide[freeTangramLevel][iGB] == 0) ||
                            ((blocksRT[i] & 0x03) == 1 && freeTangramBlockRenderSide[freeTangramLevel][iGB] == 1) ||
                            ((blocksRT[i] & 0x03) == 2 && freeTangramBlockRenderSide[freeTangramLevel][iGB] == 0) || 
                            ((blocksRT[i] & 0x03) == 3 && freeTangramBlockRenderSide[freeTangramLevel][iGB] == 1)){
                                blocksFound[i] = 1;
                                break;
                            }else{
                                blockLED2x2[i] = 0x1B;
                                guiLevelRotateBlockSign();
                                //console.log("(blocksRT[i] & 0x04): " + (blocksRT[i] & 0x04));
                                //console.log("freeTangramBlockRenderSide[freeTangramLevel][iGB]: " + freeTangramBlockRenderSide[freeTangramLevel][iGB]);
                            }
                           // console.log("found");
                            
                    //2x4  
                    }else if((blocksRT[i] & 0x04) == 0 && (freeTangramBlockRT[freeTangramLevel][iGB] & 0x04) == 0 )
                    {
                     //   console.log("AAAAAAAA"  )
                       if((blocksRT[i] & 0x03) == 0 && 
                            (freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) == 2 &&
                            blocksX[i] +3 == freeTangramBlockX[freeTangramLevel][iGB] &&
                            blocksZ[i] +1 == freeTangramBlockZ[freeTangramLevel][iGB] )
                        {
                          //  console.log("XXXXXXXXXX"  );
                            blocksFound[i] = 1;
                            break;
                        }else if((blocksRT[i] & 0x03) == 1 && 
                            (freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) == 3 &&
                            blocksX[i] +1 == freeTangramBlockX[freeTangramLevel][iGB] &&
                            blocksZ[i] -3 == freeTangramBlockZ[freeTangramLevel][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 2 && 
                            (freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) == 0 &&
                            blocksX[i] -3 == freeTangramBlockX[freeTangramLevel][iGB] &&
                            blocksZ[i] -1 == freeTangramBlockZ[freeTangramLevel][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }else if((blocksRT[i] & 0x03) == 3 && 
                            (freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) == 1 &&
                            blocksX[i] -1 == freeTangramBlockX[freeTangramLevel][iGB] &&
                            blocksZ[i] +3 == freeTangramBlockZ[freeTangramLevel][iGB] ){
                                blocksFound[i] = 1;
                                break;
                        }

                        
                    //2x2    
                    }else if((blocksRT[i] & 0x04) == 0x04 && (freeTangramBlockRT[freeTangramLevel][iGB] & 0x04) == 0x04 )
                    {
                        if((blocksRT[i] & 0x03) == 0){
                            if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                                freeTangramBlockX[freeTangramLevel][iGB] == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] - 1 == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 0){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
        
                            }else if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  2 &&
                                freeTangramBlockX[freeTangramLevel][iGB] - 1 == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] - 1 == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 0){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
                            
                            }else if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  3 &&
                                freeTangramBlockX[freeTangramLevel][iGB] - 1 == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 0){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
                            
                            }
                            
                          }else if((blocksRT[i] & 0x03) == 1){
        
                            if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                                freeTangramBlockX[freeTangramLevel][iGB] -1 == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB]  == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 1){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
        
                            }else if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  2 &&
                                freeTangramBlockX[freeTangramLevel][iGB] - 1 == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] + 1 == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 1){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
                            
                            }else if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                                freeTangramBlockX[freeTangramLevel][iGB] == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] +1 == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 1){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
                            
                            }
                            
                            
                        }else if((blocksRT[i] & 0x03) == 2){
        
                            if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  1 &&
                                freeTangramBlockX[freeTangramLevel][iGB] == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] + 1 == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 0){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
        
                            }else if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -2 &&
                                freeTangramBlockX[freeTangramLevel][iGB] + 1 == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] + 1 == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 0){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
                            
                            }else if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                                freeTangramBlockX[freeTangramLevel][iGB] + 1 == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 0){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
                            
                            }        
        
                        }else if((blocksRT[i] & 0x03) == 3){

                                    
                            if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -3 &&
                                freeTangramBlockX[freeTangramLevel][iGB] +1 == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB]  == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 1){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
        
                            }else if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -2 &&
                                freeTangramBlockX[freeTangramLevel][iGB] + 1 == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] - 1 == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 1){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
                            
                            }else if((freeTangramBlockRT[freeTangramLevel][iGB] & 0x03) - (blocksRT[i] & 0x03) ==  -1 &&
                                freeTangramBlockX[freeTangramLevel][iGB]  == blocksX[i] &&
                                freeTangramBlockZ[freeTangramLevel][iGB] -1 == blocksZ[i] ){
                                    if(freeTangramBlockRenderSide[freeTangramLevel][iGB] == 1){
                                        blocksFound[i] = 1;
                                        break;
                                    }else{
                                        blockLED2x2[i] = 0x1B;
                                        guiLevelRotateBlockSign();
                                    }
                            
                            }
        
                        }
                    }
                }

            
            }
    
         
            if(i == initialblocksCount && noOfBlocksFound < gBNoOfBlocksShown){
                
                
               // console.log("blocksCount 2 : " +blocksCount);
                blocksX[blocksCount + blocksOffset] = freeTangramBlockX[freeTangramLevel][iGB];
                blocksY[blocksCount+ blocksOffset] = freeTangramBlockY[freeTangramLevel][iGB];
                blocksZ[blocksCount + blocksOffset] = freeTangramBlockZ[freeTangramLevel][iGB];
                blocksRT[blocksCount+ blocksOffset] = freeTangramBlockRT[freeTangramLevel][iGB];
                blockLED2x2[blocksCount + blocksOffset] = freeTangramBlockLED2x2[freeTangramLevel][iGB];
                blockLED2x4[blocksCount + blocksOffset] = freeTangramBlockLED2x4[freeTangramLevel][iGB];
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



function freeTangramLevelBlockFind(iB){


  /*  freeTangramBlockX[0][0] = 2; 
    freeTangramBlockY[0][0] = 0; 
    freeTangramBlockZ[0][0] = 2; 
    freeTangramBlockRT[0][0] = 4; 
    freeTangramBlockLED2x2[0][0] = 0; 
    freeTangramBlockLED2x4[0][0] = 0;
    freeTangramBlockRenderSide[0][0] = 0;

    freeTangramBlockCount[0] = 2; */

    ///let aBlockFound = false;
    let i;
    
    for(i = 0; i < freeTangramBlockCount[freeTangramLevel] ; i++ ){
    
    
    
        if( blocksY[iB] == freeTangramBlockY[freeTangramLevel][i]){ //&&
            //blockLED2x2[iB] == freeTangramBlockLED2x2[freeTangramLevel][i] &&
          //  blockLED2x4[iB] == freeTangramBlockLED2x4[freeTangramLevel][i]
            
            //console.log("blocksRT[i]: " + blocksRT[i] );
    
    
            if(blocksX[iB] == freeTangramBlockX[freeTangramLevel][i] &&
                blocksZ[iB] == freeTangramBlockZ[freeTangramLevel][i] &&
                blocksRT[iB] == freeTangramBlockRT[freeTangramLevel][i] 
                ){
                    //console.log("found");
                    //let aBlockFound = true;
                    break;
            //2x4  
            }else if((blocksRT[iB]  & 0x04) == 0 && (freeTangramBlockRT[freeTangramLevel][i] & 0x04) == 0 )
            {
             //   console.log("AAAAAAAA"  )
               if((blocksRT[iB]  & 0x03) == 0 && 
                    (freeTangramBlockRT[freeTangramLevel][i] & 0x03) == 2 &&
                    blocksX[iB]  +3 == freeTangramBlockX[freeTangramLevel][i] &&
                    blocksZ[iB]  +1 == freeTangramBlockZ[freeTangramLevel][i] )
                {
                  //  console.log("XXXXXXXXXX"  );
                  //let aBlockFound = true;
                    break;
                }else if((blocksRT[iB]  & 0x03) == 1 && 
                    (freeTangramBlockRT[freeTangramLevel][i] & 0x03) == 3 &&
                    blocksX[iB]  +1 == freeTangramBlockX[freeTangramLevel][i] &&
                    blocksZ[iB]  -3 == freeTangramBlockZ[freeTangramLevel][i] ){
                        //let aBlockFound = true;
                        break;
                }else if((blocksRT[iB]  & 0x03) == 2 && 
                    (freeTangramBlockRT[freeTangramLevel][i] & 0x03) == 0 &&
                    blocksX[iB]  -3 == freeTangramBlockX[freeTangramLevel][i] &&
                    blocksZ[iB] -1 == freeTangramBlockZ[freeTangramLevel][i] ){
                        //let aBlockFound = true;
                        break;
                }else if((blocksRT[iB]  & 0x03) == 3 && 
                    (freeTangramBlockRT[freeTangramLevel][i] & 0x03) == 1 &&
                    blocksX[iB]  -1 == freeTangramBlockX[freeTangramLevel][i] &&
                    blocksZ[iB]  +3 == freeTangramBlockZ[freeTangramLevel][i] ){
                        //let aBlockFound = true;
                        break;
                }
    
                
            //2x2    
            }else if((blocksRT[iB]  & 0x04) == 0x04 && (freeTangramBlockRT[freeTangramLevel][i] & 0x04) == 0x04 )
            {
                if((blocksRT[iB]  & 0x03) == 0){
                    if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  1 &&
                        freeTangramBlockX[freeTangramLevel][i] == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] - 1 == blocksZ[iB]  ){
                            //let aBlockFound = true;
                            break;
    
                    }else if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  2 &&
                        freeTangramBlockX[freeTangramLevel][i] - 1 == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] - 1 == blocksZ[iB] ){
                        //let aBlockFound = true;
                        break;
                    
                    }else if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  3 &&
                        freeTangramBlockX[freeTangramLevel][i] - 1 == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] == blocksZ[iB]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }
                    
                  }else if((blocksRT[iB]  & 0x03) == 1){
    
                    if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  1 &&
                        freeTangramBlockX[freeTangramLevel][i] -1 == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i]  == blocksZ[iB]  ){
                            //let aBlockFound = true;
                            break;
    
                    }else if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  2 &&
                        freeTangramBlockX[freeTangramLevel][i] - 1 == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] + 1 == blocksZ[iB]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }else if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  -1 &&
                        freeTangramBlockX[freeTangramLevel][i] == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] +1 == blocksZ[iB]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }
                    
                    
                }else if((blocksRT[iB]  & 0x03) == 2){
    
                    if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  1 &&
                        freeTangramBlockX[freeTangramLevel][i] == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] + 1 == blocksZ[iB]  ){
                            //let aBlockFound = true;
                            break;
    
                    }else if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  -2 &&
                        freeTangramBlockX[freeTangramLevel][i] + 1 == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] + 1 == blocksZ[iB]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }else if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB] & 0x03) ==  -1 &&
                        freeTangramBlockX[freeTangramLevel][i] + 1 == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] == blocksZ[iB] ){
                        //let aBlockFound = true;
                        break;
                    
                    }        
    
                }else if((blocksRT[iB]  & 0x03) == 3){
    
                    if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  -3 &&
                        freeTangramBlockX[freeTangramLevel][i] +1 == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i]  == blocksZ[iB]  ){
                            //let aBlockFound = true;
                            break;
    
                    }else if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  -2 &&
                        freeTangramBlockX[freeTangramLevel][i] + 1 == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] - 1 == blocksZ[iB]  ){
                        //let aBlockFound = true;
                        break;
                    
                    }else if((freeTangramBlockRT[freeTangramLevel][i] & 0x03) - (blocksRT[iB]  & 0x03) ==  -1 &&
                        freeTangramBlockX[freeTangramLevel][i]  == blocksX[iB]  &&
                        freeTangramBlockZ[freeTangramLevel][i] -1 == blocksZ[iB]  ){
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