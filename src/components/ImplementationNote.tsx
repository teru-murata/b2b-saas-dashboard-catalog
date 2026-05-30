type ImplementationNoteProps = {
  title: string;
  children: React.ReactNode;
};

export function ImplementationNote({ title, children }: ImplementationNoteProps) {
  return (
    <article className="implementation-note">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
