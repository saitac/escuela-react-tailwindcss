/*

Permite especificar el tipo de despliegue de cajas de un elemento

Class               Properties

block	            display: block;
inline-block	    display: inline-block;
inline	            display: inline;
flex	            display: flex;
inline-flex	        display: inline-flex;
table	            display: table;
inline-table	    display: inline-table;
table-caption	    display: table-caption;
table-cell	        display: table-cell;
table-column	    display: table-column;
table-column-group	display: table-column-group;
table-footer-group	display: table-footer-group;
table-header-group	display: table-header-group;
table-row-group	    display: table-row-group;
table-row	        display: table-row;
flow-root	        display: flow-root;
grid	            display: grid;
inline-grid	        display: inline-grid;
contents	        display: contents;
list-item	        display: list-item;
hidden	            display: none;


** usar inline; inline-block y block para controlar el flujo de texto y elemenos

** flow-root; permite crear un bloque a nivel de elemento con su propio formato de contexto

** flex; permite crear un bloque tipo flex container

*/


const LayoutDisplay = () => {
    return(
        <>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo excepturi ab adipisci magni mollitia iusto est iure molestias, laboriosam deleniti autem fugit accusamus nostrum cum sit, eum tenetur similique!</p>
                <span className="block">UNO</span>
                <span className="inline-block">DOS<span>DOS PUNTO UNO</span></span>
                <span className="block">TRES</span>
                <span className="block">CUATRO</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis id voluptatibus recusandae minima voluptas molestiae itaque consequuntur sequi, ipsa eligendi incidunt, accusantium quod et quam, fugiat nam optio distinctio suscipit.</p>
            </div>

            <div className="p-4">
                <div className="flow-root">
                    <div className="my-4">Well, let me tell you something, ...</div>
                </div>
                <div className="flow-root">
                    <div className="my-4">Sure, go ahead, laugh if you want...</div>
                </div>
            </div>

            <div className="bg-slate-500 p-2 w-auto flex items-center">
                <div className="bg-orange-500 m-2">UNO</div>
                <div className="bg-orange-500 m-2">
                    <strong>Andrew Alfred</strong>
                    <span>Technical advisor</span>
                </div>
            </div>
        </>
        
    )
}

export default LayoutDisplay