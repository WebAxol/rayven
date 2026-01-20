import Vector2D from '../utils/physics/Vector2D.js';
import type { Entity, PrototypeSchema } from 'kernox';
import { CircleAttributes } from './../interfaces/Circle.js';


export const CirclePrototype :PrototypeSchema<CircleAttributes> = {
    name : "Circle",
    attributes: {
        center   : new Vector2D(0,0),
        radius   : 1,
        color    : '255,0,0',
        opacity  : 1,
        textureId: 0
    },
    collections: new Set([ "Circles" ])
};