import Vector2D                 from "../utils/physics/Vector2D.js"
import type { RayAttributes }   from "../interfaces/Ray.js";
import type { PrototypeSchema } from "kernox";

export const RayPrototype :PrototypeSchema<RayAttributes> = {
    name: "Ray",
    attributes: {
        active      : true,
        lambda      : NaN,
        source      : new Vector2D(NaN,NaN),
        direction   : new Vector2D(NaN,NaN),
        reflected   : undefined,
        level       : 1,

        // for collision detection and response

        collidesWith: undefined,
        collidesAt  : (new Vector2D(NaN,NaN))
    }
};