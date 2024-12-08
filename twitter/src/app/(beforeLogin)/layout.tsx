import {ReactNode} from "react";
import style from "./layout.module.css"

type Props = { children: ReactNode, modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      {children}
      {modal}
    </div>
  )
}
