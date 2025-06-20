"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";

const Tiptap = ({ content, onChange }: any) => {
  const handleChange = (newContent: string) => onChange(newContent);

  const editor = useEditor({
    extensions: [StarterKit, underline],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 h-full justify-start border-gray-200  items-start w-full gap-3 font-medium text-[18px] pt-4  outline-none",
      },
    },
    onUpdate: ({ editor }) => handleChange(editor.getHTML()),
  });

  return (
    <div>
      <Toolbar editor={editor} content={content} />
      <EditorContent
        editor={editor}
        style={{
          whiteSpace: "pre-line",
          minHeight: "100px", // Prevents collapse when empty
          height: "auto", // Adjusts based on text
          overflow: "hidden", // Hides unnecessary scrollbars
        }}
      />
    </div>
  );
};

export default Tiptap;
