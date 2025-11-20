import type { HorizontalWall } from "../proto/HorizontalWall.js";
import type { VerticalWall } from "../proto/VerticalWall.js";
import type { Circle } from "../proto/Circle.js";
import { ArrayList } from "kernox";

export class HorizontalWalls extends ArrayList<HorizontalWall> {};
export class VerticalWalls   extends ArrayList<VerticalWall>   {};
export class Circles         extends ArrayList<Circle>         {};

export const collections = [
    HorizontalWalls,
    VerticalWalls,
    Circles
];
