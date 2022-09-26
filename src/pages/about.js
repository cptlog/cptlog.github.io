import * as React from 'react'

const Basics = () => {
    return (
        <ul className='basics'>
            <li><span className='accent name'><b>Nikita</b></span></li>
            <li><b>or <span className='accent name2'>Snippy</span></b></li>
            <li>It, ze/hir - 20 - Karelian</li>
            <li>Ukonvembeleine</li>
        </ul>
    )
}

const Extended = () => {
    return (
        <ul className='extended'>
            <li>Programmer, artist, and gamer.</li>
            <li>Lover of astronomy, speculative biology, anatomy, and sci-fi in various forms.</li>
            <li>Favorite games include Halo: Reach, Warframe, and Titanfall 2.</li>
            <li><span className='accent'><b>FIN:</b></span> Fluent - <span className='accent'><b>ENG:</b></span> Semi-fluent - <span className='accent'><b>KRL & RUS:</b></span> Learning</li>
        </ul>
    )
}

const Card = ({avatar}) => {
    return (
        <div className='card'>
            <img src={avatar} />
            <Basics />
            <Extended />
        </div>
    )
}

const About = () => {
    return (
        <div className='page'>
            <Card avatar='https://via.placeholder.com/300' />
        </div>
    )
}

export default About