import React from 'react';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames/bind';
import SectionContent from 'components/sectionContent/SectionContent';
import styles from './Section.module.scss';

const cn = classNames.bind(styles);

interface Props {
    title: string;
    body: React.ReactNode;
    image: StaticImageData;
    reverse?: boolean;
}

const Section = ({ title, body, image, reverse }: Props) => {
    return (
        <section className={cn('wrapper', { reverse })}>
            <SectionContent title={title} body={body} />
            <div className={cn('image')}>
                <Image src={image} layout="fill" objectFit="cover" />
            </div>
        </section>
    );
};

export default Section;
