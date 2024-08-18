
/*

establece el ancho maximo de un elemento, con el proposito de establecer el ancho mínimo del punto de quiebre
Class               Breakpoint              Properties
container	        None	                width: 100%;
                    sm (640px)	            max-width: 640px;
                    md (768px)	            max-width: 768px;
                    lg (1024px)	            max-width: 1024px;
                    xl (1280px)	            max-width: 1280px;
                    2xl (1536px)	        max-width: 1536px;



*/


const LayoutContainer = () => {
    return(
        <div
            className="bg-red-400 md:conainer"
        >
            <p>Párrafo Uno</p>
            <p>Párrafo Dos</p>
        </div>
    )
}

export default LayoutContainer