import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AppBar } from "../components/AppBar"
import Head from 'next/head'
import { SendSolForm } from '../components/SendSolForm'
import  WalletContextProvider from "../components/WalletContextProvider"
import { useState } from 'react'
import * as web3 from "@solana/web3.js"

const Home: NextPage = (props) => {
  const [payer, setPayer] = useState(null)
  const [receiver, setReciever] = useState(null)

  return (
    <div className={styles.App}>
      <Head>
        <title>Sol Sender (Devnet)</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <SendSolForm/>
        </div>
      </WalletContextProvider>
    </div>
  );
}

export default Home;