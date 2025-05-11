"use client";
import { Highlight } from "@tiptap/extension-highlight";
import { Underline } from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";
import { IconPhoto } from "@tabler/icons-react";
import { Image } from "@tiptap/extension-image";
import { ActionIcon, Tooltip } from "@mantine/core";
import { useRef } from "react";
const MAX_CHARACTERS = 1000000;

interface RichTextProps {
  content?: string;
  onChange?: (content: string) => void;
}

export function RichTextEditorComponent({
  content = "<p></p>",
  onChange,
}: RichTextProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const textContent = editor.getText();
      if (textContent.length > MAX_CHARACTERS) {
        editor.commands.setContent(textContent.slice(0, MAX_CHARACTERS));
      } else {
        onChange?.(editor.getHTML());
      }
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > 1) {
      alert("Image size is too large. Max 1MB allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
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
      const imageUrl = data.secure_url;

      if (imageUrl) {
        editor.chain().focus().setImage({ src: imageUrl }).run();
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      alert("Image upload failed.");
    }
  };

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />

          <Tooltip label="Upload Image">
            <ActionIcon
              onClick={() => fileInputRef.current?.click()}
              variant="subtle"
            >
              <IconPhoto size={16} />
            </ActionIcon>
          </Tooltip>
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />

      <RichTextEditor.Content
        style={{
          minHeight: "200px",
          maxHeight: "500px",
          overflowY: "auto",
        }}
      />
    </RichTextEditor>
  );
}
