import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link';
import Hero from '../../components/Hero'
import Shortcut from '../../components/Shortcut';
import TextMedia from '../../components/TextMedia';
import Component from '../../components/Component';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  // fetch data
  const post = await fetch(`https://picnic-dev.app/careers/wp-json/wp/v2/spc_page?slug=${slug}`).then((res) => res.json())
  // console.log(post);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: 'Teams - Werken bij Picnic',
    description: 'Desc for teams page',
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    }
   
  }
}


async function getAPIData() {
  const res = await fetch('https://picnic-dev.app/careers/wp-json/wp/v2/spc_page?slug=home', { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}



export default async function Page({ params, searchParams}: Props) {
  
  const apiContent = await getAPIData();
  const output = apiContent.data.content ? apiContent.data.content : null;
  // console.log(output);
  const renderComps = Object.entries(output).map((o, index) => {
    
    const { type, data } = o[1];
    switch (type) {
      case 'text':
        return (
          <Hero key={index} type={type} name={type} data={data} />
      );
      case 'calculator':
        return (
          <Shortcut key={index} type={type} name={type} data={data} />
      );
      case 'row':
        return (
          <Component key={index} type={type} name={type} data={data} />
      );
  
      default:
        return (
            <></>
        );
      }
      
      return ;
  })  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      
      <section className="relative h-1/2 w-full flex flex-col items-center justify-center text-center text-white py-20 px-3 md:py-40">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src="../assets/videos/amsterdam.mp4" type="video/mp4" autoPlay muted loop></video>
            </div>
            <div className="video-content space-y-2">
                <h1 className="text-5xl font-extrabold mb-2">Tech Vacancies</h1>
                {/* {pageData[0].acf.page_intro_text ? 
                <p className="text-2xl font-bold mb-2"dangerouslySetInnerHTML={{__html: pageData[0].acf.page_intro_text}} /> : null } */}
            </div>
      </section>
      <TextMedia />  
    </main>
  )
}





 

