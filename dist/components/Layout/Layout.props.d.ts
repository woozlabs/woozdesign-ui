/// <reference types="react" />
export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}
export interface RowProps extends React.HTMLProps<HTMLDivElement> {
    gutter?: [number, number];
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'around' | 'space-evenly';
    children?: React.ReactNode;
}
export interface ColProps extends React.HTMLProps<HTMLDivElement> {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    children?: React.ReactNode;
}