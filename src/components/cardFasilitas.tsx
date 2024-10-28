import React from 'react';

interface FacilityCardProps {
  icon: React.ReactNode; // Ganti imageSrc dengan icon
  title: string;
}

const CardFasilitas: React.FC<FacilityCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col rounded-none w-[160px] md:w-[193px]">
      <div className="flex flex-col px-5 py-12 bg-white rounded-lg border border-gray-200 border-solid h-[160px] w-[160px] md:w-[193px] md:h-[193px] max-md:px-5">
        <div className="w-10 h-10 mx-auto text-color-red">{icon}</div>
        <div className="mt-4 text-center text-color-black font-semibold">{title}</div>
      </div>
    </div>
  );
};

export default CardFasilitas;
