function ProfileIntro() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        Front-End Developer with a Creative Edge
      </h3>

      <p className="text-muted-foreground">
        I'm focused on creating responsive and accessible web interfaces with
        modern technologies, and I'm constantly sharpening my skills to deliver
        better user experiences.
      </p>

      <p className="text-muted-foreground">
        I'm passionate about creating elegant solutions to complex problems, and
        I'm constantly learning new technologies and techniques to stay at the
        forefront of the ever-evolving web landscape.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <a href="#contact" className="cosmic-button">
          {" "}
          Get In Touch
        </a>

        <a
          href=""
          className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default ProfileIntro;
