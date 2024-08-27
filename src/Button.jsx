export default function Button({ title = "No title" }) {
  return (
    <div className="hover:animate-fade-in flex h-[45px] w-[279px] items-center justify-center rounded-lg bg-[#333] text-sm font-bold text-white transition-all duration-700 hover:bg-[#c4f82a] hover:text-[#333]">
      {title}
    </div>
  );
}
