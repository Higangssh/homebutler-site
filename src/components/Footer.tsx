export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/images/logo.png"
            alt="Homebutler"
            className="w-5 h-5 rounded"
          />
          <span className="text-sm text-[#52525b]">
            Homebutler — MIT License
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Higangssh/homebutler"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#52525b] hover:text-[#a1a1aa] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/Higangssh/homebutler#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#52525b] hover:text-[#a1a1aa] transition-colors"
          >
            Docs
          </a>
          <a
            href="https://github.com/Higangssh/homebutler/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#52525b] hover:text-[#a1a1aa] transition-colors"
          >
            License
          </a>
        </div>
      </div>
    </footer>
  );
}
