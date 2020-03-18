"use strict";

window.addEventListener("DOMContentLoaded", init);

var width = 900;
var height = 900;

async function init() {
  // 画面サイズ
  //var THREE = require("three");

  // レンダラー作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#Canvas3D")
  });

  // 画面のリサイズ処理もここで行うようにする

  // デバイスピクセル比の設定
  renderer.setPixelRatio(window.devicePixelRatio);
  // レンダラーのサイズ指定
  renderer.setSize(width, height);

  // ここで初期化処理を行う
  var sceneManager = new SceneManager();
  sceneManager.Init();
  // TaskManger作成
  var taskManager = new TaskManager();
  taskManager.Init();
  // Objectマネージャー作成
  var objManager = new ObjectManager();
  objManager.Init();
  // Stageマネージャー作成
  var stageManager = new StageManager();
  stageManager.Init("Canvas2D");

  // Resorceマネージャーの作成
  var resourceManager = new ResourceManager();

  // カメラマネージャー作成
  var cameraManager = new CameraManager();
  cameraManager.CreateMainCamera(45, width / height, 1, 1000);

  // カメラの座標更新
  cameraManager.MainCameraObj.SetPos(new THREE.Vector3(0, 5, +30));

  // Timeマネージャー作成
  var timeManager = new TimeManager();

  // 平行光源
  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 1; // 光の強さを倍に
  light.position.set(1, 1, 1);

  // ライト追加
  sceneManager.AddObj(light);

  // ----------------------------------------------------
  //テストで４００個表示
  /*for (let x_idx = 0; x_idx < 10; x_idx++) {
    for (let y_idx = 0; y_idx < 10; y_idx++) {
      let obj = new Obj3D();
      obj.SetMesh(CreateMesh(10, 10, 10));
      obj.SetPos(x_idx * 15, y_idx * 15, 0);
      // オブジェクトをシーンに追加
      sceneManager.AddObj(obj.mesh);
    }
  }*/

  // ----------------------------------------------------
  // モデルの読み込み
  let testModelPath = "./assets/resource/model/kitchen.fbx";
  resourceManager.LoadModel(testModelPath, obj => {});
  // ロード待ちが必要
  // asyncで読み込めるようにする
  await sleep(2000);

  // ここで作成
  var taskObjArray = new Array();

  let workPos = new THREE.Vector3(0, 0, 0);
  let addVec = new THREE.Vector3(20, 0, -30);
  for (let index = 0; index < 10; index++) {
    let testModel = resourceManager.GetModel(testModelPath);
    let taskObj = new TaskQuestionRoot();
    taskObj.Init(workPos.x, workPos.y, workPos.z, "適当", testModel, null);
    // オブジェクトのリストに追加
    taskObjArray.push(taskObj);

    // 追加座標の更新
    workPos.add(addVec);
  }

  // インデックス
  var questionIDX = 0;
  cameraManager.MainCameraObj.SetPos(GetNextCameraPos());



  // ここでフロー開始
  // ほぼイベントドリブンにする
  // フローの進行
  Flow.Init();
  init2D();
  // 初回実行
  tick();

  // フレームごとの更新処理
  function tick() {
    // 次のフレームの更新処理を登録
    requestAnimationFrame(tick);

    // Timeマネージャー更新
    timeManager.UpdateTime();
    // 更新処理
    taskManager.Update();
    // Obejctの座標反映
    objManager.Draw();
    // レンダリング
    renderer.render(SceneManager.instance.scene, cameraManager.GetMainCamera());
  }

  // 2D初期化
  function init2D() {
    // テキストの表示
    // 座標はCanvasのサイズから算出
    var test = new Button2D(250, 750, 100, 100, "YES", 25, "Black");
    test.AddEvent("click", clickTest);
    stageManager.AddObj(test.container);

    var test2 = new Button2D(550, 750, 100, 100, "NO", 25, "Blue");
    test2.AddEvent("click", clickTest2);
    stageManager.AddObj(test2.container);

    //clickTest2();
    // Stageの描画を更新します
    stageManager.UpdateStage();

    // click時の処理
    function clickTest() {
      console.log("clickTest");

      questionIDX += 1;
      cameraManager.MainCameraObj.Move(
        GetNextCameraPos(),
        new THREE.Vector3(0, 0, 0),
        1
      );

      // Stageの描画を更新します
      stageManager.UpdateStage();
    }

    function clickTest2() {
      console.log("clickTest2");
      // 
      questionIDX += 1;
      cameraManager.MainCameraObj.Move(
        GetNextCameraPos(),
        new THREE.Vector3(0, 0, 0),
        1
      );
      
      // Stageの描画を更新します
      stageManager.UpdateStage();
    }
  }

  // 現在のインデックスのカメラの座標をい取得
  function GetNextCameraPos() {
    
    if( taskObjArray.length <= questionIDX)
    {
      questionIDX = 0;
    }

    let taskTarget = taskObjArray[questionIDX];
    let cameraPos = taskTarget.GetCameraPos();
    console.log(cameraPos);
    return cameraPos.clone();
  }
}

// 処理待ち応急処置
async function sleep(delay){
  return new Promise(resolve => {
    setTimeout(() => resolve(), delay);
  });
}
