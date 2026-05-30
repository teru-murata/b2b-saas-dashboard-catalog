type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, id, children, className }: SectionProps) {
  return (
    <section id={id} className={className} aria-labelledby={`${id}-heading`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <div className="section-heading-row">
        <div>
          <h2 id={`${id}-heading`}>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
