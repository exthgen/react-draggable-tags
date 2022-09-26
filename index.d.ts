declare module "react-draggable-tags" {
  import * as React from "react";

  export interface DraggableProps<T> {
    tags: Array<T>;
    render: (arg: { tag: T; index: number }) => JSX.Element;
    onChange?: (tags: Array<T>) => void;
    isList?: boolean;
  }

  export interface DraggableAreasGroupProps<T> {
    addArea: (areaId: any) => DraggableArea;
  }

  export class DraggableArea<T> extends React.Component<
    DraggableProps<T>,
    unknown
  > {}
  export class DraggableAreasGroup<T> extends React.Component<
    DraggableAreasGroupProps<T>,
    unknown
  > {}
}
