/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

debugging = true;

window.EdgeLoadder ? true : window.EdgeLoadder = {
    containers: {
        "O_0": {
            "type": "html", //De esto depende el tipo de carga que se realizará
            "selector_load": "plantilla", //Identificador único de carga para ubicar los datos
            "default_load": null //elemento en el arreglo de contenedores que será cargado por defecto
        }
    },
    actual_slide: [
    ],
    base_slide: "O_0",
    load_containers: function (precontainers) {
        this.containers = $.extend({}, this.containers, precontainers);
        return this;
    },
    data: {},
    INIT: function () {
        console.log(this.containers);
        this.goto_slide([this.containers[this.base_slide].default_load]);
    },
    load_edge: function (selector, objEdgeData) {

        var element = $("<div/>", {id: "Stage"+Math.random(), class: objEdgeData.class});
        $(selector).html("");
        $(selector).append(element);

        AdobeEdge.loadComposition(objEdgeData.id, objEdgeData.class, {
            scaleToFit: "both",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "900px",
            height: "600px"
        }, {dom: []}, {dom: []});
    },
    goto_slide: function (id_slides) {
        /*
         * id_slides es  un array que muestra en orden de afuera hacia adentro
         * el contenedor que debe cargarse
         */
        debugging ? console.log(id_slides) : false;
        var cont_same = -1;
        var selecter_load = this.containers[this.base_slide].selector_load;

        for (var i = 0; i < this.actual_slide.length; i++) {
            if (this.actual_slide[i] === id_slides[i]) {
                cont_same = i;
                selecter_load = this.containers[this.actual_slide[i]].selector_load;
            } else {
                break;
            }
        }

        for (var i = cont_same + 1; i < id_slides.length; i++) {
            var slide = this.containers[id_slides[i]];
            if (isEmpty(slide)) {
                console.error(id_slides[i], i, "NOT FOUND", "400");
                return;
            }

            if (slide.type === "edge") {
                this.load_edge(selecter_load, slide);
            }

            if (!isEmpty(slide.default_load)) {
                id_slides.splice(i, 0, slide.default_load);
                selecter_load = slide.selector_load;
            }
        }

        this.actual_slide = id_slides;
    }
};