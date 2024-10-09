import { TbCategoryPlus } from "react-icons/tb";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { LiaAwardSolid } from "react-icons/lia";

export const Trust = () => {
    return (
        <>
            <section className="flex flex-col gap-3 mt-20 mb-10">
                <h1 className="text-3xl">
                    Workpal Freelancer ada di Seluruh Bali Memudahkan Pekerjaan.
                </h1>
                <div className="grid grid-cols-4 gap-4">
                    <article className='flex flex-col font-inter gap-3 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 items-start justify-start shadow-md rounded-lg p-4'>
                        <span className='text-4xl font-light'>
                            <TbCategoryPlus />
                        </span>
                        <h5 className='text-base font-semibold text-justify capitalize'>
                            Memiliki Banyak Kategori
                        </h5>
                        <p className="text-justify text-sm text-slate-600">
                            Dapatkan hasil dari pekerja lepas terampil dari seluruh dunia, untuk setiap tugas, dengan harga berapa pun.

                        </p>
                    </article>

                    <article className='flex flex-col font-inter gap-3 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 items-start justify-start shadow-md rounded-lg p-4'>
                        <span className='text-4xl font-light'>
                            <PiHandWithdrawDuotone />
                        </span>
                        <h5 className='text-base font-semibold text-justify capitalize'>
                            Pembayaran yang Transparan
                        </h5>
                        <p className="text-justify text-sm text-slate-600">
                            Bayar per proyek atau per jam (Pro). Pembayaran hanya akan dilakukan setelah Anda menyetujuinya.

                        </p>
                    </article>


                    <article className='flex flex-col font-inter gap-3 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 items-start justify-start shadow-md rounded-lg p-4'>
                        <span className='text-4xl font-light'>
                            <AiTwotoneThunderbolt />
                        </span>
                        <h5 className='text-base font-semibold text-justify capitalize'>
                            Qualitas Pekerja yang Cepat dan Tersertifikasi
                        </h5>
                        <p className="text-justify text-sm text-slate-600">
                            Filter untuk menemukan pekerja lepas yang tepat dengan cepat dan dapatkan pekerjaan hebat yang diselesaikan dalam waktu singkat, setiap saat.
                        </p>
                    </article>

                    <article className='flex flex-col font-inter gap-3 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 items-start justify-start shadow-md rounded-lg p-4'>
                        <span className='text-4xl font-light'>
                            <LiaAwardSolid />
                        </span>
                        <h5 className='text-base font-semibold text-justify capitalize'>
                            24/7 Melayani Pelanggan
                        </h5>
                        <p className="text-justify text-sm text-slate-600">
                            Ngobrol dengan tim kami untuk mendapatkan jawaban atas pertanyaan Anda atau menyelesaikan masalah dengan pesanan Anda.
                        </p>
                    </article>

                </div>
            </section>
        </>
    )
}