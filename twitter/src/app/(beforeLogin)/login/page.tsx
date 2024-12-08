'use client';

import {useRouter} from "next/navigation";
import LoginMain from "@/app/_components/LoginMain/LoginMain";

export default function Login() {
  const router = useRouter();

  router.replace('/i/flow/login')
  return <LoginMain />;
}
