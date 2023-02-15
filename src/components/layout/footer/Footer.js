import Selectlang from "../../home/getirjoin/Selectlang";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 p-5 md:p-2 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <span className="text-xs font-light ">© 2023 Getir</span>
        <span className="text-violet-800 font-light text-sm">
          Bilgi Toplumu Hizmetleri
        </span>
      </div>

      <div className="flex flex-col md:flex-row text-center gap-3 md:items-center">
        <div className="flex justify-between md:gap-3">
          <div className="h-fit w-fit ">
            <img src="/icons/fb.png" alt="product" width={25} height={25} />
          </div>
          <div className="h-fit w-fit ">
            <img src="/icons/tw.png" alt="product" width={25} height={25} />
          </div>
          <div className="h-fit w-fit ">
            <img src="/icons/in.png" alt="product" width={25} height={25} />
          </div>
        </div>

        <Selectlang />
      </div>
    </div>
  );
}

export default Footer;
