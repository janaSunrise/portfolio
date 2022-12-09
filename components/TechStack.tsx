interface TechStackProps {
  name: string;
  elements: string[];
}

export const TechStack = ({ name, elements }: TechStackProps) => {
  return (
    <div className="flex flex-wrap mt-2 space-x-2 text-xl text-accent-secondary">
      <h3 className="font-normal text-accent">{name}:</h3>
      {elements.map((element, index) => (
        <div key={index}>
          <p>
            {element} {index < elements.length - 1 && '•'}
          </p>
        </div>
      ))}
    </div>
  );
};
