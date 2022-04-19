import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const editionDrop = sdk.getEditionDrop(
  '0xBcAf79cF40b7b653442cC5a405650A70b7D941AB'
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: 'Little Rabbit',
        description: 'This NFT will give you access to PakistanDAO!',
        image: readFileSync('scripts/assets/pakistanM.jpg')
      }
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
