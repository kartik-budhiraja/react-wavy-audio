# React Wavy Audio

React player library to display audio with waveform

This package uses [wavesurfer.js](https://wavesurfer-js.org/) under the hood and provides an easier way 
to use it in react applications.
It is a wrapper for wavesurfer.js, you can use it is a reference or use it directly in your react apps.

It covers basic features, but if you want something else supported, please feel free to open an issue, and contribute. 😄

If you find any issues, please do let me know and we can fix it as soon as possible :)

## Install

``` bash
npm install --save react-wavy-audio
```

## Usage

Check Example Folder for a basic example

Example folder deployed on Github actions -> https://kartik-budhiraja.github.io/react-wavy-audio/

CodeSandbox -> https://codesandbox.io/s/react-wavy-audio-example-d6hin

## Props

| Props  | Type  | Default  | Description | 
|---|---|---| --- |  
| playBackSpeedOptions  | Array  | [0.5, 1, 1.2, 1.5, 2]  | Array of valid playback speed options for the audio |
| hideWave   | bool  | false  | Hide the wave formation | 
| waveStyles  | object  | { responsive: true }  | The list of paramterers which can be found [here](https://wavesurfer-js.org/docs/options.html) to change default settings and style of the waveplayer |
| waveJson  | Json  | N/A   | You can use the (audiowaveform)[https://github.com/bbc/audiowaveform] to generate the waveform data on server and pass it through this props to the player. This recommended for bigger audio files where waveform generation could take some time or even not load on its own. |
| audioUrl  | url  | N/A | The url to load audio from |
| zoom  |  number | 0  | Widens the waveform in display, Try it out in example |
| imageUrl  | url  | N/A  | The image to be shown right next to the player. It is not required |
| events | Json | N/A | You can pass a json object with events available [here](http://wavesurfer-js.org/docs/events.html) . Use `wavesurfer` for manipulation. Only `on` events supported for now. Example: {'pause' : () => { wavesurfer.params.container.style.opacity = 0.9} } 
| hideImage  | bool  | false  | To hide the image if imageUrl is present |
| containerStyles  | Style object  | Check Below | Styles for the container of player 

``` 
                    {
                        display: "flex",
                        flexDirection: "row",
                        maxWidth: "50vh",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }
```

## Methods

The list of wavesurfer.js supported methods can be find (here)[http://wavesurfer-js.org/docs/methods.html]. 
Use `getWaveSurferInstance` to get the instance reference and call the methods according to your requirements. :)

## License

MIT © [kartik-budhiraja](https://github.com/kartik-budhiraja)
