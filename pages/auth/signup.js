import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function SignUp() {

  //약관 동의
  const [isUseChecked, SetIsUseChecked] = useState(false);
  const [isPrivacyChecked, SetIsPrivacyChecked] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenUseModal, setIsOpenUseModal] = useState(false);
  const [isOpenpolicyModal, setIsOpenPolicyModal] = useState(false);

  const [values, setValues] = useState({
    email:"",
    nickName:"",
    password:"",
    re_password:"",
    isUseChecked: false,
    isPrivacyChecked: false,
  })

  const showModal = (e) => {
    e.preventDefault();
    SetIsUseChecked(isUseChecked => !isUseChecked);
  }

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]:value});
  }

  const onUseHandler = (e) => {
    SetIsUseChecked(!isUseChecked);
  }

  const onPrivacyHandler = (e) => {
    SetIsPrivacyChecked(!isPrivacyChecked);
  }
  
  // const validate = (values) => {
  //   const errors = {};
  //   const emailregex = '^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$';
  //   const nickregex = '/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/';
  //   const pwregex ='';

  //   if(!values.email){
  //     errors.email = "이메일은 비워둘 수 없습니다";
  //   } else if(!regex.test(values.email)) {
  //     errors.email = "이메일의 형식에 맞지 않습니다";
  //   }

  //   if(!values.nickName){
  //     errors.nickName = "닉네임은 비워둘 수 없습니다";
  //   } else if(values.nickName < 2 || values.nickName > 6){
  //     errors.nickName = "닉네임은 2글자 이상 6글자 이하로 입력해주세요";
  //   }

  //   if(!values.password){
  //     errors.password = "비밀번호는 비워둘 수 없습니다";
  //   } else if(!regex.test(values.password)){
  //     errors.password = "비밀번호는 영문자, 숫자, 특수문자를 포함하여야 합니다";
  //   } else if(!values.password < 8 || !values.password > 16){
  //     errors.password = "비밀번호는 8자 이상 16자 이하로 입력해주세요";
  //   }

  //   if(!values.re_password){
  //     errors.re_password = "비밀번호를 한번 더 입력해주세요";
  //   } else if(!values.re_password.equals(values.password)){
  //     errrors.re_password = "비밀번호와 일치하지 않습니다";
  //   }

  //   return errors;
  // }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div>
      <Head>
        <title>회원가입</title>
        <meta name="description" content="창작자들의 연재공간" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-md mx-auto">
      <div className="container mx-auto">
        <div className="py-4 px-4">
          <div className="mb-4">
            <div className="flex flex-col items-center justify-center mx-auto">
            <Link href="/">
			        <a className="mb-2 hover:no-underline">
			          <div className="flex items-center" alt="logo">
				          <span className="font-semibold text-3xl tracking-tight">C</span>
				          <span className="font-semibold text-3xl tracking-tight text-[#E6CEA0]">OO</span>
				          <span className="font-semibold text-3xl tracking-tight">KIVEL</span>
			          </div>
		          </a>
			      </Link>
            <h1 className="font-semibold text-2xl text-center">회원가입</h1>
            </div>       
          </div>

          <div className="mb-6">
            <button className="w-full px-6 py-2 bg-[#FFFFFF] rounded border shadow hover:bg-gray-50 active:bg-gray-100 mb-2" type="button">
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2"><FcGoogle/></span>
                구글 계정으로 회원가입
              </div>               
            </button>
            <button className="w-full px-6 py-2 bg-sky-400 rounded text-white border shadow hover:bg-sky-500 active:bg-sky-600" type="button">
              <div className="flex items-center justify-center">
                <span className="text-xl mr-2"><FaTwitter/></span>
                트위터 계정으로 회원가입
              </div>
            </button>              
          </div>

          <form className="mx-auto" method="post" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block" htmlFor="">이메일</label>
              <input className="
                px-4 py-2 block w-full 
                border border-gray-400 rounded-md outline-none text-base
                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700" 
                type="text" 
                name="email" 
                placeholder="이메일을 입력해주세요"
                value={values.email}
                onChange={onChangeHandler}
              />
              {values.isUseChecked &&
              <div className="">
                <span className="block text-green-600 text-sm">사용가능한 이메일입니다</span>
                <span className="block text-red-600 text-sm">이메일 형식에 맞지 않습니다</span>
                <span className="block text-red-600 text-sm">사용 중인 이메일입니다</span>
              </div>}
            </div>
            <div className="mb-4">
              <label className="block" htmlFor="">닉네임</label>
              <input className="px-4 py-2 block w-full 
                border border-gray-400 rounded-md outline-none text-base 
                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700" 
                type="text" 
                name="nickName" 
                placeholder="닉네임을 입력해주세요"
                value={values.nickName}
                onChange={onChangeHandler}
              /> 
              {values.isUseChecked &&                   
              <div className="">
                <span className="block text-green-600 text-sm">사용가능한 닉네임입니다</span>
                <span className="block text-red-600 text-sm">2글자 이상 6글자 이하로 입력해주세요</span>
                <span className="block text-red-600 text-sm">사용 중인 닉네임입니다</span>
              </div>}
            </div>
            <div className="mb-4">
              <label className="block" htmlFor="">비밀번호</label>
              <input className="px-4 py-2 block w-full 
                border border-gray-400 rounded-md outline-none text-base 
                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700" 
                type="password" 
                name="password"  
                placeholder="비밀번호를 입력해주세요"
                value={values.password}
                onChange={onChangeHandler}
              />
              {values.isUseChecked &&                    
              <div className="">
                <span className="block text-green-600 text-sm">사용가능한 이메일입니다</span>
                <span className="block text-red-600 text-sm">연속된 숫자나 영문자를 사용할 수 없습니다</span>
                <span className="block text-red-600 text-sm">영문자, 숫자, 특수기호를 포함해 10자 이상 20자 이하로 입력해주세요</span>
                <span className="block text-red-600 text-sm">공백은 포함할 수 없습니다</span>
              </div>}
            </div>
            <div className="mb-8">
              <label className="block" htmlFor="">비밀번호 확인</label>
              <input className="px-4 py-2 block w-full 
                border border-gray-400 rounded-md outline-none text-base 
                focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700" 
                type="password"  
                name="re_password"
                placeholder="비밀번호를 한번 더 입력해주세요"
                value={values.re_password}
                onChange={onChangeHandler}
              />
              {values.isUseChecked &&                    
              <div className="">
                <span className="block text-green-600 text-sm">비밀번호가 일치합니다</span>
                <span className="block text-red-600 text-sm">비밀번호가 일치하지 않습니다</span>
              </div>}
            </div>

            <div className="flex items-center text-base tracking-tight mb-4">
              <input id="agreementForPrivacyPolicy" className="w-4 h-4 text-gray-700 mr-2 focus:ring-0" 
                type="checkbox"
                checked={isPrivacyChecked}
                onChange={onPrivacyHandler}
              />
              <label className="mr-2" htmlFor="agreementForPrivacyPolicy">
                <span className="text-red-600">(필수) </span>
                개인정보수집 및 이용에 동의합니다
              </label> 
              <Link href="?mode=privacyPolicy">
                <a className="text-gray-700 font-semibold underline" target="blank">자세히보기</a>
              </Link>                  
            </div>

            {values.isUseChecked && 
            <div className="">얍</div>
            }
                
            <div className="flex items-center text-base tracking-tight mb-8">
              <input id="agreementForTermOfUse" className="w-4 h-4 text-gray-700 mr-2 focus:ring-0" 
                type="checkbox"
                checked={isUseChecked}
                onChange={onUseHandler}
              />
              <label className="mr-2" htmlFor="agreementForTermOfUse">
                <span className="text-red-600">(필수) </span>
                사이트 이용 약관에 동의합니다
              </label> 
              <Link href="?mode=termOfUse">
                <a className="text-gray-700 font-semibold underline" target="blank">자세히보기</a>
              </Link> 
            </div>

            <div className="flex justify-between mb-4">
              <button className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500" type="button">취소</button>
              <button className="px-6 py-2 bg-stone-600 text-white rounded hover:bg-stone-700" type="submit">회원가입</button>
            </div>
            </form>
        </div>
      </div>    
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}
