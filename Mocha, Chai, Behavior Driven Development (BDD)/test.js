// Source: https://learn.javascript.ru/testing-mocha
describe("pow", function() {

    function makeTest(x) {
        
        let expected = x * x;
        
        it(`${x} в степени 2 будет ${expected}`, function () {
            assert.equal(pow(x, 2), expected);
        });
    };
  
    for (let x = 0; x <= 5; x++) {
        makeTest(x);
    }
    
    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
    });        

    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });

    it("для NaN возвращает NaN", function() {
        assert.isNaN(pow(NaN, 2));
    });
  });

/**
 * Библиотека Chai (https://www.chaijs.com) содержит множество других подобных функций, например:
 * 
 * assert.isNaN - это проверка того, что переданное значение равно NaN.
 * assert.equal(value1, value2) – проверяет равенство value1 == value2.
 * assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
 * assert.notEqual, assert.notStrictEqual – проверяет неравенство и строгое неравенство соответственно.
 * assert.isTrue(value) – проверяет, что value === true
 * assert.isFalse(value) – проверяет, что value === false
 * 
 * …с полным списком можно ознакомиться в документации: https://www.chaijs.com/api/assert/
 * 
 *  Код, хорошо покрытый тестами, как правило, имеет лучшую архитектуру.
 */



  