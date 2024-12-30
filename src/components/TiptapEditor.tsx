import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';

import { TableMenu } from './TableMenu';
import { TableBubbleMenu } from './TableBubbleMenu/index';

import { useEditorConfig } from './TiptapEditor/useEditorConfig';

const TiptapEditor: React.FC = () => {
  const editor = useEditor(useEditorConfig());

  if (!editor) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <TableMenu editor={editor} />
        <div className="p-4">
          <EditorContent editor={editor} />
          <TableBubbleMenu editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default TiptapEditor;