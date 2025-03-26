import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { SignedIn, SignIn } from "@clerk/nextjs";
import { cookies } from "next/headers";

export default function ConsumerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
    // await cookies()
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function Navbar() {
  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container">
        <Link
          className="mr-auto text-lg hover:underline px-2 flex items-center"
          href="/"
        >
          Web Dev Simplified
        </Link>
        {/* <Suspense fallback={"loading"}> */}
        {/* <SignedIn> */}
            <Link className="hover:bg-accent/10 flex items-center px-2" href="/courses">My courses</Link>
            <Link className="hover:bg-accent/10 flex items-center px-2" href="/purchases">Purchase History</Link>
        {/* </SignedIn> */}
        {/* </Suspense> */}
      </nav>
    </header>
  );
}
