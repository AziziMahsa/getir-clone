function Dropdown() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:w-full w-full ">
        <div
          tabIndex={0}
          className="collapse md:w-full collapse-arrow md:collapse-open bg-base-100 text-violet-800 "
        >
          <div className="collapse-title text-lg md:after:!content-none">
            Getir'i keşfedin
          </div>
          <div className="collapse-content text-sm flex flex-col gap-3 text-gray-800">
            <p>Hakkımızda</p>
            <p>Kariyer</p>
            <p>Teknoloji Kariyerleri</p>
            <p>İletişim</p>
            <p>Sosyal Sorumluluk Projeleri</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse md:w-full collapse-arrow md:collapse-open bg-base-100 text-violet-800 "
        >
          <div className="collapse-title text-lg md:after:!content-none">
            Yardıma mı ihtiyacınız var?
          </div>
          <div className="collapse-content text-sm flex flex-col gap-3 text-gray-800">
            <p>Sıkça Sorulan Sorular</p>
            <p>Kişisel Verilerin Korunması</p>
            <p>Gizlilik Politikası</p>
            <p>Kullanım Koşulları</p>
            <p>Çerez Politikası</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse md:w-full collapse-arrow md:collapse-open bg-base-100 text-violet-800 "
        >
          <div className="collapse-title text-lg md:after:!content-none">
            İş Ortağımız Olun
          </div>
          <div className="collapse-content text-sm flex flex-col gap-3 text-gray-800">
            <p>Bayimiz Olun</p>
            <p>Deponuzu kıralayın</p>
            <p>GetirYemek Restoranı Olun</p>
            <p>GetirÇarşı İşletmesi Olun</p>
            <p>Zincir Restoranlar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
