const TestERC20 = artifacts.require('TestERC20');
const JakToken = artifacts.require('JakToken');

module.exports = async (deployer, network, accounts) => {

    if (network == "development") {
        await deployer.deploy(TestERC20,1000);
        await deployer.deploy(JakToken, "Jeskei Token", "JAK", "0x80E88A05a95fF91a43C20a33D2BD3D0a20776682", "0x80E88A05a95fF91a43C20a33D2BD3D0a20776682");
    }
    else
    {
        await deployer.deploy(JakToken, "Jeskei Token", "JAK", "0x80E88A05a95fF91a43C20a33D2BD3D0a20776682", "0x80E88A05a95fF91a43C20a33D2BD3D0a20776682");
    }
}
