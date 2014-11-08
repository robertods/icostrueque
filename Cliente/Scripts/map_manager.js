var mapa;

function crearMapa(id_div, clickEvent, dataCallback){
	$("#"+id_div).gmap3({
          map:{
            options:{
              center:[-22.49156846196823, -64.75802349999992],
              zoom:2,
              mapTypeId: google.maps.MapTypeId.ROUTE,
              mapTypeControl: true,
              mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
              },
              navigationControl: true,
              scrollwheel: true,
              streetViewControl: true
            },
            events:{
				click: function(marker, event, context){
					if(typeof(clickEvent)!="undefined"){ clickEvent(id_div, event, dataCallback); }
				}
			}	
          }
        });
	mapa = $("#"+id_div);
	
	//return $("#"+id_div).gmap3("get");
}

function determinarUbicacion(id_div, event, dataCallback){

	var marker_ubicacion = $("#"+id_div).gmap3({get:{name:"marker", tag: ["ubicacion"], all: true}});

	if(marker_ubicacion.length==0){
		$("#"+id_div).gmap3({
			marker:{
				latLng: event.latLng,
				options:{
					draggable:false
					/*,icon:new google.maps.MarkerImage("http://maps.gstatic.com/mapfiles/icon_green" + (isM1 ? "A" : "B") + ".png")*/
				},
				tag: "ubicacion",
				events:{
					click: function(marker, event, context){
						//clickEvent();
					}/*,
					dragend: function(marker){
						marker.setPosition(event.latLng);
						$(dataCallback).val(event.latLng);
					}*/
				}
			}
		});
	}
	else{
		marker_ubicacion[0].setPosition(event.latLng);
	}
	
	$(dataCallback).val(event.latLng);
}

function pedirPosicion(pos) {
   var centro = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
   var mi_mapa = mapa.gmap3('get');
   mi_mapa.setCenter(centro);
   mi_mapa.setZoom(15);
}
 
function geolocalizame(){
	navigator.geolocation.getCurrentPosition(pedirPosicion);
}

function agregarMarcadores(id_div, listaMarcadores, clickEvent){

	$("#"+id_div).gmap3({
		marker:{
            values: listaMarcadores,
            options:{
              draggable: false
            },
            events:{
				click: function(marker, event, context){
					clickEvent();
				}              
            }
        }
	});

}