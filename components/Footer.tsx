import { GITHUB_REPO } from 'data/github';

// TODO: Fix footer to make it small device friendly
const Footer = () => {
  return (
    <div className="flex flex-col space-y-4 mt-5 pt-3 mx-auto fixed bottom-8 left-0 w-full">
      <div className="flex flex-col md:flex-row space-x-2 mx-auto items-center justify-center">
        <p>Crafted with ❤️ by Sunrit</p>
        <p className="hidden md:flex">•</p>
        <p>
          Open source at{' '}
          <a
            className="transition duration-150 hover:text-yellow-500"
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
