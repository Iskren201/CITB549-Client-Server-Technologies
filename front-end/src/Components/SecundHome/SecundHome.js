import { CardServices } from "../CardServices/CardServices";
import { DownloadFile } from "../DownloadFile/DownloadFile";

export const SecundHome = () => {
    return <div className="flex items-center  bg-gray-800 justify-center">
        <div className="text-center text-2xl ">
            <h1 className="text-white justify-center justify-items-center mb-6">От тук може да си свалите
                нащите документи (Privacy Policy)и всички услуги който ние предалгаме</h1>

            <DownloadFile />
            <h1 className="text-white justify-center justify-items-center mb-6">Това са едни от най популюрните планове за домашни любимци</h1>
            <CardServices />
        </div>

    </div>;

};
