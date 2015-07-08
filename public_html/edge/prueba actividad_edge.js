/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
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
                            id: 'contenedor',
                            symbolName: 'contenedor',
                            type: 'rect',
                            rect: ['281px', '118px', '531', '360', 'auto', 'auto'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['192', '375', '747', '104', 'auto', 'auto'],
                            c: [
                            {
                                id: 'linea3',
                                type: 'image',
                                rect: ['0px', '47px', '696px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"linea3.png",'0px','0px']
                            },
                            {
                                id: 'txtverde',
                                type: 'image',
                                rect: ['400px', '0px', '79px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"txtverde.png",'0px','0px']
                            },
                            {
                                id: 'txtrojo',
                                type: 'image',
                                rect: ['668px', '0px', '79px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"txtrojo.png",'0px','0px']
                            },
                            {
                                id: 'txtnaranja',
                                type: 'image',
                                rect: ['534px', '0px', '79px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"txtnaranja.png",'0px','0px']
                            },
                            {
                                id: 'txtmorado',
                                type: 'image',
                                rect: ['0px', '0px', '79px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"txtmorado.png",'0px','0px']
                            },
                            {
                                id: 'txtazul',
                                type: 'image',
                                rect: ['134px', '0px', '79px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"txtazul.png",'0px','0px']
                            },
                            {
                                id: 'tverdeoscuro',
                                type: 'image',
                                rect: ['267px', '0px', '79px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"tverdeoscuro.png",'0px','0px']
                            },
                            {
                                id: 'Btn1',
                                type: 'ellipse',
                                rect: ['0px', '61px', '28px', '28px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(181,151,195,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Btn2',
                                type: 'ellipse',
                                rect: ['134px', '62px', '28px', '28px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(101,189,197,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Btn3',
                                type: 'ellipse',
                                rect: ['267px', '62px', '28px', '28px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(63,169,74,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Btn4',
                                type: 'ellipse',
                                rect: ['401px', '62px', '28px', '28px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(207,212,47,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Btn5',
                                type: 'ellipse',
                                rect: ['534px', '62px', '28px', '28px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(241,170,62,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Btn6',
                                type: 'ellipse',
                                rect: ['668px', '62px', '28px', '28px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(229,89,42,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'Contenedor1',
                            type: 'rect',
                            rect: ['-1000px', '50px', '940px', '305px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_start',
                            type: 'image',
                            rect: ['469px', '521px', '142px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn_start.gif",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1080px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "a": 500
                    },
                    data: [
                        [
                            "eid153",
                            "left",
                            500,
                            500,
                            "easeInQuint",
                            "${Group}",
                            '192px',
                            '1280px'
                        ],
                        [
                            "eid151",
                            "left",
                            500,
                            500,
                            "easeInQuint",
                            "${Contenedor1}",
                            '88px',
                            '-1000px'
                        ],
                        [
                            "eid159",
                            "scaleY",
                            1000,
                            500,
                            "easeInOutSine",
                            "${contenedor}",
                            '0',
                            '1.46071'
                        ],
                        [
                            "eid158",
                            "scaleX",
                            1000,
                            500,
                            "easeInOutSine",
                            "${contenedor}",
                            '0',
                            '1.8842'
                        ]
                    ]
                }
            },
            "contenedor": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '531px', '360px']
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
            "pupup_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [], [], ['-0.0001%', '0%']],
                            rect: ['53px', '32px', '383px', '77px', 'auto', 'auto'],
                            id: 'morado',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/morado.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            rect: ['77px', '166px', '352px', '126px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'descarga',
                            type: 'image',
                            rect: ['574px', '51px', '253px', '199px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/descarga.jpg', '0px', '0px']
                        },
                        {
                            rect: ['467px', '0px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0.23',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        },
                        {
                            rect: ['-467px', '299px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '936px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid8",
                            "left",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '-467px',
                            '0px'
                        ],
                        [
                            "eid147",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${descarga}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "left",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${descarga}",
                            '681px',
                            '574px'
                        ],
                        [
                            "eid148",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${descarga}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '467px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.23',
                            '1'
                        ],
                        [
                            "eid50",
                            "rotateZ",
                            500,
                            750,
                            "linear",
                            "${morado}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid78",
                            "top",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '166px',
                            '133px'
                        ],
                        [
                            "eid68",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${morado}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "pupup_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [], [], ['-0.0001%', '0%']],
                            rect: ['53px', '32px', '383px', '77px', 'auto', 'auto'],
                            id: 'azul',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/azul.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            rect: ['77px', '166px', '352px', '126px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'images',
                            type: 'image',
                            rect: ['575px', '50px', '251px', '201px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/images.jpg', '0px', '0px']
                        },
                        {
                            rect: ['467px', '0px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0.23',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        },
                        {
                            rect: ['-467px', '299px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '936px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid8",
                            "left",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '-467px',
                            '0px'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            500,
                            750,
                            "linear",
                            "${azul}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "left",
                            2000,
                            500,
                            "easeInQuint",
                            "${images}",
                            '682px',
                            '575px'
                        ],
                        [
                            "eid78",
                            "top",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '166px',
                            '133px'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.23',
                            '1'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '467px',
                            '0px'
                        ],
                        [
                            "eid65",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${azul}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "pupup_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [], [], ['-0.0001%', '0%']],
                            rect: ['53px', '32px', '383px', '77px', 'auto', 'auto'],
                            id: 'verde-oscuro',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/verde-oscuro.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            rect: ['77px', '166px', '352px', '126px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'images_1',
                            type: 'image',
                            rect: ['590px', '36px', '221px', '228px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/images%20%281%29.jpg', '0px', '0px']
                        },
                        {
                            rect: ['467px', '0px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0.23',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        },
                        {
                            rect: ['-467px', '299px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '936px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.23',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${verde-oscuro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "left",
                            2000,
                            500,
                            "easeInQuint",
                            "${images_1}",
                            '697px',
                            '590px'
                        ],
                        [
                            "eid78",
                            "top",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '166px',
                            '133px'
                        ],
                        [
                            "eid48",
                            "rotateZ",
                            500,
                            750,
                            "linear",
                            "${verde-oscuro}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '467px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '-467px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "pupup_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [], [], ['-0.0001%', '0%']],
                            rect: ['53px', '32px', '383px', '77px', 'auto', 'auto'],
                            id: 'verde',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/verde.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            rect: ['77px', '166px', '352px', '126px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'images_5',
                            type: 'image',
                            rect: ['571px', '53px', '259px', '194px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/images%20%285%29.jpg', '0px', '0px']
                        },
                        {
                            rect: ['467px', '0px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0.23',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        },
                        {
                            rect: ['-467px', '299px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '936px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid49",
                            "rotateZ",
                            500,
                            750,
                            "linear",
                            "${verde}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.23',
                            '1'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "top",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '166px',
                            '133px'
                        ],
                        [
                            "eid106",
                            "left",
                            2000,
                            500,
                            "easeInQuint",
                            "${images_5}",
                            '678px',
                            '571px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '-467px',
                            '0px'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '467px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${verde}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "pupup_5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [], [], ['-0.0001%', '0%']],
                            rect: ['53px', '32px', '383px', '77px', 'auto', 'auto'],
                            id: 'naranja',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/naranja.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            rect: ['77px', '166px', '352px', '126px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'images_4',
                            type: 'image',
                            rect: ['558px', '62px', '284px', '177px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/images%20%284%29.jpg', '0px', '0px']
                        },
                        {
                            rect: ['467px', '0px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0.23',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        },
                        {
                            rect: ['-467px', '299px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '936px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid8",
                            "left",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '-467px',
                            '0px'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "top",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '166px',
                            '133px'
                        ],
                        [
                            "eid69",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${naranja}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "rotateZ",
                            500,
                            750,
                            "linear",
                            "${naranja}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid102",
                            "left",
                            2000,
                            500,
                            "easeInQuint",
                            "${images_4}",
                            '665px',
                            '558px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '467px',
                            '0px'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.23',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "pupup_6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-90'], [], [], ['-0.0001%', '0%']],
                            rect: ['53px', '32px', '383px', '77px', 'auto', 'auto'],
                            id: 'rojo',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rojo.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            rect: ['77px', '166px', '352px', '126px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'images_2',
                            type: 'image',
                            rect: ['574px', '50px', '252px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/images%20%282%29.jpg', '0px', '0px']
                        },
                        {
                            rect: ['467px', '0px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0.23',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        },
                        {
                            rect: ['-467px', '299px', '936px', '2px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,151,195,1)', [0, [['rgba(255,255,255,0.00)', 18], ['rgba(81,44,139,1.00)', 51], ['rgba(255,255,255,0.00)', 84]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '936px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid8",
                            "left",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '-467px',
                            '0px'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${RectangleCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${images_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "rotateZ",
                            500,
                            750,
                            "linear",
                            "${rojo}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid104",
                            "left",
                            2000,
                            500,
                            "easeInQuint",
                            "${images_2}",
                            '681px',
                            '574px'
                        ],
                        [
                            "eid78",
                            "top",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '166px',
                            '133px'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.23',
                            '1'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '467px',
                            '0px'
                        ],
                        [
                            "eid70",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${rojo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1250,
                            750,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("prueba%20actividad_edgeActions.js");
})("EDGE-14179860");
