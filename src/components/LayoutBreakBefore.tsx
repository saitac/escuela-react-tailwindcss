
/*

Controlo como una columna o página debe saltar antes de un elemento
Class                   Properties

break-before-auto	    break-before: auto;
break-before-avoid	    break-before: avoid;
break-before-all	    break-before: all;
break-before-avoid-page	break-before: avoid-page;
break-before-page	    break-before: page;
break-before-left	    break-before: left;
break-before-right	    break-before: right;
break-before-column	    break-before: column;

*/

const LayoutBreakBefore = () => {
    return (
        <div className="columns-2">
            <div>UNO</div>
            <div className="break-before-column">DOS</div>
            <div>TRES</div>
            <div>CUATRO</div>
            <div>CINCO</div>
            <div>SEIS</div>
        </div>
    )
}

export default LayoutBreakBefore