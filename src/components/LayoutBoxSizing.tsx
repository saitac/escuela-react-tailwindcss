
/*

Utilizado para controlar como el navegador debería calcular el tamaño total de un elemento

Class       Properties

box-border	box-sizing: border-box;
box-content	box-sizing: content-box;


box-border le indica al navegador que incluya los bordes y el padding al tamaño del elemento
un elemento de 100px por 100px con 2px de borde y 4px de padding en todos los lados, se renderizará como
un elemento de 100px por 100px con un área interna de 88px por 88px

box-content le indica al navegador que incluya tanto el borde como el padding al tamaño del elemento
un elemento de 100px por 100px con 2px de borde y 4px de padding en todos sus lados, se renderizará como 112px por 112px con
un área interna de 100px por 100px

*/

const LayoutBoxSizing = () => {
    return(
        <>
            <div className="box-border bg-slate-500 h-32 w-32 border-4 p-4">UNO</div>
            <div className="box-content bg-slate-500 h-32 w-32 border-4 p-4">UNO</div>
        </>
    )
}

export default LayoutBoxSizing