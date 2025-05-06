import DarkModeToggle from "../components/DarkModeToggle";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Theme Toggle */}
      <DarkModeToggle />
    </div>
  );
}

export default Home;
