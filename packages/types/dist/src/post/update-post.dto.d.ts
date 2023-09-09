import { CreatePostDto } from './create-post.dto';
declare const UpdatePostDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePostDto>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
    name: string;
    likes: number;
    rate: number;
    authorid: string;
}
export {};
//# sourceMappingURL=update-post.dto.d.ts.map