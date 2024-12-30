import React from 'react';
import { Editor } from '@tiptap/react';
import {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Trash2,
  Table2,
} from 'lucide-react';

interface TableControlsProps {
  editor: Editor;
}

export const TableControls: React.FC<TableControlsProps> = ({ editor }) => {

  const buttonClass = "p-2 rounded-md hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 ease-in-out flex items-center gap-1";
  const iconClass = "w-4 h-4";
  const labelClass = "text-xs hidden sm:inline";

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-2 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center gap-2 overflow-x-auto">
          {/* Row Controls */}
          <button
            onClick={() => editor.chain().focus().addRowBefore().run()}
            className={buttonClass}
            title="Insert row above"
          >
            <ArrowUp className={iconClass} />
            <span className={labelClass}>Above</span>
          </button>
          <button
            onClick={() => editor.chain().focus().addRowAfter().run()}
            className={buttonClass}
            title="Insert row below"
          >
            <ArrowDown className={iconClass} />
            <span className={labelClass}>Below</span>
          </button>
          <button
            onClick={() => editor.chain().focus().deleteRow().run()}
            className={`${buttonClass} text-red-500 hover:text-red-600 hover:bg-red-100`}
            title="Delete row"
          >
            <Trash2 className={iconClass} />
            <span className={labelClass}>Row</span>
          </button>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-200 mx-2" />

          {/* Column Controls */}
          <button
            onClick={() => editor.chain().focus().addColumnBefore().run()}
            className={buttonClass}
            title="Insert column left"
          >
            <ArrowLeft className={iconClass} />
            <span className={labelClass}>Left</span>
          </button>
          <button
            onClick={() => editor.chain().focus().addColumnAfter().run()}
            className={buttonClass}
            title="Insert column right"
          >
            <ArrowRight className={iconClass} />
            <span className={labelClass}>Right</span>
          </button>
          <button
            onClick={() => editor.chain().focus().deleteColumn().run()}
            className={`${buttonClass} text-red-500 hover:text-red-600 hover:bg-red-100`}
            title="Delete column"
          >
            <Trash2 className={iconClass} />
            <span className={labelClass}>Column</span>
          </button>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-200 mx-2" />

          {/* Table Controls */}
          <button
            onClick={() => editor.chain().focus().deleteTable().run()}
            className={`${buttonClass} text-red-500 hover:text-red-600 hover:bg-red-100`}
            title="Delete table"
          >
            <Table2 className={iconClass} />
            <span className={labelClass}>Table</span>
          </button>
        </div>
      </div>
    </div>
  );
};