import Head from 'next/head'
import Image from 'next/image'
import BasicEditor from '../components/basic-editor'

export default function Home() {
  return (
    <div>
      My editor project!
      <BasicEditor />
    </div>
  )
}
