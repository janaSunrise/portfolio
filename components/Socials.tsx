import { socials } from 'data/socials';

const Socials = () => {
  return (
    <div className="grid grid-flow-col w-36 text-lg">
      {socials.map(({ name, url, copy, icon }) =>
        copy ? (
          <button
            key={name}
            className="transition duration-150 hover:opacity-80"
            onClick={() => navigator.clipboard.writeText(url)}
          >
            {icon}
          </button>
        ) : (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="transition duration-150 hover:opacity-80"
          >
            {icon}
          </a>
        )
      )}
    </div>
  );
};

export default Socials;
