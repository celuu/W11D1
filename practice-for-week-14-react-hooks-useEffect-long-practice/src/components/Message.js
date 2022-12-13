import { useEffect, useState } from "react";

function Message({ size, featherCount }) {

  const[message, setMessage] = useState('');  
  const[sizeClass, setSizeClass] = useState('');

   useEffect(() => {
     console.log("PictureDisplay size", size);
     let cname = "";
     switch (size) {
       case "m":
         cname = "medium";
         break;
       case "l":
         cname = "large";
         break;
       case "xl":
         cname = "xlarge";
         break;
       default:
         cname = "small";
         break;
     }
     setSizeClass(cname);
   }, [size]);

  useEffect(() => {
    if(featherCount <= 0){
      setMessage('Oh my! Your bird is streaking!!')
    } else if (featherCount >= 10) {
      setMessage('Looks delicious!');
    } else {
      setMessage('Could use a couple more..');
    }
  }, [featherCount])


  useEffect(() => {
    console.log('Message', size);
  }, [size]);

  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  )
}

export default Message;