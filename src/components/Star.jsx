function Star({ star }) {
  return (
    <div
      className="star animate-pulse-subtle"
      style={{
        width: `${star.size}px`,
        height: `${star.size}px`,
        left: `${star.x}%`,
        top: `${star.y}%`,
        opacity: `${star.opacity}`,
        animationDuration: `${star.animationDuration}s`,
        blur: `${star.blur}px`,
      }}
    />
  );
}

export default Star;
