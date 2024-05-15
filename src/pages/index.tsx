import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState<Array<number>>([])

  useEffect(() => {
    Array.from(Array(500000).keys()).forEach((el) => {
      setData((prev) => [el, ...prev].slice(0, 19))
    })
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {data.map((item) => (
          <div key={item} style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ color: 'red' }}>{item}</div>
            <button
              style={{
                outline: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 0.25rem',
              }}
            >
              {item}
            </button>
            <div style={{ color: 'red' }}>{item}</div>
          </div>
        ))}
      </main>
    </>
  )
}
