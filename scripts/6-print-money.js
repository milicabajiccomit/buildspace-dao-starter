import sdk from './1-initialize-sdk.js';

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken('0x650e6936DB8937Aa62EF4003EBd6278d6b710b98');

(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1000000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log(
      '✅ There now is',
      totalSupply.displayValue,
      '$CARROT in circulation'
    );
  } catch (error) {
    console.error('Failed to print money', error);
  }
})();
