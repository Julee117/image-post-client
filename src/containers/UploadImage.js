import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

class UploadImage extends Component {

  uploadFile = files => {
    const image = files[0]
    const cloudName = process.env.REACT_APP_CLOUD_NAME
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
    const timestamp = Date.now()/1000
    const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET
    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+process.env.REACT_APP_END_STR
    const signature = sha1(paramsStr)

    const params = {
      'api_key': process.env.REACT_APP_KEY,
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }

    let uploadRequest = superagent.post(url);
    uploadRequest.attach('file', image);

    Object.keys(params).forEach(key => {
      uploadRequest.field(key, params[key])
    });

    uploadRequest.end((err, resp) => {
      if (err) {
        alert(err);
        return
      }
      const url = resp.body.secure_url
      this.props.image({imageUrl: url})
    });
  };

  render() {
    return (
      <div>
        <Dropzone
          className="dropZoneBox"
          multiple={false}
          accept="image/*"
          onDrop={this.uploadFile.bind(this)} >
          <i className="fa fa-cloud-upload fa-3x" aria-hidden="true"></i>
          <p>Drop an image or click to select a file to upload</p>
        </Dropzone>
      </div>
    );
  };
}

export default UploadImage;
