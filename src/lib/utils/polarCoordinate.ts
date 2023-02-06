import type {Item} from "../model";

type Coord = {x: number, y: number}

function weightedLevel(item: Item) {
    if (item.level > 1) {
        return item.y + item.level;
    }
    return 2 * item.y
}

function unitToRadial(item: Item): Coord {
    return {x: (item.x + item.quarter - 1) * Math.PI / 2 + Math.PI / 2, y: weightedLevel(item)}
}

function radialToCartesian(coord: Coord) {
    return {x: Math.cos(coord.x) * coord.y, y: Math.sin(coord.x) * coord.y}
}

export function toArc(item: Item, radius: number) {
    const pos = radialToCartesian(unitToRadial(item))
    return {...item, x: pos.x * radius, y: pos.y * radius}
}