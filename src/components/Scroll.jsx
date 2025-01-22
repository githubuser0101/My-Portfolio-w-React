import MyfunnyImage from "../../public/MyfirstRidiculousCVImage.jpg";

function Scroll() {
  return (
    <div className="flex w-full h-[400px] overflow-x-scroll gap-16 scrollbar-hide text-black text-5xl font-bold">
      <div className="flex justify-center items-center w-[500px] h-[300px] border border-gray-900 flex-shrink-0 rounded-3xl ring-4 ring-stone-200 shadow-xl bg-stone-700">
        <div>Ye</div>
      </div>
      <div className="flex justify-center items-center w-[500px] h-[300px] border border-gray-900 flex-shrink-0 rounded-3xl ring-4 ring-stone-200 shadow-xl bg-pink-700">
        <div>Lo</div>
      </div>
      <div className="flex justify-center items-center w-[500px] h-[300px] border border-gray-900 flex-shrink-0 rounded-3xl ring-4 ring-stone-200 shadow-xl bg-red-100 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100 z-0 "
          style={{ backgroundImage: `url(${MyfunnyImage})` }}
        ></div>
        <div className="relative z-10">Naseem bhai</div>
      </div>
      <div className="flex justify-center items-center w-[500px] h-[300px] border border-gray-900 flex-shrink-0 rounded-3xl ring-4 ring-stone-200 shadow-xl bg-green-700">
        <div>Ho</div>
      </div>
      <div className="flex justify-center items-center w-[500px] h-[300px] border border-gray-900 flex-shrink-0 rounded-3xl ring-4 ring-stone-200 shadow-xl bg-teal-700">
        <div>Gaya</div>
      </div>
      <div className="flex justify-center items-center w-[500px] h-[300px] border border-gray-900 flex-shrink-0 rounded-3xl ring-4 ring-stone-200 shadow-xl bg-yellow-700">
        <div>Kaam</div>
      </div>
    </div>
  );
}

export default Scroll;
