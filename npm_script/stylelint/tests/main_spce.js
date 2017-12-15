const expect = require('chai').expect;
const {add,minus} = require('../main')//测试代码 先写测试 再写业务 让测试通过 测试驱动开发TDD
//测试覆盖率 80% 95%
describe('两数相加等于和',()=>{
    it('1+1 应该等于2',()=>{
        expect(add(1,1)).to.equal(2);
    });
    it('1+2 应该等于3',()=>{
        expect(add(1,2)).to.equal(3);
    });
});
describe("两数相减为差",()=>{
    it('4-2=2',()=>{
        expect(minus(4,2)).to.equal(2);
    })
})

describe("参数类型错误返回NaN",()=>{
    it('参数错误',()=>{
        expect(isNaN(add(1,"200"))).to.equal(true);
    })
})
describe("参数类型错误返回NaN",()=>{
    it('参数错误',()=>{
        expect(isNaN(minus(1,"200"))).to.equal(true);
    })
})