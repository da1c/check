

/**
 *カメラ管理クラス
 *
 * @class CameraManager
 */
class CameraManager{


    /**
     *Creates an instance of CameraManager.
     * @memberof CameraManager
     */
    constructor(){
      // クラスのインスタンスを保存
      CameraManager.instance = this;
      this.MainCameraObj = null;
    }


  /**
   * メインカメラ作成
   *
   * @param {number} fov 視野角
   * @param {number} aspectRatio アスペクト比率
   * @param {number} near ニアクリップ
   * @param {number} far　ファークリップ
   * @memberof CameraManager
   */
  CreateMainCamera( fov, aspectRatio, near, far ){
    // カメラ作成
    this.MainCameraObj = new ObjCamera();
    // 透視投影のカメラ設定
    this.MainCameraObj.SetPerspectiveCamera(fov, aspectRatio, near, far);
  }


  /**
   *メインカメラの座標更新
   *
   * @param {number} posX
   * @param {number} posY
   * @param {number} posZ
   * @memberof CameraManager
   */
  MoveMainCamera( posX, posY, posZ ){
    this.MainCameraObj.SetPos(posX, posY, posZ);
  }


  /**
   *メインカメラのオブジェクトからカメラ取得
   *
   * @returns カメラ
   * @memberof CameraManager
   */
  GetMainCamera(){
    return this.MainCameraObj.camera;
  }

}

// 本体のインスタンス定義
CameraManager.instance = null;