import Link from "next/link";

import getStore from "@/actions/get-store";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";

export const revalidate = 0;

const Navbar: React.FC = async () => {
    const store = await getStore()

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">{store.name}</p>
                    </Link>
                    <MainNav />
                    {/* <NavbarActions /> */}
                </div>
            </Container>
        </div>
    );
};

export default Navbar;