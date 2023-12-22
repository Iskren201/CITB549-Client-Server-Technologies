import { AboutCards } from "./AboutCards/AboutCards";

export const About = () => {
  return (
    <>
      {/* component */}
      <div className="py-6 bg-gray-800">
        <div className="container m-auto px-6 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 lg:flex-row-reverse">
            <div className="md:w-5/12 lg:w-5/12">
              <img
                src="https://vet101pets.com/wp-content/uploads/2021/12/vet-ge15f3c283_640.jpg"
                alt="image"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-2xl text-white font-bold md:text-4xl">
                Зоологичен уебсайт за обичателите на животни
              </h2>
              <p className="mt-6 text-lg font-bold text-white">
                Функционалност: Нашият уебсайт предоставя широка гама от ресурси
                за грижа за домашни любимци, включително статии за грижа,
                ръководства за обучение и съвети за отглеждане на различни
                видове животни. Също така предлагаме онлайн магазин за аксесоари
                и храни за домашни любимци.
                <br />
                <br />
                {/* Това не го гледай :Д работи */}
                Започване на проекта: Нашият уебсайт беше създаден през 2018
                година с цел да предостави лесен достъп до информация и продукти
                за обичателите на животни. Нашата страст към животните и
                желанието ни да подобрим живота им са основният двигател зад
                нашия проект.
              </p>
              <p className="mt-8 text-lg font-bold text-white">
                Бъдещи цели Планираме да разширим нашата платформа, като добавим
                интерактивни форуми и онлайн обучения за собствениците на
                домашни любимци. Също така целим да разширим нашата мрежа от
                доставчици на качествени храни и аксесоари за животни, за да
                улесним нашите потребители в техните покупки.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AboutCards />
      </div>
    </>
  );
};
