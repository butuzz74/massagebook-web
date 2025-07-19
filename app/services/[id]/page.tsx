import { ServiceType } from "../../../types/types";
import ServiceCardOneForServiceIdPage from "@/components/services/ServiceCardOneForServiceIdPage";

async function ServicesOnePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`,
        { cache: "no-store" }
    );

    const service: ServiceType = await data.json();

    return (
        <ServiceCardOneForServiceIdPage
            title={service.title}
            description={service.description}
            image={service.image}
            duration={service.duration}
            id={service._id}
        />
    );
}

export default ServicesOnePage;
