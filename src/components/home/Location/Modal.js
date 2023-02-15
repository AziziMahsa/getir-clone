"use client";
import AddNumber from "../AddNumber";
export default function Modal() {
  return (
    // <div className="absolute justify-center items-center w-full flex overflow-x-hidden overflow-y-auto inset-0 h-full  z-50 ">
    //   <div className="relative my-6 mx-auto max-w-3xl w-full">
    //     <div className=" rounded-lg h-full relative flex flex-col w-full bg-white p-4">
    //       <button
    //         className=" ml-auto  text-gray-600   text-xl float-right font-light px-2 text-center bg-gray-100 rounded-lg "
    //         onClick={() => setShowModal(false)}
    //       >
    //         x
    //       </button>
    //       <AddNumber />

    //       <button
    //         className="py-3 bg-yellow-400 w-full text-violet-800  rounded-md mt-6"
    //         type="button"
    //         onClick={() => setShowModal(false)}
    //       >
    //         Telefon numarası ile devam et
    //       </button>
    //     </div>
    //   </div>
    // </div>,
    <div
      className="modal h-auto flex flex-col justify-between  bg-white"
      id="my-modal-2"
    >
      <div className="modal-box shadow-none rounded-none bg-white w-full max-w-5xl">
        <div className="modal-action flex items-center gap-10">
          <span className="text-violet-800  text-xl">
            Giriş yap veya kayıt ol
          </span>
          <a
            href=".#"
            className=" px-3 py-1 bg-gray-100 text-gray-700  rounded-md"
          >
            X
          </a>
        </div>
        <AddNumber />
        <button className="py-3 bg-yellow-400 w-full text-violet-800  rounded-md mt-6">
          Telefon numarası ile devam et
        </button>
        <span className="flex text-sm  justify-start mt-2 ">
          Kişisel verilerinize dair Aydınlatma Metni için
          <a href="." className="text-violet-800 ml-1 underline">
            tıklayınız
          </a>
        </span>
      </div>
      <div className="bg-gray-100 text-gray-500  txet-sm flex py-4 w-full text-center justify-center">
        Hala kayıt olmadınız mı?
        <a href="." className="text-violet-700 ml-1 font-medium ">
          kayıt Ol
        </a>
      </div>
    </div>
  );
}
