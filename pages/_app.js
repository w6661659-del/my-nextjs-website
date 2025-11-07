import "../styles/global.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
          <ThemeProvider
      attribute="class"
      defaultTheme="light"   // 👈 always start with light
      enableSystem={false}   // 👈 ignore OS preference
      disableTransitionOnChange
    ></ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
