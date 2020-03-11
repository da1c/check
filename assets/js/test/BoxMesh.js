
function CreateMesh( x, y, z){

  // 箱を作成
  geometry = new THREE.BoxGeometry(x, y, z);
  material = new THREE.MeshStandardMaterial({
    color: 0x00ffff
  });

  return new THREE.Mesh(geometry, material);
}