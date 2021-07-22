describe('The greet function' , function(){

    it('should return "Hello, Tshiamo" when I greet Tshiamo' , function(){
        assert.equal('Hello, Tshiamo', greet('Tshiamo'));
    });

    it('should return "Hello, Leta" when I greet Leta' , function(){
        assert.equal('Hello, Leta', greet('Leta'));

    });

    });
