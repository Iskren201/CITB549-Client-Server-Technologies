import React from "react";

export const DownloadFile = () => {

    return (
        <>
            <div className="mb-4 border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200">
                <a href="Test.pdf" download='Test.pdf' >Download</a>
            </div>

        </>
    );
}