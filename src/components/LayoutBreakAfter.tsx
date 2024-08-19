
/*
Controla como una columna o página debería saltar después de un elemento.

Class                   Properties

break-after-auto	    break-after: auto;
break-after-avoid	    break-after: avoid;
break-after-all	        break-after: all;
break-after-avoid-page	break-after: avoid-page;
break-after-page	    break-after: page;
break-after-left	    break-after: left;
break-after-right	    break-after: right;
break-after-column	    break-after: column;

*/

const LayoutBreakAfter = () => {
    return(
        <div className="columns-2">
            <div>UNO</div>
            <div className="break-after-column">DOS</div>
            <div>TRES</div>
            <div>CUATRO</div>
            <div>CINCO</div>
            <div>SEIS</div>
        </div>
    )
}

export default LayoutBreakAfter