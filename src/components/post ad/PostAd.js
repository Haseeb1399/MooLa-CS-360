import React from 'react';
import Select from "react-select";
import "./PostAd.css"
import uploadimage from "../.././images/uploadimage.png"
import newimages from "../.././images/cow1.jpg"

function PostAd() {
  const sexes = [
    { value: 1, label: "Male", color: "#498205" },
    { value: 2, label: "Female", color: "#498205" },
    { value: 3, label: "Other", color: "#498205" },
  ];

  const Img = ({ success }) => (
    <img
      style={{ width: '48px', height: '48px', position: 'absolute' }}
      src={success ? newimages  : uploadimage}
    />
  );

return (
  <div className='App'>
    <div className='First'>
      <div>
        <label className="logintext">Sex</label>
      </div>
      <div>
        <Select options={sexes}/>
      </div>

      <div>
        <label className="logintext">No. of Teeth</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required"
          type="number"
        />
      </div>  

      <div>
        <label className="logintext">Weight</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required (KG)"
          type="number"
        />
      </div> 

      <div>
        <label className="logintext">Breed</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required"
          type="text"
        />
      </div> 
    </div>

    <div className='Second'>
      <div>
        <label className="logintext">Age</label>
      </div>
      <div>
        <input className='boxinput' placeholder="Required (Years)"
          type="number"
        />
      </div>

      <div>
        <label className="logintext">Injuries</label>
      </div>
      <div>
        <input className='boxinput' placeholder='Optional'
          type="text"
        />
      </div> 

      <div>
        <label className='logintext'>Color</label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          Black
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          White
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          Brown
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          Red
        </label>
      </div>
      <div>
        <label >
          <input
            type="checkbox"
          />
          Other
        </label>
      </div>
      <div className='buttonpos'><button className="loginbutton">Post Ad</button></div>
        
    </div>
      
    <div className='Third'>
      <div><img className='upload' src={uploadimage}/></div>
      <div><input className='custom-file-input' type="file" multiple accept="image/*"/></div>
    </div>
  </div>
);
};

export default PostAd;