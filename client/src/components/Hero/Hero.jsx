function Hero() {
    return (
        <section className="rounded-lg p-4 shadow-2xl mb-10 w-full flex flex-col lg:flex-row-reverse">
            <div className="w-full lg:flex-2">
                <img src="../../images/hero.webp" alt="Hero" className="rounded-md object-cover w-full"/>
            </div>
            <div className="my-6 flex flex-col items-center justify-center text-center lg:flex-1">
                <h2 className="text-3xl text-center font-bold">Utforska det okonventionella.<br /><em>Freaky Fashion</em></h2>
                <p className="text-xl text-center text-gray-400">Där stil möter individualitet.</p>
            </div>
            
        </section>
    )
}

export default Hero