import { Query, Mutation, Resolver, InputType, Arg, Field } from "type-graphql";
import Category from './Category'
import CategorySchema from '../../models/CategorySchema'

@InputType()
class CategoryInput {
    @Field()
    description: String;
    @Field()
    name: String;
}

@Resolver(Category)
class CategoryResolver {
    @Query(() => [Category]) // Query return array of category
    async categories() { // Parallel of name Query
        const categories = await CategorySchema.find()
        return categories
    }

    @Mutation(() => Category)
    async createCategory(@Arg('categoryInput') categoryInput: CategoryInput) {
        const category = await CategorySchema.create(categoryInput)
        return category
    }
}

export default CategoryResolver