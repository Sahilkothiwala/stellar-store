// export interface Product {
//     id: string;
//     category: Category;
//     name: string;
//     price: string;
//     isFeatured: boolean;
//     size: Size;
//     color: Color;
//     images: Image[]
// };

// export interface Image {
//     id: string;
//     url: string;
// }

export interface Blog {
    id: string;
    imageUrl: string;
    title: string;
    content: string;
    author: string;
    isFeatured: boolean
};

export interface Store {
    id: string;
    name: string;
    userId: string;
}

// export interface Category {
//     id: string;
//     name: string;
//     billboard: Billboard;
// };

// export interface Size {
//     id: string;
//     name: string;
//     value: string;
// };

// export interface Color {
//     id: string;
//     name: string;
//     value: string;
// };