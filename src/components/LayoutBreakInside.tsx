/*

controla como una columa o página debería saltar dentro de un elemento.

Class                       Properties

break-inside-auto	        break-inside: auto;
break-inside-avoid	        break-inside: avoid;
break-inside-avoid-page	    break-inside: avoid-page;
break-inside-avoid-column	break-inside: avoid-column;


*/


const LayoutBreakInside = () => {
    return(
        <div>
            <div className="columns-2">
                <div>UNO</div>
                <div className="break-inside-avoid-column">DOS</div>
                <div>TRES</div>
                <div>CUATRO</div>
                <div>CINCO</div>
                <div>SEIS</div>
            </div>
        </div>
    )
}

export default LayoutBreakInside