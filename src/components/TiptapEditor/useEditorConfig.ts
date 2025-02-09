import { EditorOptions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

export const useEditorConfig = (): Partial<EditorOptions> => {
  return {
    extensions: [
      StarterKit,
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'border-collapse table-fixed w-full',
        },
      }),
      TableRow,
      TableHeader,
      TableCell.configure({
        HTMLAttributes: {
          class: 'border border-gray-300 p-2',
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['table', 'paragraph', 'heading'],
      }),
    ],
    content: `
      <h2>Welcome to the hello the @@@ testing Table Editor!</h2>
      <p>Click the table icon (first icon) above to insert a new table and start editing.</p>
      <p>Double-click or select a cell to display the table's bubble menu.</p>
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  };
};