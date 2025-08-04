import localFont from 'next/font/local';

export const fixtureFont = localFont({
  src: '../styles/Fixture-CondensedMedium.ttf',
  display: 'swap',
  variable: '--font-fixture',
  fallback: ['system-ui', 'arial'],
}); 