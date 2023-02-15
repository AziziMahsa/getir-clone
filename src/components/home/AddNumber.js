function AddNumber() {
  return (
    <div className="w-full flex items-center gap-1 ">
      <div className="w-1/5">
        <select className="select select-bordered w-full max-w-xs">
          <option>🇹🇷 tr</option>
          <option>Normal Orange</option>
          <option>Normal Tomato</option>
        </select>
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Telefon Numarası"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default AddNumber;
