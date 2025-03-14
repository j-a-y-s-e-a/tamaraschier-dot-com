export function Section({ children, id }: { children: React.ReactNode, id?: string }) {
  return (
    <section id={id} className="py-24 md:py-32">
      {children}
    </section>
  );
}
