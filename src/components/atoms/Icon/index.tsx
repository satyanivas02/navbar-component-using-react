interface IconProps{
    src: string;
    alt: string;
    height: string;
    width?: string;
}
const Icon: React.FC<IconProps>=({src,alt, height, width})=>{
    return(
        <img src={src} alt = {alt} height={height} width={width}/>
    );
} 
export default Icon;