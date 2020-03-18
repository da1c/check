
/**
 *Vector3同士の加算
 *
 * @param {Vector3} vecA
 * @param {Vector3} vecB
 * @returns 加算結果
 */
function AddVector3( vecA, vecB){
  return CalcVector3( vecA, vecB, (a,b)=>{return a+b} );
}


/**
 *Vector3同士の減算
 *
 * @param {Vector3} vecA
 * @param {Vector3} vecB
 * @returns
 */
function SubVector3( vecA, vecB){
    return CalcVector3(vecA, vecB, (a,b)=>{ return a-b} );
}

/**
 *計算
 *
 * @param {Vector3} vecA
 * @param {Vector3} vecB
 * @param {func*} calcFunc 計算処理
 * @returns
 */
function CalcVector3( vecA, vecB, calcFunc ){

  var work = vecA.clone();
  work.x = calcFunc( vecA.x,vecB.x);
  work.y = calcFunc( vecA.y,vecB.y);
  work.z = calcFunc( vecA.z,vecB.z);
  return work;

}