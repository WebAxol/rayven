import type { KernoAddon }  from  'kernox';

import { HorizontalWallPrototype }  from "./proto/HorizontalWallPrototype.js";
import { VerticalWallPrototype }    from "./proto/VerticalWallPrototype.js";
import { RayPrototype }             from "./proto/RayPrototype.js";
import { CirclePrototype }          from "./proto/CirclePrototype.js";

import { MiniMapRenderingSystem }   from './systems/MiniMapRenderingSystem.js';
import { CameraMovementSystem }     from './systems/CameraMovementSystem.js';
import InputHandler                 from './systems/InputHandlingSystem.js';
import SceneRenderingSystem         from './systems/SceneRenderingSystem/SceneRenderingSystem.js';

import { HorizontalWalls, VerticalWalls, Circles } from './collections.js';

export const rayven : KernoAddon = {
    name : "rayven",
    prototypes: [
        HorizontalWallPrototype,
        VerticalWallPrototype,
        RayPrototype,
        CirclePrototype
    ],
    systems : [
        MiniMapRenderingSystem,
        SceneRenderingSystem,
        CameraMovementSystem,
        InputHandler
    ],
    collections: [
        HorizontalWalls,
        VerticalWalls,
        Circles
    ]
};