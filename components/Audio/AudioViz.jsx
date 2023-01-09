import React, {useEffect, useRef, useState} from 'react';
import useAnimationFrame from "../../hooks/useAnimationFrame";
import ReactAudioPlayer from "react-audio-player";

const state = {
    mute: true
};

function lerp(value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
}

function AudioViz(props) {
    const lineRef1 = useRef(null);
    const lineRef2 = useRef(null);
    const lineRef3 = useRef(null);
    const lineRef4 = useRef(null);
    const lineRef5 = useRef(null);
    const lineRef6 = useRef(null);
    const lineRef7 = useRef(null);
    const lineRef8 = useRef(null);
    const lineRef9 = useRef(null);
    const lineRef10 = useRef(null);


    useAnimationFrame((clock) => {
        const items = [
            lineRef1,
            lineRef2,
            lineRef3,
            lineRef4,
            lineRef5,
            lineRef6,
            lineRef7,
            lineRef8,
            lineRef9,
            lineRef10
        ];
        if (state.mute) {
            items.map((item, i) => {
                const s = 2 + Math.sin(clock.time * 4 + i / 2) * 1;
                const s2 = lerp(Number(item.current.dataset.sy), s, 0.1);
                item.current.style.transform = `scale(1,${s2})`;
                item.current.dataset.sy = s2;
            });
        } else {
            items.map((item, i) => {
                const s2 = lerp(Number(item.current.dataset.sy), 1, 0.1);
                item.current.style.transform = `scale(1,${s2})`;
                item.current.dataset.sy = s2;
            });
        }
    }, []);

    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(true);


    function handleVisibilityChange() {
        if (document.hidden) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    function handleClick() {
        state.mute = !state.mute

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);

    }
    return (
        <div>
            <div className="audioviz" {...props} onClick={() => handleClick()}>
                <div ref={lineRef1} className="audioviz--line" data-sy={1} />
                <div ref={lineRef2} className="audioviz--line" data-sy={1} />
                <div ref={lineRef3} className="audioviz--line" data-sy={1} />
                <div ref={lineRef4} className="audioviz--line" data-sy={1} />
                <div ref={lineRef5} className="audioviz--line" data-sy={1} />
                <div ref={lineRef6} className="audioviz--line" data-sy={1} />
                <div ref={lineRef7} className="audioviz--line" data-sy={1} />
                <div ref={lineRef8} className="audioviz--line" data-sy={1} />
                <div ref={lineRef9} className="audioviz--line" data-sy={1} />
                <div ref={lineRef10} className="audioviz--line" data-sy={1} />

                <audio ref={audioRef} autoPlay loop={true} id="music" src="/audio/music.mp3" />
            </div>



        </div>
    );
}

export default AudioViz;