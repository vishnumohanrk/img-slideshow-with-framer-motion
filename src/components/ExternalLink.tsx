interface ExternalLinkProps {
  src: string;
  text: string;
}

const ExternalLink = ({ src, text }: ExternalLinkProps) => (
  <a
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
  >
    <span>{text}</span>
    {text !== 'Unsplash' && (
      <span className="absolute bottom-0 left-0 w-8 transition-all duration-300 h-1 bg-white group-hover:w-3/4 group-focus:w-3/4" />
    )}
  </a>
);

export default ExternalLink;
