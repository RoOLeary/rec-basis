
type componentProps = {
    type?: string,
    name?:string,
    data?: object
}

const Component = ({type, name, data }:componentProps) => {
    // console.log(data.columns[0].components);
    return(
        <div className={name ? name : 'generic component'}>
            <p>Generic Component Placeholder. Add content or go away</p>
        </div>
    )
}

export default Component