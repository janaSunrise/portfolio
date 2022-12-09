import { TechStack } from '../components/TechStack';

const Home = () => {
  return (
    <div className="mx-16 md:mx-48 lg:mx-56 xl:mx-64">
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-400 font-title">
          hey i am
        </h2>
        <h1 className="text-6xl font-bold text-accent font-title">
          sunrit jana
        </h1>
      </div>

      <p className="mt-6 text-lg font-medium text-accent-secondary">
        sixteen. indian.
        <br />
        wizard, generalist, deviant, mostly water.
        <br />
        researches, makes weird stuff, and writes.
      </p>

      <div className="pb-5 mt-8">
        <h2 className="text-3xl font-semibold underline underline-offset-4 text-accent font-title">
          techstack;
        </h2>

        <TechStack
          name="languages"
          elements={['python', 'typescript', 'rust']}
        />
        <TechStack
          name="frontend"
          elements={['react', 'next.js', 'chakra', 'svelte']}
        />
        <TechStack
          name="backend"
          elements={['flask', 'django', 'fastapi', 'express', 'fastify']}
        />
        <TechStack name="cloud" elements={['aws']} />
        <TechStack
          name="database"
          elements={['postgresql', 'mysql', 'mongodb', 'redis']}
        />
        <TechStack
          name="ml"
          elements={['tensorflow', 'pytorch', 'scikit-learn']}
        />
        <TechStack
          name="others"
          elements={['docker', 'git', 'linux', 'ci/cd']}
        />
      </div>
    </div>
  );
};

export default Home;
