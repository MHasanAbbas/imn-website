import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-imn-black/90 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <Image
            src="/brand/Lockup-White.png"
            alt="Inclusive Media Network"
            width={170}
            height={48}
            priority
          />
        </a>

        <div className="flex gap-5 text-sm text-white/80">
          <a href="#about" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">About</a>
          <a href="#vision" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">Vision</a>
          <a href="#work" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">Work</a>
          <a href="#team" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">Team</a>
          <a href="#contact" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">Contact</a>
        </div>
      </nav>
    </header>
  );
}
