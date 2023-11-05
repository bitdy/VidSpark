interface Props {
    top?  : string ,
    left? : string ,
    bottom? : string ,
    right? : string ,
    backgroundColor : string
}
const Circle = ({ top, left, bottom, right, backgroundColor } : Props) => {
    return (
      <div
        style={{ top, left, bottom, right, backgroundColor }}
        className="circle"
      />
    );
  };
  
  export default Circle;