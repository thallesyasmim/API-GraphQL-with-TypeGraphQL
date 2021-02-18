import { Query } from "mongoose";
import { Resolver } from "type-graphql";
import Category from './Category'
import CategorySchema from '../../models/CategorySchema'


@Resolver(Category)
class CategoryResolver {
    @Query(() => [Category]) // Query return array of category
    async categories() { // Parallel of name Query
        const categories = await CategorySchema.find()
        return categories
    }
}

export default CategoryResolver