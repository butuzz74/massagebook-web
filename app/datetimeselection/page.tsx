import { WorkDay } from "../../types/types";
import DatePicker from "@/components/datetimeselection/DatePicker";

async function DataTimeSelectionPage() {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/datetimeselection`,
        { cache: "no-store" }
    );

    const workdays: WorkDay[] = await data.json();
    const availableDays = workdays.map((elem) => new Date(elem.date));

    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-4 py-8 bg-gradient-to-b from-white to-blue-50">
            <DatePicker workdays={workdays} />
        </main>
    );
}

export default DataTimeSelectionPage;
