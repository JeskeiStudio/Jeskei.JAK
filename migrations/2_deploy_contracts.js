const TestERC20 = artifacts.require('TestERC20');
const JakToken = artifacts.require('JakToken');

module.exports = async (deployer, network, accounts) => {

    if (network == "development") {
        await deployer.deploy(TestERC20,1000);
        await deployer.deploy(JakToken, "Jeskei", "JAK", "0xFDe10463F21E74C94E8a90B345A7C4fdB72d2AE1", "0x7c1911a5CAF752466af3863Cc716550282ef16cF");
    }
    else
    {
        await deployer.deploy(JakToken, "Jeskei", "JAK", "0xFDe10463F21E74C94E8a90B345A7C4fdB72d2AE1", "0x7c1911a5CAF752466af3863Cc716550282ef16cF");
    }
}
