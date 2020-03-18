class TaskQuestionRoot extends Obj3D {
  /**
   *Creates an instance of TaskQuestionRoot.
   * @memberof TaskQuestionRoot
   */
  constructor() {
    // 基底クラスのコンストラクタ
    super();
    // 質問版
    this.questionBoard = null;
    // モデル
    this.modelMesh = null;
    // 土台作成
    this.baseMesh = null;

    this.rootObj3D = null;
    // カメラの座標
    this.cameraPos = new THREE.Vector3(0, 0, 0);
  }

  /**
   *初期化処理
   *
   * @param {number} posX
   * @param {number} posY
   * @param {number} posZ
   * @param {string} questionStr
   * @param {Mesh} modelMesh
   * @param {Mesh} baseMesh
   * @memberof TaskQuestionRoot
   */
  Init(posX, posY, posZ, questionStr, modelMesh, baseMesh) {
    // 座標の設定

    // ベースは仮でここで作成
    let geo = new THREE.CylinderGeometry(5, 5, 1, 20);
    let mat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.baseMesh = new THREE.Mesh(geo, mat);

    // 親子関係にするか
    this.rootObj3D = new THREE.Object3D();

    // モデルを設定
    this.modelMesh = modelMesh;

    // 土台を子に設定
    this.rootObj3D.add(this.baseMesh);
    // モデルのメッシュを子に設定
    this.rootObj3D.add(this.modelMesh);

    this.modelMesh.scale.set(0.05, 0.05, 0.05);

    // 座標はとりあえずそのままで確認
    this.rootObj3D.position.set(posX, posY, posZ);

    // シーンに追加
    SceneManager.instance.AddObj(this.rootObj3D);

    // cameraPos
    this.cameraPos.set(posX + 0, posY + 5, posZ + 30);
  }

  /**
   *更新処理
   *
   * @memberof TaskQuestionRoot
   */
  Update() {}

  /**
   *描画処理
   *
   * @memberof TaskQuestionRoot
   */
  Draw() {
    // 各メッシュに座標を設定
  }

  /**
   *カメラの座標取得
   *
   * @returns
   * @memberof TaskQuestionRoot
   */
  GetCameraPos() {
    return this.cameraPos;
  }
}
