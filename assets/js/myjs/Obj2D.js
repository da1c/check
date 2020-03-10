class Obj2D extends Obj {
  /**
   *CreateJSのコンテナ
   *
   * @memberof Obj2D
   */
  container;

  /**
   *Creates an instance of Obj2D.
   * @memberof Obj2D
   */
  constructor() {
    // Objマネージャーに登録
    super();

    this.container = new createjs.Container();
  }

  /**
   *更新処理
   *
   * @memberof Obj2D
   */
  Update() {}

  /**
   *座標反映処理
   *
   * @memberof Obj2D
   */
  Draw() {}

  
  /**
   *コンテナにイベント追加
   *
   * @memberof Obj2D
   */
  AddEvent(eventName, registFunc){
    this.container.addEventListener(eventName, registFunc);
  }

}
