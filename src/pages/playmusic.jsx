import Musicplayer from "../component/musicplayer";
import { useState } from "react";
export default function Playmusic(props) {
    const [playid, setplayid] = useState("");
    const [songurl, setsongurl] = useState("");
    const check = (e) => {
        e.preventDefault();
        setsongurl(playid);
    }
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
