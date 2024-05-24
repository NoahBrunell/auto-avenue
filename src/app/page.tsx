import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='w-screen h-[5vh] flex items-center border-b-black border-b'>
        <a href="/">
          <span className='ml-[3vw] mr-[1vw] text-3xl text-bold text-red-600 font-bold'>Auto Avenue</span>
        </a>
      </div>
      <div className="w-screen h-[95vh] flex justify-center items-center">
        <div id="left" className="flex-1 flex justify-center">
          <a className="bg-slate-300 hover:bg-slate-200 w-[35vw] h-[50vh] rounded-xl border border-slate-200 flex justify-center items-center" href="./listings">
            <img className="max-w-[50%]" src="/search-icon.png" alt="" />
          </a>
        </div>
        <div id="right" className="flex-1 flex justify-center">
          <a  className="bg-slate-300 hover:bg-slate-200 w-[35vw] h-[50vh] rounded-xl border border-slate-200 flex justify-center items-center" href="./create">
            <img className="max-w-[50%]" src="/plus-icon.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
