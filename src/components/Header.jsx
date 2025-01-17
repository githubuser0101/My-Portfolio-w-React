function Header() {
  return (
    <div className="w-full mt-4 flex justify-between">
      <div className="text-stone-950 text-3xl flex align-center">
        <div>Sonu Kumar</div>
      </div>
      <div className="flex list-none gap-8 text-2xl align-center">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contacts</li>
      </div>
    </div>
  );
}

export default Header;
