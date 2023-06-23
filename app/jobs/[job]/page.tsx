import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next'
import JobSearchFilter from '../../../components/JobSearchFilter';


type Props = {
  params: { job: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.job;
  // // fetch data
  // const post = await fetch(`https://picnic-dev.app/careers/wp-json/wp/v2/spc_page?slug=${slug}`).then((res) => res.json())
  // mucky, but deal with it. 
  const capitalized = slug.charAt(0).toUpperCase()+ slug.slice(1)
  
  return {
    title: `${capitalized} Vacancy - Werken bij Picnic`,
    description: `${capitalized} Vacancy bij Picnic Technologies`,
    creator: '@picnic',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
  },
  alternates: {
      canonical: 'https://picnic.app',
      languages: {
        'en': 'https://picnic.app/en-GB',
        'de-DE': 'https://picnic.app/de-DE',
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
      url: `https://localhost:3000/jobs/${slug}`, 
      title: `${capitalized} Vacancy - Werken bij Picnic`,
      description: `${capitalized} Vacancy bij Picnic Technologies`,
      siteName: "Picnic Technologies"},
      images: ['/some-specific-page-image.jpg'],
    }
}


const Page = ({ params }) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl"> {params.job.charAt(0).toUpperCase() + params.job.slice(1) } post here. Check the metadata</div>
    </div>
  )
}

export default Page