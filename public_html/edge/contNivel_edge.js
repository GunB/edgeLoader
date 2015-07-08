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
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['243px', '336px', '64px', '64px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(103,72,151,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "background-image",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(103,72,151,1.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(72,151,94,1.00)',100]]]
                        ],
                        [
                            "eid16",
                            "background-image",
                            500,
                            500,
                            "linear",
                            "${Ellipse}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(72,151,94,1.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(151,136,72,1.00)',100]]]
                        ],
                        [
                            "eid17",
                            "background-image",
                            1000,
                            500,
                            "linear",
                            "${Ellipse}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(151,136,72,1.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(151,72,72,1.00)',100]]]
                        ],
                        [
                            "eid18",
                            "background-image",
                            1500,
                            500,
                            "linear",
                            "${Ellipse}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(151,72,72,1.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(151,72,151,1.00)',100]]]
                        ],
                        [
                            "eid20",
                            "background-image",
                            2000,
                            500,
                            "linear",
                            "${Ellipse}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(151,72,151,1.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(96,72,151,1.00)',100]]]
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            '30px',
                            '224px'
                        ],
                        [
                            "eid7",
                            "left",
                            500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '224px',
                            '448px'
                        ],
                        [
                            "eid10",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${Ellipse}",
                            '448px',
                            '244px'
                        ],
                        [
                            "eid23",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '244px',
                            '259px'
                        ],
                        [
                            "eid13",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${Ellipse}",
                            '259px',
                            '243px'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            '13px',
                            '302px'
                        ],
                        [
                            "eid8",
                            "top",
                            500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '302px',
                            '230px'
                        ],
                        [
                            "eid9",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${Ellipse}",
                            '230px',
                            '21px'
                        ],
                        [
                            "eid11",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '21px',
                            '136px'
                        ],
                        [
                            "eid12",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${Ellipse}",
                            '136px',
                            '336px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("contNivel_edgeActions.js");
})("EDGE-9221474");
