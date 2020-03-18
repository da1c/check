function CreateGroundMesh(){
  // Planeジオメトリ作成
  let geo = new THREE.PlaneGeometry(10, 10);
  // マテリアル作成
  let mat = new THREE.MeshBasicMaterial({color: 0xffffff});
  // Mesh作成
  let plane = new THREE.Mesh(geo, mat);

  return plane;
}