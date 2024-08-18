
/*


aspect-auto	    aspect-ratio: auto;
aspect-square	aspect-ratio: 1 / 1;
aspect-video	aspect-ratio: 16 / 9;

*/


const LayoutAspectRatio = () => {
    return(
        <>
            <iframe
                className="aspect-video hover:aspect-video"
                width="789" height="444"
                src="https://www.youtube.com/embed/8joXlwKMkrk"
            ></iframe>
            
        </>
    )
}

export default LayoutAspectRatio