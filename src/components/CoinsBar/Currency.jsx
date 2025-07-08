import { useCurrencyStore} from "@/Stores/currencyStore.js";

const Currency = () => {

    const {loadingInitial, amount, error} = useCurrencyStore();

    if (loadingInitial) return <div className="text-gray-500">Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error.message}</div>;

    return (
        <div className="text-xl font-semibold flex items-center gap-2">
            <span>Your coins:</span>
            <span>{amount} 🪙</span>
        </div>
    );
};

export default Currency;
