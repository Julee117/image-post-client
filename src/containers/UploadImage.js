import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';

class UploadImage extends Component {
  uploadFile = files => {
    const image = files[0]
    const cloudName = 'du8aeeumk'
    const url = 'https://api/cloudinary.com/v1_1/'+cloudName+'/image/upload'
    const timestamp = Date.now()/1000
    const uploadPreset = 'kdbpev7a'
    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'WLuokBLxM5t5AL2uv_Kj6EQLBlc'
    const signature = sha1(paramsStr)

    const params = {
      'api_key': '965958725763533',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }
  }

  render() {
    return (
      <div className="dropZoneBox">
        <Dropzone onDrop={this.uploadFile.bind(this)}>
          <p>Drop an image or click to select a file to upload</p>
        </Dropzone>
      </div>
    );
  };
}

export default UploadImage;
