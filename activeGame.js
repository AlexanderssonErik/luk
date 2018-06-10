let games = {
  guidedBuild: 0,
  tangram: 1,
  tangramFree: 2
}



let activeGame = {
  game: [],
  level: [],
  gameIndex: -1,
  ignoreWin: false,
  setGame: function(game){  
    
    
    if(game == this.gameIndex){
      return;
    }
    
    if(game == games.guidedBuild){
      if(this.game[game] == null){      
        this.game[game] = guidedBuild;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = guidedBuildLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }else if(game == games.tangram){     
      if(this.game[game] == null){      
        this.game[game] = tangram;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = tangramLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
     }else if(game == games.tangramFree){
      if(this.game[game] == null){      
        this.game[game] = tangramFree;//Object.create(guidedBuild); 
        this.game[game].init(); 
        this.level[game] = tangramFreeLevel;
        this.level[game].init();  
      }
      guiGame.initLevelSelect(this.level[game].rowColumnCount);
    }

    
    //neeed to reset this.ignoreWin = false;
    this.gameIndex = game;

  },  
  setLevel : function(level, difficulty){
    this.level[this.gameIndex].setLevel(level, difficulty);
    this.game[this.gameIndex].clear();
    animateWinning.stop();
    guiGame.okButton.hide();
    this.ignoreWin = false;


  },
  resetBaseLed : function(){
    base.ledClear();
    base.ledSetLeft(globalWorldColor.cyan);
    base.ledSetRight(globalWorldColor.magenta);
  },
  resetCamera : function(){

  },
  stopDisplayLevelScore : function(){
    animateWinning.stop();

  },
  displayLevelScore  : function(level, difficulty){

    if(activeGame.level[activeGame.gameIndex].getScore(level, difficulty) != 0){   
      let score = activeGame.level[activeGame.gameIndex].getScore(level, difficulty);
      score -= score %3;
      animateWinning.start( score ,  algoBlock.findMaxY(world.block), false );
    }else{     
      animateWinning.stop();
    }
  },
  render: function(){ 
    if(this.gameIndex > -1){
      this.game[this.gameIndex].render();
    }
  },
  win:  function(){
    if(!this.ignoreWin){
      animateWinning.start(activeGame.level[activeGame.gameIndex].win(),  algoBlock.findMaxY(world.block), true);
      guiGame.okButton.initCallBack(this.clickOk, buttonTrigger.up);
      guiGame.okButton.show();
      this.ignoreWin = true;
    }
  },
  clickOk: function(){   
    activeGame.ignoreWin = false;
    guiGame.okButton.hide();
    animateWinning.stop();
    //if(activeGame.gameIndex == games.guidedBuild){
      activeGame.level[activeGame.gameIndex].new();
    //}
  }



};
