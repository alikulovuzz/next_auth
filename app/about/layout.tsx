'use client'
import "styles/globals.css";
import { ReactNode, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  console.log("About page Render")
  const { data: session } = useSession();
  // useEffect(() => {
  //   if (session) {
  //     signOut();
  //   }
  // }, []);
  return <div>{children}</div>;
}
