import React, { useState, useEffect, useRef } from 'react';
import { SecundHome } from '../SecundHome/SecundHome';

const Slider = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'https://thefourpawshotel.com/wp-content/uploads/2015/01/cool-dog.jpg',
            heading: 'Принцът на Щастливите Лапи',
            text: "Макс е безкрайно енергичен и обича да бъде в центъра на вниманието. Той е вярен компаньон, който никога не се отказва от игра и приключения.",
        },
        {
            image: 'https://wamu.org/wp-content/uploads/2017/05/unimpressed-cat-1500x998.jpg',
            heading: 'Грета - Владетелката на Недейното Уморение',
            text: "Грета е кралската владетелка на дивата и непокорна независимост. С нейните внушителни жълти очи тя вижда дълбоко в душите на всички, които я обикалят, и не се отказва да изрази своето недоволство.",
        },
        {
            image: 'https://cdn.create.vista.com/api/media/small/375595744/stock-photo-head-portrait-pig-natural-green-background-outdoors',
            heading: 'Борис - Шефът на Зелената Ферма',
            text: 'Борис е невероятният главен кормилар на зелената ферма, където владее с весело настроение и гурме вкусове. С неговата спокойна усмивка и благороден характер той е вдъхновение за всички жители на фермата.',
        },
    ];

    useEffect(() => {
        const slider = sliderRef.current;

        const interval = setInterval(() => {
            const max = slides.length - 1;
            if (currentSlide === max) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }

            const maxScroll = slider.scrollWidth - slider.clientWidth;
            const leftScroll = slider.clientWidth * currentSlide;

            if (maxScroll === slider.scrollLeft) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollTo({ left: leftScroll, behavior: 'smooth' });
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center">
            <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider" ref={sliderRef}>
                <div className="bg-gray-800 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                    <h2 className="text-4xl max-w-md">{slides[currentSlide].heading}</h2>
                    <p className="max-w-md">{slides[currentSlide].text}</p>
                    <img
                        className="object-cover h-1/2 w-1/2 mt-4"
                        src={slides[currentSlide].image}
                        alt="Pet Paradise"
                    />
                </div>
            </div>
        </div>
    );
};

export const Home = () => {
    return (
        <>
            {/* component */}
            <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center">
                <Slider />
            </div>
            <SecundHome />
        </>
    );
};
