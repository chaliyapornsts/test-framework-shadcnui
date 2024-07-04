import { useState } from "react";
import { Button } from "@/components/ui/button";

const Artist = () => {
    const AZAsciis = Array.from({ length: 26 }, (_, index) => index + 65);

    const data = [
        { id: 1, imgSrc: './src/assets/1.jpg', artist: 'Aaron (แอรอน)' },
        { id: 2, imgSrc: './src/assets/2.jpg', artist: 'Abel (อาเบล)' },
        { id: 3, imgSrc: './src/assets/3.jpg', artist: 'Aden (เอเดน)' },
        { id: 4, imgSrc: './src/assets/4.jpg', artist: 'Adrian (เอเดรียน)' },
        { id: 5, imgSrc: './src/assets/5.jpg', artist: 'Amil (เอมิล)' },
        { id: 6, imgSrc: './src/assets/6.jpg', artist: 'Amir (เอเมอร์)' },
        { id: 7, imgSrc: './src/assets/7.jpg', artist: 'Ashton (แอชตัน)' },
        { id: 8, imgSrc: './src/assets/8.jpg', artist: 'Austin (ออสติน)' },
        { id: 9, imgSrc: './src/assets/9.jpg', artist: 'Brayden (เบรย์เดน)' },
        { id: 10, imgSrc: './src/assets/10.jpg', artist: 'Brooke (บรูค)' },
        { id: 11, imgSrc: './src/assets/11.jpg', artist: 'Braxton (แบรกซ์ตัน)' },
        { id: 12, imgSrc: './src/assets/12.jpg', artist: 'Brooklyn (บรูคลิน)' },
        { id: 13, imgSrc: './src/assets/13.jpg', artist: 'Bible (ไบเบิล)' },
        { id: 14, imgSrc: './src/assets/14.jpg', artist: 'Carter (คาร์เตอร์)' },
        { id: 15, imgSrc: './src/assets/15.jpg', artist: 'Colton (คอลตัน)' },
        { id: 16, imgSrc: './src/assets/16.jpg', artist: 'Cooper (คูเปอร์)' },
        { id: 17, imgSrc: './src/assets/17.jpg', artist: 'Dylan (ดีแลน)' },
        { id: 18, imgSrc: './src/assets/18.jpg', artist: 'Devin (เดวิน)' },
    ];

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
        <div className="2xl:container">
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
                                <div key={item.id} className="p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer">
                                    <div className="hover-image h-0 pb-[100%] relative">
                                        <img className="mx-auto object-cover w-full h-full absolute top-0 bottom-0 left-0 right-0 rounded-full" src={item.imgSrc} alt={item.artist} />
                                    </div>
                                    <p className="text-sm text-center pt-5"><b>{item.artist}</b></p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artist;