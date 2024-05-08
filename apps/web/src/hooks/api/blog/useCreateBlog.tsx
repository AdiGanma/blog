'use client';

import { axiosInstance } from '@/lib/axios';
import { Blog, IFormCreateBlog } from '@/types/blog.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';

const useCreateBlog = () => {
  const router = useRouter();
  const createBlog = async (payload: IFormCreateBlog) => {
    try {
      const { title, category, content, description, thumbnail, userId } =
        payload;

      const createBlogForm = new FormData();

      createBlogForm.append('title', title);
      createBlogForm.append('category', category);
      createBlogForm.append('content', content);
      createBlogForm.append('description', description);
      createBlogForm.append('userId', String(userId));

      thumbnail.forEach((file: FileWithPath) => {
        createBlogForm.append('thumbnail', file);
      });

      await axiosInstance.post<Blog>('/blogs', createBlogForm);
      // toast here
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace console.log with toast
        console.log(error);
        
      }
    }
  };
  return {createBlog};
};

export default useCreateBlog;