export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b5ef5" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#logoGradient)" />
      <path
        d="M10 20c0-3.6 2.7-6 5.8-6 3 0 4.6 2.3 4.2 6-.4 3.7 1.2 6 4.2 6 3.1 0 5.8-2.4 5.8-6s-2.7-6-5.8-6c-3 0-4.6 2.3-4.2 6 .4 3.7-1.2 6-4.2 6-3.1 0-5.8-2.4-5.8-6Z"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
