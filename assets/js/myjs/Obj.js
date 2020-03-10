// オブジェクトクラス
class Obj extends Task{

    constructor(){
        super();

        // Obejctマネージャーに登録
        ObjectManager.instance.regist(this);
    }

    /**
     *  更新処理
     * @memberof Obj
     */
    Update(){
    
    }

    /**
     *  座標反映
     * @memberof Obj
     */
    Draw(){
    
    }
}