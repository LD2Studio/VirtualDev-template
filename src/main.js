import * as THREE from 'three'
import { createApp } from 'virtualdev'

const app = createApp(THREE, {
    interactive: true
})

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshMatcapMaterial({
        color: 'red'
    })
)

app.scene.add(cube)