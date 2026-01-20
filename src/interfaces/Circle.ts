import type Vector2D from '../utils/physics/Vector2D.js';
import type { Entity } from 'kernox';

export interface CircleAttributes {
    center   : Vector2D,
    radius   : number,
    color    : string,
    opacity  : number,
    textureId: number
};

export interface CircleEntity extends CircleAttributes, Entity {}