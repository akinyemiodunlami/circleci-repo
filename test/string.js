var chai = require('chai')
var _ = require('lodash')
var assert = chai.assert

describe('testing lodash string features', function() {
    it('testing string to camelcase', function () {
        let res = _.camelCase('dolapo odunlami')
        assert.isString(res)
        assert.equal(res, 'dolapoOdunlami')
    })

    it('testing string to uppercase', function () {
        let res = _.toUpper('dolapo odunlami')
        assert.isString(res)
        assert.equal(res, 'DOLAPO ODUNLAMI')
    })

    it('testing string to capitalize', function () {
        let res = _.capitalize('dolapo odunlami')
        assert.isString(res)
        assert.equal(res, 'Dolapo odunlami')
    })
})