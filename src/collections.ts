import type { HorizontalWall } from "./proto/HorizontalWallPrototype.js";
import type { VerticalWall } from "./proto/VerticalWallPrototype.js";
import type { CircleEntity } from "./interfaces/Circle.js";
import { ArrayList } from "kernox";

export class HorizontalWalls extends ArrayList<HorizontalWall> {};
export class VerticalWalls   extends ArrayList<VerticalWall>   {};
export class Circles         extends ArrayList<CircleEntity>   {};