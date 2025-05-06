import DarkModeToggle from "../components/DarkModeToggle";
import StarBackground from "../components/StarBackground";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <DarkModeToggle />

      <StarBackground />
    </div>
  );
}

export default Home;
