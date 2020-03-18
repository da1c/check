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
  constructor() {

    // モデルローダー作成 仮でObjファイルローダー
    this.loader = new THREE.FBXLoader();

    // キャッシュリスト  とりあえず運用しない
    this.cache = new Array();
    //
    this.cachePath = new Array();
  }

  /**
   *非同期ロード
   *
   * @param {*} func
   * @memberof ModelManager
   */
  Load(modelPath, func) {
    // キャッシュ内に対象のモデルがあるか確認
    this.loader.load(modelPath, obj => {

      // 読み込んだモデルをcacheする
      // キーをパスにするかな　仮でObject3Dのみを保存
      this.cache.push(obj);
      this.cachePath.push(modelPath);
      // 読み込み完了通知
      func(obj);
    });
  }
 
  
  /**
   *モデルのメッシュを取得
   *
   * @param {string} modelPath　モデルのパス
   * @returns Mesh 対象のモデルメッシュ : 無い場合 null
   * @memberof ModelManager
   */
  GetModel(modelPath){

    for (let cacheIdx = 0; cacheIdx < this.cachePath.length; cacheIdx++) {

      if( this.cachePath[cacheIdx] == modelPath ){
        return this.cache[cacheIdx].clone();
      }
    }

    return null;

  }

}

// インスタンス定義
ModelManager.instance = null;
