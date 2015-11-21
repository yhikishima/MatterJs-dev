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
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

  var STAGE = {};
  var BALL = {};
  var _engine = {};
  var _ball = {};

  STAGE.init = function() {
    var opt = {
      positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: false
    };

    var mainStage = document.getElementById('stage');
    _engine = Engine.create(mainStage, opt);
    var _world = _engine.world;

    //Engine 実行
    Engine.run(_engine);
    STAGE.reset();

    _ball = BALL.create();
    World.add(_world, [_ball]);

    BALL.addEvent();
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

  /**
  * BALL methods
  */
  BALL.create = function(e) {
    var x = (e)? e.mouse.position.x : 530;
    var y = (e)? e.mouse.position.y : 100;

    var ball = Bodies.circle(x, y, 50, {
      isStatic: false, // true -> ボールを固定
      //バウンドさせたい場合はrestitutionに任意の値を渡す
      restitution: 0.9,
      render: {fillStyle: '#d04030'}
    });

    return ball;
  };

  BALL.addEvent = function() {
    Events.on(_engine, 'mousedown', function(e) {
      _ball = BALL.create(e);
      World.add(_engine.world, [_ball]);

      var button = document.getElementById('button-firing');

      button.addEventListener('click', function(e){
        Body.applyForce(_ball, { x: 0, y: 0 }, {x: 0.06, y: -0.05});
      });
    });
  };

  // 初期化
  STAGE.init();
})();