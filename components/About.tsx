const About = () => {
  return (
    <div className="mt-4 pb-4">
      <h2 className="text-xl font-semibold underline underline-offset-4 text-accent font-title">
        About
      </h2>

      <p className="mt-2 text-md text-accent-secondary max-w-3xl">
        Living in the moment and building cool stuff as I get ideas.
        <br />
        Cranking gears in code and writing about it.
        <br />
        You&apos;ll mostly find me learning smth, hacking on cool projects, or
        automating stuff for hours.
      </p>

      <h4 className="mt-2 text-lg font-semibold text-accent font-title">
        currently
      </h4>

      <ul className="mt-1 text-md text-accent-secondary list-disc pl-4">
        <li>Attempting to graduate highschool while remaining unfazed</li>
        <li>Exploring low-level systems and networking</li>
        <li>Reading books, writing as I get time and seeking clarity</li>
      </ul>
    </div>
  );
};

export default About;
