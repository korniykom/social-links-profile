import Link from "./Link";
import image from "./assets/images/avatar-jessica.jpeg";

export default function Card() {
  return (
    <div className="m-6 flex max-h-screen max-w-[2-rem] flex-col items-center overflow-y-auto rounded-xl bg-[#1f1f1f] p-6">
      <img src={image} alt="Jessica" className="m-6 w-[5.5rem] rounded-full" />
      <div className="text-center font-semibold">
        <h1 className="mb-1 text-2xl text-white">Jessica Randall</h1>
        <p className="text-sm text-[#c4f82a]">London, United Kingdom</p>
      </div>
      <q className="m-6 text-center text-sm font-normal text-white">
        Front-end developer and avid reader
      </q>
      <ul className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <Link URL="https://github.com/korniykom" title="Github" />
        <Link title="Frontent Mentor" />
        <Link title="LinkedIn" />
        <Link title="Twitter" />
        <Link title="Instagram" />
      </ul>
    </div>
  );
}
