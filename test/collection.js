const chai = require('chai')
const _ = require('lodash')
const assert = chai.assert

describe('testing lodash collection features', function () {
    it('testing countby on collections', function () {
        const res = _.countBy(['one', 'two', 'three'], 'length')
        assert.propertyVal(res, '3', 2)
        assert.propertyVal(res, '5', 1)
    })

    it('testing every on collections', function () {
        const res = _.every([2, 4, 'a', 'ddd'], Number)
        assert.isFalse(res)
    })

    it('testing filter on collections', function () {
        const res = _.filter([2, 4, 'a', 'ddd'], function (ele) { return !isNaN(ele) })
        assert.isArray(res)
        assert.lengthOf(res, 2)
        assert.sameOrderedMembers(res, [2, 4])
    })
})
