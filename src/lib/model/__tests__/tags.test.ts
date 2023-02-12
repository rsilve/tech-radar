import { describe, it, expect } from 'vitest'
import { colorsMapFactory, TAG_COLORS, tagsFactory, tagsCountFromItems } from '../tags'

describe('tags', () => {
    it('tags from item', () => {
        let tags = tagsFactory([
            {
                name: '',
                level: 1,
                quarter: 1,
                index: 1,
                x: 0,
                y: 0,
                tags: ['dev'],
            },
            {
                name: '',
                level: 1,
                quarter: 1,
                index: 1,
                x: 0,
                y: 0,
                tags: ['dev', 'prod'],
            },
        ])
        expect(tags).toEqual(['dev', 'prod'])
    })
})
describe('color map', function () {
    it('generator', () => {
        let map = colorsMapFactory(['DEV', 'PROD'])
        expect(map).toEqual({ DEV: TAG_COLORS[0], PROD: TAG_COLORS[1] })
    })
})


describe('tags count', () => {
    it('tags from item', () => {
        let tags = tagsCountFromItems([
            {
                name: '',
                level: 1,
                quarter: 1,
                index: 1,
                x: 0,
                y: 0,
                tags: ['dev'],
            },
            {
                name: '',
                level: 1,
                quarter: 1,
                index: 1,
                x: 0,
                y: 0,
                tags: ['dev', 'prod'],
            },
        ])
        expect(tags).toEqual([{name: 'dev', count: 2}, {name:'prod', count: 1}])
    })
})