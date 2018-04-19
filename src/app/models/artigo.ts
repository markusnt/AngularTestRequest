import { Comentario } from './comentario';
import { Categoria } from './categoria.enum';

export class Artigo {
    id: number;
    titulo: string;
    autor: string;
    conteudo: string;
    categoria: Categoria;
    comentarios: Comentario[];
}
