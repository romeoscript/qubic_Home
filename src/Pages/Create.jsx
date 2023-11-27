import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";

const Create = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file && file.type.substr(0, 5) === "image") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl("");
      }
      setFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await fetch(
        `https://nftapi-production-405a.up.railway.app/blog`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create Blog post.");
      }

      const data = await response.json();
      Swal.fire({
        icon: "success",
        title: "Blog post created successfully!",
      });

      setFile(null);
      setPreviewUrl("");
      setTitle("");
      setContent("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Creation failed: ${error.message}`,
      });
    }
  };

  return (
    <>
      <h2 className="text-center font-bold text-3xl text-white">
        {" "}
        Create Blog Post
      </h2>
      <section className="flex justify-center items-center flex-cols md:w-[50%] m-auto p-[3rem]">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="form-control w-full my-[2rem] ">
            <label className="label">
              <span className="label-text text-white">
                Image <span className="text-[red]">*</span>
              </span>
            </label>

            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file"
              name="image"
              accept="image/*"
            />
            {file ? (
              <label htmlFor="file" className="block">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-64 h-64 object-cover border rounded-lg cursor-pointer"
                />
              </label>
            ) : (
              <label
                htmlFor="file"
                className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-100 hover:text-white"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.7,5.3l-1.9-2c-0.2-0.2-0.5-0.3-0.7-0.3H6c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V6C15,5.7,15.9,5.5,16.7,5.3z M14,7v2h-4V7H14z M14,13v2h-4v-2H14z M10,7v2H6V7H10z M10,13v2H6v-2H10z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Select a file
                </span>
              </label>
            )}
          </div>
          <div className="form-control md:w-full my-[2rem]">
            <label className="label">
              <span className="label-text text-white">
                Title <span className="text-[red]">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-white">
                {" "}
                Content <span className="text-[red]">*</span>
              </span>
            </label>

            
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={handleDescriptionChange}
            />
            <div>
                
            </div>
          </div>
          
          <br /> <br />
          <button className="btn btn-outline btn-success" type="submit">
            {" "}
            Create blog
          </button>
        </form>
      </section>
    </>
  );
};

export default Create;
