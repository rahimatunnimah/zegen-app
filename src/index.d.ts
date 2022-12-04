import { DragStart, DragUpdate, DropResult } from "react-beautiful-dnd";

export interface DragDropContextProps {
  onDragStart?(initial: DragStart): void;
  onDragUpdate?(initial: DragUpdate): void;
  onDragEnd(result: DropResult): void;
}