'use client';


type videoProps = {
    content?: string,
    videoUrl?: string
}


export const Video = ({ content, videoUrl }:videoProps) => {
  
    return(
        <section className="bg-biege">
          <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
              <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-center">A Video Title</h1>
              <p className="mt-2 max-w-2xl mx-auto">Some intro text</p>
              <br />
              <div className="video-container"><iframe className="video" width="560" height="315" src={videoUrl ? videoUrl : "https://www.youtube.com/embed/fOBrFP0WKfo"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="" priority="true"></iframe></div>
            </div>
          </div>
        </section>
    )

}