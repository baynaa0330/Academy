import Image from "next/image";
export default function footer() {
  return (
    <div className="flex w-[100vw] h-[282px] bg-black pt-[64px] pb-[64px]  gap-[43px] px-50">
      <div className="flex w-[890px] h-[48px] justify-between grid-flow-row">
        <div className="justify-left w-[79px] h-[34px] mt-5 gap-[24px] ">
          <Image
            src="/Pineconehome-Logo.png"
            alt="Pinecone"
            width={52}
            height={34}
          />
          <div className="flex w-[434px] h-[48px] justify-between">
            <div className="w-[167px] h-[48px] border-[1px] text-white">
              <div className="flex w-[48px] h-[48px] border-[1px] pt-14px pl-14px text-white">
                <Image
                  src="/phone-call-white-icon.webp"
                  alt="phone"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
