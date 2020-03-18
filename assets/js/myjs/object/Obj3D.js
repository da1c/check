
/**
 * 3Dオブジェクトのクラス
 *
 * @class Obj3D
 * @extends {Obj}
 */
class Obj3D extends Obj {

  /**
   *Creates an instance of Obj3D.
   * @memberof Obj3D
   */
  constructor() {
    // 基底クラスのコンストラクタ呼び出し
    super();

    this.pos = new THREE.Vector3(0,0,0);
    this.rot = new THREE.Vector3(0,0,0);
    this.scale = new THREE.Vector3(1,1,1);
    this.mesh = null;
  }

  /**
   *  更新処理
   * @memberof Obj3D
   */
  Update() {
  }

  /**
   *  モデルに座標反映処理
   * @memberof Obj3D
   */
  Draw() {
    this.mesh.position.set( this.pos.x, this.pos.y, this.pos.z);
    //console.log(this.mesh.position);
    this.mesh.rotation.y += 1;
  }

  /**
   *Mesh設定
   * @memberof Obj3D
   */
  SetMesh(mesh) {
    this.mesh = mesh;
  }


  /**
   *座標設定
   *
   * @param {*} x
   * @param {*} y
   * @param {*} z
   * @memberof Obj3D
   */
  SetPos( x,y,z ){
    this.pos.x = x;
    this.pos.y = y;
    this.pos.z = z;
  }

  // 親子関係の削除を忘れない
  Delete(){

  }

}
