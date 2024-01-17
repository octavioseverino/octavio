import './ui/global.css';
import {montserrat} from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        Esto es parte del Layout
        {children}
        <footer> Hecho con amor por Bebo</footer>
      </body>
    </html>
  );
}
