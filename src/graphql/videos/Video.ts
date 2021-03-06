import { Field, ObjectType } from "type-graphql";


@ObjectType()
class Video {
    @Field()
    name: String;
    @Field()
    description: String;
    @Field()
    category: String;
    @Field()
    _id: String;
}

export default Video