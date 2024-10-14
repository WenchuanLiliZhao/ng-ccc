// src/Redirect.tsx
import { useEffect } from 'react';

interface RedirectProps {
  link: string;
}

const Redirect: React.FC<RedirectProps> = ({ link }) => {
  useEffect(() => {
    window.location.href = link; // This will redirect the user to the specified link
  }, [link]); // Effect depends on `link`, so it runs when `link` changes

  return null; // As this component is only for redirecting, it renders nothing
};

export default Redirect;
