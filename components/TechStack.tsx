interface TechStackProps {
  name: string;
  elements: string[];
}

export const Tech = ({ name, elements }: TechStackProps) => {
  return (
    <div className="flex flex-wrap mt-2 space-x-2 text-lg text-accent-secondary">
      <h3 className="text-accent text-md">{name}:</h3>
      {elements.map((element, index) => (
        <div key={index}>
          <p>
            {element}
            {index < elements.length - 1 && ','}
          </p>
        </div>
      ))}
    </div>
  );
};

export const TechStack = () => {
  return (
    <div className="pb-5 mt-4">
      <h2 className="text-2xl font-semibold underline underline-offset-4 text-accent font-title">
        techstack;
      </h2>

      <Tech name="languages" elements={['python', 'typescript', 'rust']} />
      <Tech
        name="frontend"
        elements={['react', 'next.js', 'chakra', 'svelte']}
      />
      <Tech
        name="backend"
        elements={['flask', 'django', 'fastapi', 'express', 'fastify']}
      />
      <Tech name="cloud" elements={['aws']} />
      <Tech
        name="database"
        elements={['postgresql', 'mysql', 'mongodb', 'redis']}
      />
      <Tech name="ml" elements={['tensorflow', 'pytorch', 'scikit-learn']} />
      <Tech name="others" elements={['docker', 'git', 'linux', 'ci/cd']} />
    </div>
  );
};
