import React, {useState} from 'react';
import ProgressBar from './ProgressBar';


const Uploadform = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    
    const ChangeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else{
            setFile(null);
            setError('Please select an image file, png or jpg.')
        }
    }

return (
    <form>
        <p>Upload your memories here.</p>
        <label>
            <input  type='file' onChange={ChangeHandler} />
            <span>+</span>
        </label>
            <div className='output'>
                {error && <div className='error'> {error}</div>}
                { file && <div> {file.name}</div> }
                { file && <ProgressBar file={file} setFile={setFile} />  }
            </div>
        </form>
    )
}
export default Uploadform;