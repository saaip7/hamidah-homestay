import Image from "next/image";
import { Copyright } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-full h-auto md:h-[260px] flex flex-col justify-start items-center bg-color-red relative font-['Geist'] text-color-white">
      <div className="w-full h-auto flex flex-col justify-center items-center relative py-10">
        <div className="w-full max-w-[1310px] h-auto flex flex-col md:flex-row justify-between items-start relative px-4 md:px-8">
          <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto justify-center flex-col md:flex-row ">
            <Image
              src="/img/Logo2.png"
              width={10000}
              height={10000}
              alt="logo hamidah homestay"
              className="w-[60px] h-[60px] filter invert mb-2 md:mb-0"
            />
            <h1 className="text-xl md:text-2xl font-bold text-color-white ml-2">
              Hamidah Homestay
            </h1>
          </div>
          <div className="w-full md:w-[403px] text-center md:text-right">
            <h1 className="text-lg md:text-xl font-semibold">
              Hamidah Homestay Sungailiat
            </h1>
            <p className="text-sm md:text-[16px]">
              Sungailiat, Sungai Liat, Bangka Regency, Bangka Belitung Islands
              33211, Indonesia
            </p>
            <div className="flex items-center justify-center md:justify-end mt-2 gap-2">
              <a
                href="https://www.instagram.com/hamidah.homestay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="w-[30px] h-[30px] text-color-white hover:text-[#f87171] transition-all duration-300 ease-in-out"
                />
              </a>
              <a
                href="https://maps.app.goo.gl/KBrZEsX84y8dJre79"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  className="w-[30px] h-[30px] text-color-white hover:text-[#f87171] transition-all duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto md:h-[75px] flex flex-col md:flex-row justify-center items-center bg-[#9E1515] py-4 md:py-0">
        <div className="w-full max-w-[1310px] flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
          <div className="flex items-center flex-row mb-4 md:mb-0">
            <Copyright className="w-[16px] h-[16px] md:w-[19px] md:h-[19px] mx-[4px]" />
            <p className="text-sm md:text-[16px] font-medium text-center md:text-left">
              2024 Hamidah Homestay. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <a
              href="#galeri"
              className="text-sm md:text-[16px] font-medium hover:underline"
            >
              Galeri
            </a>
            <a
              href="#fasilitas"
              className="text-sm md:text-[16px] font-medium hover:underline"
            >
              Fasilitas
            </a>
            <a
              href="#lokasi"
              className="text-sm md:text-[16px] font-medium hover:underline"
            >
              Lokasi
            </a>
            <a
              href="#review"
              className="text-sm md:text-[16px] font-medium hover:underline"
            >
              Review
            </a>
            <a
              href="#peraturan"
              className="text-sm md:text-[16px] font-medium hover:underline"
            >
              Peraturan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}