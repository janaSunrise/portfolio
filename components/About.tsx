const About = () => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold underline underline-offset-4 text-accent font-title">
        about;
      </h2>

      <p className="mt-2 text-md text-accent-secondary max-w-3xl">
        living in the moment and building cool stuff as i get ideas.
        <br /> <br />
        all i do is research, make weird stuff, and write.
        <br /> <br />
        you&apos;ll mostly learning smth, hacking on cool projects, or automating stuff for hours.
      </p>

      <h4 className="mt-4 text-lg font-semibold text-accent font-title">now</h4>

      <ul className="mt-2 text-md text-accent-secondary list-disc">
        <li>attempting to graduate highschool while remaining unfazed</li>
        <li>exploring low-level systems and networking</li>
        <li>reading books, writing as i get time and gaining clarity.</li>
      </ul>
    </div>
  )
}

export default About;
