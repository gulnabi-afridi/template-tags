import "@/styles/globals.css";
import { TemplateContextProvider } from "@/context/context";

export default function App({ Component, pageProps }) {
  return (
    <TemplateContextProvider>
      <Component {...pageProps} />
    </TemplateContextProvider>
  );
}
