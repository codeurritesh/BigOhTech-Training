import './ImageContainer.css'
import { apiType } from '../../datatypes/api-type';
import Card from './Card';

type Props = {
  data: apiType
}
const ImageContainer = (props:Props) => {

  return (
    <section id="image-container">
      {
        props.data?.map((item)=>{
          return <Card author={item.author} id={item.id} download_url={item.download_url} url={item.url} height={item.height} width={item.width}/>
        })
      }
    </section>
  )
}

export default ImageContainer