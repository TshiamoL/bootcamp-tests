describe('The isWeekday function' , function(){

    it('should return true for Monday' , function(){
        assert.equal(true, isWeekday('Monday'));
    });
    it('should return false for both Saturday and Sunday' , function(){
        assert.equal(false, isWeekday('both'));
    });
// assert.equal(isWeekday('Saturday'), false);
//assert.equal(isWeekday('Monday'), true);
    // it('should show that 7 is equal to 7' , function(){

      //  assert.equal(1,7) 
        // assert.deepEqual([2,2],[2,2]);

    // });
});