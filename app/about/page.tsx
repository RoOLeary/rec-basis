import { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = 'about'
 
  // fetch data
  const post = await fetch(`https://picnic-dev.app/careers/wp-json/wp/v2/spc_page?slug=${slug}`).then((res) => res.json())
 
  return {
    title: `${post.data.title} - Werken bij Picnic`,
    description: `All about Picnic Technologies`,
    openGraph: { 
        type: "website", 
        url: `https://localhost:3000/about`, 
        title: `About us! Werken bij Picnic`,
        description: `All about Picnic Technologies`,
        siteName: "Picnic Technologies"},
        images: ['/some-specific-page-image.jpg'],
    }
}


const About = ({ params, searchParams }: Props) => {
    return (
      <div className="mx-auto max-w-7xl w-full py-10 px-4"> About here. Check the metadata</div>
    )
  }
  
export default About