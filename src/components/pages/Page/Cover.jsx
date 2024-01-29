const Cover = () => {
    return (
        <div className={`absolute h-[515px] md:h-box-h w-[354px] md:w-[452px] bg-cover-pattern bg-cover flex flex-col justify-center items-center px-4 rounded border-x border-y border-slate-400 outline-8 page-front`}>
            <div className="-mt-80 text-white">
                <div className="shadow-2xl">WELCOME TO</div>
                <div className="text-4xl shadow-2xl">MY PORTOFOLIO</div>
            </div>
        </div>
    )
}

export default Cover;