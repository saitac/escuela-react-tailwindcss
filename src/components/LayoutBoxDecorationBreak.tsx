/*

Se utiliza para controlar como deberian ser renderizados los elementos que contienen muchas línes, columnas o páginas

Class                   Properties

box-decoration-clone	box-decoration-break: clone;
box-decoration-slice	box-decoration-break: slice;

*/


const LayoutBoxDecorationBreak = () => {
    return(
        <div>
            <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                Hello<br />
                World<br/>
                Salvador<br/>
            </span>

            <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                Hello<br />
                World<br/>
                Salvador
            </span>
        </div>
    )
}

export default LayoutBoxDecorationBreak