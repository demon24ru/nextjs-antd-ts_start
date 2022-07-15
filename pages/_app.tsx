import App from 'next/app'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PreLoaderScreen from "../components/PreLoader/PreLoaderScreen";
import LoaderRoute from "../components/PreLoader/LoaderRoute";
import '../styles/global.less'


function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingRoute, setLoadingRoute] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setLoading(false);
        // Обработка начала загрузки
        router.events.on("routeChangeStart", () => setLoadingRoute(true));
        // Обработка окончания загрузки
        router.events.on("routeChangeComplete", () => setLoadingRoute(false));
    }, []);

    return (
        <>
            { loading && <PreLoaderScreen /> }
            { loadingRoute && <LoaderRoute /> }
            { !loading && !loadingRoute && <Component {...pageProps} /> }
        </>
    );
}

export default MyApp;
