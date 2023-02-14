import { socials } from 'data/socials';

const elementClass =
  'transition ease-linear duration-200 hover:text-yellow-500';

const Socials = () => {
  return (
    <div className="grid grid-flow-col w-36 text-lg">
      {socials.map(({ name, url, copy, icon }) =>
        copy ? (
          <button
            key={name}
            className={elementClass}
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
            className={elementClass}
          >
            {icon}
          </a>
        )
      )}
    </div>
  );
};

export default Socials;
