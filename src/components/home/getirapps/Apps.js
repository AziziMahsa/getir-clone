import Appcover from "./Appcover";
function Apps(props) {
  return (
    <div
      className={
        " h-80  flex flex-col p-4 gap-3 md:flex-row md:p-10  md:m-10 md:rounded-lg " +
        (props.isGray
          ? "bg-gray-50 text-violet-800"
          : "bg-violet-600 text-white ")
      }
    >
      <div className="flex flex-col  gap-3 md:flex-col md:gap-7 md:justify-between">
        <span className="text-2xl font-bold">Getir'i indirin!</span>
        <span className="text-medium font-semibold">
          istediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </span>
        <Appcover order={"row"} />
      </div>
      <div className=" invisible md:visible lg:visible ">
        <img src="/images/phone.png" alt="product" width={600} height={270} />
      </div>
    </div>
  );
}

export default Apps;
