import styles from './SectionContent.module.scss';

interface Props {
    title: string;
    body: React.ReactNode;
}

const SectionContent = ({ title, body }: Props) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{body}</p>
        </div>
    );
};

export default SectionContent;
