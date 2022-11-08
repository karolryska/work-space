import Link from 'components/link/Link';
import Section from 'components/section/Section';
import ideaImg from 'assets/images/homepage/idea.webp';
import offeHorizontalImg from 'assets/images/homepage/offer_horizontal.webp';
import offerVerticalImg from 'assets/images/homepage/offer_vertical.webp';
import contactImg from 'assets/images/homepage/contact.webp';
import styles from '../styles/pages/index.module.scss';

const HomePage = () => {
    return (
        <>
            <section className={styles.hero}>
                <h1 className={styles.title}>
                    <span>Przestrzeń,</span>
                    <span>
                        <span className={styles.light}>w której </span>
                        <span>praca</span>
                    </span>
                    <span>
                        <span className={styles.light}>to </span>
                        <span>przyjemność.</span>
                    </span>
                </h1>
                <p className={styles.body}>
                    <span>Work Space to przestrzenie zaprojektowane z myślą o komforcie.</span>
                    <span>Tworzymy miejsca, w których będziesz chciał pracować.</span>
                </p>
            </section>
            <Section
                variant="row-reverse"
                title="pomysł"
                body={
                    <>
                        <span>
                            Home office stał się w ostatnim latach czymś zupełnie powszechnym.
                            Jednak nie każdy jest fanem takiego rozwiązania, nie każdy też może
                            sobie na nie pozwolić.
                        </span>
                        <span>
                            Właśnie dla takich osób powstało Work Space. Stworzyliśmy miejsca, które
                            są zaprojektowane pod kątem pracy i chcielibyśmy Cię do nich zaprosić.
                        </span>
                    </>
                }
                image={ideaImg}
            />
            <Section
                variant="column"
                title="oferta"
                body={
                    <>
                        <span>
                            Mokotów, Saska Kępa, Śródmieście, a może Wola? W tym momencie posiadamy
                            4 biura w Warszawie.
                        </span>
                        <span>
                            Lubimy kameralne kamienice, ale doceniamy równiez przestrzenie w
                            nowoczesnych biurowcach. Chcemy żeby nasze biura trafiły do jak
                            największej ilości osób.
                        </span>
                        <Link href="/">Sprawdź naszą ofertę</Link>
                    </>
                }
                image={offeHorizontalImg}
                additionalImage={offerVerticalImg}
            />
            <Section
                variant="row-reverse"
                title="kontakt"
                body={
                    <>
                        <span>
                            Czy wasze biura są pieskolubne? Czy są otwarte 24/7? Czy można wynająć
                            biurko tylko na jeden dzień? Czy jest miejsce do przeprowadzenia
                            spotkań?
                        </span>
                        <span>Cztery razy tak.</span>
                        <span>
                            To tylko kilka z pytań, które dostajemy regularnie. Jeśli chcesz
                            dowiedzieć się więcej lub dopytać o szczególny, możesz skontaktować się
                            z nami mailowo lub telefonicznie.
                        </span>
                        <Link href="/">Skontaktuj się z nami</Link>
                    </>
                }
                image={contactImg}
            />
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            color: 'light',
        },
    };
};

export default HomePage;
