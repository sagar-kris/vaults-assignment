const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Vault 1", () => {
	beforeEach(async () => {
		Vault1 = await ethers.getContractFactory("Vault1");
		[account] = await ethers.getSigners();

		vault1 = await Vault1.deploy();

		await vault1.deployed();
	});
});

describe("deposit", function () {
	it("should revert when amount is zero", async function () {
		await expect(
			vault1.connect().deposit(1000)
		).to.be.revertedWith("Amount is zero");	
	});

	it("should revert when called on an unsupported ERC-20 token", async function () {
		await expect(
			vault1.connect().deposit()
		).to.be.revertedWith("Unsupported ERC-20 token");	
	});
})
