import { DeviceSizeContextProvider } from 'context/DeviceSizeContext';
import Layout from 'components/layout/Layout';
import type { AppProps } from 'next/app';
import { Color } from 'types/types';
import '../styles/main.scss';

interface CustomPageProps extends AppProps {
    color: Color;
}

interface CustomAppProps extends AppProps {
    pageProps: CustomPageProps;
}

function MyApp({ Component, pageProps }: CustomAppProps) {
    return (
        <DeviceSizeContextProvider>
            <Layout color={pageProps.color}>
                <Component {...pageProps} />
            </Layout>
        </DeviceSizeContextProvider>
    );
}

export default MyApp;
