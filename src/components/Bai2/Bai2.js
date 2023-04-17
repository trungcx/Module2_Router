import { useState } from "react";

function Bai2() {
    
    const [content, setContent] = useState('Nihongo ga omoshiroi')
    const [toggle, setToggle] = useState(false);
    let changeContent = ()=>{
        toggle == false ? setContent('kanji ga taberenai') : setContent('Nihongo ga omoshiroi')
        setToggle(!toggle);
    }
    return ( 
        <>
        <div>
        <h3>Bai2 :Hiển thị nội dung động với nút bấm.</h3>
        <div>{content}</div> 
        <button onClick={changeContent}>Clik me</button>
        </div>
        
        </>
        
     );
}

export default Bai2;