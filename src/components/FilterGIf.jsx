import React from "react";
import { GifState } from "../Context/Gif-context";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const filterArray = [
    {
        title: "GIFs",
        value: "gifs",
        background:
            "bg-gradient-to-tr from-purple-500 via purple-600 to-purple-500",
    },
    {
        title: "Stickers",
        value: "stickers",
        background: "bg-gradient-to-tr from-teal-500 via teal-600 to-teal-500",
    },
    {
        title: "Text",
        value: "text",
        background: "bg-gradient-to-tr from-blue-500 via blue-600 to-blue-500",
    },
];

const FilterGIf = ({ alignLeft = false, showTrending = false }) => {
    const { filter, setFilter } = GifState(); // Access the context object properties

    return (
        <div
            className={`flex my-3 gap-3 ${alignLeft ? " " : "justify-end"} ${showTrending
                    ? "justify-between flex-col sm:flex-row sm:items-center"
                    : ""
                }`}
        >
            {showTrending && (
                <span className="flex gap-2">
                    <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
                    <span className="font-semibold text-gray-400">Trending</span>
                </span>
            )}
            <div className=" flex min-w-80 rounded-full bg-gray-800">
                {filterArray.map((f) => {
                    return (
                        <span
                            onClick={() => setFilter(f.value)}
                            className={`${filter === f.value ? f.background : ""} font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer gap`}
                            key={f.title}
                        >
                            {f.title}
                        </span>
                    );
                })}
            </div>
            {/* Additional UI or logic related to filter can go here */}
        </div>
    );
};

export default FilterGIf;
