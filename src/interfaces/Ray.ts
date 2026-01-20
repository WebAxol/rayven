import type Vector2D from "../utils/physics/Vector2D.js"
import type { CircleEntity } from "./Circle.js"
import type { VerticalWall } from "../proto/VerticalWallPrototype.js"
import type { HorizontalWall } from "../proto/HorizontalWallPrototype.js"
import type { Entity } from "kernox"

export interface RayAttributes {
    active       : boolean,
    level        : number,
    lambda       : number, 
    source       : Vector2D,
    direction    : Vector2D,
    collidesAt   : Vector2D,
    collidesWith : VerticalWall | HorizontalWall | CircleEntity | undefined,
    reflected?   : RayAttributes,
};

export interface RayHit {
    collidesAt   : Vector2D;
    collidesWith : VerticalWall | HorizontalWall | CircleEntity
};

export interface RayEntity extends RayAttributes, Entity {};