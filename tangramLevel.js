let tangramLevel = {
  block : [], // level, stage, block
  score: [],
  rowColumnCount: [],
  level : 0,
  difficulty : 0,
  stage : 0,
  blockPixels : 0,
  projectionPixels : 0,

  noHints: function(){
    if( this.level == 4 ){
      return true;
    }
    return false;
  },

  errorBlinkOnlyOnOutOfField : function (){
    if( this.level == 2 || this.level == 3 ){
      return true;
    }
    return false;
  },

  

  careColor: function(){
    if(this.level == 2 || this.level == 3 || this.level == 4 ){
      return true;
    }
    return false;
  },

  colorCavity : function(){
    if(this.level == 2 || this.level == 3 || this.level == 4 ){
      return true;
    }

    return false;
  },

  hideCorrect : function(){
    if(this.level == 2 || this.level == 3){
      return true;
    }
    return false;
  },

  colorCorrect : function(){
    if(this.level == 2 || this.level == 3){
      return 0;
    }
    return globalWorldColor.green;
  },
  projectAllSides : function(){
    if(this.level == 0){
      return false;
    }
    return true;
  },
  setLevel : function(level, difficulty){
    this.level = level;
    this.difficulty = difficulty;
    this.new();
  },
  win : function(){
    return this.score [this.level][this.difficulty]++;
  },
  getScore : function(level, difficulty){
    return this.score [level][difficulty];
  }, 
  new : function (){
    console.log("level:" + this.level);
    let nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    
    while(nextStage == this.stage){
      nextStage = Math.floor(Math.random()*this.block [this.level][this.difficulty].length) ;
    }
    this.stage = nextStage;
    //console.log("F1");
    this.initLevel(this.block[this.level][this.difficulty][this.stage]);
    //console.log("F2");
  },
  getBlock: function(){

    return this.block [this.level][this.difficulty][ this.stage];
  },
  initLevel : function(blocks){    

    //console.log("G1");
    this.blockPixels = algoBlockPixel.create(blocks);
    //console.log("G2");
    this.projectionPixels = algoProjection.create(this.blockPixels);
    //console.log("G3");

    if(this.colorCavity()){
      algoProjection.colorCavity(this.projectionPixels[0]);
      algoProjection.colorCavity(this.projectionPixels[1]);
      algoProjection.colorCavity(this.projectionPixels[2]);
    }

   /* for(let i = 0; i < this.blockPixels.length; i++){
      console.log("i: " + i + ", x " + this.blockPixels[i].x);
    }*/
  },
 init: function(){

      this.rowColumnCount[0] = 6;
      this.rowColumnCount[1] = 6;
      this.rowColumnCount[2] = 6;
      this.rowColumnCount[3] = 6;
      this.rowColumnCount[4] = 6;
      //--
      /*
      0
      one side
      show green 
      0.0  one block
      0.1  two block
      0.2  four blocks
      0.3  ~8 blocks
      0.4  ~all blocks
      
      1
      three sides
      show green
      1.0 one block (use 1.1)
      1.1 two block (use 1.2)
      1.2 four blocks (use 1.3)
      1.3  ~8 blocks (use 1.4)
      1.4  ~all blocks (use 1.5)

      2
      cavity
      fulfilled dissapear
      2.0 one block
      2.1 two block
      2.2 four blocks 
      2.3  ~8 blocks
      2.4  ~all blocks

      3 
      color
      fulfilled dissapear
      
      3.0 one block
      3.1 two block
      3.2 four blocks 
      3.3  ~8 blocks
      3.4  ~all blocks


      4 
      cavity
      don't show changes
      3.1 one block
      2.2 two block
      2.3 four blocks 
      2.4  ~8 blocks
      2.5  ~all blocks

      */

     

//0
//---------
      
      
      this.score[0] = [];
      this.block [0] = []; 
      
      

 
     

//0.0  
//------------------------
this.score[0][0] = 0
this.block[0][0] = []
 this.block [0][0][0] = [];
 this.block [0][0][0][0] =  Object.create(block);
 this.block [0][0][0][0].x = 5;
 this.block [0][0][0][0].y = 0;
 this.block [0][0][0][0].z = 3;
 this.block [0][0][0][0].rotation = 3;
 this.block [0][0][0][0].twobytwo = true;
 this.block [0][0][1] = [];
 this.block [0][0][1][0] =  Object.create(block);
 this.block [0][0][1][0].x = 5;
 this.block [0][0][1][0].y = 0;
 this.block [0][0][1][0].z = 7;
 this.block [0][0][1][0].rotation = 3;
 this.block [0][0][1][0].twobytwo = true;





//0.1  
//------------------------

this.score[0][1] = 0
 this.block[0][1] = []
 this.block[0][1][0] = []
 this.block [0][1][0][0] =  Object.create(block);
 this.block [0][1][0][0].x = 3;
 this.block [0][1][0][0].y = 0;
 this.block [0][1][0][0].z = 7;
 this.block [0][1][0][0].rotation = 3;
 this.block [0][1][0][0].twobytwo = true;

 this.block [0][1][0][1] =  Object.create(block);
 this.block [0][1][0][1].x = 7;
 this.block [0][1][0][1].y = 0;
 this.block [0][1][0][1].z = 3;
 this.block [0][1][0][1].rotation = 3;
 this.block [0][1][0][1].twobytwo = true;

 this.block[0][1][1] = []
 this.block [0][1][1][0] =  Object.create(block);
 this.block [0][1][1][0].x = 6;
 this.block [0][1][1][0].y = 0;
 this.block [0][1][1][0].z = 4;
 this.block [0][1][1][0].rotation = 3;
 this.block [0][1][1][0].twobytwo = true;

 this.block [0][1][1][1] =  Object.create(block);
 this.block [0][1][1][1].x = 3;
 this.block [0][1][1][1].y = 0;
 this.block [0][1][1][1].z = 2;
 this.block [0][1][1][1].rotation = 3;
 this.block [0][1][1][1].twobytwo = true;



//0.2
//-------------------------
this.score[0][2] = 0
 this.block[0][2] = []
 this.block[0][2][0] = []
 this.block [0][2][0][0] =  Object.create(block);
 this.block [0][2][0][0].x = 5;
 this.block [0][2][0][0].y = 0;
 this.block [0][2][0][0].z = 6;
 this.block [0][2][0][0].rotation = 3;
 this.block [0][2][0][0].twobytwo = true;

 this.block [0][2][0][1] =  Object.create(block);
 this.block [0][2][0][1].x = 4;
 this.block [0][2][0][1].y = 0;
 this.block [0][2][0][1].z = 3;
 this.block [0][2][0][1].rotation = 1;
 this.block [0][2][0][1].twobytwo = true;
 
 this.block [0][2][0][2] =  Object.create(block);
 this.block [0][2][0][2].x = 5;
 this.block [0][2][0][2].y = 1;
 this.block [0][2][0][2].z = 5;
 this.block [0][2][0][2].rotation = 3;
 this.block [0][2][0][2].twobytwo = true;

 this.block [0][2][0][3] =  Object.create(block);
 this.block [0][2][0][3].x = 6;
 this.block [0][2][0][3].y = 1;
 this.block [0][2][0][3].z = 3;
 this.block [0][2][0][3].rotation = 2;
 this.block [0][2][0][3].twobytwo = false;

 this.block[0][2][1] = []
 this.block [0][2][1][0] =  Object.create(block);
 this.block [0][2][1][0].x = 5;
 this.block [0][2][1][0].y = 0;
 this.block [0][2][1][0].z = 6;
 this.block [0][2][1][0].rotation = 3;
 this.block [0][2][1][0].twobytwo = true;

 this.block [0][2][1][1] =  Object.create(block);
 this.block [0][2][1][1].x = 6;
 this.block [0][2][1][1].y = 0;
 this.block [0][2][1][1].z = 7;
 this.block [0][2][1][1].rotation = 1;
 this.block [0][2][1][1].twobytwo = false;

 this.block [0][2][1][2] =  Object.create(block);
 this.block [0][2][1][2].x = 4;
 this.block [0][2][1][2].y = 0;
 this.block [0][2][1][2].z = 3;
 this.block [0][2][1][2].rotation = 1;
 this.block [0][2][1][2].twobytwo = true;

 this.block [0][2][1][3] =  Object.create(block);
 this.block [0][2][1][3].x = 6;
 this.block [0][2][1][3].y = 1;
 this.block [0][2][1][3].z = 5;
 this.block [0][2][1][3].rotation = 3;
 this.block [0][2][1][3].twobytwo = true;



//0.3  
//-------------------------
this.score[0][3] = 0
 this.block[0][3] = []
 this.block[0][3][0] = []
 this.block [0][3][0][0] =  Object.create(block);
 this.block [0][3][0][0].x = 1;
 this.block [0][3][0][0].y = 0;
 this.block [0][3][0][0].z = 7;
 this.block [0][3][0][0].rotation = 0;
 this.block [0][3][0][0].twobytwo = true;

 this.block [0][3][0][1] =  Object.create(block);
 this.block [0][3][0][1].x = 5;
 this.block [0][3][0][1].y = 0;
 this.block [0][3][0][1].z = 6;
 this.block [0][3][0][1].rotation = 3;
 this.block [0][3][0][1].twobytwo = true;

 this.block [0][3][0][2] =  Object.create(block);
 this.block [0][3][0][2].x = 8;
 this.block [0][3][0][2].y = 0;
 this.block [0][3][0][2].z = 3;
 this.block [0][3][0][2].rotation = 3;
 this.block [0][3][0][2].twobytwo = true;

 this.block [0][3][0][3] =  Object.create(block);
 this.block [0][3][0][3].x = 5;
 this.block [0][3][0][3].y = 0;
 this.block [0][3][0][3].z = 2;
 this.block [0][3][0][3].rotation = 2;
 this.block [0][3][0][3].twobytwo = true;

 this.block [0][3][0][4] =  Object.create(block);
 this.block [0][3][0][4].x = 4;
 this.block [0][3][0][4].y = 1;
 this.block [0][3][0][4].z = 8;
 this.block [0][3][0][4].rotation = 1;
 this.block [0][3][0][4].twobytwo = false;

 this.block [0][3][0][5] =  Object.create(block);
 this.block [0][3][0][5].x = 8;
 this.block [0][3][0][5].y = 1;
 this.block [0][3][0][5].z = 5;
 this.block [0][3][0][5].rotation = 2;
 this.block [0][3][0][5].twobytwo = true;

 this.block [0][3][0][6] =  Object.create(block);
 this.block [0][3][0][6].x = 6;
 this.block [0][3][0][6].y = 1;
 this.block [0][3][0][6].z = 2;
 this.block [0][3][0][6].rotation = 2;
 this.block [0][3][0][6].twobytwo = false;

 this.block [0][3][0][7] =  Object.create(block);
 this.block [0][3][0][7].x = 4;
 this.block [0][3][0][7].y = 2;
 this.block [0][3][0][7].z = 5;
 this.block [0][3][0][7].rotation = 0;
 this.block [0][3][0][7].twobytwo = true;

 this.block [0][3][0][8] =  Object.create(block);
 this.block [0][3][0][8].x = 5;
 this.block [0][3][0][8].y = 3;
 this.block [0][3][0][8].z = 5;
 this.block [0][3][0][8].rotation = 2;
 this.block [0][3][0][8].twobytwo = true;

 this.block[0][3][1] = []
 this.block [0][3][1][0] =  Object.create(block);
 this.block [0][3][1][0].x = 3;
 this.block [0][3][1][0].y = 0;
 this.block [0][3][1][0].z = 6;
 this.block [0][3][1][0].rotation = 0;
 this.block [0][3][1][0].twobytwo = true;

 this.block [0][3][1][1] =  Object.create(block);
 this.block [0][3][1][1].x = 5;
 this.block [0][3][1][1].y = 0;
 this.block [0][3][1][1].z = 4;
 this.block [0][3][1][1].rotation = 2;
 this.block [0][3][1][1].twobytwo = true;

 this.block [0][3][1][2] =  Object.create(block);
 this.block [0][3][1][2].x = 5;
 this.block [0][3][1][2].y = 0;
 this.block [0][3][1][2].z = 2;
 this.block [0][3][1][2].rotation = 2;
 this.block [0][3][1][2].twobytwo = true;

 this.block [0][3][1][3] =  Object.create(block);
 this.block [0][3][1][3].x = 5;
 this.block [0][3][1][3].y = 1;
 this.block [0][3][1][3].z = 7;
 this.block [0][3][1][3].rotation = 2;
 this.block [0][3][1][3].twobytwo = true;

 this.block [0][3][1][4] =  Object.create(block);
 this.block [0][3][1][4].x = 4;
 this.block [0][3][1][4].y = 1;
 this.block [0][3][1][4].z = 3;
 this.block [0][3][1][4].rotation = 0;
 this.block [0][3][1][4].twobytwo = true;

 this.block [0][3][1][5] =  Object.create(block);
 this.block [0][3][1][5].x = 6;
 this.block [0][3][1][5].y = 1;
 this.block [0][3][1][5].z = 2;
 this.block [0][3][1][5].rotation = 2;
 this.block [0][3][1][5].twobytwo = false;

 this.block [0][3][1][6] =  Object.create(block);
 this.block [0][3][1][6].x = 6;
 this.block [0][3][1][6].y = 0;
 this.block [0][3][1][6].z = 7;
 this.block [0][3][1][6].rotation = 2;
 this.block [0][3][1][6].twobytwo = true;

 this.block [0][3][1][7] =  Object.create(block);
 this.block [0][3][1][7].x = 5;
 this.block [0][3][1][7].y = 2;
 this.block [0][3][1][7].z = 7;
 this.block [0][3][1][7].rotation = 3;
 this.block [0][3][1][7].twobytwo = true;

 this.block [0][3][1][8] =  Object.create(block);
 this.block [0][3][1][8].x = 6;
 this.block [0][3][1][8].y = 2;
 this.block [0][3][1][8].z = 5;
 this.block [0][3][1][8].rotation = 2;
 this.block [0][3][1][8].twobytwo = false;


 //0.4
//------------------------
this.score[0][4] = 0
this.block[0][4] = []
this.block[0][4][0] = []
this.block [0][4][0][0] =  Object.create(block);
this.block [0][4][0][0].x = 3;
this.block [0][4][0][0].y = 0;
this.block [0][4][0][0].z = 8;
this.block [0][4][0][0].rotation = 2;
this.block [0][4][0][0].twobytwo = true;

this.block [0][4][0][1] =  Object.create(block);
this.block [0][4][0][1].x = 5;
this.block [0][4][0][1].y = 0;
this.block [0][4][0][1].z = 7;
this.block [0][4][0][1].rotation = 2;
this.block [0][4][0][1].twobytwo = true;

this.block [0][4][0][2] =  Object.create(block);
this.block [0][4][0][2].x = 2;
this.block [0][4][0][2].y = 0;
this.block [0][4][0][2].z = 4;
this.block [0][4][0][2].rotation = 3;
this.block [0][4][0][2].twobytwo = true;

this.block [0][4][0][3] =  Object.create(block);
this.block [0][4][0][3].x = 4;
this.block [0][4][0][3].y = 0;
this.block [0][4][0][3].z = 5;
this.block [0][4][0][3].rotation = 1;
this.block [0][4][0][3].twobytwo = true;

this.block [0][4][0][4] =  Object.create(block);
this.block [0][4][0][4].x = 8;
this.block [0][4][0][4].y = 0;
this.block [0][4][0][4].z = 4;
this.block [0][4][0][4].rotation = 3;
this.block [0][4][0][4].twobytwo = true;

this.block [0][4][0][5] =  Object.create(block);
this.block [0][4][0][5].x = 5;
this.block [0][4][0][5].y = 0;
this.block [0][4][0][5].z = 2;
this.block [0][4][0][5].rotation = 3;
this.block [0][4][0][5].twobytwo = true;

this.block [0][4][0][6] =  Object.create(block);
this.block [0][4][0][6].x = 8;
this.block [0][4][0][6].y = 0;
this.block [0][4][0][6].z = 1;
this.block [0][4][0][6].rotation = 3;
this.block [0][4][0][6].twobytwo = true;

this.block [0][4][0][7] =  Object.create(block);
this.block [0][4][0][7].x = 6;
this.block [0][4][0][7].y = 1;
this.block [0][4][0][7].z = 5;
this.block [0][4][0][7].rotation = 3;
this.block [0][4][0][7].twobytwo = false;

this.block [0][4][0][8] =  Object.create(block);
this.block [0][4][0][8].x = 4;
this.block [0][4][0][8].y = 1;
this.block [0][4][0][8].z = 4;
this.block [0][4][0][8].rotation = 2;
this.block [0][4][0][8].twobytwo = false;

this.block [0][4][0][9] =  Object.create(block);
this.block [0][4][0][9].x = 5;
this.block [0][4][0][9].y = 1;
this.block [0][4][0][9].z = 2;
this.block [0][4][0][9].rotation = 0;
this.block [0][4][0][9].twobytwo = false;

this.block [0][4][0][10] =  Object.create(block);
this.block [0][4][0][10].x = 2;
this.block [0][4][0][10].y = 2;
this.block [0][4][0][10].z = 6;
this.block [0][4][0][10].rotation = 0;
this.block [0][4][0][10].twobytwo = false;

this.block [0][4][0][11] =  Object.create(block);
this.block [0][4][0][11].x = 6;
this.block [0][4][0][11].y = 2;
this.block [0][4][0][11].z = 5;
this.block [0][4][0][11].rotation = 2;
this.block [0][4][0][11].twobytwo = true;

this.block [0][4][0][12] =  Object.create(block);
this.block [0][4][0][12].x = 4;
this.block [0][4][0][12].y = 2;
this.block [0][4][0][12].z = 4;
this.block [0][4][0][12].rotation = 3;
this.block [0][4][0][12].twobytwo = true;

this.block [0][4][0][13] =  Object.create(block);
this.block [0][4][0][13].x = 4;
this.block [0][4][0][13].y = 3;
this.block [0][4][0][13].z = 4;
this.block [0][4][0][13].rotation = 1;
this.block [0][4][0][13].twobytwo = true;

this.block [0][4][0][14] =  Object.create(block);
this.block [0][4][0][14].x = 6;
this.block [0][4][0][14].y = 3;
this.block [0][4][0][14].z = 6;
this.block [0][4][0][14].rotation = 1;
this.block [0][4][0][14].twobytwo = false;

this.block[0][4][1] = []
this.block [0][4][1][0] =  Object.create(block);
this.block [0][4][1][0].x = 3;
this.block [0][4][1][0].y = 0;
this.block [0][4][1][0].z = 8;
this.block [0][4][1][0].rotation = 2;
this.block [0][4][1][0].twobytwo = true;

this.block [0][4][1][1] =  Object.create(block);
this.block [0][4][1][1].x = 5;
this.block [0][4][1][1].y = 0;
this.block [0][4][1][1].z = 7;
this.block [0][4][1][1].rotation = 2;
this.block [0][4][1][1].twobytwo = true;

this.block [0][4][1][2] =  Object.create(block);
this.block [0][4][1][2].x = 8;
this.block [0][4][1][2].y = 0;
this.block [0][4][1][2].z = 7;
this.block [0][4][1][2].rotation = 2;
this.block [0][4][1][2].twobytwo = true;

this.block [0][4][1][3] =  Object.create(block);
this.block [0][4][1][3].x = 1;
this.block [0][4][1][3].y = 0;
this.block [0][4][1][3].z = 4;
this.block [0][4][1][3].rotation = 1;
this.block [0][4][1][3].twobytwo = false;

this.block [0][4][1][4] =  Object.create(block);
this.block [0][4][1][4].x = 4;
this.block [0][4][1][4].y = 0;
this.block [0][4][1][4].z = 5;
this.block [0][4][1][4].rotation = 1;
this.block [0][4][1][4].twobytwo = true;

this.block [0][4][1][5] =  Object.create(block);
this.block [0][4][1][5].x = 8;
this.block [0][4][1][5].y = 0;
this.block [0][4][1][5].z = 1;
this.block [0][4][1][5].rotation = 3;
this.block [0][4][1][5].twobytwo = false;

this.block [0][4][1][6] =  Object.create(block);
this.block [0][4][1][6].x = 5;
this.block [0][4][1][6].y = 0;
this.block [0][4][1][6].z = 2;
this.block [0][4][1][6].rotation = 3;
this.block [0][4][1][6].twobytwo = true;

this.block [0][4][1][7] =  Object.create(block);
this.block [0][4][1][7].x = 3;
this.block [0][4][1][7].y = 1;
this.block [0][4][1][7].z = 7;
this.block [0][4][1][7].rotation = 3;
this.block [0][4][1][7].twobytwo = true;

this.block [0][4][1][8] =  Object.create(block);
this.block [0][4][1][8].x = 8;
this.block [0][4][1][8].y = 1;
this.block [0][4][1][8].z = 6;
this.block [0][4][1][8].rotation = 3;
this.block [0][4][1][8].twobytwo = true;

this.block [0][4][1][9] =  Object.create(block);
this.block [0][4][1][9].x = 5;
this.block [0][4][1][9].y = 1;
this.block [0][4][1][9].z = 3;
this.block [0][4][1][9].rotation = 3;
this.block [0][4][1][9].twobytwo = true;

this.block [0][4][1][10] =  Object.create(block);
this.block [0][4][1][10].x = 7;
this.block [0][4][1][10].y = 1;
this.block [0][4][1][10].z = 2;
this.block [0][4][1][10].rotation = 0;
this.block [0][4][1][10].twobytwo = true;

this.block [0][4][1][11] =  Object.create(block);
this.block [0][4][1][11].x = 3;
this.block [0][4][1][11].y = 2;
this.block [0][4][1][11].z = 5;
this.block [0][4][1][11].rotation = 3;
this.block [0][4][1][11].twobytwo = false;

this.block [0][4][1][12] =  Object.create(block);
this.block [0][4][1][12].x = 7;
this.block [0][4][1][12].y = 2;
this.block [0][4][1][12].z = 8;
this.block [0][4][1][12].rotation = 1;
this.block [0][4][1][12].twobytwo = false;

this.block [0][4][1][13] =  Object.create(block);
this.block [0][4][1][13].x = 5;
this.block [0][4][1][13].y = 2;
this.block [0][4][1][13].z = 1;
this.block [0][4][1][13].rotation = 3;
this.block [0][4][1][13].twobytwo = false;

this.block [0][4][1][14] =  Object.create(block);
this.block [0][4][1][14].x = 3;
this.block [0][4][1][14].y = 3;
this.block [0][4][1][14].z = 6;
this.block [0][4][1][14].rotation = 1;
this.block [0][4][1][14].twobytwo = true;







//////////////////////////////////////////////////////////////////////////////////////////////

//1
//--
this.score[1] = [];
this.block [1] = []; 

//1.0
//-------------------------
this.score[1][0] = 0;
this.block[1][0] = this.block[0][0];


//1.1
//-------------------------
this.score[1][1] = 0;
this.block[1][1] = this.block[0][1];

//1.2
//-------------------------
this.score[1][2] = 0;
this.block[1][2] = this.block[0][2];

//1.3
//-------------------------
this.score[1][3] = 0;
this.block[1][3] = this.block[0][3];

//1.4
//-------------------------
this.score[1][4] = 0;
this.block[1][4] = this.block[0][4];

//-------------------------

///////////////////////////////////////////////////////////////////////////////////////////////

//2
//--
this.score[2] = [];
this.block [2] = []; 

//2.0
//-------------------------
this.score[2][0] = 0;
this.block[2][0] = this.block[0][0];


//2.1
//-------------------------
this.score[2][1] = 0;
this.block[2][1] = this.block[0][1];

//2.2
//-------------------------
this.score[2][2] = 0;
this.block[2][2] = this.block[0][2];

//2.3
//-------------------------
this.score[2][3] = 0;
this.block[2][3] = this.block[0][3];

//2.4
//-------------------------
this.score[2][4] = 0;
this.block[2][4] = this.block[0][4];

//-------------------------

///////////////////////////////////////////////////////////////////////////////////////////

//3
//--
this.score[3] = [];
this.block [3] = []; 

//3.0
//-------------------------
this.score[3][0] = 0;
this.block[3][0] = [];
this.block[3][0][0] = [];
this.block [3][0][0][0] =  Object.create(block);
this.block [3][0][0][0].x = 6;
this.block [3][0][0][0].y = 0;
this.block [3][0][0][0].z = 4;
this.block [3][0][0][0].rotation = 3;
this.block [3][0][0][0].twobytwo = true;
this.block [3][0][0][0].ledALeft = 1;
this.block [3][0][0][0].ledARight = 1;
this.block [3][0][0][0].ledBLeft = 1;
this.block [3][0][0][0].ledBRight = 1;
this.block[3][0][1] = [];
this.block [3][0][1][0] =  Object.create(block);
this.block [3][0][1][0].x = 3;
this.block [3][0][1][0].y = 0;
this.block [3][0][1][0].z = 2;
this.block [3][0][1][0].rotation = 3;
this.block [3][0][1][0].twobytwo = true;
this.block [3][0][1][0].ledALeft = 2;
this.block [3][0][1][0].ledARight = 2;
this.block [3][0][1][0].ledBLeft = 2;
this.block [3][0][1][0].ledBRight = 2;


//3.1
//-------------------------

this.score[3][1] = 0;
this.block[3][1] = [];
this.block[3][1][0] = [];
this.block [3][1][0][0] =  Object.create(block);
this.block [3][1][0][0].x = 6;
this.block [3][1][0][0].y = 0;
this.block [3][1][0][0].z = 7;
this.block [3][1][0][0].rotation = 1;
this.block [3][1][0][0].twobytwo = true;
this.block [3][1][0][0].ledALeft = 1;
this.block [3][1][0][0].ledARight = 1;
this.block [3][1][0][0].ledBLeft = 1;
this.block [3][1][0][0].ledBRight = 1;
this.block [3][1][0][1] =  Object.create(block);
this.block [3][1][0][1].x = 6;
this.block [3][1][0][1].y = 0;
this.block [3][1][0][1].z = 2;
this.block [3][1][0][1].rotation = 3;
this.block [3][1][0][1].twobytwo = true;
this.block [3][1][0][1].ledALeft = 4;
this.block [3][1][0][1].ledARight = 4;
this.block [3][1][0][1].ledBLeft = 4;
this.block [3][1][0][1].ledBRight = 4;
this.block[3][1][1] = [];
this.block [3][1][1][0] =  Object.create(block);
this.block [3][1][1][0].x = 2;
this.block [3][1][1][0].y = 0;
this.block [3][1][1][0].z = 4;
this.block [3][1][1][0].rotation = 3;
this.block [3][1][1][0].twobytwo = true;
this.block [3][1][1][0].ledALeft = 2;
this.block [3][1][1][0].ledARight = 2;
this.block [3][1][1][0].ledBLeft = 2;
this.block [3][1][1][0].ledBRight = 2;
this.block [3][1][1][1] =  Object.create(block);
this.block [3][1][1][1].x = 4;
this.block [3][1][1][1].y = 0;
this.block [3][1][1][1].z = 4;
this.block [3][1][1][1].rotation = 1;
this.block [3][1][1][1].twobytwo = true;
this.block [3][1][1][1].ledALeft = 1;
this.block [3][1][1][1].ledARight = 1;
this.block [3][1][1][1].ledBLeft = 1;
this.block [3][1][1][1].ledBRight = 1;

//3.2
//-------------------------
this.score[3][2] = 0;
this.block[3][2] = [];
this.block[3][2][0] = [];
this.block [3][2][0][0] =  Object.create(block);
this.block [3][2][0][0].x = 5;
this.block [3][2][0][0].y = 0;
this.block [3][2][0][0].z = 6;
this.block [3][2][0][0].rotation = 1;
this.block [3][2][0][0].twobytwo = false;
this.block [3][2][0][0].ledALeft = 2;
this.block [3][2][0][0].ledARight = 2;
this.block [3][2][0][0].ledBLeft = 2;
this.block [3][2][0][0].ledBRight = 2;
this.block [3][2][0][1] =  Object.create(block);
this.block [3][2][0][1].x = 5;
this.block [3][2][0][1].y = 1;
this.block [3][2][0][1].z = 5;
this.block [3][2][0][1].rotation = 3;
this.block [3][2][0][1].twobytwo = true;
this.block [3][2][0][1].ledALeft = 1;
this.block [3][2][0][1].ledARight = 1;
this.block [3][2][0][1].ledBLeft = 1;
this.block [3][2][0][1].ledBRight = 1;
this.block [3][2][0][2] =  Object.create(block);
this.block [3][2][0][2].x = 6;
this.block [3][2][0][2].y = 1;
this.block [3][2][0][2].z = 5;
this.block [3][2][0][2].rotation = 0;
this.block [3][2][0][2].twobytwo = true;
this.block [3][2][0][2].ledALeft = 1;
this.block [3][2][0][2].ledARight = 1;
this.block [3][2][0][2].ledBLeft = 1;
this.block [3][2][0][2].ledBRight = 1;
this.block [3][2][0][3] =  Object.create(block);
this.block [3][2][0][3].x = 7;
this.block [3][2][0][3].y = 1;
this.block [3][2][0][3].z = 3;
this.block [3][2][0][3].rotation = 2;
this.block [3][2][0][3].twobytwo = false;
this.block [3][2][0][3].ledALeft = 4;
this.block [3][2][0][3].ledARight = 4;
this.block [3][2][0][3].ledBLeft = 4;
this.block [3][2][0][3].ledBRight = 4;
this.block[3][2][1] = [];
this.block [3][2][1][0] =  Object.create(block);
this.block [3][2][1][0].x = 4;
this.block [3][2][1][0].y = 0;
this.block [3][2][1][0].z = 7;
this.block [3][2][1][0].rotation = 0;
this.block [3][2][1][0].twobytwo = true;
this.block [3][2][1][0].ledALeft = 1;
this.block [3][2][1][0].ledARight = 1;
this.block [3][2][1][0].ledBLeft = 1;
this.block [3][2][1][0].ledBRight = 1;
this.block [3][2][1][1] =  Object.create(block);
this.block [3][2][1][1].x = 5;
this.block [3][2][1][1].y = 0;
this.block [3][2][1][1].z = 3;
this.block [3][2][1][1].rotation = 3;
this.block [3][2][1][1].twobytwo = true;
this.block [3][2][1][1].ledALeft = 1;
this.block [3][2][1][1].ledARight = 1;
this.block [3][2][1][1].ledBLeft = 1;
this.block [3][2][1][1].ledBRight = 1;
this.block [3][2][1][2] =  Object.create(block);
this.block [3][2][1][2].x = 4;
this.block [3][2][1][2].y = 1;
this.block [3][2][1][2].z = 7;
this.block [3][2][1][2].rotation = 1;
this.block [3][2][1][2].twobytwo = false;
this.block [3][2][1][2].ledALeft = 4;
this.block [3][2][1][2].ledARight = 4;
this.block [3][2][1][2].ledBLeft = 4;
this.block [3][2][1][2].ledBRight = 4;
this.block [3][2][1][3] =  Object.create(block);
this.block [3][2][1][3].x = 5;
this.block [3][2][1][3].y = 2;
this.block [3][2][1][3].z = 2;
this.block [3][2][1][3].rotation = 3;
this.block [3][2][1][3].twobytwo = false;
this.block [3][2][1][3].ledALeft = 2;
this.block [3][2][1][3].ledARight = 2;
this.block [3][2][1][3].ledBLeft = 2;
this.block [3][2][1][3].ledBRight = 2;


//3.3
//-------------------------
this.score[3][3] = 0;
this.block[3][3] = [];
this.block[3][3][0] = [];
this.block [3][3][0][0] =  Object.create(block);
this.block [3][3][0][0].x = 5;
this.block [3][3][0][0].y = 0;
this.block [3][3][0][0].z = 7;
this.block [3][3][0][0].rotation = 2;
this.block [3][3][0][0].twobytwo = false;
this.block [3][3][0][0].ledALeft = 4;
this.block [3][3][0][0].ledARight = 4;
this.block [3][3][0][0].ledBLeft = 4;
this.block [3][3][0][0].ledBRight = 4;
this.block [3][3][0][1] =  Object.create(block);
this.block [3][3][0][1].x = 2;
this.block [3][3][0][1].y = 0;
this.block [3][3][0][1].z = 2;
this.block [3][3][0][1].rotation = 0;
this.block [3][3][0][1].twobytwo = false;
this.block [3][3][0][1].ledALeft = 4;
this.block [3][3][0][1].ledARight = 4;
this.block [3][3][0][1].ledBLeft = 4;
this.block [3][3][0][1].ledBRight = 4;
this.block [3][3][0][2] =  Object.create(block);
this.block [3][3][0][2].x = 5;
this.block [3][3][0][2].y = 1;
this.block [3][3][0][2].z = 6;
this.block [3][3][0][2].rotation = 1;
this.block [3][3][0][2].twobytwo = false;
this.block [3][3][0][2].ledALeft = 2;
this.block [3][3][0][2].ledARight = 2;
this.block [3][3][0][2].ledBLeft = 2;
this.block [3][3][0][2].ledBRight = 2;
this.block [3][3][0][3] =  Object.create(block);
this.block [3][3][0][3].x = 2;
this.block [3][3][0][3].y = 1;
this.block [3][3][0][3].z = 6;
this.block [3][3][0][3].rotation = 1;
this.block [3][3][0][3].twobytwo = false;
this.block [3][3][0][3].ledALeft = 1;
this.block [3][3][0][3].ledARight = 1;
this.block [3][3][0][3].ledBLeft = 1;
this.block [3][3][0][3].ledBRight = 1;
this.block [3][3][0][4] =  Object.create(block);
this.block [3][3][0][4].x = 6;
this.block [3][3][0][4].y = 2;
this.block [3][3][0][4].z = 5;
this.block [3][3][0][4].rotation = 1;
this.block [3][3][0][4].twobytwo = true;
this.block [3][3][0][4].ledALeft = 2;
this.block [3][3][0][4].ledARight = 2;
this.block [3][3][0][4].ledBLeft = 2;
this.block [3][3][0][4].ledBRight = 2;
this.block [3][3][0][5] =  Object.create(block);
this.block [3][3][0][5].x = 4;
this.block [3][3][0][5].y = 2;
this.block [3][3][0][5].z = 6;
this.block [3][3][0][5].rotation = 1;
this.block [3][3][0][5].twobytwo = true;
this.block [3][3][0][5].ledALeft = 4;
this.block [3][3][0][5].ledARight = 4;
this.block [3][3][0][5].ledBLeft = 4;
this.block [3][3][0][5].ledBRight = 4;
this.block [3][3][0][6] =  Object.create(block);
this.block [3][3][0][6].x = 5;
this.block [3][3][0][6].y = 2;
this.block [3][3][0][6].z = 4;
this.block [3][3][0][6].rotation = 2;
this.block [3][3][0][6].twobytwo = true;
this.block [3][3][0][6].ledALeft = 4;
this.block [3][3][0][6].ledARight = 4;
this.block [3][3][0][6].ledBLeft = 4;
this.block [3][3][0][6].ledBRight = 4;
this.block [3][3][0][7] =  Object.create(block);
this.block [3][3][0][7].x = 1;
this.block [3][3][0][7].y = 2;
this.block [3][3][0][7].z = 4;
this.block [3][3][0][7].rotation = 0;
this.block [3][3][0][7].twobytwo = true;
this.block [3][3][0][7].ledALeft = 1;
this.block [3][3][0][7].ledARight = 1;
this.block [3][3][0][7].ledBLeft = 1;
this.block [3][3][0][7].ledBRight = 1;
this.block[3][3][1] = [];
this.block [3][3][1][0] =  Object.create(block);
this.block [3][3][1][0].x = 3;
this.block [3][3][1][0].y = 0;
this.block [3][3][1][0].z = 3;
this.block [3][3][1][0].rotation = 0;
this.block [3][3][1][0].twobytwo = false;
this.block [3][3][1][0].ledALeft = 2;
this.block [3][3][1][0].ledARight = 2;
this.block [3][3][1][0].ledBLeft = 2;
this.block [3][3][1][0].ledBRight = 2;
this.block [3][3][1][1] =  Object.create(block);
this.block [3][3][1][1].x = 6;
this.block [3][3][1][1].y = 0;
this.block [3][3][1][1].z = 6;
this.block [3][3][1][1].rotation = 2;
this.block [3][3][1][1].twobytwo = false;
this.block [3][3][1][1].ledALeft = 1;
this.block [3][3][1][1].ledARight = 1;
this.block [3][3][1][1].ledBLeft = 1;
this.block [3][3][1][1].ledBRight = 1;
this.block [3][3][1][2] =  Object.create(block);
this.block [3][3][1][2].x = 4;
this.block [3][3][1][2].y = 1;
this.block [3][3][1][2].z = 6;
this.block [3][3][1][2].rotation = 1;
this.block [3][3][1][2].twobytwo = false;
this.block [3][3][1][2].ledALeft = 4;
this.block [3][3][1][2].ledARight = 4;
this.block [3][3][1][2].ledBLeft = 4;
this.block [3][3][1][2].ledBRight = 4;
this.block [3][3][1][3] =  Object.create(block);
this.block [3][3][1][3].x = 2;
this.block [3][3][1][3].y = 1;
this.block [3][3][1][3].z = 6;
this.block [3][3][1][3].rotation = 1;
this.block [3][3][1][3].twobytwo = false;
this.block [3][3][1][3].ledALeft = 1;
this.block [3][3][1][3].ledARight = 1;
this.block [3][3][1][3].ledBLeft = 1;
this.block [3][3][1][3].ledBRight = 1;
this.block [3][3][1][4] =  Object.create(block);
this.block [3][3][1][4].x = 5;
this.block [3][3][1][4].y = 2;
this.block [3][3][1][4].z = 5;
this.block [3][3][1][4].rotation = 1;
this.block [3][3][1][4].twobytwo = true;
this.block [3][3][1][4].ledALeft = 2;
this.block [3][3][1][4].ledARight = 2;
this.block [3][3][1][4].ledBLeft = 2;
this.block [3][3][1][4].ledBRight = 2;
this.block [3][3][1][5] =  Object.create(block);
this.block [3][3][1][5].x = 3;
this.block [3][3][1][5].y = 2;
this.block [3][3][1][5].z = 5;
this.block [3][3][1][5].rotation = 1;
this.block [3][3][1][5].twobytwo = true;
this.block [3][3][1][5].ledALeft = 4;
this.block [3][3][1][5].ledARight = 4;
this.block [3][3][1][5].ledBLeft = 4;
this.block [3][3][1][5].ledBRight = 4;
this.block [3][3][1][6] =  Object.create(block);
this.block [3][3][1][6].x = 4;
this.block [3][3][1][6].y = 2;
this.block [3][3][1][6].z = 6;
this.block [3][3][1][6].rotation = 0;
this.block [3][3][1][6].twobytwo = true;
this.block [3][3][1][6].ledALeft = 1;
this.block [3][3][1][6].ledARight = 1;
this.block [3][3][1][6].ledBLeft = 1;
this.block [3][3][1][6].ledBRight = 1;
this.block [3][3][1][7] =  Object.create(block);
this.block [3][3][1][7].x = 5;
this.block [3][3][1][7].y = 2;
this.block [3][3][1][7].z = 3;
this.block [3][3][1][7].rotation = 2;
this.block [3][3][1][7].twobytwo = true;
this.block [3][3][1][7].ledALeft = 4;
this.block [3][3][1][7].ledARight = 4;
this.block [3][3][1][7].ledBLeft = 4;
this.block [3][3][1][7].ledBRight = 4;

//3.4
//-------------------------

this.score[3][4] = 0;
this.block[3][4] = [];
this.block[3][4][0] = [];
this.block [3][4][0][0] =  Object.create(block);
this.block [3][4][0][0].x = 1;
this.block [3][4][0][0].y = 0;
this.block [3][4][0][0].z = 7;
this.block [3][4][0][0].rotation = 1;
this.block [3][4][0][0].twobytwo = true;
this.block [3][4][0][0].ledALeft = 2;
this.block [3][4][0][0].ledARight = 2;
this.block [3][4][0][0].ledBLeft = 2;
this.block [3][4][0][0].ledBRight = 2;
this.block [3][4][0][1] =  Object.create(block);
this.block [3][4][0][1].x = 3;
this.block [3][4][0][1].y = 0;
this.block [3][4][0][1].z = 7;
this.block [3][4][0][1].rotation = 0;
this.block [3][4][0][1].twobytwo = false;
this.block [3][4][0][1].ledALeft = 1;
this.block [3][4][0][1].ledARight = 1;
this.block [3][4][0][1].ledBLeft = 1;
this.block [3][4][0][1].ledBRight = 1;
this.block [3][4][0][2] =  Object.create(block);
this.block [3][4][0][2].x = 8;
this.block [3][4][0][2].y = 0;
this.block [3][4][0][2].z = 5;
this.block [3][4][0][2].rotation = 3;
this.block [3][4][0][2].twobytwo = false;
this.block [3][4][0][2].ledALeft = 1;
this.block [3][4][0][2].ledARight = 1;
this.block [3][4][0][2].ledBLeft = 1;
this.block [3][4][0][2].ledBRight = 1;
this.block [3][4][0][3] =  Object.create(block);
this.block [3][4][0][3].x = 1;
this.block [3][4][0][3].y = 0;
this.block [3][4][0][3].z = 5;
this.block [3][4][0][3].rotation = 1;
this.block [3][4][0][3].twobytwo = false;
this.block [3][4][0][3].ledALeft = 1;
this.block [3][4][0][3].ledARight = 1;
this.block [3][4][0][3].ledBLeft = 1;
this.block [3][4][0][3].ledBRight = 1;
this.block [3][4][0][4] =  Object.create(block);
this.block [3][4][0][4].x = 4;
this.block [3][4][0][4].y = 0;
this.block [3][4][0][4].z = 5;
this.block [3][4][0][4].rotation = 1;
this.block [3][4][0][4].twobytwo = true;
this.block [3][4][0][4].ledALeft = 4;
this.block [3][4][0][4].ledARight = 4;
this.block [3][4][0][4].ledBLeft = 4;
this.block [3][4][0][4].ledBRight = 4;
this.block [3][4][0][5] =  Object.create(block);
this.block [3][4][0][5].x = 7;
this.block [3][4][0][5].y = 0;
this.block [3][4][0][5].z = 4;
this.block [3][4][0][5].rotation = 1;
this.block [3][4][0][5].twobytwo = false;
this.block [3][4][0][5].ledALeft = 4;
this.block [3][4][0][5].ledARight = 4;
this.block [3][4][0][5].ledBLeft = 4;
this.block [3][4][0][5].ledBRight = 4;
this.block [3][4][0][6] =  Object.create(block);
this.block [3][4][0][6].x = 4;
this.block [3][4][0][6].y = 0;
this.block [3][4][0][6].z = 2;
this.block [3][4][0][6].rotation = 0;
this.block [3][4][0][6].twobytwo = true;
this.block [3][4][0][6].ledALeft = 2;
this.block [3][4][0][6].ledARight = 2;
this.block [3][4][0][6].ledBLeft = 2;
this.block [3][4][0][6].ledBRight = 2;
this.block [3][4][0][7] =  Object.create(block);
this.block [3][4][0][7].x = 2;
this.block [3][4][0][7].y = 1;
this.block [3][4][0][7].z = 6;
this.block [3][4][0][7].rotation = 3;
this.block [3][4][0][7].twobytwo = true;
this.block [3][4][0][7].ledALeft = 2;
this.block [3][4][0][7].ledARight = 2;
this.block [3][4][0][7].ledBLeft = 2;
this.block [3][4][0][7].ledBRight = 2;
this.block [3][4][0][8] =  Object.create(block);
this.block [3][4][0][8].x = 4;
this.block [3][4][0][8].y = 1;
this.block [3][4][0][8].z = 6;
this.block [3][4][0][8].rotation = 0;
this.block [3][4][0][8].twobytwo = true;
this.block [3][4][0][8].ledALeft = 2;
this.block [3][4][0][8].ledARight = 2;
this.block [3][4][0][8].ledBLeft = 2;
this.block [3][4][0][8].ledBRight = 2;
this.block [3][4][0][9] =  Object.create(block);
this.block [3][4][0][9].x = 6;
this.block [3][4][0][9].y = 1;
this.block [3][4][0][9].z = 6;
this.block [3][4][0][9].rotation = 0;
this.block [3][4][0][9].twobytwo = true;
this.block [3][4][0][9].ledALeft = 2;
this.block [3][4][0][9].ledARight = 2;
this.block [3][4][0][9].ledBLeft = 2;
this.block [3][4][0][9].ledBRight = 2;
this.block [3][4][0][10] =  Object.create(block);
this.block [3][4][0][10].x = 4;
this.block [3][4][0][10].y = 1;
this.block [3][4][0][10].z = 3;
this.block [3][4][0][10].rotation = 1;
this.block [3][4][0][10].twobytwo = true;
this.block [3][4][0][10].ledALeft = 2;
this.block [3][4][0][10].ledARight = 2;
this.block [3][4][0][10].ledBLeft = 2;
this.block [3][4][0][10].ledBRight = 2;
this.block [3][4][0][11] =  Object.create(block);
this.block [3][4][0][11].x = 5;
this.block [3][4][0][11].y = 2;
this.block [3][4][0][11].z = 7;
this.block [3][4][0][11].rotation = 1;
this.block [3][4][0][11].twobytwo = true;
this.block [3][4][0][11].ledALeft = 1;
this.block [3][4][0][11].ledARight = 1;
this.block [3][4][0][11].ledBLeft = 1;
this.block [3][4][0][11].ledBRight = 1;
this.block [3][4][0][12] =  Object.create(block);
this.block [3][4][0][12].x = 3;
this.block [3][4][0][12].y = 2;
this.block [3][4][0][12].z = 2;
this.block [3][4][0][12].rotation = 0;
this.block [3][4][0][12].twobytwo = false;
this.block [3][4][0][12].ledALeft = 4;
this.block [3][4][0][12].ledARight = 4;
this.block [3][4][0][12].ledBLeft = 4;
this.block [3][4][0][12].ledBRight = 4;
this.block[3][4][1] = [];
this.block [3][4][1][0] =  Object.create(block);
this.block [3][4][1][0].x = 5;
this.block [3][4][1][0].y = 0;
this.block [3][4][1][0].z = 6;
this.block [3][4][1][0].rotation = 3;
this.block [3][4][1][0].twobytwo = true;
this.block [3][4][1][0].ledALeft = 1;
this.block [3][4][1][0].ledARight = 1;
this.block [3][4][1][0].ledBLeft = 1;
this.block [3][4][1][0].ledBRight = 1;
this.block [3][4][1][1] =  Object.create(block);
this.block [3][4][1][1].x = 1;
this.block [3][4][1][1].y = 0;
this.block [3][4][1][1].z = 3;
this.block [3][4][1][1].rotation = 0;
this.block [3][4][1][1].twobytwo = true;
this.block [3][4][1][1].ledALeft = 4;
this.block [3][4][1][1].ledARight = 4;
this.block [3][4][1][1].ledBLeft = 4;
this.block [3][4][1][1].ledBRight = 4;
this.block [3][4][1][2] =  Object.create(block);
this.block [3][4][1][2].x = 5;
this.block [3][4][1][2].y = 0;
this.block [3][4][1][2].z = 4;
this.block [3][4][1][2].rotation = 1;
this.block [3][4][1][2].twobytwo = true;
this.block [3][4][1][2].ledALeft = 4;
this.block [3][4][1][2].ledARight = 4;
this.block [3][4][1][2].ledBLeft = 4;
this.block [3][4][1][2].ledBRight = 4;
this.block [3][4][1][3] =  Object.create(block);
this.block [3][4][1][3].x = 4;
this.block [3][4][1][3].y = 0;
this.block [3][4][1][3].z = 4;
this.block [3][4][1][3].rotation = 2;
this.block [3][4][1][3].twobytwo = true;
this.block [3][4][1][3].ledALeft = 1;
this.block [3][4][1][3].ledARight = 1;
this.block [3][4][1][3].ledBLeft = 1;
this.block [3][4][1][3].ledBRight = 1;
this.block [3][4][1][4] =  Object.create(block);
this.block [3][4][1][4].x = 8;
this.block [3][4][1][4].y = 0;
this.block [3][4][1][4].z = 3;
this.block [3][4][1][4].rotation = 3;
this.block [3][4][1][4].twobytwo = false;
this.block [3][4][1][4].ledALeft = 1;
this.block [3][4][1][4].ledARight = 1;
this.block [3][4][1][4].ledBLeft = 1;
this.block [3][4][1][4].ledBRight = 1;
this.block [3][4][1][5] =  Object.create(block);
this.block [3][4][1][5].x = 1;
this.block [3][4][1][5].y = 0;
this.block [3][4][1][5].z = 1;
this.block [3][4][1][5].rotation = 0;
this.block [3][4][1][5].twobytwo = false;
this.block [3][4][1][5].ledALeft = 2;
this.block [3][4][1][5].ledARight = 2;
this.block [3][4][1][5].ledBLeft = 2;
this.block [3][4][1][5].ledBRight = 2;
this.block [3][4][1][6] =  Object.create(block);
this.block [3][4][1][6].x = 8;
this.block [3][4][1][6].y = 0;
this.block [3][4][1][6].z = 2;
this.block [3][4][1][6].rotation = 2;
this.block [3][4][1][6].twobytwo = false;
this.block [3][4][1][6].ledALeft = 2;
this.block [3][4][1][6].ledARight = 2;
this.block [3][4][1][6].ledBLeft = 2;
this.block [3][4][1][6].ledBRight = 2;
this.block [3][4][1][7] =  Object.create(block);
this.block [3][4][1][7].x = 6;
this.block [3][4][1][7].y = 1;
this.block [3][4][1][7].z = 3;
this.block [3][4][1][7].rotation = 2;
this.block [3][4][1][7].twobytwo = true;
this.block [3][4][1][7].ledALeft = 1;
this.block [3][4][1][7].ledARight = 1;
this.block [3][4][1][7].ledBLeft = 1;
this.block [3][4][1][7].ledBRight = 1;
this.block [3][4][1][8] =  Object.create(block);
this.block [3][4][1][8].x = 4;
this.block [3][4][1][8].y = 1;
this.block [3][4][1][8].z = 4;
this.block [3][4][1][8].rotation = 0;
this.block [3][4][1][8].twobytwo = true;
this.block [3][4][1][8].ledALeft = 2;
this.block [3][4][1][8].ledARight = 2;
this.block [3][4][1][8].ledBLeft = 2;
this.block [3][4][1][8].ledBRight = 2;
this.block [3][4][1][9] =  Object.create(block);
this.block [3][4][1][9].x = 3;
this.block [3][4][1][9].y = 1;
this.block [3][4][1][9].z = 3;
this.block [3][4][1][9].rotation = 1;
this.block [3][4][1][9].twobytwo = true;
this.block [3][4][1][9].ledALeft = 2;
this.block [3][4][1][9].ledARight = 2;
this.block [3][4][1][9].ledBLeft = 2;
this.block [3][4][1][9].ledBRight = 2;
this.block [3][4][1][10] =  Object.create(block);
this.block [3][4][1][10].x = 8;
this.block [3][4][1][10].y = 1;
this.block [3][4][1][10].z = 1;
this.block [3][4][1][10].rotation = 3;
this.block [3][4][1][10].twobytwo = false;
this.block [3][4][1][10].ledALeft = 4;
this.block [3][4][1][10].ledARight = 4;
this.block [3][4][1][10].ledBLeft = 4;
this.block [3][4][1][10].ledBRight = 4;
this.block [3][4][1][11] =  Object.create(block);
this.block [3][4][1][11].x = 5;
this.block [3][4][1][11].y = 2;
this.block [3][4][1][11].z = 3;
this.block [3][4][1][11].rotation = 2;
this.block [3][4][1][11].twobytwo = false;
this.block [3][4][1][11].ledALeft = 4;
this.block [3][4][1][11].ledARight = 4;
this.block [3][4][1][11].ledBLeft = 4;
this.block [3][4][1][11].ledBRight = 4;
this.block [3][4][1][12] =  Object.create(block);
this.block [3][4][1][12].x = 6;
this.block [3][4][1][12].y = 2;
this.block [3][4][1][12].z = 3;
this.block [3][4][1][12].rotation = 1;
this.block [3][4][1][12].twobytwo = true;
this.block [3][4][1][12].ledALeft = 1;
this.block [3][4][1][12].ledARight = 1;
this.block [3][4][1][12].ledBLeft = 1;
this.block [3][4][1][12].ledBRight = 1;




//////////////////////////////////////////////////////////////////////////////////////////////

//4
//--
this.score[4] = [];
this.block [4] = []; 

//4.0
//-------------------------
this.score[4][0] = 0;
this.block[4][0] = this.block[0][0];


//4.1
//-------------------------
this.score[4][1] = 0;
this.block[4][1] = this.block[0][1];

//4.2
//-------------------------
this.score[4][2] = 0;
this.block[4][2] = this.block[0][2];

//4.3
//-------------------------
this.score[4][3] = 0;
this.block[4][3] = this.block[0][3];

//4.4
//-------------------------
this.score[4][4] = 0;
this.block[4][4] = this.block[0][4];

//-------------------------

/*
      this.score[1] = [];
      this.score[1][0] = 0;

      this.block [1] = []; 
      this.block [1][0] = [];
      this.block [1][0][0] = [];
      
      this.block [1][0][0][0] = Object.create(block); 
      this.block [1][0][0][1] = Object.create(block); 

      this.block [1][0][0][0].x = 0;
      this.block [1][0][0][0].y = 0;
      this.block [1][0][0][0].z = 2;
      this.block [1][0][0][0].rotation = 0;
      this.block [1][0][0][0].twobytwo = true;                             

      this.block [1][0][0][1].x = 2;
      this.block [1][0][0][1].y = 0;
      this.block [1][0][0][1].z = 2;
      this.block [1][0][0][1].rotation = 0;
      this.block [1][0][0][1].twobytwo = true;

      this.block [1][0][1] = [];
      
      this.block [1][0][1][0] = Object.create(block); 
      this.block [1][0][1][1] = Object.create(block); 

      this.block [1][0][1][0].x = 0;
      this.block [1][0][1][0].y = 0;
      this.block [1][0][1][0].z = 2;
      this.block [1][0][1][0].rotation = 0;
      this.block [1][0][1][0].twobytwo = true;

      this.block [1][0][1][1].x = 3;
      this.block [1][0][1][1].y = 0;
      this.block [1][0][1][1].z = 2;
      this.block [1][0][1][1].rotation = 0;
      this.block [1][0][1][1].twobytwo = true;


      */
     
      this.initLevel(this.block[0][0][0]);

  }
}
