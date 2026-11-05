import "./FloatingFloralBackground.css";
function FloatingFloralBackground() {

  const flowers = Array.from({ length: 18 }, (_, index) => index);

  return (
    <div className="floral-background" aria-hidden="true">

      {flowers.map((flower) => (

        <span
          key={flower}
          className={`floating-flower flower-${flower % 6}`}
          style={{
            left: `${(flower * 37 + 9) % 100}%`,
            animationDelay: `${(flower % 9) * -1.7}s`,
            animationDuration: `${12 + (flower % 7) * 2}s`,
            fontSize: `${16 + (flower % 4) * 8}px`
          }}
        >
          {flower % 3 === 0 ? "✿" : flower % 3 === 1 ? "❀" : "✾"}

        </span>

      ))}

    </div>
  );
}

export default FloatingFloralBackground;