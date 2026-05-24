import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-imn-black text-imn-white">
      <div className="site-frame flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between md:py-9">
        <Image
          src="/brand/Lockup-Hero.png"
          alt="Inclusive Media Network"
          width={176}
          height={50}
        />
        <p className="text-sm text-white/72">
          &copy; {new Date().getFullYear()} Inclusive Media Network. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
