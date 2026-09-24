export function CoupleHeader() {
  return (
    <section className="bg-background px-6 pb-8 pt-2 text-center sm:px-8">
      <p className="mx-auto max-w-[28rem] text-center text-[0.66rem] leading-[1.9] tracking-[0.14em] text-muted-foreground sm:text-[0.7rem]">
        <span className="block font-display text-[0.78rem] tracking-wide text-foreground/90">
          Sardarni Surjeet Kaur
        </span>
        <span className="block text-[0.62rem] tracking-[0.18em] text-muted-foreground/70">and</span>
        <span className="block font-display text-[0.78rem] tracking-wide text-foreground/90">
          Sardar Parduman Singh
        </span>
        <span className="mt-3 block text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
          invite you to celebrate the wedding of their granddaughter
        </span>
      </p>

      {/* Ornamental divider */}
      <div className="mx-auto mt-7 flex items-center justify-center gap-3 text-primary/40">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/35 sm:w-16" />
        <span className="text-[0.62rem] tracking-[0.28em]">—</span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/35 sm:w-16" />
      </div>

      <div className="mt-7">
        <h1 className="font-display text-[2.55rem] font-light leading-[0.95] tracking-[0.04em] text-foreground sm:text-[3.05rem]">
          COMAL KAUR
        </h1>
        <p className="script my-3 text-[1.35rem] leading-none text-primary sm:text-[1.6rem]">Weds</p>
        <h2 className="font-display text-[2.05rem] font-light leading-[0.95] tracking-[0.04em] text-foreground sm:text-[2.45rem]">
          SARABJOT SINGH
        </h2>
        <p className="mt-2 font-display text-[1.45rem] font-light leading-none tracking-[0.12em] text-foreground/80 sm:text-[1.7rem]">
          LAMBA
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-[22rem] text-center text-[0.66rem] leading-relaxed tracking-[0.12em] text-muted-foreground sm:text-[0.7rem]">
        Daughter of <span className="font-medium text-foreground/85">Beena</span> and{" "}
        <span className="font-medium text-foreground/85">Sukhvinder Singh</span>
      </p>

      <span
        aria-hidden="true"
        className="mx-auto mt-7 block h-px w-20 bg-primary/25 sm:w-24"
      />
    </section>
  );
}
