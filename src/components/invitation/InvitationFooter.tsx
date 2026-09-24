import { contact } from "@/lib/wedding";

export function InvitationFooter() {
  return (
    <footer className="bg-background px-6 pb-10 pt-10 text-center sm:px-8 sm:pb-14 sm:pt-12">
      {/* Decorative rule */}
      <div className="mx-auto flex max-w-[560px] items-center justify-center gap-3 text-primary/40">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/25 sm:w-20" />
        <span className="font-display text-[0.82rem] italic tracking-wide text-primary/60">—</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/25 sm:w-20" />
      </div>

      <div className="mx-auto mt-8 max-w-[560px] card-soft px-7 py-8 sm:px-10 sm:py-10">
        <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
          {contact.closingLine1}
        </p>
        <p className="mt-3 font-display text-[1.35rem] leading-tight tracking-wide text-foreground sm:text-[1.5rem]">
          {contact.closingFamily}
        </p>
      </div>

      <p className="mx-auto mt-8 max-w-[560px] text-[0.58rem] leading-relaxed tracking-wide text-muted-foreground/60">
        Kindly consider this digital invitation as our personal invite. Your presence will grace the occasion.
      </p>
    </footer>
  );
}
