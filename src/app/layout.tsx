import "@src/styles/global.css";
import MuiThemeProvider from "@src/theme/MuiThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MuiThemeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </MuiThemeProvider>
  );
}
