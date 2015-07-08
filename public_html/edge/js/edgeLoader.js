/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


debugging = false;

window.EdgeLoadder ? true : window.EdgeLoadder = {
    containers: {
        "O_0": {
            "type": "html", //De esto depende el tipo de carga que se realizará
            "id": "plantilla", //Identificador único de carga para ubicar los datos
            "default_load": "" //Dato
        }
    },
    load_containers: function (precontainers) {
        this.containers = $.extend({}, this.containers, precontainers);
    },
    data: {},
    load_data: function (predata) {
        
    }

};