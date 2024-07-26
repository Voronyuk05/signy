export interface IFormProps extends HTMLFormElement {
    elements: {
        namedItem: () => Element,
        length:  number,
        item:  (index: number) => Element,
        [Symbol.iterator]:  () => IterableIterator<Element>,
        name: HTMLInputElement,
        email: HTMLInputElement,
        tel: HTMLInputElement,
    }
} 