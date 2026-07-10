"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Button } from "@/components/ui/button";
import { FormField } from "./FormField";

/* =========================
   TYPES
========================= */

export interface FormEditorProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

/* =========================
   TIPTAP EDITOR CORE
========================= */

function TiptapEditor({ value, onChange, disabled }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    editable: !disabled,
    immediatelyRender: false,
    content: value ?? "",

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  /* =========================
     SYNC EXTERNAL VALUE
  ========================= */
  React.useEffect(() => {
    if (!editor) return;

    const current = editor.getHTML();

    if (value && value !== current) {
      editor.commands.setContent(value, {
        emitUpdate: false,
      });
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="rounded-md border bg-white">
      {/* =========================
          TOOLBAR
      ========================= */}
      <div className="flex flex-wrap gap-2 border-b p-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          List
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Number
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
        >
          Undo
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
        >
          Redo
        </Button>
      </div>

      {/* =========================
          EDITOR AREA
      ========================= */}
      <EditorContent
        editor={editor}
        className="prose max-w-none min-h-[220px] p-4 focus:outline-none"
      />
    </div>
  );
}

/* =========================
   FORM WRAPPER
========================= */

export function FormEditor<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  disabled,
  className,
}: FormEditorProps<TFieldValues>) {
  return (
    <FormField<TFieldValues>
      name={name}
      label={label}
      description={description}
      required={required}
      className={className}
    >
      {({ field }) => (
        <TiptapEditor
          value={typeof field.value === "string" ? field.value : ""}
          onChange={field.onChange}
          disabled={disabled}
        />
      )}
    </FormField>
  );
}

export default FormEditor;
