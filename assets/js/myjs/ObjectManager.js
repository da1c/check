/**
 *
 * Objectクラスの管理クラス
 * @class ObjectManager
 */
class ObjectManager{

    /**
     *  オブジェクトリスト
     * @static
     * @memberof ObjectManager
     */
    objectArray;
    
    constructor(){
        ObjectManager.instance = this;
    }

    /**
     *  初期化処理
     *
     * @memberof ObjectManager
     */
    Init(){
        // Objectリストのメモリ確保
        this.objectArray = new Array();
    }

    /**
     *  登録処理
     * @memberof ObjectManager
     */
    regist(obj){

    }


    /**
     *リスト内のObjectの座標反映
     * @memberof ObjectManager
     */
    Draw(){

    }
    

}

// インスタンス定義
ObjectManager.instance = null;