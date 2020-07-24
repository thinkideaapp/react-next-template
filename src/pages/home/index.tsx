import Head from 'next/head'

interface Props {
  name: string
}

export default function Home(props: Props) {
  return (
    <div className="container">
      <Head>
        <title>Hi</title>
      </Head>
      
      <main>
        <h1>Hi {props.name}!</h1>
      </main>
    </div>
  )
}
