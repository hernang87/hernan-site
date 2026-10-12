import * as React from 'react';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hernang87' },
  { label: 'GitHub', href: 'https://github.com/hernang87' },
  { label: 'Instagram', href: 'https://instagram.com/hernang87' },
  { label: 'Email', href: 'mailto:hernang87@gmail.com' }
];

export const Header: React.FC = () => {
  return (
    <header className="mb-12">
      <h1 className="font-mono text-3xl font-medium tracking-tight sm:text-4xl">
        Hernan Garchtrom
      </h1>
      <p className="mt-2 font-mono text-sm text-muted">Senior Software Engineer · Buenos Aires</p>
      <nav aria-label="Contact" className="mt-6">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                className="underline decoration-muted/50 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
