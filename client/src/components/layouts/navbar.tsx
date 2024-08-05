import Link from "next/link";
import Logo from "../../../public/logo_1.png";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 left-0 bg-[#1a202c] p-4 shadow-md">
      <Link className="text-xl hover:text-sky-300" href="/">
        <div className="flex flex-row items-center">
          <img className="w-[50px]" src="../../logo_1.png" alt=""/>
          <p className="ml-[10px] font-bold">Huỳnh Vĩnh Tiến</p>
        </div>
      </Link>
      <div className="absolute top-0 flex flex-row justify-center w-full items-center mt-[8px] ml-[70px]">
          <p className="text-5xl font-bold">CRUD - Prisma - MySQL - NextJS</p>
          <img className="w-[60px]" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_prisma_icon_130234.png" alt=""/>
          <img className="w-[60px]" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-development-mysql-logo-code-icon-9.png" alt=""/>
          <img className="w-[60px] ml-[10px]" src="https://www.datocms-assets.com/98835/1684410508-image-7.png" alt=""/>
      </div>
    </header>
  );
}
