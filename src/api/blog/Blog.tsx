import axios from "axios";
import { toast } from "sonner";
// import { toast } from "react-toastify";

const URL = import.meta.env.VITE_API_URL;
const bearer = import.meta.env.VITE_BEARER_TOKEN;

// get blogs
export const GetBlogs = async () => {
  try {
    const response = await axios.get(`${URL}/blog/blogs.php`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    if (response.data.success === false) {
      toast.error(response.data.message);
      // return false; // Verification failed
      return [];
    } else {
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Fetch error", error);
    throw new Error(error.response?.data?.message || "Failed to fetch");
  }
};

// creates a new blog
export const CreateNewBlog = async (productData: {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image: File | null;
}) => {
  try {
    const response = await axios.post(`${URL}/blog/blogs.php`, productData, {
      headers: {
        Authorization: `Bearer ${bearer}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);

    if (response.data.success === false) {
      toast.error(response.data.message);
      // return false; // Verification failed
      return [];
    } else {
      toast.success(response.data.message);
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Error creating new product", error);
    toast.error("Error");
    throw new Error(error.response?.data?.message || "Failed to create");
  }
};

// delete a blog
export const DeleteBlog = async (id: number) => {
  try {
    const response = await axios.delete(`${URL}/blog/blogs.php?id=${id}`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    console.log(response);

    if (response.data.success === false) {
      toast.error(response.data.message);
      // return false; // Verification failed
      return [];
    } else {
      toast.success(response.data.message);
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Error deleting product", error);
    toast.error("Error");
    throw new Error(error.response?.data?.message || "Failed to delete");
  }
};

// edit blogs
export const EditBlog = async (
  productData: {
    title: string;
    excerpt: string;
    content: string;
    author: string;
    image: File | null;
  },
  id: number
) => {
  try {
    const response = await axios.post(
      `${URL}/blog/blogs.php?id=${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response);

    if (response.data.success === false) {
      toast.error(response.data.message);
      // return false; // Verification failed
      return [];
    } else {
      toast.success(response.data.message);
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Error creating new product", error);
    toast.error("Error");
    throw new Error(error.response?.data?.message || "Failed to create");
  }
};

// get single blog
export const GetSingleBlog = async (excerpt: string) => {
  try {
    const response = await axios.get(
      `${URL}/blog/blogs.php?excerpt=${excerpt}`,
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      }
    );

    if (response.data.success === false) {
      toast.error(response.data.message);
      // return false; // Verification failed
      return [];
    } else {
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Fetch error", error);
    throw new Error(error.response?.data?.message || "Failed to fetch");
  }
};
