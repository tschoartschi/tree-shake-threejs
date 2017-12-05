# Tree shake Three.js

To see the results do the following steps:

```
npm install
node build.js
```

After that you should see an index.js file in the dist folder. To verify if the build file still works open index.html. If you see a spinning cube everything worked out fine :-)

## Notes

This project is just a dummy to check if tree shaking Three.js works and if it makes sense. I'm not sure if this project setup leads to the best results. If you know any improvements, let me know. Create a PR or get in contact with me.

To take advantage of tree shaking you have to include a glsl loader for rollup. I copied the glsl from the  original Three.js project. You can find it here: https://github.com/mrdoob/three.js/blob/dev/rollup.config.js#L1

Furthermore you have to use the following syntax when importing a Three.js file

```javascript
  import {PerspectiveCamera} from 'three/src/cameras/PerspectiveCamera';
  import {Scene} from 'three/src/scenes/scene';
  import {Mesh} from 'three/src/objects/Mesh';
  import {BoxGeometry} from 'three/src/geometries/BoxGeometry';
  import {MeshBasicMaterial} from 'three/src/materials/MeshBasicMaterial';
  import {WebGLRenderer} from 'three/src/renderers/WebGLRenderer';
```

The following syntax will NOT work:

```javascript
  import { Camera, Scene, Mesh, BoxGeometry, MeshNormalMaterial, WebGLRenderer } from 'three';
```

I added a link to this repo in the following thread: https://github.com/mrdoob/three.js/issues/9403
