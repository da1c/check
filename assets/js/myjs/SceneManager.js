

/**
 * Scene管理クラス
 *
 * @class SceneManager
 */
class SceneManager{

    /**
     *  描画用のシーン
     *
     * @memberof SceneManager
     */
    scene;

    /**
     *Creates an instance of SceneManager.
     * @memberof SceneManager
     */
    constructor(){
        SceneManager.instance = this;
    }

    /**
     * 初期化処理
     * @memberof SceneManager
     */
    Init(){
        // Sceneの作成
        this.scene = new THREE.Scene();
    }

    /**
     * シーンにオブジェクトの追加
     * @param {*} obj
     * @memberof SceneManager
     */
    AddObj( obj ){
        this.scene.add(obj);
    }

    
    /**
     * シーンからオブジェクトの除外
     * @param {*} obj
     * @memberof SceneManager
     */
    RemoceObj(obj){
        // Sceneから除外
        this.scene.remove(obj);
        // ジオメトリ開放
        this.scene.geometry.dispose();
        // マテリアル開放
        this.scene.material.dispose();
        // テクスチャ開放
        this.scene.texture.dispose();
    }

    static get Scene(){
        return this.scene;
    }

}

// インスタンス定義
SceneManager.instance = null;