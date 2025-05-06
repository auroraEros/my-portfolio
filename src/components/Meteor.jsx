function Meteor({ meteor }) {
  return (
    <div
      className="meteor animate-meteor"
      style={{
        width: meteor.size * 50 + "px",
        height: meteor.size * 2 + "px",
        left: `${meteor.x}%`,
        top: `${meteor.y}%`,
        animationDelay: `${meteor.delay}s`,
        animationDuration: `${meteor.animationDuration}s`,
      }}
    />
  );
}

export default Meteor;
