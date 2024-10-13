import Button from "../Button/Button"
export const JoinWorkpal = () => {
    return (
        <>
            <section className="mt-24 mb-10">
                <div className="w-full rounded-lg justify-center items-center relative bg-green-900 p-14">
                    <h2 className="font-serif text-4xl font-semibold capitalize text-center text-white">Servis Freelance mudah kini ada di dalam genggaman tangan anda !.</h2>
                    <div className="flex justify-center items-center w-full">
                        <Button className='p-3 items-center font-inter rounded-md bg-white hover:opacity-70 transition-all ease-in-out duration-300 text-slate-800 font-semibold justify-center mt-10' text='Gabung Sekarang' />
                    </div>
                </div>
            </section>
        </>
    )
}