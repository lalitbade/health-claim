const FileUpload = () => {
    return (
      <div className="border border-gray-600 p-3 rounded-lg">
        <label className="block text-gray-300">Upload Medical Documents:</label>
        <input type="file" multiple className="mt-2 w-full bg-gray-800 p-2 rounded-lg" />
      </div>
    );
  };
  
  export default FileUpload;
  