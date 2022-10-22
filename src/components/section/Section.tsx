import React from 'react';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames/bind';
import SectionContent from 'components/sectionContent/SectionContent';
import styles from './Section.module.scss';

const cn = classNames.bind(styles);

interface Props {
    variant: 'row' | 'row-reverse' | 'column';
    title: string;
    body: React.ReactNode;
    image: StaticImageData;
    additionalImage?: StaticImageData;
}

const Section = ({ variant, title, body, image, additionalImage }: Props) => {
    return (
        <section className={cn('wrapper', variant, { row: variant.includes('row') })}>
            <SectionContent title={title} body={body} />
            <div className={cn('image')}>
                <Image src={image} layout="fill" objectFit="cover" />
            </div>
            {variant === 'column' && additionalImage && (
                <div className={cn('additional-image')}>
                    <Image src={additionalImage} layout="fill" objectFit="cover" />
                </div>
            )}
        </section>
    );
};

export default Section;
