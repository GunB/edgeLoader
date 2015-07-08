/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Btn1}", "click", function(sym, e) {
         // Contenedor del contenido
         sym.$("Contenedor1").empty();
         // simbolo del recurso
         sym.createChildSymbol("pupup_1", "Contenedor1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Btn2}", "click", function(sym, e) {
         // Contenedor del contenido
         sym.$("Contenedor1").empty();
         // simbolo del recurso
         sym.createChildSymbol("pupup_2", "Contenedor1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Btn3}", "click", function(sym, e) {
         // Contenedor del contenido
         sym.$("Contenedor1").empty();
         // simbolo del recurso
         sym.createChildSymbol("pupup_3", "Contenedor1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Btn4}", "click", function(sym, e) {
         // Contenedor del contenido
         sym.$("Contenedor1").empty();
         // simbolo del recurso
         sym.createChildSymbol("pupup_4", "Contenedor1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Btn5}", "click", function(sym, e) {
         // Contenedor del contenido
         sym.$("Contenedor1").empty();
         // simbolo del recurso
         sym.createChildSymbol("pupup_5", "Contenedor1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Btn6}", "click", function(sym, e) {
         // Contenedor del contenido
         sym.$("Contenedor1").empty();
         // simbolo del recurso
         sym.createChildSymbol("pupup_6", "Contenedor1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_start}", "click", function(sym, e) {
         sym.play("a");

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //yinet
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'contenedor'
   (function(symbolName) {   
   
   })("contenedor");
   //Edge symbol end:'contenedor'

   //=========================================================
   
   //Edge symbol: 'pupup_1'
   (function(symbolName) {   
   
   })("pupup_1");
   //Edge symbol end:'pupup_1'

   //=========================================================
   
   //Edge symbol: 'pupup_2'
   (function(symbolName) {   
   
   })("pupup_2");
   //Edge symbol end:'pupup_2'

   //=========================================================
   
   //Edge symbol: 'pupup_3'
   (function(symbolName) {   
   
   })("pupup_3");
   //Edge symbol end:'pupup_3'

   //=========================================================
   
   //Edge symbol: 'pupup_4'
   (function(symbolName) {   
   
   })("pupup_4");
   //Edge symbol end:'pupup_4'

   //=========================================================
   
   //Edge symbol: 'pupup_5'
   (function(symbolName) {   
   
   })("pupup_5");
   //Edge symbol end:'pupup_5'

   //=========================================================
   
   //Edge symbol: 'pupup_6'
   (function(symbolName) {   
   
   })("pupup_6");
   //Edge symbol end:'pupup_6'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-14179860");