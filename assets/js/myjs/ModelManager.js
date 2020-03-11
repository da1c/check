/**
 *3Dモデル関連のマネージャー
 *
 * @class ModelManager
 */
class ModelManager {
  // 3Dモデル関連の管理


  /**
   *Creates an instance of ModelManager.
   * @memberof ModelManager
   */
  constructor(){
    var THREE = require("three");
    // モデルローダー作成 仮でObjファイルローダー
    this.loader = new THREE.ObjectLoader();
    
    // キャッシュリスト  とりあえず運用しない
    this.cache = null;
    // 
  }
}
