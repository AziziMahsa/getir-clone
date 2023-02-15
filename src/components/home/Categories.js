const category = [
  {
    imgSrc: "/images/yeni.jpg",
    title: "Yeni Ürünler",
  },
  {
    imgSrc: "/images/su.jpeg",
    title: "Su & İçecek",
  },
  {
    imgSrc: "/images/domates.jpeg",
    title: "Meyve & Sebze",
  },
  {
    imgSrc: "/images/simit.jpeg",
    title: "Fırından",
  },
  {
    imgSrc: "/images/makarana.jpeg",
    title: "Temel Gida",
  },
  {
    imgSrc: "/images/chips.jpeg",
    title: "Atiştırmalık",
  },
  {
    imgSrc: "/images/dondurma.jpeg",
    title: "Dondurma",
  },
  {
    imgSrc: "/images/sut.jpeg",
    title: "Süt Ürünleri",
  },
  {
    imgSrc: "/images/yumurta.jpeg",
    title: "Kahvaltılık",
  },
  {
    imgSrc: "/images/sandwich.jpeg",
    title: "Yiyegek",
  },
  {
    imgSrc: "/images/granola.jpeg",
    title: "Fit & Form",
  },
  {
    imgSrc: "/images/dişmajun.jpeg",
    title: "Kişisel Bakım",
  },
  {
    imgSrc: "/images/temizlemek.jpeg",
    title: "Ev Bakım",
  },
  {
    imgSrc: "/images/lamba.jpeg",
    title: "Ev & Yaşam",
  },
  {
    imgSrc: "/images/cable.jpeg",
    title: "Teknoloji",
  },
  {
    imgSrc: "/images/kedi.jpeg",
    title: "Evcil Hayvan",
  },
  {
    imgSrc: "/images/bebek.jpeg",
    title: "Bebek",
  },
  {
    imgSrc: "/images/cinsel.jpeg",
    title: "CinSel Sağlık",
  },
];
function Categories() {
  return category.map((item, index) => {
    return (
      <div
        className="flex flex-col gap-3 items-center py-2 rounded-md basis-[23%] md:basis-[18%] lg:basis-[9%] hover cursor-pointer hover:bg-violet-50 "
        key={index}
      >
        <div className=" rounded-md border">
          <img src={item.imgSrc} alt="product" width={50} height={50} />
        </div>
        <span className="px-1 text-sm text-gray-700 font-semibold ">
          {item.title}
        </span>
      </div>
    );
  });
}

export default Categories;
