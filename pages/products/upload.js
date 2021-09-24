import { useForm } from "react-hook-form";
import { useState } from "react";

function Upload() {
  const [value, setState] = useState("");
  const uploadFile = async (e) => {
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "tienda");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/abmontero/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setState(file.secure_url);
    console.log(file.secure_url);
  };

  return (
    <form
      onSubmit={async (e) => {
        // Stop the form from submitting
        e.preventDefault();
        // call the mutation
        const res = await createItem();
        // change them to the single item page
        console.log(res);
      }}
    >
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            type="file"
            id="file"
            name="file"
            placeholder="Upload an image"
            required
            onChange={uploadFile}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Url</label>
        <div className="control">
          <input
            type="text"
            id="url"
            name="url"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

export default Upload;
