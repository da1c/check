/**
 * CrreateJSのステージ作成
 *
 * @class StageManager
 */
class StageManager {

  /**
   *Creates an instance of StageManager.
   * @memberof StageManager
   */
  constructor() {
    // インスタンスの保存
    StageManager.instance = this;
  }

  /**
   *初期化処理
   * @memberof StageManager
   */
  Init(canvasID) {
    // Stage作成
    this.stage = new createjs.Stage(canvasID);
  }

  /**
   *Stageにオブジェクト追加
   * @param {*} obj
   * @memberof StageManager
   */
  AddObj(obj) {
    this.stage.addChild(obj);
  }

  /**
   *ステージ更新
   * @memberof StageManager
   */
  UpdateStage() {
    this.stage.update();
  }
}

// インスタンス定義
StageManager.instance = null;
