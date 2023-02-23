import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from '../../../assets/Images/logo.svg'

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <Image src={LogoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
