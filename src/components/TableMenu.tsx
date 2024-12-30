import React from 'react';
import { Editor } from '@tiptap/react';
import {
  Table2,
  RowsIcon,
  ColumnsIcon,
  Merge,
  Split,
  Trash2,
  Plus,
  Minus,
  PaintBucket,
} from 'lucide-react';

interface TableMenuProps {
  editor: Editor;
}

export const TableMenu: React.FC<TableMenuProps> = ({ editor }) => {
  const addTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run();
  };

  const addColumnBefore = () => {
    editor.chain().focus().addColumnBefore().run();
  };

  const addColumnAfter = () => {
    editor.chain().focus().addColumnAfter().run();
  };

  const deleteColumn = () => {
    editor.chain().focus().deleteColumn().run();
  };

  const addRowBefore = () => {
    editor.chain().focus().addRowBefore().run();
  };

  const addRowAfter = () => {
    editor.chain().focus().addRowAfter().run();
  };

  const deleteRow = () => {
    editor.chain().focus().deleteRow().run();
  };

  const deleteTable = () => {
    editor.chain().focus().deleteTable().run();
  };

  const mergeCells = () => {
    editor.chain().focus().mergeCells().run();
  };

  const splitCell = () => {
    editor.chain().focus().splitCell().run();
  };

  const toggleHeaderColumn = () => {
    editor.chain().focus().toggleHeaderColumn().run();
  };

  const toggleHeaderRow = () => {
    editor.chain().focus().toggleHeaderRow().run();
  };

  const toggleHeaderCell = () => {
    editor.chain().focus().toggleHeaderCell().run();
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 bg-white border-b">
      <button
        onClick={addTable}
        className="p-2 hover:bg-gray-100 rounded"
        title="Insert Table"
      >
        <Table2 className="w-5 h-5" />
      </button>

      <div className="w-px h-6 bg-gray-200 my-auto" />

      <button
        onClick={addColumnBefore}
        className="p-2 hover:bg-gray-100 rounded"
        title="Add Column Before"
      >
        <ColumnsIcon className="w-5 h-5" />
        <Plus className="w-3 h-3 -mt-4 -ml-1" />
      </button>

      <button
        onClick={addColumnAfter}
        className="p-2 hover:bg-gray-100 rounded"
        title="Add Column After"
      >
        <ColumnsIcon className="w-5 h-5" />
        <Plus className="w-3 h-3 -mt-4 ml-3" />
      </button>

      <button
        onClick={deleteColumn}
        className="p-2 hover:bg-gray-100 rounded"
        title="Delete Column"
      >
        <ColumnsIcon className="w-5 h-5" />
        <Minus className="w-3 h-3 -mt-4" />
      </button>

      <div className="w-px h-6 bg-gray-200 my-auto" />

      <button
        onClick={addRowBefore}
        className="p-2 hover:bg-gray-100 rounded"
        title="Add Row Before"
      >
        <RowsIcon className="w-5 h-5" />
        <Plus className="w-3 h-3 -mt-4 -ml-1" />
      </button>

      <button
        onClick={addRowAfter}
        className="p-2 hover:bg-gray-100 rounded"
        title="Add Row After"
      >
        <RowsIcon className="w-5 h-5" />
        <Plus className="w-3 h-3 -mt-4 ml-3" />
      </button>

      <button
        onClick={deleteRow}
        className="p-2 hover:bg-gray-100 rounded"
        title="Delete Row"
      >
        <RowsIcon className="w-5 h-5" />
        <Minus className="w-3 h-3 -mt-4" />
      </button>

      <div className="w-px h-6 bg-gray-200 my-auto" />

      <button
        onClick={mergeCells}
        className="p-2 hover:bg-gray-100 rounded"
        title="Merge Cells"
      >
        <Merge className="w-5 h-5" />
      </button>

      <button
        onClick={splitCell}
        className="p-2 hover:bg-gray-100 rounded"
        title="Split Cell"
      >
        <Split className="w-5 h-5" />
      </button>

      <div className="w-px h-6 bg-gray-200 my-auto" />

      <button
        onClick={toggleHeaderRow}
        className={`p-2 hover:bg-gray-100 rounded ${
          editor.isActive('tableHeader') ? 'bg-gray-200' : ''
        }`}
        title="Toggle Header Row"
      >
        <RowsIcon className="w-5 h-5" />
      </button>

      <button
        onClick={toggleHeaderColumn}
        className={`p-2 hover:bg-gray-100 rounded ${
          editor.isActive('tableHeader') ? 'bg-gray-200' : ''
        }`}
        title="Toggle Header Column"
      >
        <ColumnsIcon className="w-5 h-5" />
      </button>

      <div className="w-px h-6 bg-gray-200 my-auto" />

      <button
        onClick={deleteTable}
        className="p-2 hover:bg-gray-100 rounded text-red-500"
        title="Delete Table"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};