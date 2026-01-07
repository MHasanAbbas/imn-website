import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-imn-black text-imn-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Image
          src="/brand/Lockup-White.png"
          alt="Inclusive Media Network"
          width={170}
          height={48}
        />
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Inclusive Media Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
