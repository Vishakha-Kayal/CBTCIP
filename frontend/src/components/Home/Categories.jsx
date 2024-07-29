import { useEffect, useState } from "react";
import Heading from "../Heading"
import { assets } from "../../assets/assets";

const Category = ({ categories }) => {
    return (
        <>

            {
                categories.map((categ,i) => (
                    <div className="mb-4 w-[20rem] h-full flex flex-col items-center md:w-[11%] md:h-[80%] md:flex md:flex-col md:gap-6 md:py-3 md:items-center mt-4" key={i}>
                        <div className="h-[92%] m-auto md:w-[50%] md:h-[70%]">
                            <img src={categ.image} alt="" className="w-20 h-20 rounded-full m-auto"/>
                        </div>
                        <h3 className="w-full h-[8%] whitespace-nowrap text-center md:h-[30%] md:whitespace-nowrap  px-2">{categ.name}</h3>
                    </div>
                ))
            }

        </>
    )
}

const Categories = () => {
    const [categories, setCategories] = useState([
        { name: "Entertainment", image: assets.Entertainment },
        { name: "Educational & Business", image: assets.Education },
        { name: "Cultural & Arts", image: assets.Cultural },
        { name: "Sports & Fitness", image: assets.Sports },
        { name: "Technology & Innovation", image: assets.Technology },
        { name: "Travel & Adventure", image: assets.Travel },
        { name: "Wedding", image: assets.Wedding },
    ])
    return (
        <section className="md:px-12 w-full h-full">
            <Heading name="Explore Categories" />
            <div className="marquee w-[180%] h-full flex justify-between md:w-full md:h-[9rem]">
                <Category categories={categories} />
            </div>
        </section>
    )
}

export default Categories;