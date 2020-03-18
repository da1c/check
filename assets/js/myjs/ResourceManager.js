
/**
 *resource関連管理マネージャー
 *
 * @class ResourceManager
 */
class ResourceManager{

  // 各resourceマネージャーを管理する

  constructor(){
    // モデルマネージャー
    this.model = new ModelManager();


  }

  
  // モデル読み込みの完了待ち
  async AwaitModelLoad(){

  } 

  /**
   *モデル読み込み
   *
   * @param {string} modelPath モデルパス
   * @param {func*} func 読み込み完了
   * @memberof ResourceManager
   */
  LoadModel( modelPath, func ){
    this.model.Load(modelPath, func);
  }


  /**
   *モデルのメッシュ情報取得
   *
   * @param {string} modelPath
   * @returns モデルのメッシュ : 無い場合 null
   * @memberof ResourceManager
   */
  GetModel(modelPath){
    return this.model.GetModel( modelPath );
  }

  // フォント
  // モデル
  // テクスチャ

  // 
}