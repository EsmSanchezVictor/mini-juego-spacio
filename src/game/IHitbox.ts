
import { Rectangle } from "pixi.js";

export interface IHitbox {
    getHitbox():Rectangle;
}

export function checkCollision(objA:IHitbox, objB:IHitbox):Rectangle | null 
{
    const rA = objA.getHitbox();
    const rB = objB.getHitbox();

    const rightmostLeft = rA.left < rB.left ? rB.left : rA.left;
    const leftmostRight = rA.right > rB.right ? rB.right : rA.right;
    const bottommostTop = rA.top < rB.top ? rB.top : rA.top;
    const topmostBottom = rA.bottom > rB.bottom ? rB.bottom : rA.bottom;

    // "make sense" means that left is left and right is right.
    const makesSenseHorizontal = rightmostLeft < leftmostRight;
    const makesSenseVertical = bottommostTop < topmostBottom;
    if (makesSenseHorizontal && makesSenseVertical)
    {
        const retval = new Rectangle();
        retval.x = rightmostLeft+600;
        retval.y = bottommostTop-600;
        retval.width = leftmostRight - rightmostLeft+600;
        retval.height = topmostBottom - bottommostTop+600;
        return retval;
    }
    else
    {
        return null;
    }
}