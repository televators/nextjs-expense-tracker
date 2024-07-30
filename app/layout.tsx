import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.scss";
import Header from "@/components/Header";

const inter = Inter({ weight: ['400', '500', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker Demo",
  description: "Personal expense tracker and budget app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />

          <main>
            {children}
          </main>

          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
