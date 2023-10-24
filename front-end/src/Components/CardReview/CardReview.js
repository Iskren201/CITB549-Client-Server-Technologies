import React from 'react';

export const CardReview = () => {
    const data = [
        {
            name: 'Tania Andrew',
            occupation: 'Dr. Andrew',
            review:
                'Професионален и отдаден ветеринар с изключителни умения за лечение.',
            imageUrl:
                'https://www.popartyou.com/cdn/shop/products/prev_062d063a-9961-4b0e-b70e-724a72990b49_1024x1024@2x.jpg?v=1625059914',
        },
        {
            name: 'John Doe',
            occupation: 'Dr. Doe',
            review:
                'Dr. Doe е внимателен и компетентен ветеринар с отлични умения.',
            imageUrl:
                'https://cdcssl.ibsrv.net/ibimg/smb/449x299_80/webmgr/0d/l/u/1q.jpg.webp',
        },
        {
            name: 'Michael Smith',
            occupation: 'Dr. Michael',
            review:
                'Д-р Майкъл Смит е състрадателен и умел ветеринар, който грижовно се отнася към своите пациенти.',
            imageUrl:
                'https://vetstarclinic.com/images/pr-1_1_b.jpg',
        },
        {
            name: 'Michael Smith',
            occupation: 'Dr. Michael',
            review:
                'Д-р Майкъл Смит е състрадателен и умел ветеринар, който грижовно се отнася към своите пациенти.',
            imageUrl:
                'https://vetstarclinic.com/images/pr-1_1_b.jpg',
        },
    ];

    return (
        <div className="flex items-center justify-between pl-8">
            <div className="flex justify-around">
                {data.map((item, index) => (
                    <div key={index} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-200 shadow-none">
                        <div className="relative mx-0 mt-4 pl-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img src={item.imageUrl} alt={item.name} className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center" />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-white">
                                        {item.name}
                                    </h5>
                                    <div className="5 flex items-center gap-0">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-700"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased text-white">
                                    {item.occupation}
                                </p>
                            </div>
                        </div>
                        <div className="mb-6 p-0 text-white pl-4">
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                {item.review}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
