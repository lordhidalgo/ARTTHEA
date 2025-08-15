import "./globals.css";
import Header from "../components/HeaderComponent/Header.tsx";
import Footer from "../components/FooterComponent/Footer.tsx";

export const metadata = {
  title: "ARTTHÉA",
  description: "Una ventana moderna al arte clásico y contemporáneo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />{" "}
        {/* Agrega el Footer aquí si quieres que esté en todas las páginas */}
      </body>
    </html>
  );
}
