const items = [
  {
    imgSrc: "/images/violet1.svg",
    title: "Her siparişinize bir kampanya",
    desc: "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
  },
  {
    imgSrc: "/images/violet2.svg",
    title: "Dakikalar içinde kapınızda",
    desc: "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
  },
  {
    imgSrc: "/images/violet3.svg",
    title: "Binlerce çeşit mutluluk",
    desc: "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
  },
];
function Card() {
  return items.map((item, index) => {
    return (
      <div
        key={index}
        className="h-80  w-full bg-white flex flex-col gap-3 p-3 text-center items-center justify-center"
      >
        <div className="rounded-full">
          <img src={item.imgSrc} alt=" product" width={150} height={150} />
        </div>
        <span className="text-lg font-normal text-violet-800">
          {item.title}
        </span>
        <span className="text-sm text-gray-500">{item.desc}</span>
      </div>
    );
  });
}

export default Card;
