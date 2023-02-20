import { describe, it, expect } from 'vitest'
import { sortByTags } from '../sortByTags'
import type { Item } from '../../model'

describe('sort by tags', function () {
    const template: Item = {
        name: '',
        index: 1,
        quarter: 1,
        level: 1,
        x: 0,
        y: 0,
        tags: [],
    }
    it('sort empty', () => {
        const res = [].sort(sortByTags)
        expect(res).toEqual([])
    })

    it('sort no tags', () => {
        const a = { ...template }
        const b = { ...template }
        const res = [a, b].sort(sortByTags)
        expect(res).toEqual([a, b])
    })

    it('sort tags', () => {
        const a = { ...template, tags: ['a'] }
        const b = { ...template, tags: ['b'] }
        const res = [a, b].sort(sortByTags)
        expect(res).toEqual([a, b])
    })

    it('sort common tags', () => {
        const a = { ...template, name: 'a', tags: ['a'] }
        const b = { ...template, name: 'b', tags: ['b'] }
        const c = { ...template, name: 'c', tags: ['a'] }
        const res = [a, b, c].sort(sortByTags)
        expect(res).toEqual([a, c, b])
    })

    it('sort multiple tags', () => {
        const a = { ...template, name: 'a', tags: ['a', 'c'] }
        const b = { ...template, name: 'b', tags: ['b', 'd'] }
        const c = { ...template, name: 'c', tags: ['c'] }
        const res = [a, c, b].sort(sortByTags)
        expect(res).toEqual([a, b, c])
    })
})
