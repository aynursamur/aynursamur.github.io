import { FiExternalLink } from 'react-icons/fi';

export default function ExternalLink({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      className={`inline-flex items-center font-bold text-blue-600 hover:underline ${
        className ? className : ''
      }`}
      {...rest}
    >
      {children}
      <FiExternalLink className="inline-block ml-0.5" />
    </a>
  );
}
