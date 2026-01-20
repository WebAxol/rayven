import type { Entity, PrototypeSchema } from "kernox";
import { VerticalWallAttributes } from "../interfaces/Wall.js";

interface VerticalWall extends Entity {
    color    : string,
    startY   : number,
    endY     : number,
    posX     : number,
    opacity  : number,
    textureId: number
}

const VerticalWallPrototype :PrototypeSchema<VerticalWallAttributes> = {
    name: "VerticalWall",
    attributes: {
        color    : 'white',
        startY   : NaN,
        endY     : NaN,
        posX     : NaN,
        opacity  : 1,
        textureId: 0
    },
    collections: new Set([ "VerticalWalls" ])
};

export {VerticalWall, VerticalWallPrototype};