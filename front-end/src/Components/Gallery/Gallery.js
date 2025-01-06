import React from "react";

const images = [
  "https://www.pawss.store/cdn/shop/files/Frenchbulldogdogartwatercolorpetportrait_1024x1024@2x.jpg?v=1689215488",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyR2gbFPlepeZ9Mjq2MBw_k9cKC1jZmCeyw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYqg-DFIcTfgmPX4ed-Ty2As6AIFK_z2pPA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_QOoXVDWYZiF3wSlwY37LI9hWO6HDZCeow&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkUwSeuJjmgRVSOJC210Pq5a4a56liIltfg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cUYxIXBY8GXNsCJtaKo7BgMAbKDOr3xtaA&usqp=CAU",
];

export const Gallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-700 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Това е галерията на нашата Клиника
            </h1>
            <p className="lg:w-2/3 mx-auto text-white leading-relaxed text-base">
              Представяме ви нашата вълнуваща галерия с домашни любимци, които
              са получили професионално внимание и грижи в нашата клиника.
              Разгледайте тези прекрасни снимки, за да видите как поддържаме
              здравето и щастието на вашите любимци.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {images.map((image, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <div
                    className="px-8 h-72 w-96 rounded-full border-gray-200 overflow-hidden"
                    style={{ maxWidth: "100%" }}
                  >
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      src={image}
                      alt={`Gallery Image ${index}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
