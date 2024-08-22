
/* 

Controla el comportamiento del contenido alrededor de un elemento

Class           Properties
float-start	    float: inline-start;
float-end	    float: inline-end;
float-right	    float: right;
float-left	    float: left;
float-none	    float: none;


*/


const LayoutFloats = () => {
    return(
        <>
            <div className="bg-amber-700 min-w-72 float-right">
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore quasi est, porro reprehenderit harum reiciendis saepe obcaecati debitis aliquam quae. Similique repellat asperiores nisi quidem doloremque nostrum distinctio earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam hic earum ducimus, unde repudiandae magnam? Non, asperiores neque maxime alias magnam, quae, quisquam aut animi itaque eligendi voluptate incidunt!</p>

            <div className="bg-amber-700 min-w-72 float-left">
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore quasi est, porro reprehenderit harum reiciendis saepe obcaecati debitis aliquam quae. Similique repellat asperiores nisi quidem doloremque nostrum distinctio earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam hic earum ducimus, unde repudiandae magnam? Non, asperiores neque maxime alias magnam, quae, quisquam aut animi itaque eligendi voluptate incidunt!</p>

            <div className="bg-amber-700 min-w-72 float-none">
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore quasi est, porro reprehenderit harum reiciendis saepe obcaecati debitis aliquam quae. Similique repellat asperiores nisi quidem doloremque nostrum distinctio earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam hic earum ducimus, unde repudiandae magnam? Non, asperiores neque maxime alias magnam, quae, quisquam aut animi itaque eligendi voluptate incidunt!</p>

            <div className="bg-amber-700 min-w-72 float-start">
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore quasi est, porro reprehenderit harum reiciendis saepe obcaecati debitis aliquam quae. Similique repellat asperiores nisi quidem doloremque nostrum distinctio earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam hic earum ducimus, unde repudiandae magnam? Non, asperiores neque maxime alias magnam, quae, quisquam aut animi itaque eligendi voluptate incidunt!</p>

            <div className="bg-amber-700 min-w-72 float-end">
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
                <span className="block">HOLA</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore quasi est, porro reprehenderit harum reiciendis saepe obcaecati debitis aliquam quae. Similique repellat asperiores nisi quidem doloremque nostrum distinctio earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam hic earum ducimus, unde repudiandae magnam? Non, asperiores neque maxime alias magnam, quae, quisquam aut animi itaque eligendi voluptate incidunt!</p>


        </>
    )
}

export {
    LayoutFloats
}