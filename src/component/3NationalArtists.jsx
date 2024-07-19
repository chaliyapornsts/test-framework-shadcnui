import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import data from './data.js';
import "./3NationalArtists.css"

const AZAsciis = Array.from({ length: 26 }, (_, index) => index + 65);

const NationalArtists3 = () => {
    const [selectedArtist, setSelectedArtist] = useState("");

    const filteredData = selectedArtist
        ? data.filter(item => item.artist.startsWith(selectedArtist))
        : data;

    const groupedData = filteredData.reduce((acc, item) => {
        const firstChar = item.artist.charAt(0).toUpperCase();
        if (!acc[firstChar]) {
            acc[firstChar] = [];
        }
        acc[firstChar].push(item);
        return acc;
    }, {});

    return (
        <div>
            <div className="mt-6 flex justify-center space-x-4">
                <Button
                    className={`text-gray-600 font-bold text-sm hover:text-orange-500 px-1 py-1 items-start bg-white hover:bg-white ${selectedArtist === "" ? 'text-orange-500' : ''}`}
                    onClick={() => setSelectedArtist("")}
                >
                    All
                </Button>
                <span className="text-gray-600">—</span>
                {AZAsciis.map(ascii => (
                    <Button
                        key={ascii}
                        className={`text-gray-600 font-bold text-sm hover:text-orange-500 px-1 py-1 items-start bg-white hover:bg-white ${selectedArtist === String.fromCharCode(ascii) ? 'text-orange-500' : ''}`}
                        onClick={() => setSelectedArtist(String.fromCharCode(ascii))}
                    >
                        {String.fromCharCode(ascii)}
                    </Button>
                ))}
            </div>
            <div className="flex flex-wrap xl:max-w-screen-2xl mx-auto">
                {Object.keys(groupedData).map(firstChar => (
                    <div key={firstChar} className="w-full">
                        <div className="pt-10 pl-10">
                            <div className="flex items-end">
                                <h3 className='text-3xl'>{firstChar}</h3>
                                <p className='text-sm'>({groupedData[firstChar].length} Artist{groupedData[firstChar].length > 1 ? 's' : ''})</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            {groupedData[firstChar].map(item => (
                                <Link key={item.id} className="p-5 w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer" to={`/profile/${item.id}`}>
                                <div className="h-0 pb-[100%] relative">
                                    <div className="spinner-background absolute top-0 bottom-0 left-0 right-0"></div>
                                    <img className="spinner mx-auto object-cover w-full h-full absolute top-0 bottom-0 left-0 right-0 rounded-full transition-all" src={item.imgSrc} alt={item.artist} />
                                </div>
                                <p className="text-center pt-5 font-light"><b>{item.artist}</b></p>
                            </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NationalArtists3;
