import "@/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "@/components/Navbar";
import Head from "next/head";
import MobileNavbar from "@/components/index_page_components/MobileNavbar";
import { Show,Hide } from "@chakra-ui/react";
import LoadingBar from "react-top-loading-bar";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import MusicPlayer from "@/components/MusicPlayer";
import Loader from "@/components/Loader";
import Footer from "@/components/index_page_components/Footer";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;  // Ensure router is available

    const handleStart = () => {
      setProgress(30);
      setLoading(true); // Show full-screen loader
    };
    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => setLoading(false), 500); // Hide loader after 500ms
    };
    const handleError = () => {
      setProgress(100);
      setTimeout(() => setLoading(false), 500);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);
    setTimeout(() => setLoading(false), 1000); // Adjust delay for smoother UX
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [router]);

  return(
    <>
    <Head>
          <title>VK Jyot</title>
          <meta name="description" content="Jyot official webiste" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" /> */}
        </Head>
        <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
    <ChakraProvider>
    {loading && <Loader />}
    <Show below="lg">
        <MobileNavbar />
      </Show>

      {/* Show Navbar only on large screens */}
      <Hide below="lg">
        <Navbar />
      </Hide>
      <br/><br/><br/>
      <Hide below="md">
        <MusicPlayer />
        </Hide>
<Component {...pageProps} />

<Footer />

    </ChakraProvider>

    </>
  );
}

// Podcasts
// importance-of-human-values-in-life
// vasudhaiva-kutumbakam