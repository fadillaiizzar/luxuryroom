import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

export default function Home() {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isMenuPopupVisible, setMenuPopupVisible] = useState(false); // Pop-up untuk menu
    const [isMenu2PopupVisible, setMenu2PopupVisible] = useState(false);

    // Fungsi untuk menampilkan pop-up utama
    const showPopup = () => {
        setPopupVisible(true);
    };

    // Fungsi untuk menutup pop-up utama
    const closePopup = () => {
        setPopupVisible(false);
    };

    // Fungsi untuk menampilkan pop-up menu
    const showMenuPopup = () => {
        setMenuPopupVisible(true);
    };

    // Fungsi untuk menutup pop-up menu
    const closeMenuPopup = () => {
        setMenuPopupVisible(false);
    };

    // Fungsi untuk menampilkan pop-up menu
    const showMenu2Popup = () => {
        setMenu2PopupVisible(true);
    };

    // Fungsi untuk menutup pop-up menu
    const closeMenu2Popup = () => {
        setMenu2PopupVisible(false);
    };

    return (
        <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400 to-gray-800 h-full pb-12 px-6">
            <nav className="flex justify-center p-10 px-0 pb-4">
                <div className="flex flex-col items-end w-[600px]">
                    <div
                        className="flex bg-black opacity-40 hover:opacity-80 cursor-pointer rounded-full w-11 h-11 justify-center items-center"
                        onClick={showPopup}>
                        <FontAwesomeIcon icon={faEllipsis} className="text-xl text-white" />
                    </div>
                </div>
            </nav>

            <main className="flex justify-center items-center px-0">
                <div className="flex flex-col items-center w-[600px]">
                    <div className='pb-11 text-center'>
                        <h2 className='text-2xl max-w-sm text-white font-poppins font-bold'> Penginapan Apartemen 
                        Murah Seluruh Wilayah Jogja</h2>
                    </div>

                    <div className="w-28 h-28">
                        <img src="/logo.jpeg" className="h-full w-full rounded-full" />
                    </div>

                    <h1 className="pt-4 pb-1 font-poppins text-2xl text-white font-bold">Luxury Room</h1>
                    <p className="font-poppins text-white">Rent Apartment Jogja</p>

                    <div className="w-full py-8 pt-10">
                        <Card Admin="Admin 1" phoneNumber="6282326813926" showMenuPopup={showMenuPopup} />
                        <Card Admin="Admin 2" phoneNumber="6285870797386" showMenuPopup={showMenu2Popup} />
                    </div>

                    <div className="mt-0">
                        <button className="bg-white font-poppins text-black opacity-60 hover:opacity-100 p-3 px-8 rounded-full">luxuryroom</button>
                    </div>
                </div>
            </main>

            {/* Pop-up Overlay utama */}
            {isPopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center px-5">
                    <div className="relative px-0 bg-white rounded-xl shadow-[0_25px_50px_-12px_rgba(255,255,255,0.6)] items-center w-[400px] sm:px-0 sm:w-[500px] md:px-0 md:w-[560px]">
                        <div className="flex items-center bg-dark-blue rounded-t-lg pl-5 sm:pl-9 pt-5 pb-2">
                            {/* Tombol Close */}
                            <button onClick={closePopup} className="flex items-center text-teal-600 pr-3">
                                <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
                            </button>

                            {/* Judul */}
                            <p className="flex-grow text-left text-teal-6000 text-lg font-semibold">Luxury Room</p>
                        </div>

                        <Menu text="@luxuryroom" imgMenu="/logo.jpeg" phoneNumber="6282326813926" link="https://wa.me/6282326813926?text=Hallo Luxury Room!"/>
                    </div>
                </div>
            )}

            {/* Pop-up Overlay untuk Menu 1*/}
            {isMenuPopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center px-5">
                    <div className="relative px-0 bg-white rounded-xl shadow-[0_25px_50px_-12px_rgba(255,255,255,0.6)] items-center w-[400px] sm:px-0 sm:w-[500px] md:px-0 md:w-[560px]">
                        <div className="flex items-center bg-dark-blue rounded-t-lg pl-9 pt-5 pb-2">
                            {/* Tombol Close */}
                            <button onClick={closeMenuPopup} className="flex items-center text-teal-600 pr-3">
                                <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
                            </button>

                            {/* Judul */}
                            <p className="flex-grow text-left text-teal-600 text-lg font-poppins font-semibold">Admin 1</p>
                        </div>

                        <Menu text="Admin 1" imgMenu="/wa.png" phoneNumber="6282326813926" link="https://wa.me/6282326813926?text=Hallo Luxury Room!"/>
                    </div>
                </div>
            )}

            {/* Pop-up Overlay untuk Menu 2*/}
            {isMenu2PopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center px-5">
                    <div className="relative px-0 bg-white rounded-xl shadow-[0_25px_50px_-12px_rgba(255,255,255,0.6)] items-center w-[400px] sm:px-0 sm:w-[500px] md:px-0 md:w-[560px]">
                        <div className="flex items-center bg-dark-blue rounded-t-lg pl-9 pt-5 pb-2">
                            {/* Tombol Close */}
                            <button onClick={closeMenu2Popup} className="flex items-center text-teal-600 pr-3">
                                <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
                            </button>

                            {/* Judul */}
                            <p className="flex-grow text-left text-teal-600 text-lg font-poppins font-semibold">Admin 2</p>
                        </div>

                        <Menu text="Admin 2" imgMenu="/wa.png" phoneNumber="6285870797386" link="https://wa.me/6285870797386?text=Hallo Luxury Room!"/>
                    </div>
                </div>
            )}
        </div>
    );
}

function Card({ Admin, phoneNumber, showMenuPopup }) {
    const preFilledText = "Halo, saya tertarik dengan penginapan apartemen di Jogja, bisakah Anda beri info lebih lanjut?";

    return (
        <div className="flex justify-between items-center border-2 rounded-full mb-5 cursor-pointer hover:bg-white group">
            {/* Gambar WhatsApp dan Teks Admin dalam satu box yang bisa diklik */}
            <a 
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(preFilledText)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center w-full px-4 pl-0">

                {/* Box Gambar WhatsApp */}
                <div className="w-16 h-16 flex justify-center p-2">
                    <img src="/wa.png" className="rounded-full" />
                </div>

                {/* Teks Admin berada di tengah */}
                <p className="font-poppins text-white group-hover:text-teal-600 flex-grow text-center font-bold">
                    {Admin}
                </p>
            </a>

            {/* Tombol ellipsis untuk memunculkan menu */}
            <div className="font-poppins text-white p-4 flex items-center" onClick={showMenuPopup}>
                <FontAwesomeIcon icon={faEllipsisVertical} className="text-xl text-white group-hover:text-teal-600" />
            </div>
        </div>
    );
}