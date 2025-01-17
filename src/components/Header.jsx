function Header() {
  return (
    <div className="w-full mt-4 flex justify-between">
      <div className="text-stone-950 text-3xl flex align-center">
        <div className="cursor-pointer">Sonu Kumar</div>
      </div>
      <div className="flex list-none gap-8 text-2xl align-center">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contacts</li>
      </div>
    </div>
  );
}

export default Header;
