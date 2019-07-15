var chai = require('chai')
var _ = require('lodash')
var assert = chai.assert

describe('testing lodash array features', function() {
    it('testing intersection of arrays', function () {
        let res = _.intersection([2, 1], [2, 3])
        assert.isArray(res)
        assert.sameOrderedMembers(res, [2])
    })

    it('testing union of arrays', function () {
        let res = _.union([2], [1, 2])
        assert.isArray(res)
        assert.sameOrderedMembers(res, [2, 1])
    })

    it('testing chunking of arrays', function () {
        let res = _.chunk([3,4,5,5,6,2,1,7,8,3,1,9,3,6], 3)
        assert.isArray(res)
        assert.lengthOf(res, 5)
        assert.sameOrderedMembers(res[0], [3,4,5])
        assert.sameOrderedMembers(res[4], [3,6])
    })

    it('testing compacting of arrays', function () {
        let res = _.compact([false, 2, '3', '', '', undefined, null, 'a', 'v'])
        assert.isArray(res)
        assert.lengthOf(res, 4)
        assert.sameOrderedMembers(res, [2, '3', 'a', 'v'])
    })

    it('testing concating of arrays', function () {
        let res = _.concat(['dolapo'], [2,3,4], ['a'], ['d', 'b'])
        assert.isArray(res)
        assert.lengthOf(res, 7)
        assert.sameOrderedMembers(res, ['dolapo', 2, 3, 4, 'a', 'd', 'b'])
    })
})