
//------------------ IMPORT SECTION ---------------
expect = require('chai').expect

should  = require('chai').should()

_ = require('lodash');

const {alwaysTrue, legitString} = require ('./index')


//-------------------------- TEST SECTION -------------



describe('#moca test basics',()=>{
	it('true should alsways true',()=> {
		true.should.be.true
	})

	it('expected true to be true', ()=> {
		expect(true).to.be.true
	});
});



describe('#AlwaysTrue', () => {
	it('should always return true', () => {
		alwaysTrue().should.be.true;
	});

	it('it expexted to be true', ()=> {
		expect(alwaysTrue()).to.be.true
	});
	it('should not be false', () => {
		alwaysTrue.should.not.be.false
	});
});

describe('#ligtSting', function () {
	it("should detect 'cow' as legit String", ()=> {
		legitString('cow').should.be.true
	});

	it('undefined should not be legit string', () => {
		legitString(undefined).should.not.be.true
	});

	it('blank should not be legit string', () => {
		legitString('').should.not.be.true
	});

	it('null should not be legit string', () => {
		legitString(null).should.not.be.true
	});


});