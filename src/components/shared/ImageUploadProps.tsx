import React, { useState, useRef, useEffect, useCallback } from "react";
import { Upload, X } from "lucide-react";
import { getImageSrc } from "../../utils/imageUtils"; // Assuming this utility is still needed for other images

interface ImageUploadProps {
  onImageChange?: (file: File | null) => void; // Now passes File or null
  label?: string;
  className?: string;
  initialImage?: string | null; // Can still be a URL for an existing image
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageChange,
  label,
  className = "",
  initialImage = null,
  disabled = false,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // To store the actual file
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Set initial image when component mounts or initialImage changes
  useEffect(() => {
    if (initialImage) {
      setPreview(initialImage);
      // We don't have the File object for an initialImage loaded from a URL,
      // so selectedFile will remain null. This is fine as it's for display only.
    } else {
      setPreview(null);
    }
  }, [initialImage]);

  const handleFile = useCallback(
    (file: File) => {
      if (file && file.type.startsWith("image/")) {
        setSelectedFile(file); // Store the file
        onImageChange?.(file); // Pass the File object to the parent

        // Create a preview URL for local display
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        // Handle non-image files if necessary, e.g., show an error
        setSelectedFile(null);
        setPreview(null);
        onImageChange?.(null);
      }
    },
    [onImageChange]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
    // Clear the input value to allow re-uploading the same file after removal
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    if (disabled) return;
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (disabled) return;
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (disabled) return;
    e.preventDefault();
    setDragActive(false);
  };

  const removeImage = () => {
    if (disabled) return;
    setPreview(null);
    setSelectedFile(null); // Clear the selected file
    onImageChange?.(null); // Notify parent that no file is selected
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  const openFileDialog = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-[268px] p-[16px] rounded-[12px] bg-[#f9fafb]">
      {/* details */}
      <div className="flex items-center gap-[8px] ">
        {/* image */}
        <div>
          <div>
            {/* You might want a different icon if there's no initial upload. */}
            <img src={getImageSrc("upload.png")} alt="" />
          </div>
        </div>

        {/* text */}
        <p className="text-[10px] font-medium text-[#41454C]">
          Select file to upload
        </p>
      </div>

      {/* document */}
      <p className="text-[10px] font-medium text-[#41454C] py-[12px]">
        {label}
      </p>

      {/* upload/preview area */}
      <div className={`w-full ${className}`}>
        {preview ? (
          <div className="relative w-full h-32 border border-gray-300 rounded-lg overflow-hidden">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            {!disabled && (
              <>
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 cursor-pointer hover:bg-red-600"
                  aria-label="Remove image"
                >
                  <X size={16} />
                </button>
                <button
                  type="button"
                  onClick={openFileDialog}
                  className="absolute bottom-1 right-1 bg-blue-500 text-white rounded-full p-1 cursor-pointer hover:bg-blue-600"
                  aria-label="Replace image"
                >
                  <Upload size={16} />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="relative">
            <div
              className={`border border-[#438950] p-[11px] rounded-[8px] text-center transition-colors ${
                disabled
                  ? "border-gray-200 bg-white cursor-not-allowed"
                  : `cursor-pointer ${
                      dragActive
                        ? "border-blue-400 bg-blue-50"
                        : "border-[#438950]"
                    }`
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={openFileDialog}
            >
              <div className="flex flex-col items-center text-[10px] text-[#438950]">
                <p>Upload</p>
                <Upload size={20} />
              </div>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
