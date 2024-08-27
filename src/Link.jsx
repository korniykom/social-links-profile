export default function Link({ title = "No title", URL = "#" }) {
  return (
    <li>
      <a
        className="flex h-[45px] w-[279px] items-center justify-center rounded-lg bg-[#333] text-sm font-bold text-white transition duration-[3000ms] ease-custom hover:bg-[#c4f82a] hover:text-[#333]"
        href={URL}
      >
        {title}
      </a>
    </li>
  );
}
