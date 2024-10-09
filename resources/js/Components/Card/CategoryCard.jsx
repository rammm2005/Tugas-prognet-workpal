import { GiPencilBrush } from "react-icons/gi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FcMultipleCameras } from "react-icons/fc";
import { BsBrush } from "react-icons/bs";
import { PiHammerThin, PiCarDuotone, PiMusicNotesMinusThin, PiLaptopDuotone, PiBabyDuotone } from "react-icons/pi";
import { TfiCut } from "react-icons/tfi";

const categories = [
    {
        id: 1,
        name: 'Pembersih Rumah',
        icon: <GiPencilBrush />,
        description: 'Layanan pembersihan rumah profesional untuk menjaga kebersihan rumah Anda.',
    },
    {
        id: 2,
        name: 'Pengasuh Anak',
        icon: <PiBabyDuotone />,
        description: 'Pengasuh anak berpengalaman yang siap merawat buah hati Anda dengan penuh kasih sayang.',
    },
    {
        id: 3,
        name: 'Pengembang Web',
        icon: <IoCodeSlashOutline />,
        description: 'Pembangunan situs web dan aplikasi dengan developer web yang handal.',
    },
    {
        id: 4,
        name: 'Editor Foto',
        icon: <FcMultipleCameras />,
        description: 'Layanan editing foto profesional untuk mempercantik dan memperbaiki hasil jepretan Anda.',
    },
    {
        id: 5,
        name: 'Desainer Grafis',
        icon: <BsBrush />,
        description: 'Layanan desain grafis kreatif untuk kebutuhan branding dan visual Anda.',
    },
    {
        id: 6,
        name: 'Tukang Bangunan',
        icon: <PiHammerThin />,
        description: 'Tenaga ahli bangunan yang siap membantu Anda dalam pembangunan dan renovasi rumah.',
    },
    {
        id: 7,
        name: 'Tukang Cukur',
        icon: <TfiCut />,
        description: 'Jasa potong rambut dengan tukang cukur profesional yang membuat tampilan Anda lebih segar.',
    },
    {
        id: 8,
        name: 'Montir Mobil',
        icon: <PiCarDuotone />,
        description: 'Layanan perbaikan mobil dan servis kendaraan yang dilakukan oleh montir berpengalaman.',
    },
    {
        id: 9,
        name: 'Guru Musik',
        icon: <PiMusicNotesMinusThin />,
        description: 'Pelajaran musik dengan guru yang berpengalaman untuk meningkatkan kemampuan bermusik Anda.',
    },
    {
        id: 10,
        name: 'Ahli IT',
        icon: <PiLaptopDuotone />,
        description: 'Layanan konsultasi dan perbaikan komputer serta sistem IT oleh tenaga ahli.',
    },
];

export const CategoryCard = () => {
    return (
        <>
            <section className="grid grid-cols-4 md:grid-cols-8 gap-8 mt-14">
                {categories.map((data, index) => (
                    <>
                        <article className='flex flex-col font-inter gap-3 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 items-start justify-start shadow-md rounded-lg p-4' key={index}>
                            <span className='text-4xl font-light'>
                                {data.icon}
                            </span>
                            <h5 className='text-base font-semibold text-justify capitalize'>{data.name}</h5>
                        </article>
                    </>
                ))}
            </section>
        </>
    )
}