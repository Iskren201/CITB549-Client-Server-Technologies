import React from "react";
import { Link } from "react-router-dom";

export const CardServices = () => {


    return (
        <>

            <div className="flex items-center justify-center flex-col bg-gray-600 min-h-screen rounded-full mb-6">
                <div className="bg-[#F4F5FA] p-10 rounded-3xl">
                    <div className="flex flex-col justify-center items-center text-center ">
                        <div className="max-w-sm font-bold font-sans">
                            Топ 3 планове за вашите любимци
                        </div>
                        <div className="font-light max-w-lg mt-5 text-sm">
                            При абонирането вие получавате всеки месец обновяване на всички характеристики показатели и може да ги следите през нащето приложениеь
                        </div>
                    </div>
                    {/* subscriptions */}
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10 ">
                        <div className="bg-[#FFFBEC] rounded-xl ">
                            <div className="items-center flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto ">
                                <img
                                    src="https://www.jamiesale-cartoonist.com/wp-content/uploads/dog-12.png"
                                    className="w-16  rounded-2xl"
                                />
                                <div className="mt-3 font-semibold text-lg">Кучета до 5кг</div>
                                <div className="text-sm font-light">от 1 до 5кг</div>
                                <div className="my-4">
                                    <span className="font-bold text-base">29,-</span>
                                    <span className="font-light text-sm">/month</span>
                                </div>
                                <Link to="/error" className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                                    Buy
                                </Link>

                            </div>
                        </div>
                        <div className="bg-[#F9ECFF] rounded-xl rounded-full">
                            <div className="items-center flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                                <img
                                    src="https://www.jamiesale-cartoonist.com/wp-content/uploads/dog-12.png"
                                    className="w-16  rounded-3xl"
                                />
                                <div className="mt-3 font-semibold text-lg">Кучета до 10км</div>
                                <div className="text-sm font-light w-60 md:w-auto">
                                    от 5 до 10кг
                                </div>
                                <div className="my-4">
                                    <span className="font-bold text-base">59,-</span>
                                    <span className="font-light text-sm">/month</span>
                                </div>
                                <Link to="/error" className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                                    Buy
                                </Link>
                            </div>
                        </div>
                        <div className="bg-[#ECEEFF] rounded-xl ">
                            <div className="items-center flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                                <img
                                    src="https://www.jamiesale-cartoonist.com/wp-content/uploads/dog-12.png"
                                    className="w-16  rounded-3xl"
                                />
                                <div className="mt-3 font-semibold text-lg">Кучета над 15кг</div>
                                <div className="text-sm font-light w-60 md:w-auto">
                                    Кучета над 15кг
                                </div>
                                <div className="my-4">
                                    <span className="font-bold text-base">99,-</span>
                                    <span className="font-light text-sm">/month</span>
                                </div>
                                <Link to="/error" className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                                    Buy
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/error" className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">
                            See all subscriptions
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
}