import Musicplayer from "../component/musicplayer";
import { useState } from "react";
export default function Playmusic(props) {
    const [playid, setplayid] = useState("");
    const [songurl, setsongurl] = useState("");
    const check = (e) => {
        e.preventDefault();
        const playlistRegex = /youtube\.com\/playlist\?list=/i;
        if (playlistRegex.test(playid)) {
            extractPlaylistId(e);
        } else {
            setsongurl(playid);
        }

    }
    const extractPlaylistId = (e) => {
        e.preventDefault();
        const regex = /list=([A-Za-z0-9_-]+)/;
        const match = playid.match(regex);

        if (match) {
            const playlistId = match[1];

            setsongurl(`https://www.youtube.com/playlist?list=${playlistId}`);
        }

    };
    return (
        <div className="ytcontainer">
            <div className="ytframe">
                <form onSubmit={check}>
                    <input
                        type="text"
                        value={playid}
                        onChange={(e) => setplayid(e.target.value)}
                    />
                    <button type="submit">Play</button>
                    <Musicplayer songurl={songurl} />
                </form>
            </div>
        </div>

    );
}
