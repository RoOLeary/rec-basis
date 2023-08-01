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
  const slug = params.slug ?  params.slug : 'home'
  // fetch data
  let title;
  const post = await fetch(`https://picnic-dev.app/careers/wp-json/wp/v2/spc_page?slug=${slug}`).then((res) => res.json())
  if(post == undefined){
    title = 'GENERiC'
  }
  return {
    title: `${post.data.title? post.data.title : title} - Werken bij Picnic`,
    description: 'A generic inner page',
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    }
   
  }
}


async function getAPIData(slug) {
  const res = await fetch(`https://picnic-dev.app/careers/wp-json/wp/v2/spc_page?slug=${slug}`, { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}



export default async function Page({ params, searchParams}: Props) {
  console.log(params.slug)
  const apiContent = await getAPIData(params.slug);
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

  const slug = params.slug

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      
      Basic Page. Slug/instance: <code>{`${slug}`}</code>
    </main>
  )
}





 

