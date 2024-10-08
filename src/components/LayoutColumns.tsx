
/*

Controla el número de columnas de un elemento
clase       propiedad
columns-1	columns: 1;
columns-2	columns: 2;
columns-3	columns: 3;
columns-4	columns: 4;
columns-5	columns: 5;
columns-6	columns: 6;
columns-7	columns: 7;
columns-8	columns: 8;
columns-9	columns: 9;
columns-10	columns: 10;
columns-11	columns: 11;
columns-12	columns: 12;
columns-auto	columns: auto;
columns-3xs	columns: 16rem;
columns-2xs	columns: 18rem;
columns-xs	columns: 20rem;
columns-sm	columns: 24rem;
columns-md	columns: 28rem;
columns-lg	columns: 32rem;
columns-xl	columns: 36rem;
columns-2xl	columns: 42rem;
columns-3xl	columns: 48rem;
columns-4xl	columns: 56rem;
columns-5xl	columns: 64rem;
columns-6xl	columns: 72rem;
columns-7xl	columns: 80rem;

*/


const LayoutColumns = () => {
    return(
        <div className="columns-1 sm:columns-2 md:columns-3 bg-slate-500">
            <div className="bg-amber-300">DIV UNO</div>
            <div className="bg-amber-300">DIV DOS</div>
            <div className="bg-amber-300">DIV TRES</div>
            <div className="bg-amber-300">DIV CUATRO</div>
            <div className="bg-amber-300">DIV CINCO</div>
            <div className="bg-amber-300">DIV SEIS</div>
        </div>
    )
}

export default LayoutColumns