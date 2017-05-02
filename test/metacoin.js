var MetaCoin = artifacts.require("./MetaCoin.sol");

contract('MetaCoin', function(accounts) {
  
  it("should put 10000 MetaCoin in the first account", function() {
    
    return MetaCoin.deployed().then(function(instance) {
      
      return instance.getBalance.call("0x1ee4571be14b85107f8ce8a925bba278b75716d5");
    }).then(function(balance) {
      
      console.log(balance.valueOf());
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });
  });
});
