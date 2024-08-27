import Link from "./Link";
import image from "./assets/images/avatar-jessica.jpeg";

export default function Card() {
  return (
    <div className="flex min-h-[579px] w-[327px] flex-col items-center rounded-xl bg-[#1f1f1f]">
      <img src={image} alt="Jessica" className="m-6 w-[88px] rounded-full" />
      <div className="text-center font-semibold">
        <h1 className="mb-1 text-2xl text-white">Jessica Randall</h1>
        <p className="text-sm text-[#c4f82a]">London, United Kingdom</p>
      </div>
      <q className="m-6 text-sm font-normal text-white">
        Front-end developer and avid reader
      </q>
      <ul className="flex flex-col items-center justify-center gap-4">
        <Link URL="https://github.com/korniykom" title="Github" />
        <Link title="Frontent Mentor" />
        <Link title="LinkedIn" />
        <Link title="Twitter" />
        <Link title="Instagram" />
      </ul>
    </div>
  );
}
