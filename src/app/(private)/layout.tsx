import Footer from '@/components/footer';
import NavBar from '@/components/nav-bar';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
