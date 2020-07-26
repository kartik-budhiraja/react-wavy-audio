import React, { useState, useEffect, useRef, Fragment } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaUndo, FaRedo } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function Player(props) {

    const waveformRef = useRef();
    const trackRef = useRef();
    const [waveSurfer, setWaveSurfer] = useState(null);

    const [playingAudio, setPlayingAudio] = useState(false);
    const [playBackSpeed, setPlayBackSpeed] = useState(1);

    const playBackSpeedOptions = props.playBackSpeedOptions ?? [0.5, 1, 1.2, 1.5, 2];

    const playAudio = () => {
        if (!props.hideWave) waveSurfer.play();
        else trackRef.current.play();
        setPlayingAudio(true);
    };

    const pauseAudio = () => {
        if (!props.hideWave) waveSurfer.pause();
        else trackRef.current.pause();
        setPlayingAudio(false);
    };

    const changePlaybackSpeed = () => {
        const newSpeed = playBackSpeed === 4 ? 0 : playBackSpeed + 1;
        setPlayBackSpeed(newSpeed);
        trackRef.current.playbackRate = playBackSpeedOptions[newSpeed];
    };

    const seekAudioFifteenSeconds = ahead => {
        if (ahead) {
            trackRef.current.currentTime += 15;
        } else {
            trackRef.current.currentTime -= 15;
        }
    };

    useEffect(() => {
        if (waveformRef.current && trackRef.current && !props.hideWave) {
            const wavesurfer = props.waveStyles
                ? WaveSurfer.create({
                    ...props.waveStyles,
                    container: "#waveform",
                    responsive: true,
                    backend: "MediaElement"
                })
                : WaveSurfer.create({
                    container: "#waveform",
                    responsive: true,
                    backend: "MediaElement"
                });
            props.waveJson
                ? wavesurfer.load(trackRef.current)
                : wavesurfer.load(trackRef.current, props.waveJson);
            wavesurfer.on("ready", () => {
                setWaveSurfer(wavesurfer);
                props.getWaveSurferInstance(waveSurfer)
                wavesurfer.zoom(props.zoom);
            });
            Object.entries(props.events).map(([key, value]) => {
                waveSurfer.on(key, value);
            })
        }
    }, [
        props.audioUrl,
        props.hideWave,
        props.waveStyles,
        props.waveJson,
        props.zoom
    ]);

    return (
        <>
            <div
                style={props.containerStyles ? {
                    display: "flex",
                    flexDirection: "row", ...props.containerStyles
                } : {
                        display: "flex",
                        flexDirection: "row",
                        maxWidth: "50vh",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
            >
                {!props.hideImage && (
                    <div>
                        <img
                            src={props.imageUrl}
                            alt="Audio logo"
                            style={
                                props.imgStyles ? { ...props.imgStyles } : { maxWidth: "150px" }
                            }
                        />
                    </div>
                )}
                <div
                    style={{
                        flexGrow: 7,
                        justifyContent: "space-around",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <div>
                        {!props.hideWave && <div ref={waveformRef} id="waveform" />}
                        <audio src={props.audioUrl} ref={trackRef} />
                    </div>
                    <div
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "10px"
                        }}
                    >
                        <FaUndo
                            style={{ margin: "20px", cursor: "pointer" }}
                            onClick={() => seekAudioFifteenSeconds(false)}
                        />{" "}
                        {playingAudio ? (
                            <FaPause
                                style={{ margin: "20px", cursor: "pointer" }}
                                onClick={() => (playingAudio ? pauseAudio() : playAudio())}
                            />
                        ) : (
                                <FaPlay
                                    style={{ margin: "20px", cursor: "pointer" }}
                                    onClick={() => (playingAudio ? pauseAudio() : playAudio())}
                                />
                            )}
                        <span
                            style={{ margin: "20px", cursor: "pointer" }}
                            onClick={() => changePlaybackSpeed()}
                        >
                            {playBackSpeedOptions[playBackSpeed]}x
            </span>
                        <FaRedo
                            style={{ margin: "20px", cursor: "pointer" }}
                            onClick={() => seekAudioFifteenSeconds(true)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
