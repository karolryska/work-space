import Link from 'next/link';
import classNames from 'classnames/bind';
import { Color } from 'types/types';
import styles from './Logo.module.scss';

const cn = classNames.bind(styles);

interface Props {
    color: Color;
}

const Logo = ({ color }: Props) => {
    return (
        <Link href="/">
            <div className={cn('wrapper', color)}>
                <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={cn('top')}
                        d="M21.5413 20.8447H16.8124L14.1599 10.5563C14.0617 10.1901 13.892 9.43548 13.6509 8.29233C13.4187 7.14024 13.2847 6.36772 13.249 5.97476C13.1954 6.45703 13.0614 7.23402 12.8471 8.30572C12.6327 9.3685 12.4675 10.1276 12.3514 10.5831L9.71234 20.8447H4.99683L0 1.25925H4.08588L6.59099 11.9495C7.02861 13.9232 7.34565 15.6335 7.54213 17.0803C7.59572 16.5713 7.71628 15.7853 7.90383 14.7226C8.10031 13.6509 8.2834 12.8203 8.45308 12.2308L11.3065 1.25925H15.2316L18.085 12.2308C18.2101 12.722 18.3664 13.4722 18.5539 14.4814C18.7415 15.4906 18.8844 16.3569 18.9826 17.0803C19.0719 16.3837 19.2148 15.5174 19.4113 14.4814C19.6078 13.4365 19.7864 12.5925 19.9471 11.9495L22.4388 1.25925H26.5247L21.5413 20.8447Z"
                        fill="#343434"
                    />
                    <path
                        className={cn('top')}
                        d="M31.9234 13.3293C31.9234 14.8119 32.1646 15.9327 32.6468 16.6918C33.138 17.4509 33.9329 17.8305 35.0314 17.8305C36.121 17.8305 36.9024 17.4554 37.3758 16.7052C37.858 15.9461 38.0992 14.8208 38.0992 13.3293C38.0992 11.8468 37.858 10.7349 37.3758 9.99366C36.8935 9.2524 36.1031 8.88176 35.0046 8.88176C33.915 8.88176 33.1291 9.2524 32.6468 9.99366C32.1646 10.726 31.9234 11.8379 31.9234 13.3293ZM42.2788 13.3293C42.2788 15.7675 41.6358 17.6742 40.3497 19.0496C39.0637 20.4249 37.273 21.1126 34.9778 21.1126C33.5399 21.1126 32.2717 20.8 31.1733 20.1749C30.0748 19.5408 29.2308 18.6343 28.6413 17.4554C28.0519 16.2765 27.7572 14.9012 27.7572 13.3293C27.7572 10.8823 28.3957 8.98 29.6729 7.62251C30.95 6.26502 32.7451 5.58627 35.0582 5.58627C36.4961 5.58627 37.7642 5.89885 38.8627 6.52401C39.9612 7.14917 40.8052 8.04673 41.3946 9.21667C41.9841 10.3866 42.2788 11.7575 42.2788 13.3293Z"
                        fill="#343434"
                    />
                    <path
                        className={cn('top')}
                        d="M54.014 5.58627C54.5677 5.58627 55.0276 5.62646 55.3938 5.70683L55.0857 9.53818C54.7553 9.44888 54.3534 9.40422 53.88 9.40422C52.5761 9.40422 51.558 9.73913 50.8257 10.4089C50.1023 11.0788 49.7406 12.0165 49.7406 13.2222V20.8447H45.6547V5.86759H48.7492L49.3521 8.3861H49.553C50.0174 7.5466 50.6426 6.87232 51.4285 6.36326C52.2233 5.84526 53.0852 5.58627 54.014 5.58627Z"
                        fill="#343434"
                    />
                    <path
                        className={cn('top')}
                        d="M62.0384 12.6997L63.8201 10.4223L68.0131 5.86759H72.6215L66.6735 12.3648L72.9832 20.8447H68.2677L63.9541 14.7761L62.1991 16.1828V20.8447H58.1133V0H62.1991V9.29705L61.9848 12.6997H62.0384Z"
                        fill="#343434"
                    />
                    <path
                        className={cn('bottom')}
                        d="M40.038 39.6312C40.038 39.0954 39.9487 38.6176 39.7701 38.1978C39.5915 37.7781 39.2968 37.403 38.886 37.0725C38.4841 36.7332 37.9393 36.4206 37.2516 36.1348C36.5729 35.8401 35.7244 35.5498 34.7063 35.264C33.7328 34.9872 32.8532 34.6835 32.0672 34.3531C31.2813 34.0226 30.607 33.6431 30.0444 33.2144C29.4907 32.7857 29.0665 32.2856 28.7717 31.714C28.477 31.1335 28.3297 30.4592 28.3297 29.6912C28.3297 28.941 28.4904 28.2578 28.8119 27.6415C29.1334 27.0253 29.5844 26.4939 30.165 26.0474C30.7544 25.6008 31.4465 25.257 32.2414 25.0159C33.0452 24.7747 33.9249 24.6542 34.8805 24.6542C36.2469 24.6542 37.4258 24.9131 38.4171 25.4311C39.4174 25.9491 40.1899 26.6502 40.7347 27.5344C41.2884 28.4096 41.5652 29.392 41.5652 30.4816H39.9175C39.9175 29.6331 39.7165 28.8785 39.3146 28.2176C38.9217 27.5478 38.3501 27.0253 37.5999 26.6502C36.8587 26.2662 35.9522 26.0742 34.8805 26.0742C33.8088 26.0742 32.9067 26.2394 32.1744 26.5698C31.451 26.8913 30.9018 27.3245 30.5267 27.8693C30.1605 28.4051 29.9774 29.0035 29.9774 29.6644C29.9774 30.1288 30.0667 30.5575 30.2453 30.9504C30.424 31.3345 30.7142 31.6962 31.1161 32.0355C31.5269 32.366 32.0672 32.6786 32.737 32.9733C33.4069 33.2591 34.233 33.5314 35.2154 33.7904C36.2514 34.0762 37.1712 34.3933 37.975 34.7416C38.7788 35.0899 39.4575 35.4918 40.0113 35.9473C40.565 36.3938 40.9847 36.9163 41.2705 37.5146C41.5563 38.113 41.6992 38.8096 41.6992 39.6045C41.6992 40.3993 41.5295 41.1138 41.1901 41.7479C40.8597 42.373 40.3908 42.9044 39.7835 43.342C39.1851 43.7796 38.4751 44.1145 37.6535 44.3467C36.8408 44.579 35.9522 44.6951 34.9876 44.6951C34.1213 44.6951 33.2595 44.5834 32.4021 44.3601C31.5448 44.1369 30.7589 43.793 30.0444 43.3286C29.3388 42.8553 28.7717 42.248 28.3431 41.5067C27.9233 40.7655 27.7134 39.8813 27.7134 38.8543H29.3478C29.3478 39.6759 29.513 40.368 29.8434 40.9307C30.1739 41.4933 30.6115 41.9488 31.1563 42.2971C31.71 42.6454 32.3173 42.8999 32.9782 43.0607C33.648 43.2125 34.3178 43.2884 34.9876 43.2884C36.0147 43.2884 36.9033 43.1366 37.6535 42.833C38.4126 42.5293 38.9976 42.1051 39.4084 41.5603C39.8282 41.0066 40.038 40.3636 40.038 39.6312Z"
                        fill="#343434"
                    />
                    <path
                        className={cn('bottom')}
                        d="M46.4683 32.7187V50H44.8607V29.9323H46.3611L46.4683 32.7187ZM56.5423 37.0458V37.3271C56.5423 38.4077 56.4173 39.399 56.1672 40.3011C55.9172 41.2031 55.5555 41.9845 55.0821 42.6454C54.6177 43.2974 54.0417 43.802 53.354 44.1592C52.6663 44.5164 51.8849 44.6951 51.0096 44.6951C50.1433 44.6951 49.3708 44.5611 48.6921 44.2932C48.0133 44.0252 47.4284 43.6457 46.9372 43.1545C46.4549 42.6543 46.0664 42.0738 45.7717 41.413C45.4859 40.7431 45.2849 40.0108 45.1688 39.216V35.5052C45.3028 34.6299 45.5216 33.8351 45.8253 33.1206C46.1289 32.4062 46.5174 31.7899 46.9907 31.2719C47.473 30.7539 48.0446 30.3565 48.7055 30.0797C49.3664 29.8028 50.121 29.6644 50.9694 29.6644C51.8536 29.6644 52.6395 29.8385 53.3272 30.1868C54.0238 30.5262 54.6088 31.0219 55.0821 31.6738C55.5644 32.3168 55.9261 33.0938 56.1672 34.0048C56.4173 34.9068 56.5423 35.9205 56.5423 37.0458ZM54.9348 37.3271V37.0458C54.9348 36.1973 54.8455 35.4114 54.6668 34.688C54.4971 33.9646 54.2337 33.335 53.8764 32.7991C53.5281 32.2543 53.0816 31.8301 52.5368 31.5265C52.001 31.2228 51.3624 31.071 50.6211 31.071C49.8531 31.071 49.1967 31.2005 48.6519 31.4595C48.116 31.7095 47.6695 32.0445 47.3123 32.4642C46.955 32.875 46.6737 33.326 46.4683 33.8172C46.2629 34.3084 46.111 34.7907 46.0128 35.264V39.5375C46.1825 40.2162 46.4549 40.8458 46.83 41.4263C47.2051 41.9979 47.7052 42.4579 48.3304 42.8062C48.9645 43.1455 49.737 43.3152 50.6479 43.3152C51.3803 43.3152 52.0144 43.1634 52.5502 42.8598C53.0861 42.5561 53.5281 42.1319 53.8764 41.5871C54.2337 41.0423 54.4971 40.4082 54.6668 39.6848C54.8455 38.9614 54.9348 38.1755 54.9348 37.3271Z"
                        fill="#343434"
                    />
                    <path
                        className={cn('bottom')}
                        d="M68.9205 41.8282V34.3531C68.9205 33.6654 68.7776 33.0715 68.4918 32.5714C68.2061 32.0713 67.7863 31.6872 67.2326 31.4193C66.6789 31.1514 65.9957 31.0174 65.183 31.0174C64.4328 31.0174 63.7629 31.1514 63.1735 31.4193C62.593 31.6783 62.1331 32.0311 61.7937 32.4776C61.4632 32.9152 61.298 33.402 61.298 33.9378L59.6905 33.9244C59.6905 33.3796 59.8244 32.8527 60.0923 32.3436C60.3603 31.8346 60.7398 31.3791 61.231 30.9772C61.7222 30.5753 62.3072 30.2583 62.986 30.0261C63.6736 29.7849 64.4283 29.6644 65.2499 29.6644C66.2859 29.6644 67.1969 29.8385 67.9828 30.1868C68.7776 30.5351 69.3983 31.0576 69.8449 31.7542C70.2914 32.4508 70.5147 33.326 70.5147 34.3799V41.3862C70.5147 41.8863 70.5504 42.4043 70.6219 42.9401C70.7022 43.476 70.8139 43.9181 70.9568 44.2664V44.4271H69.2554C69.1483 44.1056 69.0634 43.7037 69.0009 43.2215C68.9473 42.7303 68.9205 42.2659 68.9205 41.8282ZM69.2956 35.9874L69.3224 37.2199H66.1743C65.3526 37.2199 64.6158 37.2958 63.9639 37.4476C63.3209 37.5905 62.7761 37.8049 62.3295 38.0907C61.883 38.3675 61.5391 38.7024 61.298 39.0954C61.0658 39.4883 60.9497 39.9349 60.9497 40.435C60.9497 40.953 61.0792 41.4264 61.3382 41.855C61.6061 42.2837 61.9812 42.6276 62.4635 42.8866C62.9547 43.1366 63.5352 43.2616 64.205 43.2616C65.0981 43.2616 65.884 43.0964 66.5628 42.766C67.2505 42.4355 67.8176 42.0024 68.2641 41.4665C68.7107 40.9307 69.0098 40.3457 69.1617 39.7116L69.8583 40.636C69.7422 41.0825 69.5278 41.5425 69.2152 42.0158C68.9116 42.4802 68.5142 42.9178 68.023 43.3286C67.5318 43.7305 66.9513 44.061 66.2814 44.32C65.6206 44.57 64.8704 44.6951 64.0309 44.6951C63.0842 44.6951 62.2581 44.5164 61.5525 44.1592C60.8559 43.802 60.3112 43.3152 59.9182 42.699C59.5342 42.0738 59.3422 41.3683 59.3422 40.5824C59.3422 39.8679 59.494 39.2294 59.7976 38.6667C60.1013 38.0951 60.5389 37.6129 61.1105 37.2199C61.691 36.818 62.3876 36.5144 63.2003 36.309C64.0219 36.0946 64.9418 35.9874 65.9599 35.9874H69.2956Z"
                        fill="#343434"
                    />
                    <path
                        className={cn('bottom')}
                        d="M80.16 43.3152C80.8388 43.3152 81.4729 43.1902 82.0623 42.9401C82.6607 42.6811 83.1519 42.3016 83.5359 41.8014C83.9289 41.2924 84.1521 40.6717 84.2057 39.9394H85.7329C85.6883 40.8592 85.4069 41.6809 84.8889 42.4043C84.3799 43.1188 83.7101 43.6814 82.8795 44.0922C82.0579 44.4941 81.1514 44.6951 80.16 44.6951C79.1509 44.6951 78.2578 44.512 77.4808 44.1458C76.7127 43.7796 76.0697 43.2706 75.5517 42.6186C75.0337 41.9577 74.6408 41.1897 74.3728 40.3145C74.1138 39.4303 73.9843 38.4792 73.9843 37.461V36.8984C73.9843 35.8803 74.1138 34.9336 74.3728 34.0584C74.6408 33.1742 75.0337 32.4062 75.5517 31.7542C76.0697 31.0933 76.7127 30.5798 77.4808 30.2136C78.2488 29.8475 79.1375 29.6644 80.1466 29.6644C81.1826 29.6644 82.1114 29.8743 82.9331 30.294C83.7637 30.7138 84.4245 31.3077 84.9157 32.0757C85.4159 32.8438 85.6883 33.7547 85.7329 34.8086H84.2057C84.1611 34.0316 83.9557 33.3618 83.5895 32.7991C83.2233 32.2365 82.7411 31.8033 82.1427 31.4997C81.5443 31.196 80.879 31.0442 80.1466 31.0442C79.325 31.0442 78.6239 31.205 78.0434 31.5265C77.4629 31.839 76.9896 32.2722 76.6234 32.8259C76.2662 33.3707 76.0027 33.9959 75.833 34.7014C75.6633 35.398 75.5785 36.1303 75.5785 36.8984V37.461C75.5785 38.238 75.6589 38.9793 75.8196 39.6848C75.9893 40.3814 76.2528 41.0021 76.61 41.5469C76.9762 42.0917 77.4495 42.5249 78.03 42.8464C78.6195 43.1589 79.3295 43.3152 80.16 43.3152Z"
                        fill="#343434"
                    />
                    <path
                        className={cn('bottom')}
                        d="M94.5611 44.6951C93.6144 44.6951 92.7437 44.5209 91.9488 44.1726C91.1629 43.8243 90.4752 43.3331 89.8858 42.699C89.3053 42.0649 88.8543 41.3147 88.5327 40.4484C88.2202 39.5732 88.0639 38.6176 88.0639 37.5816V37.0056C88.0639 35.8892 88.2291 34.88 88.5595 33.978C88.89 33.076 89.3455 32.3035 89.926 31.6604C90.5065 31.0174 91.1674 30.5262 91.9086 30.1868C92.6588 29.8385 93.4447 29.6644 94.2664 29.6644C95.1863 29.6644 96.0034 29.8296 96.7179 30.16C97.4324 30.4816 98.0307 30.9415 98.513 31.5399C99.0042 32.1293 99.3748 32.8304 99.6249 33.6431C99.875 34.4469 100 35.3355 100 36.309V37.2869H89.0284V35.9205H98.4058V35.7329C98.388 34.9202 98.2228 34.1611 97.9102 33.4555C97.6065 32.7411 97.151 32.1606 96.5437 31.714C95.9364 31.2675 95.1773 31.0442 94.2664 31.0442C93.5876 31.0442 92.9625 31.1871 92.3909 31.4729C91.8282 31.7587 91.3415 32.1695 90.9307 32.7053C90.5288 33.2323 90.2162 33.8619 89.9929 34.5942C89.7786 35.3176 89.6714 36.1214 89.6714 37.0056V37.5816C89.6714 38.3854 89.7875 39.1356 90.0197 39.8322C90.2609 40.5199 90.6002 41.1272 91.0379 41.6541C91.4844 42.181 92.0113 42.5918 92.6186 42.8866C93.2259 43.1813 93.8957 43.3286 94.6281 43.3286C95.4854 43.3286 96.2446 43.1723 96.9054 42.8598C97.5663 42.5382 98.1602 42.0337 98.6872 41.346L99.6919 42.123C99.3793 42.5874 98.9863 43.016 98.513 43.409C98.0486 43.802 97.4904 44.1145 96.8385 44.3467C96.1865 44.579 95.4274 44.6951 94.5611 44.6951Z"
                        fill="#343434"
                    />
                </svg>
            </div>
        </Link>
    );
};

export default Logo;