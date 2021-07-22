describe('The yearsAgo function' , function(){

    it('should return "31, for 1990" when asked number of yearsAgo' , function(){
        assert.equal(31, yearsAgo('1990'));
    });
    it('should return "21, for 2000" when asked number of yearsAgo' , function(){
        assert.equal(21, yearsAgo('2000'));
    });
   

    // it('should show that 7 is equal to 7' , function(){

      //  assert.equal(1,7) 
        // assert.deepEqual([2,2],[2,2]);

    // });
});