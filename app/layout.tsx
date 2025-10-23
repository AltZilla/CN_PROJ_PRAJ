import type { Metadata } from "next";
import { ThemeProvider } from './providers/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar';
import "./index.css";
import "./App.css";
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
  title: "Civic Issue Tracker",
  description: "Track and report civic issues in your community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>
          <AuthProvider>
            <ThemeProvider>
              <Navbar />
              <div className="page-container">
                {children}
              </div>
            </ThemeProvider>
          </AuthProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
