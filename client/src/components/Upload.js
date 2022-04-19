import { BiTrash } from "react-icons/bi";

function Upload({ image, error, handleDeletePreview, ...rest }) {
  return (
    <div
      className={`flex justify-center h-44 px-2 py-3 border hover:border-black duration-300 border-dashed rounded-md ${
        error ? "border-red-500" : ""
      }`}
    >
      {image ? (
        <div className="relative group">
          <img src={image} alt={image} className=" w-full h-full rounded-md" />
          <div
            onClick={handleDeletePreview}
            className="absolute bottom-0 right-1 p-1 group-hover:opacity-100 opacity-0 bg-red-300 hover:bg-red-400 duration-300 cursor-pointer rounded-full"
          >
            <BiTrash fontSize={20} />
          </div>
        </div>
      ) : (
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 mt-7 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="flex text-sm text-gray-600">
            <label className="relative cursor-pointer bg-white rounded-md font-medium ">
              <span>Tambahkan</span>
              <input type="file" className="sr-only" {...rest} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
