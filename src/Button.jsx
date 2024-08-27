export default function Button({ title = "No title" }) {
  return (
    <div className="ease-custom flex h-[45px] w-[279px] items-center justify-center rounded-lg bg-[#333] text-sm font-bold text-white transition duration-[3000ms] hover:bg-[#c4f82a] hover:text-[#333]">
      {title}
    </div>
  );
}
