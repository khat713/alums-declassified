interface LessonBodyProps {
  paragraphs: string[];
}

// Renders verbatim lesson paragraphs as clean, spaced prose blocks.
// No icons, no emojis, no rewording — text is passed through exactly as provided.
export function LessonBody({ paragraphs }: LessonBodyProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '0.5rem' }}>
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className="dark:text-white/80 text-[#374151]"
          style={{ fontSize: '1rem', lineHeight: 1.8, margin: 0 }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
