export default function Link({ title = "No title", URL = "#" }) {
  return (
    <li className="w-full">
      <a
        className="flex h-[2.8125rem] w-full items-center justify-center rounded-lg bg-[#333] text-sm font-bold text-white transition duration-[3000ms] ease-custom hover:bg-[#c4f82a] hover:text-[#333]"
        href={URL}
      >
        {title}
      </a>
    </li>
  );
}
