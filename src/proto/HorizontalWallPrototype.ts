import type { Entity, PrototypeSchema } from "kernox";

interface HorizontalWall extends Entity {
    color    : string,
    startX   : number,
    endX     : number,
    posY     : number,
    opacity  : number,
    textureId: number
}

const HorizontalWallPrototype :PrototypeSchema<HorizontalWall> = {
    name: "HorizontalWall",
    attributes: {
        color    : 'white',
        startX   : NaN,
        endX     : NaN,
        posY     : NaN,
        opacity  : 1,
        textureId: 2
    } as HorizontalWall,
    collections: new Set([ "HorizontalWalls" ])
};

export { type HorizontalWall, HorizontalWallPrototype};