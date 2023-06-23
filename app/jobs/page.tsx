import { Metadata } from 'next'
import Link from 'next/link'
import JobSearchFilter from '../../components/JobSearchFilter';


export const metadata: Metadata = {
  title: 'All Jobs - Werken bij Picnic',
  description: 'Picnic Recruitment Site',
}



async function getData() {
    const res = await fetch(`https://boards-api.greenhouse.io/v1/boards/teampicnic/jobs?content=true`, { cache: 'no-store' });
    const jobsList = res.json();
    return jobsList;
  }
  
  
export default async function Page() {
        const data = await getData();
        const listings = Object.entries(data.jobs).map((jobs, index) => {
        return jobs[1];
        }
    )
  
  return (
    <div>
        <Link href={'jobs/developer'}>Test Job</Link>
        <JobSearchFilter jobs={listings} />
    </div>
  )
}
