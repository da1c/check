/**
 *
 * Objectクラスの管理クラス
 * @class ObjectManager
 */
class ObjectManager {


  /**
   *Creates an instance of ObjectManager.
   * @memberof ObjectManager
   */
  constructor() {
    ObjectManager.instance = this;
    // 初期化処理
    this.Init();
  }

  /**
   *  初期化処理
   *
   * @memberof ObjectManager
   */
  Init() {
    // Objectリストのメモリ確保
    this.objectArray = new Array();
  }

  /**
   *  登録処理
   * @memberof ObjectManager
   */
  regist(obj) {
    this.objectArray.push(obj);
  }

  /**
   *リスト内のObjectの座標反映
   * @memberof ObjectManager
   */
  Draw() {
    this.objectArray.forEach(element => {
      element.Draw();
    });
  }
}

// インスタンス定義
ObjectManager.instance = null;
