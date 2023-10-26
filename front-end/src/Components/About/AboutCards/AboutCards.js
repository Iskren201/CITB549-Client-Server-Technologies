

export const AboutCards = () => {


    return (
        <>
            <>
                {/* component */}
                <div className=" p-6 bg-gray-800">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <img
                                    src="https://assets-global.website-files.com/5e1d030dc30fd310a1970e08/618092c1b536a43a3b770c78_Group-Professional-edit.jpg"
                                    alt="image"
                                    loading="lazy"
                                    width=""
                                    height=""
                                />
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-gray-200 font-bold md:text-4xl">
                                    Ние сме един задружен екип който има страст към животните и иска да им помага
                                </h2>
                                <p className="mt-6 text-gray-200">

                                    Нашият работен процес е заложен, за да осигури най-добрите грижи за всяко животно. След оценка и диагностика създаваме персонализиран план за лечение. Нашите ветеринари са отдадени професионалисти,
                                    които се грижат за всяко животно с максимално внимание. Споделяме информация със собствениците, за да вземем най-доброто решение за техните любимци.
                                </p>
                                <p className="mt-4 text-gray-200">
                                    {" "}
                                    С нашата съвременна оборудвана клиника и екип от специалисти сме готови да се справим с всякакви медицински предизвикателства, които вашите домашни любим
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
}