import AddNumber from "../AddNumber";
function Location() {
  return (
    <>
      <div className=" md:h-[500px] " id="wallpaper">
        <div className="md:h-[500px] md:flex md:justify-between  md:items-center md:px-12 bg-gradient-to-r from-violet-600  ">
          <div className="hidden md:flex md:flex-col gap-5 items-start  ">
            <img
              src="/images/wallpaper/yellowlogo.svg"
              className=" h-44"
              alt=" product"
            />
            <span className="text-4xl text-white font-semibold">
              Dakikalar içinde <br /> kapınızda
            </span>
          </div>
          <div className="flex flex-col text-center  bg-gray-50 md:w-96 md:rounded-lg md:p-3 ">
            <a
              href="#my-modal-2"
              className="flex bg-white px-4 py-2 justify-between items-center md:hidden"
            >
              <div className="flex items-center ">
                <img
                  src="/icons/location.png"
                  alt="location"
                  width={22}
                  height={10}
                />
                <span className="text-gray-600 text-sm font-medium">
                  Teslimat Adresi Belirle
                </span>
              </div>

              <div>
                <img
                  src="/icons/chevron.png"
                  alt="location"
                  width={18}
                  height={18}
                />
              </div>
            </a>

            <div className="text-violet-800 text-semibold text-xl  mt-3 ">
              Giriş yap veya kayıt ol
            </div>
            <div className="px-6 md:p-4 mt-3 ">
              <AddNumber />
              <button className="py-3 mt-3 bg-yellow-400 w-full text-violet-800 md:mt-3 rounded-md  ">
                Telefon numarası ile devam et
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
