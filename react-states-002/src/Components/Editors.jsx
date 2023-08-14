import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function Editors() {
    const [input,setInput] = useState('# Markdown Preview\n# this is header 1\n## this is header 2\n### this is header 3\n\n```\nThis is some code\n```\n![alt](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/180px-Image_created_with_a_mobile_phone.png)\n\nThis is some image\n\n- List 1\n- List 2\n- List 3\n\n');
    const output=(e)=>{
        setInput(e.target.value)
    }
  return (
    <div className='container'>
        <div>
            <textarea cols={58} rows={17} onChange={output} value={input}></textarea>
        </div>
  
        <div className='right'><ReactMarkdown>{input}</ReactMarkdown></div>
     
    </div>
  )
}

export default Editors;