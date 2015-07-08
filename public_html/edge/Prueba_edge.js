/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['-25px', '-18px', '941px', '630px', 'auto', 'auto'],
                            fill: ["rgba(255,199,106,0.45)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'props-03',
                            type: 'image',
                            rect: ['49px', '375px', '302px', '231px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"props-03.png",'0px','0px']
                        },
                        {
                            id: 'Slides_ACT2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['438', '517', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Slides_ACT.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'props-02',
                            type: 'image',
                            rect: ['520px', '393px', '249px', '178px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"props-02.png",'0px','0px']
                        },
                        {
                            id: 'mensaje',
                            symbolName: 'mensaje',
                            type: 'rect',
                            rect: ['603px', '412px', '83', '85', 'auto', 'auto']
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['449px', '186px', '389px', '42px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(168,168,255,0.451)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['15px', '8px', '357px', '25px', 'auto', 'auto'],
                                text: "Hola profe Marco... Soy Diana Puentes.<br><br>",
                                font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'RoundRect2Copy',
                            type: 'rect',
                            rect: ['449px', '249px', '389px', '42px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(168,168,255,0.451)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['15px', '8px', '357px', '25px', 'auto', 'auto'],
                                text: "Hola profe Marco... Soy Diana Puentes.<br><br>",
                                font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'RoundRect2Copy3',
                            type: 'rect',
                            rect: ['449px', '314px', '389px', '42px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(168,168,255,0.451)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['15px', '8px', '357px', '25px', 'auto', 'auto'],
                                text: "Hola profe Marco... Soy Diana Puentes.<br><br>",
                                font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Slides_ACT3',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['232', '484', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Slides_ACT.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'NuevoIntento',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['361', '543', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"NuevoIntento.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'NuevoIntentoCopy2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['361', '543', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"NuevoIntento.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'NuevoIntentoCopy',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['361', '543', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"NuevoIntento.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Slides_ACT',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['331', '316', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Slides_ACT.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['14px', '186px', '302', '264', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.5','0.5'],['22.3379%','86.307%']],
                            c: [
                            {
                                id: 'props-05',
                                type: 'image',
                                rect: ['0px', '0px', '302px', '264px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"props-05.png",'0px','0px']
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['41px', '67px', '209px', '113px', 'auto', 'auto'],
                                text: "Creo que esta <br>estudiante no le puso mucha atención a las dos primeras actividades del curso. ¿Será que se las saltó?<br>",
                                align: "center",
                                font: ['Verdana, Geneva, sans-serif', [16, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['169px', '-18px', '302', '264', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.5','0.5'],['22.0167%','86.4666%']],
                            c: [
                            {
                                id: 'props-05Copy',
                                type: 'image',
                                rect: ['0px', '0px', '302px', '264px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"props-05.png",'0px','0px']
                            },
                            {
                                id: 'Text2Copy',
                                type: 'text',
                                rect: ['44px', '84px', '209px', '95px', 'auto', 'auto'],
                                text: "Todavía tengo tiempo antes de que llegue el taxi por mi para ir a Londres, le ayudaré a despejar la duda…<br>",
                                align: "center",
                                font: ['Verdana, Geneva, sans-serif', [16, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid33",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${props-03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            3250,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid117",
                            "scaleY",
                            4125,
                            375,
                            "linear",
                            "${Group2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid38",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${RoundRect2Copy}",
                            '358px',
                            '308px'
                        ],
                        [
                            "eid41",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${RoundRect2Copy}",
                            '308px',
                            '249px'
                        ],
                        [
                            "eid110",
                            "scaleX",
                            3250,
                            500,
                            "linear",
                            "${Group}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid116",
                            "scaleX",
                            4125,
                            375,
                            "linear",
                            "${Group2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            3250,
                            500,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${RoundRect2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${props-03}",
                            '49px',
                            '88px'
                        ],
                        [
                            "eid43",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${RoundRect2Copy3}",
                            '358px',
                            '314px'
                        ],
                        [
                            "eid45",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${RoundRect2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            4125,
                            375,
                            "linear",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "top",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '358px',
                            '308px'
                        ],
                        [
                            "eid40",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '308px',
                            '244px'
                        ],
                        [
                            "eid42",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '244px',
                            '186px'
                        ],
                            [ "eid98", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${NuevoIntentoCopy}', [] ] ],
                            [ "eid99", "trigger", 1160, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${NuevoIntentoCopy}', [] ] ],
                            [ "eid100", "trigger", 1250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${NuevoIntentoCopy2}', [] ] ],
                            [ "eid101", "trigger", 2165, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${NuevoIntentoCopy2}', [] ] ],
                            [ "eid102", "trigger", 2250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${NuevoIntento}', [] ] ],
                            [ "eid103", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${NuevoIntento}', [] ] ]
                    ]
                }
            },
            "msn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '167px', '98px', 'auto', 'auto'],
                            fill: ['rgba(168,168,255,0.45)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '167px', '98px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mensaje": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '83px', '85px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(168,168,255,0.451)']
                        },
                        {
                            type: 'image',
                            id: 'props-04',
                            opacity: '0',
                            rect: ['-11px', '19px', '55px', '85px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/props-04.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "opacity",
                            125,
                            375,
                            "linear",
                            "${props-04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "left",
                            125,
                            375,
                            "linear",
                            "${props-04}",
                            '-11px',
                            '13px'
                        ],
                        [
                            "eid3",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(168,168,255,0.451)',
                            'rgba(175,255,190,0.64)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(175,255,190,0.64)',
                            'rgba(168,168,255,0.45)'
                        ],
                        [
                            "eid48",
                            "background-color",
                            1250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(168,168,255,0.45)',
                            'rgba(175,255,190,0.64)'
                        ],
                        [
                            "eid50",
                            "background-color",
                            1500,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(175,255,190,0.64)',
                            'rgba(168,168,255,0.45)'
                        ],
                        [
                            "eid51",
                            "background-color",
                            2250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(168,168,255,0.45)',
                            'rgba(175,255,190,0.64)'
                        ],
                        [
                            "eid52",
                            "background-color",
                            2500,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(175,255,190,0.64)',
                            'rgba(168,168,255,0.45)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Prueba_edgeActions.js");
})("EDGE-2146903");
