import Image from "next/image";
import Link from "next/link";

const ServiceCardForMainPage = ({
    image,
    title,
    linkForTransition,
    description,
    duration,
}: {
    image: string;
    title: string;
    linkForTransition: string;
    description: string;
    duration: number;
}) => {
    return (
        <Link
            href={linkForTransition}
            className="w-72 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mt-3 mb-3"
        >
            <div className="relative w-full h-44">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
            </div>

            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center text-sm text-gray-500 pt-2">
                    ⏱ {duration} мин
                </div>
            </div>
        </Link>
    );
};

export default ServiceCardForMainPage;
