"use client"
import { actions } from "@/redux/slices/authSlice";
import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./header.scss";

const Header = () => {
  const {isAuth} = useSelector((state) => state.auth);
  return (
    <header className="header">
      <div className="left">
        <h3>Parfum</h3>
      </div>
      <div className="right">
        <Link href="/">Asosiy</Link>
        <Link href="/about">Biz haqimizda</Link>
        <Link href="/contact">Aloqa</Link>
        <Link href="/cart">Buyurtmalar tarixi</Link>

        {isAuth ? (
          <Link href="/account">Account</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        {isAuth && <button>Log Out</button>}
      </div>
    </header>
  );
};

export default Header;
