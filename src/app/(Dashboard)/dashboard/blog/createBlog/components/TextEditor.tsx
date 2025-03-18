"use client";
import { Highlight } from "@tiptap/extension-highlight";
import { Underline } from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";

const MAX_CHARACTERS = 1000;

interface RichTextProps {
  content?: string;
  onChange?: (content: string) => void;
}

export function RichTextEditorComponent({
  content = "<p></p>",
  onChange,
}: RichTextProps) {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight],
    content,
    onUpdate: ({ editor }) => {
      const textContent = editor.getText();
      if (textContent.length > MAX_CHARACTERS) {
        editor.commands.setContent(textContent.slice(0, MAX_CHARACTERS)); // Limit characters
      } else {
        onChange?.(editor.getHTML());
      }
    },
  });

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
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

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
