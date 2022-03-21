const { it } = require("mocha")

/**scenarion description */ 
describe
('My first simple test with cypress', () => 
{
    /**it - test step */
    it('True should be True', () => {
        expect(true).to.equal(true)
    })
    it('5 should be five', () => {
            expect(5).to.equal(5)
        })
    it('should ', function() {
        expect(5.0).to.approximately(5.1, 0.5, 'expectattion true')
    })
}
)