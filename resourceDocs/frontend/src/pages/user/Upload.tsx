import React, { useRef, useState } from "react";
import SideBar from "../../components/SideBar";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { toast } from "sonner";
import backendApi from "../../api/backendApi";
import { useConfig } from "../../customHooks/useConfigHook";

const Upload: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>("");
  const [thumbnailSrc, setThumbnailSrc] = useState<string | null>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isPrivate, setIsPrivate] = useState<string>("false");
  const [loading, setLoading] = useState<boolean>(false);
  const { configWithJWT } = useConfig();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.type.startsWith("video")) {
        const videoUrl = URL.createObjectURL(file);
        setVideoSrc(videoUrl);
      } else {
        toast.warning("select the video");
        return;
      }
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image")) {
        const thumbnailUrl = URL.createObjectURL(file);
        setThumbnailSrc(thumbnailUrl);
      }
    }
  };
  const handlePrivacyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsPrivate(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    const thumbnail = thumbnailRef.current?.files?.[0];
    if (!file) {
      toast.warning("Please select a file");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title || "");
      formData.append("description", description || "");
      formData.append("video", file);
      formData.append("isPrivate", isPrivate);
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }
      const { data } = await backendApi.post(
        "/api/v1/aws/upload-file",
        formData,
        {
          ...configWithJWT,
          headers: {
            ...configWithJWT.headers,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setDescription("");
        setIsPrivate("false");
        setVideoSrc(null);
        setThumbnailSrc(null);
      } else {
        toast.warning(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex w-full">
      <SideBar />
      <main className="flex-1 p-4 mt-7 lg:ml-64">
        <section className="flex flex-col items-center">
          <form
            className="container flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg"
            onSubmit={handleSubmit}
          >
            {/* Video Upload Section */}
            <label htmlFor="video" className="text-textOne font-semibold">
              Video
            </label>
            <input
              type="file"
              ref={fileRef}
              onChange={handleFileChange}
              accept="video/*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bgFive"
            />

            {videoSrc && (
              <div className="mt-4 flex flex-col items-center">
                <video
                  src={videoSrc}
                  controls
                  className="w-32 h-32 object-cover rounded-md shadow-md"
                />
              </div>
            )}

            {/* Thumbnail Upload Section */}
            <label htmlFor="thumbnail" className="text-textOne font-semibold">
              Thumbnail (Optional)
            </label>
            <input
              type="file"
              ref={thumbnailRef}
              onChange={handleThumbnailChange}
              accept="image/*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bgFive"
            />

            {thumbnailSrc && (
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={thumbnailSrc}
                  alt="Thumbnail Preview"
                  className="w-32 h-32 object-cover rounded-md shadow-md"
                />
              </div>
            )}

            <label htmlFor="title" className="text-textOne font-semibold">
              Title (Optional)
            </label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title of your video"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bgFive"
            />

            <label htmlFor="description" className="text-textOne font-semibold">
              Description
            </label>
            <ReactQuill
              theme="snow"
              className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={description}
              onChange={setDescription}
            />

            <label htmlFor="privacy" className="text-textOne font-semibold">
              Privacy
            </label>
            <select
              name="privacy"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bgFive"
              value={isPrivate}
              onChange={handlePrivacyChange}
            >
              <option value="false">Public</option>
              <option value="true">Private</option>
            </select>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-bgFour rounded-md p-2 text-white text-lg mt-5 hover:bg-opacity-90 duration-300 capitalize w-full md:w-fit flex items-center justify-center disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                      ></path>
                    </svg>
                    uploading...
                  </>
                ) : (
                  "Upload video"
                )}
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Upload;
