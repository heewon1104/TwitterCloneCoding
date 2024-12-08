import {ReactNode} from "react";
import style from "./layout.module.css"

type Props = { children: ReactNode};
export default function Layout({ children }: Props) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}