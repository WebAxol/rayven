
import type { Entity } from "kernox";

export interface HorizontalWallAttributes {
    color    : string,
    startX   : number,
    endX     : number,
    posY     : number,
    opacity  : number,
    textureId: number
}

export interface VerticalWallAttributes {
    color    : string,
    startY   : number,
    endY     : number,
    posX     : number,
    opacity  : number,
    textureId: number
}

export interface HorizontalWallEntity extends HorizontalWallAttributes, Entity {};
export interface VerticalWallEntity   extends VerticalWallAttributes, Entity {};
