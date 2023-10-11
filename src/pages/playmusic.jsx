import Musicplayer from "../component/musicplayer";
import { useState } from "react";
export default function Playmusic(props) {
    const [playid, setplayid] = useState("");
    const [playlistId, setPlaylistId] = useState("");
    const extractPlaylistId = (e) => {
        e.preventDefault();
        const regex = /list=([A-Za-z0-9_-]+)/;
        const match = playid.match(regex);

        if (match) {
            const playlistId = match[1];
            setPlaylistId(playlistId);
        } else {
            setPlaylistId("Playlist ID not found");
        }

    };
    return (
        <div className="ytcontainer">
            <div className="ytframe">
                <form onSubmit={extractPlaylistId}>
                    <input
                        type="text"
                        value={playid}
                        onChange={(e) => setplayid(e.target.value)}
                    />
                    <button type="submit">submit</button>
                    <Musicplayer playlistId={playlistId} />
                </form>
            </div>
        </div>

    );
}
