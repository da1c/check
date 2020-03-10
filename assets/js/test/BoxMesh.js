
function CreateMesh( x, y, z){

  // 箱を作成
  geometry = new THREE.BoxGeometry(x, y, z);
  material = new THREE.MeshBasicMaterial({
    color: 0x0000ff
  });

  return new THREE.Mesh(geometry, material);
}