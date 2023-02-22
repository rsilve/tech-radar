import { levels, quarters, type Level, type Quarter } from './type'
import { unique } from 'radash'
import { sortByTags } from '../utils/sortByTags'

export type Item = {
    index: number
    name: string
    quarter: Quarter
    level: Level
    x: number
    y: number
    direction?: -1 | 1
    tags: string[]
}

export function addTag(tag: string, tags: string[]): string[] {
    return unique([...tags, tag], (item) => item.toUpperCase()).sort((a, b) =>
        b.toUpperCase().localeCompare(a.toUpperCase())
    )
}

function sortMatrix(matrix: Item[][]) {
    return matrix.map((row) => {
        return row.sort(sortByTags)
    })
}

function listToTrapeze(list: Item[], initialLength = 1) {
    let length = initialLength
    let current: Item[] = []
    const result: Item[][] = []
    list.forEach((value) => {
        if (length === current.length) {
            result.push(current)
            current = []
            length += 1
        }
        current.push(value)
    })
    result.push(current)
    return sortMatrix(result)
}

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min
}

function formToCoordinate(form: Item[][]) {
    const hSize = form.length
    form.forEach((row, rowIndex) => {
        const wSize = row.length
        row.forEach((item, index) => {
            item.x = (index + 1 / 2 + getRandomArbitrary(-1 / 8, 1 / 8)) / wSize
            item.y =
                (rowIndex + 1 / 2 + +getRandomArbitrary(-1 / 8, 1 / 8)) / hSize
        })
    })
}

export function generatePoints(list: Item[]) {
    quarters
        .map((quarter) => levels.map((level) => [quarter, level]))
        .flat()
        .forEach(([quarter, level]) => {
            const filtered = list.filter(
                (value) => value.quarter === quarter && value.level === level
            )
            if (filtered.length > 0) {
                const form = listToTrapeze(
                    filtered,
                    level === 1 ? level : 3 * level
                )
                formToCoordinate(form)
            }
        })
}
