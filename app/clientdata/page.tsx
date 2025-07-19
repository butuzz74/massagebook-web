import ClientForm from "@/components/clientdata/ClientDataForm";

function ClientDataPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-4 py-8 bg-gradient-to-b from-white to-blue-50">
            <ClientForm />
        </main>
    );
}

export default ClientDataPage;
