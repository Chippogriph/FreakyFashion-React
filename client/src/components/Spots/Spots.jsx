function Spots() {
    return (
        <section className="hidden lg:grid grid-cols-3 gap-5 rounded-lg mb-15">
        <div className="relative"><img src="../../images/formal.jpg" alt="" className="object-cover w-full h-full rounded-md shadow-2xl opacity-55" /> <p className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold">Formal</p></div>
        <div className="relative"><img src="../../images/casual.jpg" alt="" className="object-cover w-full h-full rounded-md shadow-2xl opacity-55" /> <p className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold">Casual</p></div>
        <div className="relative"><img src="../../images/children.jpg" alt="" className="object-cover w-full h-full rounded-md shadow-2xl opacity-55" /> <p className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold">Barn</p></div>
    </section>
    
    )
}

export default Spots;