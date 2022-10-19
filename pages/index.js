import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"
import { HiOutlineUser, HiOutlineBell, HiOutlineSearch } from 'react-icons/hi'
import Dropdown from '../components/common/dropdown/Dropdown'

export default function Home() {

  const { data: session, status } = useSession()
  const loading = status === "loading"

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  }

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container max-w-screen-lg mx-auto">
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="inline-flex">
            <h1 className="text-2xl font-semibold text-black">C</h1>
            <h1 className="text-2xl font-semibold text-[#E6CEA0]">OO</h1>
            <h1 className="text-2xl font-semibold text-black">KIVEL</h1>
          </div>
          <div className="flex-1 justify-between">
            <a className="px-3 mx-auto" href="">자유연재</a>
            <a className="px-3 mx-auto" href="">게시판</a>
            <a className="px-3 mx-auto" href="">이벤트</a>
            <a className="px-3 mx-auto" href="">내서재</a>
          </div>
          <div className="flex items-center justify-between">
            <button 
              type="button"
              className="flex itesm-center justify-center w-10 h-10 p-2 rounded-full hover:bg-gray-100 active:bg-gray-200"              
              >
              <span className="text-2xl text-gray-400">
                <HiOutlineBell/>
              </span>
            </button>

            <button 
              type="button"
              className="flex itesm-center justify-center w-10 h-10 p-2 rounded-full hover:bg-gray-100 active:bg-gray-200"              
              >
              <span className="text-2xl text-gray-400">
                <HiOutlineSearch/>
              </span>
            </button>
          {!session && (
              <Dropdown/>
          )}
          {session?.user && (
            <div className="flex items-center">              

              {session.user.image && (
                <img src={`${session.user.image}`} className="w-10 h-10 rounded-full"/>
              )}
              <a
                href={`/api/auth/signout`}
                className="px-4 py-2 bg-sky-400 text-white rounded-lg"
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                로그아웃
              </a>
            </div>
          )}
        </div>
      
        </header>
        <main className="">

        </main>
        <footer className="">

        </footer>
      </div>
    </div>
  )
}
