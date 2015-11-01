(function() {
  // 使用するメソッドを読み込む
  var Engine = Matter.Engine,
      Gui = Matter.Gui,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      Constraint = Matter.Constraint,
      RenderPixi = Matter.RenderPixi,
      Events = Matter.Events,
      Bounds = Matter.Bounds,
      Vector = Matter.Vector,
      Vertices = Matter.Vertices,
      MouseConstraint = Matter.MouseConstraint;


  var STAGE = {};

  STAGE.init = function() {
    var opt = {
      positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: false
    };

    var mainStage = document.getElementById('stage');
     _engine = Engine.create(mainStage, opt);

     //Engine 実行
     Engine.run(_engine);
     // STAGE.ballSample();
  };

  // 初期化
  STAGE.init();
})();