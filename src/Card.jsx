import Button from "./Button";
import image from "./assets/images/avatar-jessica.jpeg";

export default function Card() {
  return (
    <div className="flex h-[579px] w-[327px] flex-col items-center rounded-xl bg-[#1f1f1f]">
      <img src={image} alt="Jessica" className="m-6 w-[88px] rounded-full" />
      <div className="text-center font-semibold">
        <h1 className="mb-1 text-2xl text-white">Jessica Randall</h1>
        <h2 className="text-sm text-[#c4f82a]">London, United Kingdom</h2>
      </div>
      <q className="m-6 text-sm font-normal text-white">
        Front-end developer and avid reader
      </q>
      <div className="flex flex-col items-center justify-center gap-4">
        <Button title="Github" />
        <Button title="Frontent Mentor" />
        <Button title="LinkedIn" />
        <Button title="Twitter" />
        <Button title="Instagram" />
      </div>
    </div>
  );
}
