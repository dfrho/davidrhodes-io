type SectionHeadingProps = {
  index: string;
  titleId: string;
  title: string;
  lede?: string;
};

export function SectionHeading({ index, titleId, title, lede }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-index">
        <span className="sr-only">Section </span>
        {index}
      </p>
      <div>
        <h2 id={titleId}>{title}</h2>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </div>
  );
}
