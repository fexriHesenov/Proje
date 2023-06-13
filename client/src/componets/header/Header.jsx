import React from "react";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Input,Badge } from "antd";
// import Link from "antd/es/typography/Link";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-5 flex justify-between items-center gap-11">
        <div className="ligo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Axtariş"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-icon flex justify-center items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen md:border-t-0 border-t left-0 md:bg-transparent bg-white md:px-0 px-5px z-10">
          <Link
            to="/"
            className="flex flex-col hover:text-[#40a9fa] transition-all"
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[14px] text-[12px]">Ana səhifə</span>
          </Link>
          <Badge count={1} offset={[-2,6]} className="md:flex hidden">
            <Link
              to="/cart"
              className="flex flex-col hover:text-[#40a9fa] transition-all">
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-[14px] text-[12px]">Səpət</span>
            </Link>
          </Badge>

          <Link
            to="/bills"
            className="flex flex-col hover:text-[#40a9fa] transition-all"
          >
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[14px] text-[12px]">çek</span>
          </Link>
          <Link
            to="/custumer"
            className="flex flex-col hover:text-[#40a9fa] transition-all"
          >
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[14px] text-[12px]">Müştəri</span>
          </Link>
          <Link
            to="/statistika"
            className="flex flex-col hover:text-[#40a9fa] transition-all"
          >
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[14px] text-[12px]">Statistika</span>
          </Link>
          <a
            href="/"
            className="flex flex-col hover:text-[#40a9fa] transition-all"
          >
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[14px] text-[12px]">Çıxış</span>
          </a>
        </div>
        <Badge count={1} offset={[-2,6]} className="md:hidden flex">
            <a
              href="/"
              className="flex flex-col hover:text-[#40a9fa] transition-all">
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-[14px] text-[12px]">Səpət</span>
            </a>
          </Badge>
      </header>
    </div>
  );
};

export default Header;
