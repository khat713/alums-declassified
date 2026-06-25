interface Heading {
  beforeIndex: number;
  text: string;
}

interface LessonBodyProps {
  paragraphs: string[];
  headings?: Heading[];
}

export function LessonBody({ paragraphs, headings = [] }: LessonBodyProps) {
  const headingMap = new Map(headings.map((h) => [h.beforeIndex, h.text]));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '0.5rem' }}>
      {paragraphs.map((text, i) => (
        <div key={i}>
          {headingMap.has(i) && (
            <h3
              className="text-[#0d7c7e] font-bold"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', letterSpacing: '-0.01em', marginBottom: '0.35rem', marginTop: i === 0 ? 0 : '0.4rem' }}
            >
              {headingMap.get(i)}
            </h3>
          )}
          <p
            className="dark:text-white/80 text-[#374151]"
            style={{ fontSize: '1rem', lineHeight: 1.8, margin: 0 }}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
