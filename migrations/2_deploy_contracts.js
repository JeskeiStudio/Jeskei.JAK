const TestERC20 = artifacts.require('TestERC20');
const JakToken = artifacts.require('JakToken');

module.exports = async (deployer, network, accounts) => {

    if (network == "development") {
        await deployer.deploy(TestERC20,1000);
        await deployer.deploy(JakToken, "Jeskei Token", "JAK", "0x8c6389001Fd713d3A85AA3a39DcE878494c8ce46", "0x2953E9e367a37014994B1908C6cD3f8df4FE82dc");
    }
    else
    {
        await deployer.deploy(JakToken, "Jeskei Token", "JAK", "0x8c6389001Fd713d3A85AA3a39DcE878494c8ce46", "0x2953E9e367a37014994B1908C6cD3f8df4FE82dc");
    }
}
