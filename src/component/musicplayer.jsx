import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import '../styles/index.css';

const Musicplayer = (props) => {
    console.log(props.songurl);
    const [yturl, setyturl] = useState('');

    useEffect(() => {
        setyturl(props.songurl);
    }, [props.songurl]);
    if (props.songurl === '') return <h1 style={{ color: 'white' }}>Enter Your Playlist Link</h1>;

    return (
        <div>
            <ReactPlayer
                key={yturl} // Add the key attribute with yturl as its value
                url={yturl}
                autoplay={true}
                controls={true}
                playing={true}
                width="100%"
                height="0%"
                quality={true}
            />
        </div>
    );
};

export default Musicplayer;
