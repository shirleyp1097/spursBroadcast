import { fixtureFont } from './fonts';
import './globals.css';

export const metadata = {
  title: 'NBA Spurs Broadcast',
  description: 'Live NBA Spurs game broadcasts and schedules',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fixtureFont.className}>
        {children}
      </body>
    </html>
  );
} 