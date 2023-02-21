import { FC } from 'react'
import styles from '../styles/Home.module.css'
import * as web3 from "@solana/web3.js"
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useState } from "react"


export const SendSolForm: FC = () => {
    const { connection } = useConnection();
	const { publicKey, sendTransaction } = useWallet()
    const [sig, setSig] = useState("")

    const sendSol = event => {
        event.preventDefault()
        const amount = event.target.amount.value;
        const recipient = new web3.PublicKey(event.target.recipient.value);

        if(!connection || !publicKey) { 
            alert("please connect your wallet")
            return
        }

        const transaction = new web3.Transaction().add(
            web3.SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: recipient,
                lamports: amount * web3.LAMPORTS_PER_SOL
            })
        )
        
        sendTransaction(transaction, connection).then(sig => {
            setSig(sig)})
    }

    return (
        <div>
            <form onSubmit={sendSol} className={styles.form}>
                <label htmlFor="amount">Amount (in SOL) to send:</label>
                <input id="amount" type="text" className={styles.formField} placeholder="e.g. 0.1" required />
                <br />
                <label htmlFor="recipient">Send SOL to:</label>
                <input id="recipient" type="text" className={styles.formField} placeholder="e.g. 4Zw1fXuYuJhWhu9KLEYMhiPEiqcpKd6akw3WRZCv84HA" required />
                <button type="submit" className={styles.formButton}>Send</button>
            </form>
            {sig && <p className="result">Transaction Complete! View it on SolScan <a className="link" href={`https://solscan.io/tx/${sig}?cluster=devnet`}>here</a></p>}
        </div>
    )
}