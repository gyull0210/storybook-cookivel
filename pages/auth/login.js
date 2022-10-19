import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { signIn, signOut, useSession, getSession, getProviders, getCsrfToken } from "next-auth/react"
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'

export default function Login({getProviders}) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleGoogle = async (e)=> {
    e.preventDefault();
    const response = await signIn("google");
  }

  const handleTwitter = async (e) => {
    e.preventDefault();
    const response = await signIn("twitter");
  }

  const [isChecked, setIsChecked] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    
    const response = await signIn("email-password-credential", {
      email,
      password,
      redirect: false,
      callbackUrl: "http://localhost:3000/"
    });

    await router.push("/"); 

    console.log("email: "+email+", "+"password: "+password);
 
  }

  return (
    <div className="">
      <Head>
        <title>로그인</title>
        <meta name="description" content="창작자들의 연재공간" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto max-w-screen-md lg:my-25 p-4">
          <div className="flex flex-col items-center mb-6">
            
            <a className="hover:no-underline mb-2">
              <div className="flex items-center justify-center">
                <span className="font-semibold text-3xl tracking-tight">C</span>
                <span className="font-semibold text-3xl tracking-tight text-[#E6CEA0]">OO</span>
                <span className="font-semibold text-3xl tracking-tight">KIVEL</span>
              </div>
            </a>

            <div className="text-2xl font-semibold text-center">
              로그인
            </div>
          </div>

          <div className="">
            <div className="mb-4">
              <button type="button" className="w-full px-6 py-2 bg-[#FFFFFF] rounded border shadow hover:bg-gray-50 active:bg-gray-100 mb-2"
              onClick={handleGoogle}>
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-2"><FcGoogle/></span>
                  구글 계정으로 로그인
                </div>               
              </button>
              <button type="button" className="w-full px-6 py-2 bg-sky-400 rounded text-white border shadow hover:bg-sky-500 active:bg-sky-600"
              onClick={handleTwitter}>
                <div className="flex items-center justify-center">
                  <span className="text-xl mr-2"><FaTwitter/></span>
                  트위터 계정으로 로그인
                </div>
              </button> 
            </div>
          </div>

          <div className="text-center">
          또는
          </div>

          <form className="mx-auto" method="post" onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <label className="block font-semibold" htmlFor="email">이메일</label>
              <input 
                type="text"
                id="email" 
                className="px-4 py-2 block w-full 
                border border-gray-400 rounded-md outline-none 
                text-base focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"             
                placeholder="이메일을 입력해주세요" 
              />
              {isChecked && 
              <div className="">
                <span className="block text-red-600">이메일 또는 비밀번호가 잘못 입력되었습니다</span>
                <span className="block text-red-600">가입되어 있지 않은 이메일을 입력하였습니다</span>
              </div>}                    
            </div>
            <div className="mb-4">
              <label className="block font-semibold" htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password" 
                className="px-4 py-2 block w-full 
                border border-gray-400 rounded-md outline-none 
                text-base focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700" 
                placeholder="비밀번호를 입력해주세요" 
              />
              {isChecked && 
              <div className="">
                <span className="block text-red-600">이메일 또는 비밀번호가 잘못 입력되었습니다</span>
              </div>}                     
            </div>
        
            <div className="flex items-center mb-4">
              <input 
                type="checkbox"
                id="rememberMe" 
                className="w-4 h-4 text-gray-700 mr-2 rounded-lg border-2 border-gray-300 after:bg-gray-800 focus:ring-0"/>
              <label className="text-base mr-2" htmlFor="rememberMe">로그인 유지</label>  
            </div>

            <div className="mb-4">
              <button 
                type="submit"
                className="w-full px-6 py-2 bg-stone-500 rounded-md border border-stone-500 text-white shadow hover:bg-stone-600 active:bg-stone-700">
                로그인
              </button>
            </div>        
            <div className="flex justify-center divide-x divide-gray-300">
              <Link href="/auth/signup">
                <a className="pr-2">회원가입</a>
              </Link>
              <Link href="/auth/member/passwordSearch">
                <a className="pl-2">비밀번호 찾기</a>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
    },
  };
}