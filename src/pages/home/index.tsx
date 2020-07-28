import React from 'react'
import Head from 'next/head'
import { Props } from './types'

export default function Home(props: Props) {
  return (
    <div className="container">
      <Head>
        <title>Hi</title>
      </Head>
      
      <main>
        <h1 data-testid='title'>Hi {props.name}!</h1>
      </main>
    </div>
  )
}
