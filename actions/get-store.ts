import { Store } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

const URL = API_URL.split('api').join('api/stores')

const getStore = async (): Promise<Store> => {
    const res = await fetch(URL);

    return res.json();
};

export default getStore;