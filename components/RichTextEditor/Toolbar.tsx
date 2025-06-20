import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) return null;

  const buttons = [
    {
      icon: Bold,
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      icon: Italic,
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
    },
    {
      icon: Strikethrough,
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
    },
    {
      icon: Underline,
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive("underline"),
    },
    {
      icon: Heading2,
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: List,
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: ListOrdered,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
    {
      icon: Quote,
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive("blockquote"),
    },
    {
      icon: Code,
      action: () => editor.chain().focus().setCode().run(),
      isActive: editor.isActive("code"),
    },
    {
      icon: Undo,
      action: () => editor.chain().focus().undo().run(),
      isActive: false,
    },
    {
      icon: Redo,
      action: () => editor.chain().focus().redo().run(),
      isActive: false,
    },
  ];

  return (
    <Card className="py-3 flex justify-between items-center gap-5 w-full flex-wrap border border-gray-200">
      <div className="flex justify-center items-center gap-4 w-full flex-wrap">
        {buttons.map(({ icon: Icon, action, isActive }, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              action();
            }}
            className={isActive ? "text-gray-700 bg-gray-200" : ""}>
            <Icon className="w-5 h-5" />
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default Toolbar;
