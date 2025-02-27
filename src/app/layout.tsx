import { ClaimProvider } from "./context/ClaimContext";
import "../app/globals.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white transition-colors duration-300">
        <ClaimProvider>{children}</ClaimProvider>
      </body>
    </html>
  );
}