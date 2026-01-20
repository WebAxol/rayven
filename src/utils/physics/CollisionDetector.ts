import type { HorizontalWall }   from '../../proto/HorizontalWallPrototype.js';
import type { VerticalWall }     from '../../proto/VerticalWallPrototype.js';
import type { CircleAttributes } from '../../interfaces/Circle.js';
import type { RayAttributes }    from '../../interfaces/Ray.js';
import Vector2D                  from './Vector2D.js';

class CollisionDetector {

    public static RayVsVerticalLine(ray : RayAttributes, x: number) : number | false {
        
        const lambda :number = (x - ray.source.x) / ray.direction.x;

        return lambda > 0 ? lambda : false;

    }

    
    public static RayVsVerticalWall(ray : RayAttributes ,wall : VerticalWall) : Vector2D | false {

        const lambda :number | false = CollisionDetector.RayVsVerticalLine(ray, wall.posX); 

        if(!lambda) return false;   

        const point :Vector2D = Vector2D.add(ray.source,Vector2D.scale(ray.direction,lambda));

        return (point.y >= wall.startY && point.y <= wall.endY) ? point : false;  
    }  


    public static RayVsHorizontalLine(ray : RayAttributes, y: number) : number | false {
        
        const lambda :number = (y - ray.source.y) / ray.direction.y;

        return lambda > 0 ? lambda : false;

    }


    public static RayVsHorizontalWall(ray : RayAttributes , wall : HorizontalWall) : Vector2D | false  {
        
        const lambda :number | false = CollisionDetector.RayVsHorizontalLine(ray, wall.posY);

        if(!lambda) return false;

        const point :Vector2D = Vector2D.add(ray.source,Vector2D.scale(ray.direction,lambda));
       
        return (point.x >= wall.startX && point.x <= wall.endX) ? point : false;
    } 


    public static RayVsCircle(ray : any, circle : CircleAttributes) : { point : Vector2D, lambda : number } | false {

        if(circle.radius <= 0)  throw Error("Invalid circle radius: it must be a positive number");
        
        let rayOrigin :Vector2D = ray.source;

        let OC = Vector2D.sub(circle.center,rayOrigin);

        let rayDirection = Vector2D.normalize(ray.direction);

        let OAmag = Vector2D.dot(rayDirection, OC);
        let CAmagSq = OC.magSq() - OAmag * OAmag;  

        let BAmag = Math.sqrt(circle.radius * circle.radius - CAmagSq);

        // "lambda" is a scalar representing the distance of the ray origin to the circle

        let lambda : number = OAmag - BAmag;

        if(!lambda || lambda <= 0) return false;  
        
        let RayToCircle = rayDirection.scale(lambda)  

        let point :Vector2D = Vector2D.add(rayOrigin,RayToCircle);

        return { point, lambda };
    }
}

export default CollisionDetector;