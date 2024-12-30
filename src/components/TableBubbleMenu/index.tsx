import React from 'react';
import { BubbleMenu, Editor } from '@tiptap/react';
import { TableControls } from './TableControls';

interface TableBubbleMenuProps {
  editor: Editor;
}

export const TableBubbleMenu: React.FC<TableBubbleMenuProps> = ({ editor }) => {

  return (
    <>
      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100, maxWidth: 800 }}
        shouldShow={({ editor }) => {
          // Check if a table cell or table header is active AND there is a text selection
          return (
            (editor.isActive('tableCell') || editor.isActive('tableHeader')) &&
            editor.state.selection.empty === false
          );
        }}
        className="flex gap-1 p-1 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        <TableControls
          editor={editor}
        />
      </BubbleMenu>
    </>
  );
};