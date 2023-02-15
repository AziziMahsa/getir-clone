function Appcover(props) {
  return (
    <div
      className={
        "flex flex-col gap-2 md:gap-5 " +
        (props.order === "row" ? " md:flex-row " : " md:w-full ")
      }
    >
      <img src="/images/applestore.svg" alt="product" width={170} height={70} />
      <img src="/images/appgallery.svg" alt="product" width={170} height={70} />
      <img src="/images/googleplay.svg" alt="product" width={170} height={70} />
    </div>
  );
}

export default Appcover;
