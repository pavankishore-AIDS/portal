import React, {useState, useEffect} from "react";
import '../pages_css/events.css';
import techImg from '../assets/tech-conference.jpg';
import artImg from '../assets/art-exhibition.jpg';
import musicImg from '../assets/music-fest.jpg';
import scienceImg from '../assets/science-fair.jpg';
import sportsImg from '../assets/sports-day.jpg';


function Events () {
    const eventsList = [
        {
            img: techImg,
            title: 'Tech Conference 2024',
            description: 'An annual tech conference with the latest in technology and innovation.'
        },
        {
            img: artImg,
            title: 'Art Exhibition',
            description: 'A display of the finest art from upcoming artists.'
        },
        {
            img: musicImg,
            title: 'Music Fest',
            description: 'A weekend filled with music from top bands and artists.'
        },
        {
            img: scienceImg,
            title: 'Science Fair',
            description: 'A showcase of the latest scientific discoveries and projects by students.'
        },
        {
            img: sportsImg,
            title: 'Sports Day',
            description: 'An exciting day of sports activities and competitions.'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsList.length);
    }, 2000);

    return () => clearInterval(intervalId);
    }, [eventsList.length]);
    
    return (
        <>
            <h1>Events</h1>
            <div className="events-list">
              <div className="eventimg"><img src={eventsList[currentIndex].img} alt={eventsList[currentIndex].title} />
                </div>  
                <center className="card-title">{eventsList[currentIndex].title}</center>
                <center className="card-description">{eventsList[currentIndex].description}</center>
            </div>
        </>
    )
}

export default Events