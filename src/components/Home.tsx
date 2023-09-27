import MyForm from "./Form";

function Home() {
    return (
        <div className="flex justify-center items-center text-center mt-5">
            <div className="w-1/2 p-10">
                <p className="text-white text-4xl">
                    Searching for <span className="font-bold">Augmented Development</span> Teams to steer your product towards triumph?
                </p>

                <div className="flex justify-between mt-8 text-center">
                    <div className="w-1/3">
                        <p className="text-white font-bold text-5xl">50+</p>
                        <p className="text-slate-300">Clients</p>
                    </div>
                    <div className="w-1/3">
                        <p className="text-white font-bold text-5xl">80+</p>
                        <p className="text-slate-300">Projects successfully completed</p>
                    </div>
                    <div className="w-1/3">
                        <p className="text-white font-bold text-5xl">60%</p>
                        <p className="text-slate-300">of the clients converetd into long term engagement partners</p>
                    </div>
                </div>

            </div>
            <div className="w-1/2 p-10">
                <MyForm />
            </div>
        </div>
    );
}

export default Home;