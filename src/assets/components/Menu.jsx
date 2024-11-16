export default function Menu({ text, imgMenu, phoneNumber, link }) {

    const preText = "Hallo Luxury Room!";

    return (
        <div className='px-4 sm:px-9 pt-3'>
            <div className="py-6 sm:py-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400 to-gray-800 rounded-2xl text-center flex justify-center items-center flex-col">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-5">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={imgMenu} className="h-full w-full rounded-full cursor-pointer" />
                    </a>
                </div>

                <h1 className='text-lg sm:text-xl text-white font-bold font-poppins'>{text}</h1>
            </div>
            
            <div className="grid grid-cols-4 gap-2 p-4 sm:p-6 px-0 rounded-2xl text-center items-center cursor-pointer">
                {/* Copy link to clipboard */}
                <Medsos Namedsos="Copy" imgSrc="/copy.png" onCopy={() => copyToClipboard("luxuryroom.vercel.app")} />

                {/* Facebook */}
                <Medsos 
                    Namedsos="Traveloka" 
                    imgSrc="/travel.jpeg" 
                    link="https://www.traveloka.com/hotel/indonesia/luxury-room-9000005469552?contexts=%7B%22sourceHotelDetail%22:%22SHARE_BUTTON%22%7D&spec=20-11-2024.21-11-2024.1.1.HOTEL.9000005469552.Luxury%20Room.2&force-app=false" 
                />

                {/* WhatsApp, now using dynamic phone number */}
                <Medsos 
                    Namedsos="Admin 1" 
                    imgSrc="/wa.png" 
                    link="https://wa.me/6282326813926?text=Hallo Luxury Room!"
                    // link={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(preText)}`} 
                />

                {/* Instagram */}
                <Medsos 
                    Namedsos="Admin 2" 
                    imgSrc="/wa.png" 
                    link="https://wa.me/6285870797386?text=Hallo Luxury Room!"
                    // link={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(preText)}`} 
                />
            </div>
        </div>
    );
}

function Medsos({ Namedsos, imgSrc, link, onCopy }) {
    // If onClick handler for "Copy" or direct link navigation
    const handleClick = () => {
        if (onCopy) {
            onCopy();  // If it's the "Copy" button, copy the link to clipboard
        } else if (link) {
            window.open(link, '_blank');  // If it's a social media button, open the link
        }
    };

    return (
        <div className="flex flex-col items-center pt-2 sm:pt-4" onClick={handleClick}>
            <div className="w-12 h-12 sm:w-16 sm:h-16"> 
                <img src={imgSrc} className="h-full w-full rounded-full" />
            </div>
            <p className="mt-2 text-xs sm:text-sm text-center text-teal-600 font-poppins"> 
                {Namedsos}
            </p>
        </div>
    );
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Link copied successfully!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}
