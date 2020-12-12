interface ExternalLinkProps {
  src: string;
  name: string;
}

const ExternalLink = ({ name, src }: ExternalLinkProps) => (
  <span>
    &nbsp;
    <a href={src} rel="noopener noreferrer" target="blank" className="underline hover:no-underline">
      {name}
    </a>
    &nbsp;
  </span>
);

export default ExternalLink;
