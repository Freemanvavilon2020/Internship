import React, { useState, useRef } from 'react';
import './App.css';
import cloudComputing from "./cloud-computing.svg"

function App() {
  const [dropAreaHighlighted, setDropAreaHighlighted] = useState(false)
  const [categoryIcon, setCategoryIcon] = useState(null)
  const [categoryFileName, setCategoryFileName] = useState('')
  const [categoryFileData, setCategoryFileData] = useState(null)
  const fileInputRef = useRef()

  const handleHighlight = (event) => {
    event.preventDefault()
    event.stopPropagation()

    setDropAreaHighlighted(true)
  }

  const handleUnhighlight = (event) => {
    event.preventDefault()
    event.stopPropagation()

    setDropAreaHighlighted(false)
  }

  const handleLoadFile = (file) => {
    if (file) {
      const fileName = file.name || '';

      const reader = new FileReader();
      reader.onload = (e) => {
        setCategoryFileName(fileName)
        setCategoryIcon(file)
        setCategoryFileData(e.target.result)
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSelectFile = () => {
    const file = fileInputRef.current && fileInputRef.current.files[0];
    handleLoadFile(file)
  }

  const handleDropFile = (event) => {
    event.preventDefault()
    event.stopPropagation()

    let dt = event.dataTransfer
    let files = dt.files

    const file = files[0];
    handleLoadFile(file)
  }

  const handleUploadCategoryIcon = () => fileInputRef.current.click()


  return (
    <div className="App">
      <div
        id="drop-area"
        className="display-names"
      >
					<span className="display-names__title">
						{'icon'}:
					</span>
        <div
          className={`drop-img ${dropAreaHighlighted ? 'highlighted' : ''}`}
          onDrop={(event) => {
            handleUnhighlight(event)
            handleDropFile(event)
          }}
          onDragEnter={handleHighlight}
          onDragOver={handleHighlight}
          onDragLeave={handleUnhighlight}
        >
          <div>
            {categoryFileName === ''
              ? (
                <span
                  className="drop-text"
                >
										<img
                      src={cloudComputing}
                      width={16}
                      alt=""
                    />
										.jpg .png drop files here or
									</span>
              )
              : categoryFileName
            }
          </div>
        </div>
        <input
          className="hidden"
          ref={fileInputRef}
          onChange={handleSelectFile}
          type="file"
          accept={"image/jpeg,image/jpg,image/png,image/gif"}
        />
        <span
          className="add-img-file"
          onClick={handleUploadCategoryIcon}
        >
						{'chooseFile'}
					</span>
      </div>

    </div>
  );
}

export default App;
