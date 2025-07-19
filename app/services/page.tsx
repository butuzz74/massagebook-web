import { ProductsType } from "../../types/types";
import ServiceCardForMainPage from "@/components/services/ServiceCardForServicePage";

async function ServicesMainPage() {
    // const data = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`,
    //     { cache: "no-store" }
    // );

    // const services: ProductsType = await data.json();

    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-4 py-8 bg-gradient-to-b from-white to-blue-50">
            <h1 className="text-3xl font-bold text-blue-700 text-center mb-10">
                Выбрать массаж
            </h1>
            {/* {services.products.length !== 0 &&
                services.products.map((elem) => (
                    <ServiceCardForMainPage
                        key={elem._id}
                        image={elem.image}
                        title={elem.title}
                        description={elem.description}
                        duration={elem.duration}
                        linkForTransition={`/services/${elem._id}`}
                    />
                ))} */}
        </main>
    );
}

export default ServicesMainPage;
