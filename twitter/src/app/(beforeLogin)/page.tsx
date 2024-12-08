import Image from "next/image";
import zLogo from "../../../public/zlogo.png";
import style from "./layout.module.css"

export default function Home() {
  return (
    <>
      <div className={style.left}>
      <Image src={zLogo} alt="로그인 화면 메인 이미지" />
      </div>
      <div className={style.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <a href="/i/flow/signup" className={style.signup}>계정 만들기</a>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <a href="/login" className={style.login}>로그인</a>
      </div>
    </>
  )
}