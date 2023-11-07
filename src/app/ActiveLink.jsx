'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


const ActiveLink = ({ href, children, className }) => {

  const path = usePathname();

  const isActive = path === href || (path === '/' && href === '/');
  return (
    <Link
      href={href}
      className={`${
        isActive
          ? 'active-button border-2 border-red-200'
          : 'bg-slate-100'
      }  ${className}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
