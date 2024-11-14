export default function Home() {

    return(
        <div className="">
            <navbar className="flex justify-end p-10 pb-5">
                <div className="px-0 sm:px-14 md:px-36 lg:px-72">
                    <div className="flex bg-black rounded-full w-11 h-11 justify-center">
                        <p>nvsk</p>
                    </div>
                </div>
            </navbar>

            <main className="p-10 pt-0 ">
                <div className="flex flex-col items-center px-0 sm:px-14 md:px-36 lg:px-72">
                    <div className="w-28 h-28">
                        <img src="/logo.jpeg" className="h-full w-full rounded-full"/>
                    </div>

                    <h1 className="pt-4 pb-1">Luxury Room</h1>
                    <p>Rent Apartement Jogja</p>

                    <div className="w-full py-8 pt-10">
                        <Card />
                        <Card />
                    </div>

                    <div className="mt-3">
                        <button className="bg-white p-3 px-8 rounded-full">jsbk</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

function Card() {

    return(
        <div className="flex justify-between items-center border-2 rounded-full mb-5">
            <div className="w-16 h-16 flex justify-center p-2">
                <img src="/logo.jpeg" className="rounded-full"/>
            </div>

            <p>Admin</p>
            <div className="p-4">jka</div>
        </div>
    );
}