This is a task from the Solana Developers course: <a href="https://soldev.app/course/interact-with-wallets">Interact With Wallets</a>

## How It Works
Users connect their wallet to the app utilising the solana wallet adapter. (This is only set up to use Phantom Wallets)
Once connected you can enter an amount of Sol and a desitnation address.
Once you press send a transaction is created using systemProgram.transfer. utilising wallet adapter a request is sent to your wallet.
If the user selects approve then the transaction is submitted. Text appears below the form to confirm the transaction and provides a link to view it on SolScan. 

Set up on Devnet.

Notes: 
I am still learning how to fully understand the wallet connection but I get closer every time I use it.
I havent done any additional styling from the starter code as I am focusing purely on learning the Solana aspect.
If you are learning and you're looking at this, the starter code did not work for me when I cloned it. Create a new next app and add everything in. I think I will create a boilerplate as I am sure the rest of the course may have a similar problem.

On to the next one :)