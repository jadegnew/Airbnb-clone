import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from "@/app/components/navbar/Navbar";
import Modal from "@/app/components/modals/Modal";

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb clone',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
            <Modal title={"Hello World"} actionLabel={'Submit'} isOpen />
            <Navbar />
                {children}
            </body>
        </html>
    )
}
