/**
 *時間管理
 *
 * @class TimeManager
 */
class TimeManager {
  /**
   *Creates an instance of TimeManager.
   * @memberof TimeManager
   */
  constructor() {
    //
    TimeManager.instance = this;

    // 今回のフレームの更新時間
    this.deltaTime = 0.0;
    this.prevTime = Date.now();
  }

  /**
   *時間関連更新処理
   *
   * @memberof TimeManager
   */
  UpdateTime() {
    // 単位を秒に変換
    let nowTime = Date.now() * 0.001;
    // 前フレームからの経過時間算出
    this.deltaTime = nowTime - this.prevTime;
    // 今フレーム開始時の時間を保存
    this.prevTime = nowTime;
  }

  /**
   *デルタタイムの取得
   *
   * @returns
   * @memberof TimeManager
   */
  GetDeltaTime() {
    return this.deltaTime;
  }
}

// インスタンス本体
TimeManager.instance = null;
