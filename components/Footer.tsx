const Footer = () => {
  return (
    <div className="flex flex-col space-y-4 mt-5 pt-3 mx-auto">
      <div className="flex flex-col md:flex-row space-x-2 mx-auto items-center justify-center">
        <p>Crafted with ❤️ by Sunrit</p>
        <p className="hidden md:flex">•</p>
        <p>
          Open-source at{' '}
          <a
            className="transition duration-150 hover:opacity-80"
            href="https://github.com/janaSunrise/portfolio"
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
