/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import InputComponent from "@/app/components/Inputs";
import React, { useState } from "react";
import { RichTextEditorComponent } from "./components/TextEditor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/Select";
import { Button } from "@/app/components/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "@/app/utils/api";
import apiRoutes from "@/app/apiRoutes";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
// import { useAppDispatch } from "@/app/apps/hook";
import { useRouter } from "next/navigation";
const blogState = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  content: z.string().min(1, { message: "Author is required" }),
  category: z.string().min(1, { message: "Author is required" }),
});
const CreateBlog = () => {
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);

  // const [uploading, setUploading] = useState(false);
  const [editorContent, setEditorContent] = useState<string>("");
  type blogType = z.infer<typeof blogState>;
  const {
    register,
    formState: { errors },
    // handleSubmit,
    watch,
    getValues,
    setValue,
  } = useForm<blogType>({
    resolver: zodResolver(blogState),
    defaultValues: {},
  });
  const allValuesFilled =
    watch("title") &&
    watch("author") &&
    watch("category") &&
    editorContent.trim().length > 0 &&
    coverImageUrl;
  const router = useRouter();
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const fileSizeMB = selectedFile.size / (1024 * 1024);
    if (fileSizeMB > 0.5) {
      alert("Cover image too large. Maximum allowed is 500KB.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "blog_tahwil");
    formData.append("cloud_name", "dmvr8ooz1");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmvr8ooz1/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.secure_url) {
        setCoverImageUrl(data.secure_url);
      } else {
        alert("Image upload failed.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading image.");
    }
  };
  const catergoryArr = [
    { id: 1, category: "Physical Health" },
    { id: 2, category: "Mental Health" },
    { id: 3, category: "Spiritual and emotional wellness " },
    { id: 4, category: "Business development" },
    { id: 5, category: "Personal development" },
  ];
  const handleEditorChange = (newContent: string) => {
    setEditorContent(newContent);
  };
  console.log(errors, "errors");

  const postData = async ({
    data,
    status,
  }: {
    data: blogType;
    status: string;
  }) => {
    const formData = new FormData();
    if (coverImageUrl) {
      formData.append("cover_image", coverImageUrl);
    } else {
      console.error("No cover image URL available.");
    }
    console.log("postData function called with:", { data, status });
    formData.append("title", data.title || "");
    formData.append("author", data.author || "");
    formData.append("category", data.category || "");
    formData.append("content", editorContent || "");
    formData.append("status", status);
    const res = await api.post(apiRoutes.blog.postBlog, formData);
    return res.data;
  };
  // publisj
  const { mutate: publishMutate, isPending: pendingPublish } = useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      if (data) {
        toast("Successfully added");

        // navigate(redirectUrl || "/dashboard");
        router.replace("/dashboard/blog");
      } else {
        toast.error("Something Went Wrong");
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred";

      toast.warning(errorMessage);
    },
  });
  // draft
  const { mutate, isPending } = useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      if (data) {
        toast("Successfully added");
        router.replace("/dashboard/blog");
      } else {
        toast.error("Something Went Wrong");
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred";

      toast.warning(errorMessage);
    },
  });

  const handlePublish = (data: blogType) => {
    publishMutate({ data, status: "published" });
  };

  const handleDraft = (data: blogType) => {
    mutate({ data, status: "draft" });
  };

  return (
    <div className="mt-10">
      <h3 className="px-20">Create Blog</h3>
      <div className="flex flex-col px-20 pt-20 ">
        <div className="grid gap-4 w-[70%]">
          <InputComponent
            {...register("title")}
            label="blog title"
            placeholder="Enter title of Blog"
            errors={errors?.title?.message}
          />
          <InputComponent
            label="Blog Cover Image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
          />
          <div>
            <h3 className="text-sm font-semibold uppercase text-primary">
              Write your blog content
            </h3>
            <RichTextEditorComponent onChange={handleEditorChange} />
          </div>
          <div className=" flex gap-5 items-center">
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold uppercase text-primary">
                Blog Category
              </h3>
              <Select
                onValueChange={(val: string) => setValue("category", val)}
              >
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="bg-white">
                    <SelectLabel className="text-sm font-semibold uppercase text-primary bg">
                      Categories
                    </SelectLabel>
                    {catergoryArr.map((item) => (
                      <SelectItem
                        className="bg-white"
                        key={item.id}
                        value={item.category}
                      >
                        {item.category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold uppercase text-primary">
                Author
              </h3>
              <InputComponent
                {...register("author")}
                type="text"
                placeholder="Add Author"
                errors={errors?.author?.message}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              disabled={!allValuesFilled}
              loading={isPending}
              onClick={() => handleDraft(getValues())}
              className="bg-primary/80 border-none hover:bg-primary/60 hover:border-none hover:shadow-none flex gap-2"
            >
              Save Draft
            </Button>
            <Button
              onClick={() => handlePublish(getValues())}
              disabled={!allValuesFilled}
              loading={pendingPublish}
              className="bg-primary/80 border-none hover:bg-primary/60 hover:border-none hover:shadow-none flex gap-2"
            >
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
