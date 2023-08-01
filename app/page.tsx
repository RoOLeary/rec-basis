import { Metadata } from 'next'
import Link from 'next/link';
import Hero from './../components/Hero'
import Shortcut from './../components/Shortcut';
import TextMedia from './../components/TextMedia';
import Component from './../components/Component';


export const metadata: Metadata = {
    title: `Werken bij Picnic`,
    description: `Jobs and Careers with Picnic Technologies`,
    keywords: `Online Supermarket, App, Shopping, Groceries`,
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    alternates: {
        canonical: 'https://picnic.app',
        languages: {
          'nl': 'https://picnic.app/nl-NL',
          'de': 'https://picnic.app/de-DE',
          'fr': 'https://picnic.app/fr-FR',
          'en': 'https://picnic.app/en-GB',
        },
        media: {
          'only screen and (max-width: 600px)': 'https://picnic.app/mobile',
        },
        types: {
          'application/rss+xml': 'https://picnic.app/rss',
        },
    },
    openGraph: { 
        type: "website", 
        url: `https://picnic.app`, 
        title: `Werken bij Picnic`,
        description: `Jobs and Careers with Picnic Technologies`,
        siteName: "Picnic Technologies",
        images: ['/some-specific-page-image.jpg'],
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
  const apiContent = await getAPIData('home');
  const output = apiContent.data.content ? apiContent.data.content : null;
  // console.log(output);
  const renderComps = Object.entries(output).map((o, index) => {
    
    const { type, data } = o[1];
    switch (type) {
      case 'row':
        return (
          <Hero key={index} type={type} name={type} data={o[1].data} />
      );
      case 'calculator':
        return (
          <Shortcut key={index} type={type} name={type} data={o[1].data} />
      );
    
      case 'text':
        return (
          <Component key={index} type={type} name={type} data={data} />
      );
  
      default:
        return (
            <>Component not found</>
        );
      }
      
      return ;
  })  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      {/* {renderComps} */}
      <Shortcut />
    </main>
  )
}





 

