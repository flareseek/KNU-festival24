import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-light-react';
import loadingAnimation from '../../assets/loading.json';
import { containerStyle, lottieStyle, textStyle, responsiveTextStyle } from './.css.ts';

const loadingTexts = [
    "페이지를 요리하는 중...",
    "비트를 가져오는 중...",
    "픽셀을 정렬하는 중...",
    "아이디어를 부화하는 중...",
    "버그를 쫓아내는 중...",
];

export function Loading() {
    // 랜덤으로 텍스트를 고르는 함수
    const getRandomText = () => loadingTexts[Math.floor(Math.random() * loadingTexts.length)];

    const [text, setText] = useState(getRandomText());
    const containerRef = useRef(null);

    useEffect(() => {
        const dotInterval = setInterval(() => {
            setText((prevText) => {
                const baseText = prevText.replace(/\.+$/, '');
                const dots = prevText.match(/\.+$/)?.[0] || '';
                return baseText + (dots.length >= 3 ? '' : dots + '.');
            });
        }, 500);

        return () => {
            clearInterval(dotInterval); // 클린업
        };
    }, []);

    return (
        <div ref={containerRef} className={containerStyle}>
            <Lottie animationData={loadingAnimation} className={lottieStyle} />
            <p className={`${textStyle} ${responsiveTextStyle}`}>
                {text}
            </p>
        </div>
    );
}
