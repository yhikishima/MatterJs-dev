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
  var _engine = {};

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
    STAGE.createBall();
  };

  STAGE.createBall = function() {
    var _world = _engine.world;
    STAGE.reset();

    var ball = Bodies.circle(530, 100, 50, {
      isStatic: false, // true -> ボールを固定
      //バウンドさせたい場合はrestitutionに任意の値を渡す
      restitution: 0.9,
      render: {fillStyle: '#d04030'}
    });

    World.add(_world, [ball]);
  };

  STAGE.reset = function () {
    var _world = _engine.world;

    //描画クリア
    World.clear(_world);
    Engine.clear(_engine);

    //重力値
    _engine.world.gravity.y = 1;

    var offset = 0;

    //矩形で枠線を作る(rectangle(x座標,y座標,横幅,縦幅,option))
    World.add(_world, [
        Bodies.rectangle(400, 0, 800, 1, {isStatic: true}),
        Bodies.rectangle(800, 300, 1, 600, {isStatic: true}),
        Bodies.rectangle(0, 0, 1, 600, {isStatic: true}),
        Bodies.rectangle(400, 600, 800, 1, {isStatic: true})
    ]);
    //renderのオプション(各種renderのオプション)
    var renderOptions = _engine.render.options;
    renderOptions.wireframes = false;
  };

  // 初期化
  STAGE.init();
})();