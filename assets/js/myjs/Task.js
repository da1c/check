// タスククラス
class Task {
  // ハンドルかIDをもたせるか？

  constructor() {
    // ここでタスクマネージャーに登録
    TaskManager.instance.Regist(this);
  }

  // 更新用
  Update() {}
}
